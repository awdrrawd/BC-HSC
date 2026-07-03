// Stage self-hosted assets into public/ (which vite deploys to Pages):
//   Images/IVH-icon*.png -> public/          (icons; edit art in Images/)
//   Sound/*              -> public/Sound/     (音源)
//   Translation/*.js     -> public/Translation/ (i18n 引擎 + IVH 字庫)
// Edit the sources in Images/ Sound/ Translation/; build refreshes public/.
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

function copyInto(srcDir, dstDir, filter) {
  const from = root + srcDir;
  if (!existsSync(from)) { console.warn(`🐈‍⬛ [IVH] ⚠️ 找不到 ${srcDir}，略過`); return; }
  mkdirSync(root + dstDir, { recursive: true });
  let n = 0;
  for (const name of readdirSync(from)) {
    if (filter && !filter(name)) continue;
    copyFileSync(from + name, root + dstDir + name);
    n++;
  }
  console.log(`🐈‍⬛ [IVH] ${srcDir} -> ${dstDir} (${n} 檔)`);
}

// 圖片：部署用的 IVH-*.png（icon、crowd、status-code 動畫圖等）全部複製到 public/
mkdirSync(root + 'public', { recursive: true });
copyInto('Images/', 'public/', n => /^IVH-.*\.png$/i.test(n));

copyInto('Sound/', 'public/Sound/', n => /\.(mp3|ogg|wav|m4a)$/i.test(n));
copyInto('Translation/', 'public/Translation/', n => n.endsWith('.js'));
