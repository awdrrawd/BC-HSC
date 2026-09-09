// 每個效果只可釋放自己的表情；原始快取直到最後一次還原才清除。
export function createExpressionState(capture, apply) {
    let snapshot = null;
    const effects = new Map();
    let applying = 0;
    function applyOwned(value) {
        applying++;
        try { apply(value); } finally { applying--; }
    }

    function restore() {
        if (snapshot === null) return;
        applyOwned(snapshot);
        snapshot = null;
    }

    const state = {
        // Read-only snapshot; consumers must not receive effect tokens or mutable maps.
        getState() {
            return { active: effects.size > 0 || applying > 0, count: effects.size };
        },
        push(expression) {
            if (snapshot === null) snapshot = capture();
            const token = Symbol('expression');
            const value = { ...expression };
            effects.set(token, value);
            try {
                applyOwned(value);
            } catch (error) {
                // 套用中途失敗時回到仍有效的表情；回復也失敗則保留原始快取供 clear 重試。
                state.pop(token);
                throw error;
            }
            return token;
        },
        pop(token) {
            const latest = [...effects.keys()].pop();
            if (!effects.delete(token)) return;
            if (effects.size === 0) restore();
            else if (token === latest) applyOwned([...effects.values()].pop());
        },
        clear() {
            effects.clear();
            restore();
        },
    };
    return state;
}
