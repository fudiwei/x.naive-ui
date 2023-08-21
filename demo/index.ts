import { createApp } from 'vue';
import NaiveUI from 'naive-ui';

import App from './app.vue';
import routers from './routers';
import components from '../src';

createApp(App).use(NaiveUI).use(routers).use(components).mount('#app');
