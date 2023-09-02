import type { VNode } from 'vue';
import { vShow } from 'vue';

export const isVShowFalse = (vnode: VNode): boolean => {
    const showDir = vnode.dirs?.find(({ dir }) => dir === vShow);
    return !!(showDir && showDir.value === false);
};
