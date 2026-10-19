// 讀取 check-bc-compat.mjs --json 的報告，只用 GitHub Issue「通知」，不讓工作流程失敗。
//   - 有缺失：開（或更新）一則 label=bc-compat 的 issue；內容沒變就不重複打擾。
//   - 已恢復：在原 issue 留言並關閉。
// 需要 gh CLI 與 GH_TOKEN（issues: write）。
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const reportPath = process.argv[2];
if (!reportPath) { console.error('用法：node scripts/bc-compat-issue.mjs <report.json>'); process.exit(2); }
const r = JSON.parse(readFileSync(reportPath, 'utf8'));
const gh = (...args) => execFileSync('gh', args, { encoding: 'utf8' });

const hooks = [...r.missingHooks].sort();
// 已列在 hook 清單的符號不重複列出
const globals = r.missingGlobals.filter(g => !hooks.includes(g)).sort();
const problems = hooks.length + globals.length;
const sig = createHash('sha1').update(JSON.stringify([r.version, hooks, globals])).digest('hex').slice(0, 12);

const list = a => a.map(x => `- \`${x}\``).join('\n');
const body = `<!-- bc-compat-sig:${sig} -->
每週 BC 相容性檢查（鏡像版本 **${r.version}**，檢查 ${r.hookCount} 個 hook、${r.globalCount} 個全域符號）發現下列差異。
${hooks.length ? `\n### 找不到被 hook 的函式（該功能可能失效）\n${list(hooks)}\n` : ''}${globals.length ? `\n### 找不到的全域符號（請確認是否改名／移除）\n${list(globals)}\n` : ''}
> 這只是提醒，不影響部署與腳本運作。
> 鏡像可能是 BETA 或領先線上版本，且 BC 在 BETA 期間常有變動；是否真的影響線上，請在實際連線的遊戲版本中確認。
> 此 issue 會在內容改變時更新，差異消失後自動關閉。`;

try { gh('label', 'create', 'bc-compat', '--color', 'FBCA04', '--description', 'BC 版本相容性提醒'); } catch {}
const open = JSON.parse(gh('issue', 'list', '--label', 'bc-compat', '--state', 'open', '--json', 'number,body', '--limit', '1'));
const existing = open[0];
const tmp = process.env.RUNNER_TEMP ? process.env.RUNNER_TEMP + '/bc-compat-body.md' : 'bc-compat-body.md';

if (problems) {
    writeFileSync(tmp, body);
    if (!existing) {
        gh('issue', 'create', '--title', 'BC 相容性提醒（每週檢查）', '--label', 'bc-compat', '--body-file', tmp);
        console.log(`已建立 issue（${r.version}，${problems} 項差異）`);
    } else if ((existing.body || '').includes(`bc-compat-sig:${sig}`)) {
        console.log('差異與上次相同，不重複通知。');
    } else {
        gh('issue', 'edit', String(existing.number), '--body-file', tmp);
        gh('issue', 'comment', String(existing.number), '--body', `檢查結果有變動（鏡像版本 ${r.version}，${problems} 項差異），內文已更新。`);
        console.log(`已更新 issue #${existing.number}`);
    }
} else if (existing) {
    gh('issue', 'comment', String(existing.number), '--body', `鏡像版本 ${r.version} 已無差異，自動關閉。`);
    gh('issue', 'close', String(existing.number));
    console.log(`差異已消失，已關閉 issue #${existing.number}`);
} else {
    console.log(`BC ${r.version}：無差異。`);
}
