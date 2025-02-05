import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach(function (to, from) {
  if (!from || to.path !== from.path) {
    if (to.hash && to.hash !== from.hash) {
      nextTick(() => {
        const el = document.querySelector(to.hash);
        if (el) el.scrollIntoView();
      });
    }
  }
});

export default router;
