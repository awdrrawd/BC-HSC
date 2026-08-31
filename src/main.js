// Keep this bootstrap free of static imports. ES module dependencies execute
// before the entry module body; a static import here would make the duplicate
// guard run too late to prevent hooks, timers, or DOM setup in dependencies.
window.Liko = window.Liko ?? {};

if (window.Liko.HSC) {
    console.warn('🐈‍⬛ [HSC] ⚠️ 已載入或正在載入，略過重複初始化。');
} else {
    // Claim the namespace synchronously, before any HSC application module runs.
    const hscNamespace = window.Liko.HSC = {};

    import('./app.js')
        .catch((error) => {
            // Release only our own unfinished guard so a later load may retry.
            if (window.Liko.HSC === hscNamespace && !hscNamespace.version) {
                delete window.Liko.HSC;
            }
            console.error('🐈‍⬛ [HSC] 載入失敗:', error);
        });
}
