import type { App } from 'vue';

import XNEmpty from './Empty';

export type { EmptyProps } from './Empty';
export { XNEmpty };
export default Object.assign(XNEmpty, {
    install: (app: App) => {
        app.component(XNEmpty.name, XNEmpty);
    }
});
