import path from 'node:path';
import deepmerge from 'deepmerge';
import { defineConfig } from 'rollup';
import rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonJS from '@rollup/plugin-commonjs';
import rollupPluginESBuild from 'rollup-plugin-esbuild';
import { nodeResolve as rollupPluginNodeResolve } from '@rollup/plugin-node-resolve';
import rollupPluginReplace from '@rollup/plugin-replace';
import rollupPluginTerser from '@rollup/plugin-terser';
import rollupPluginVue from 'rollup-plugin-vue';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const rollupBaseConfig = defineConfig({
    input: path.resolve('./src/index.ts'),

    plugins: [
        rollupPluginNodeResolve({
            extensions: extensions
        }),

        rollupPluginESBuild({
            tsconfig: path.resolve('./tsconfig.json'),
            target: 'ESNext',
            sourceMap: true
        }),

        rollupPluginVue(),

        rollupPluginBabel({
            babelHelpers: 'bundled',
            extensions: extensions,
            exclude: /[\\/]node_modules[\\/]/
        }),

        rollupPluginCommonJS()
    ],

    external: ['vue', 'naive-ui'],

    output: [
        {
            format: 'umd',
            file: path.resolve('./dist/index.js'),
            exports: 'named',
            name: 'XNaiveUI',
            globals: {
                'vue': 'Vue',
                'naive-ui': 'naive'
            }
        },
        {
            format: 'cjs',
            dir: path.resolve('./lib'),
            exports: 'named',
            preserveModules: true,
            entryFileNames: '[name].cjs'
        },
        {
            format: 'es',
            dir: path.resolve('./es'),
            exports: undefined,
            preserveModules: true,
            entryFileNames: '[name].mjs'
        }
    ]
});

const rollupDevBuildConfig = defineConfig({
    plugins: [
        rollupPluginReplace({
            values: {
                '__DEV__': JSON.stringify(true),
                'process.env.NODE_ENV': JSON.stringify('development')
            },
            preventAssignment: true
        })
    ]
});

const rollupProdBuildConfig = defineConfig({
    plugins: [
        rollupPluginReplace({
            values: {
                '__DEV__': JSON.stringify(false),
                'process.env.NODE_ENV': JSON.stringify('production')
            },
            preventAssignment: true
        }),
        rollupPluginTerser()
    ],
    output: [
        {
            file: path.resolve('./dist/index.prod.js')
        },
        {},
        {}
    ]
});

const combineArrayMerge = (target, source, options) => {
    const destination = target.slice();
    source.forEach((item, index) => {
        if (typeof destination[index] === 'undefined') {
            destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
        } else if (options.isMergeableObject(item)) {
            destination[index] = deepmerge(target[index], item, options);
        } else if (target.indexOf(item) === -1) {
            destination.push(item);
        }
    });
    return destination;
};

export default [
    deepmerge(rollupBaseConfig, rollupProdBuildConfig, { arrayMerge: combineArrayMerge }),
    deepmerge(rollupBaseConfig, rollupDevBuildConfig, { arrayMerge: combineArrayMerge })
];
