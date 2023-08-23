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
            title: 'Data Table / 数据表格'
        }
    },
    {
        path: '/components/dropdown',
        component: () => import('../views/components/dropdown/index.vue'),
        meta: {
            sider: true,
            title: 'Dropdown / 下拉菜单'
        }
    },
    {
        path: '/components/select',
        component: () => import('../views/components/select/index.vue'),
        meta: {
            sider: true,
            title: 'Select / 选择器'
        }
    },
    {
        path: '/components/cascader',
        component: () => import('../views/components/cascader/index.vue'),
        meta: {
            sider: true,
            title: 'Cascader / 级联选择'
        }
    }
];

export default routes;
