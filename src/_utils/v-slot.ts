import type { VNode, VNodeChild, Slot } from 'vue';
import { isVNode, h } from 'vue';
import { camelCase, kebabCase } from 'lodash-es';

import { isTextVNode } from './v-node';

declare type VSlot<T = any> = Slot<T> | ((...args: any[]) => JSX.Element);
declare type VSlots<T = any> = Record<string, VSlot<T> | undefined>;
declare type VSlotRender = (() => VNodeChild) | string;

export const getVSlot = <T extends VSlots, K extends keyof T>(slots: T, name: K): T[K] | VSlot | undefined => {
    if (!slots || !name) {
        return;
    }

    return slots[name] || slots[kebabCase(name as string)] || slots[camelCase(name as string)];
};

export const getVSlotRender = <T = any>(slot?: VSlot<T>, ...args: any[]): VSlotRender | undefined => {
    if (typeof slot === 'function') {
        let vnode: VNode | VNode[] = slot(...(args as any));
        if (Array.isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0] as VNode;
        }
        if (isVNode(vnode) && Array.isArray(vnode.children) && vnode.children.length === 1) {
            vnode = vnode.children[0] as VNode;
        }

        if (isTextVNode(vnode as VNode)) {
            return (vnode as VNode).children as string;
        } else {
            return () => h(slot as Slot);
        }
    } else if (typeof slot === 'string' || typeof slot === 'number') {
        return String(slot);
    }
};

export const mergeVSlots = (...args: VSlots[]): VSlots => {
    const temp = Object.assign({}, ...args);
    Object.keys(temp).forEach((k) => {
        if (temp[k] == null) {
            delete temp[k];
        }
    });
    return temp;
};
