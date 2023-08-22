import type { App } from 'vue';

import Empty from './Empty';

export type { EmptyProps } from './Empty';
export { Empty };
export default Object.assign(Empty, {
    install: (app: App) => {
        app.component(Empty.name, Empty);
    }
});
