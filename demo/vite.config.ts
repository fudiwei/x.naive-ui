import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginVueJsx from '@vitejs/plugin-vue-jsx';
import { string as rollupPluginString } from 'rollup-plugin-string';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: './index.html'
        }
    },

    define: {
        '__DEV__': JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development')
    },

    plugins: [
        vitePluginVue(),

        vitePluginVueJsx(),

        rollupPluginString({
            include: '**/*.vuecode'
        })
    ],

    resolve: {
        alias: {
            '@skit/x.naive-ui': fileURLToPath(new URL('../src', import.meta.url))
        }
    },

    root: process.cwd() + '/demo',

    server: {
        port: 8888
    }
});
