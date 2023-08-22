import type { VNode, VNodeChild, VNodeNormalizedChildren } from 'vue';
import { Fragment, Text, Comment, isVNode } from 'vue';

export { isVNode };

export const isTextVNode = (vnode?: VNode): boolean => {
    return isVNode(vnode) && vnode.type === Text && typeof vnode.children === 'string';
};

export const isEmptyVNode = (vnode?: VNode): boolean => {
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

export const isEmptyVNodes = (vnodes?: VNode[]): boolean => {
    if (!vnodes || vnodes.length === 0) {
        return true;
    }

    return vnodes.every((vnode) => isEmptyVNode(vnode));
};

export const SKIPPED_FLATTEN_KEY = Symbol('SKIPPED_FLATTEN_KEY');
export const flattenVNodeChildren = (children?: VNodeNormalizedChildren, filterEmpty = true): VNodeChild[] => {
    if (!children) {
        return [];
    }

    const temp: VNodeChild[] = [];

    const array = Array.isArray(children) ? children : [children];
    array.forEach((child) => {
        if (Array.isArray(child)) {
            temp.push(...flattenVNodeChildren(child, filterEmpty));
        } else if (isVNode(child)) {
            if (child.type === Fragment) {
                if (child.key === SKIPPED_FLATTEN_KEY) {
                    temp.push(child);
                } else {
                    temp.push(...flattenVNodeChildren(child.children, filterEmpty));
                }
            } else {
                if (filterEmpty && !isEmptyVNode(child)) {
                    temp.push(child);
                } else if (!filterEmpty) {
                    temp.push(child);
                }
            }
        } else if (child != null && child !== '') {
            temp.push(child as VNodeChild);
        }
    });

    return temp;
};
