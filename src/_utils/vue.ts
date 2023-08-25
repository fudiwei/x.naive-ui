import type { VNode, VNodeChild, VNodeNormalizedChildren, Slot } from 'vue';
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
        return true;
    }

    if (vnode.type === Text) {
        return (vnode.children as string).trim() === '';
    }

    if (vnode.type === Fragment) {
        return Array.isArray(vnode.children) && isEmptyVNodes(vnode.children as VNode[]);
    }

    if (typeof vnode.type === 'symbol') {
        return isEmptyVNodes(vnode.children as VNode[]);
    }

    if (typeof vnode.type === 'string' || typeof vnode.type === 'number') {
        return false;
    }

    if (typeof vnode.type === 'object') {
        return !('render' in vnode.type);
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
        } else if (isVNode(child) && child.type === Fragment) {
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

declare type VSlot = Slot | ((...args: unknown[]) => JSX.Element);
declare type VSlots = Record<string, VSlot | undefined>;
export const mergeVSlots = (...args: VSlots[]): VSlots => {
    const temp = Object.assign({}, ...args);
    Object.keys(temp).forEach((k) => {
        if (temp[k] == null) {
            delete temp[k];
        }
    });
    return temp;
};
