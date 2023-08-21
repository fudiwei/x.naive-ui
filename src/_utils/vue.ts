import type { VNode } from 'vue';
import { Fragment, Text, Comment } from 'vue';

export const isEmptyVNode = (vnode?: VNode) => {
    if (!vnode) {
        return true;
    }

    if (vnode.type === Comment) {
        // 注释
        return true;
    }

    if (vnode.type === Text && (vnode.children as string).trim() === '') {
        // 文本
        return true;
    }

    if (vnode.type === Fragment && (!Array.isArray(vnode.children) || vnode.children.length === 0)) {
        // 片段
        return true;
    }

    if (typeof vnode.type === 'string') {
        // 原生元素
        return false;
    }

    return vnode.el == null && vnode.children == null;
};

export const isEmptyVNodes = (vnodes?: VNode[]) => {
    if (!vnodes || vnodes.length === 0) {
        return true;
    }

    return vnodes.every((vnode) => isEmptyVNode(vnode));
};
