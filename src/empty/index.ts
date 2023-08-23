import type { App } from 'vue';

import ComponentEmpty from './Empty';

export type { EmptyProps } from './Empty';
export const XNEmpty = Object.assign(ComponentEmpty, {
    install: (app: App) => {
        app.component(ComponentEmpty.name, ComponentEmpty);
    }
});
export default XNEmpty;
