import type { VNodeChild, Slot, VNode } from 'vue';
import { h } from 'vue';
import { isVNode, isTextVNode } from './vue';

export const getSlotRender = <T = any>(slot?: Slot<T>, ...args: any[]): (() => VNodeChild) | string | undefined => {
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
    }
};
