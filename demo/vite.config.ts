import { URL, fileURLToPath } from 'node:url';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginVueJsx from '@vitejs/plugin-vue-jsx';
import { string as rollupPluginString } from 'rollup-plugin-string';
import { defineConfig } from 'vite';
import vitePluginSvg from 'vite-svg-loader';

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

    vitePluginSvg({
      defaultImport: 'component'
    }),

    rollupPluginString({
      include: '**/*.vuecode'
    })
  ],

  resolve: {
    alias: {
      '~@': fileURLToPath(new URL('../demo', import.meta.url)),
      '@skit/x.naive-ui': fileURLToPath(new URL('../src', import.meta.url))
    }
  },

  root: process.cwd() + '/demo',

  server: {
    port: 8888
  }
});
