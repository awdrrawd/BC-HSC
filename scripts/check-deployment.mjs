import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const base = process.env.HSC_SITE_URL;
if (!base || !base.startsWith('https://')) throw new Error('HSC_SITE_URL must be an HTTPS URL');
const paths = ['assets/main.js', 'assets/app.js', 'Translation/EN.js', 'Translation/TW.js', 'HSC-iconW.png', 'expansion/BC_i18n.js'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
for (const path of paths) {
    let lastError;
    for (let attempt = 0; attempt < 5; attempt++) {
        try {
            const url = new URL(path, base.endsWith('/') ? base : base + '/');
            url.searchParams.set('check', process.env.GITHUB_SHA || String(Date.now()));
            const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
            if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
            const bytes = Buffer.from(await response.arrayBuffer());
            if (!bytes.length || bytes.subarray(0, 100).toString().includes('<!DOCTYPE html')) throw new Error(`${path}: invalid asset`);
            // 原始翻譯可直接比對；bundle 以可載入檢查為主，避免與本機生成檔混淆。
            if (path.startsWith('Translation/') && hash(bytes) !== hash(readFileSync(path))) throw new Error(`${path}: stale content`);
            lastError = null;
            break;
        } catch (error) { lastError = error; }
        if (attempt < 4) await new Promise(resolve => setTimeout(resolve, 10000));
    }
    if (lastError) throw lastError;
    console.log(`Published asset OK: ${path}`);
}
