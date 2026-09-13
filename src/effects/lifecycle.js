// 取消只使既有工作失效；新工作取得新一代識別，不受舊回呼影響。
export function createEffectLifecycle() {
    let generation = 0;
    const cleanups = new Set();
    return {
        checkpoint() {
            const current = generation;
            return () => current === generation;
        },
        onStop(cleanup) {
            cleanups.add(cleanup);
            return () => cleanups.delete(cleanup);
        },
        stop() {
            generation++;
            for (const cleanup of [...cleanups]) {
                try { cleanup(); } catch (error) { console.warn('[HSC] Effect cleanup failed', error); }
            }
        },
    };
}
export const transientEffects = createEffectLifecycle();
export const forcedEffects = createEffectLifecycle();
