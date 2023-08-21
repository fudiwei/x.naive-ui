import type { App } from 'vue';

import { COMLIB_PREFIX } from '../_utils';
import Empty from './Empty';

export type { EmptyProps } from './Empty';
export { Empty };
export default Object.assign(Empty, {
    install: (app: App) => {
        app.component(COMLIB_PREFIX + Empty.name, Empty);
    }
});
