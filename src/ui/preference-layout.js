// 所有內容列以中心對齊；列高、列距及分組間距由同一處管理。
export const PREF_LAYOUT = Object.freeze({ rowHeight: 44, rowGap: 12, sectionGap: 24 });

export function createPreferenceLayout(top, track) {
    let bottom = top;
    let first = true;
    return {
        row(height = PREF_LAYOUT.rowHeight, gap = PREF_LAYOUT.rowGap) {
            const start = bottom + (first ? 0 : gap);
            first = false;
            bottom = start + height;
            track(bottom);
            return start + height / 2;
        },
        block(height, gap = PREF_LAYOUT.rowGap) {
            return this.row(height, gap) - height / 2;
        },
        grid(count, columns) {
            const rows = Array.from({ length: Math.ceil(count / columns) }, () => this.block(PREF_LAYOUT.rowHeight));
            return index => rows[Math.floor(index / columns)];
        },
    };
}
