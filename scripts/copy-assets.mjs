// Stage self-hosted assets into public/ (which vite deploys to Pages):
//   Images/HSC-icon*.png     -> public/            (icons; edit art in Images/)
//   Sound/*                  -> public/Sound/       (音源)
//   Translation/*.js         -> public/Translation/ (HSC 字庫，一國一檔)
//   src/expansion/BC_*.js    -> public/expansion/   (共用引擎：BC_i18n / BC_ThemeColorCheck，執行期 fetch)
// Edit the sources in Images/ Sound/ Translation/ src/expansion/; build refreshes public/.
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

function copyInto(srcDir, dstDir, filter) {
  const from = root + srcDir;
  if (!existsSync(from)) { console.warn(`🐈‍⬛ [HSC] ⚠️ 找不到 ${srcDir}，略過`); return; }
  mkdirSync(root + dstDir, { recursive: true });
  let n = 0;
  for (const name of readdirSync(from)) {
    if (filter && !filter(name)) continue;
    copyFileSync(from + name, root + dstDir + name);
    n++;
  }
  console.log(`🐈‍⬛ [HSC] ${srcDir} -> ${dstDir} (${n} 檔)`);
}

// 圖片：部署用的 HSC-*.png（icon、crowd、status-code 動畫圖等）全部複製到 public/
mkdirSync(root + 'public', { recursive: true });
copyInto('Images/', 'public/', n => /^HSC-.*\.png$/i.test(n));

copyInto('Sound/', 'public/Sound/', n => /\.(mp3|ogg|wav|m4a)$/i.test(n));
copyInto('Translation/', 'public/Translation/', n => n.endsWith('.js'));
// 共用引擎：只複製 BC_*.js（IIFE，執行期 fetch）；同資料夾的 i18n.js/l10n.js 是 ES module，由 vite bundle，不複製。
copyInto('src/expansion/', 'public/expansion/', n => /^BC_.*\.js$/i.test(n));
