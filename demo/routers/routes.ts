import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: { path: '/components' }
    },
    {
        path: '/components',
        redirect: { path: '/components/data-table' }
    },
    {
        path: '/components/data-table',
        component: () => import('../views/components/data-table/index.vue'),
        meta: {
            sider: true,
            title: 'Data Table'
        }
    },
    {
        path: '/components/dropdown',
        component: () => import('../views/components/dropdown/index.vue'),
        meta: {
            sider: true,
            title: 'Dropdown'
        }
    }
];

export default routes;
