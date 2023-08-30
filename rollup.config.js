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

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const EXTERNALS = { 'vue': 'Vue', 'naive-ui': 'naive' };
const OUTPUT_UMD = path.resolve('./dist');
const OUTPUT_CJS = path.resolve('./lib');
const OUTPUT_ESM = path.resolve('./es');

function configureMain() {
    const baseConfig = (dev = true) => {
        return defineConfig({
            input: path.resolve('./src/index.ts'),

            plugins: [
                rollupPluginNodeResolve({
                    extensions: EXTENSIONS
                }),

                rollupPluginESBuild({
                    tsconfig: path.resolve('./tsconfig.json'),
                    target: 'ESNext',
                    sourceMap: true
                }),

                rollupPluginVue(),

                rollupPluginBabel({
                    babelHelpers: 'bundled',
                    extensions: EXTENSIONS,
                    exclude: /[\\/]node_modules[\\/]/
                }),

                rollupPluginCommonJS(),

                rollupPluginReplace({
                    values: {
                        '__DEV__': JSON.stringify(dev),
                        'process.env.NODE_ENV': JSON.stringify(dev ? 'development' : 'production')
                    },
                    preventAssignment: true
                })
            ],

            external: Object.keys(EXTERNALS)
        });
    };

    return [
        // dist/index.js
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'umd',
                    file: path.resolve(OUTPUT_UMD, 'index.js'),
                    exports: 'named',
                    name: 'XNaiveUI',
                    globals: EXTERNALS
                }
            })
        ),
        // dist/index.prod.js
        deepmerge(
            baseConfig(false),
            defineConfig({
                output: {
                    format: 'umd',
                    file: path.resolve(OUTPUT_UMD, 'index.prod.js'),
                    exports: 'named',
                    name: 'XNaiveUI',
                    globals: EXTERNALS,
                    plugins: [rollupPluginTerser()]
                }
            })
        ),
        // lib/index.cjs
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'cjs',
                    dir: OUTPUT_CJS,
                    exports: 'named',
                    preserveModules: true,
                    entryFileNames: '[name].cjs'
                }
            })
        ),
        // es/index.mjs
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'esm',
                    dir: OUTPUT_ESM,
                    exports: undefined,
                    preserveModules: true,
                    entryFileNames: '[name].mjs'
                }
            })
        )
    ];
}

function configureUnplugin() {
    const baseConfig = (dev = true) => {
        return defineConfig({
            input: path.resolve('./src/unplugin.ts'),

            plugins: [
                rollupPluginNodeResolve({
                    extensions: EXTENSIONS
                }),

                rollupPluginESBuild({
                    tsconfig: path.resolve('./tsconfig.json'),
                    target: 'ESNext',
                    sourceMap: true
                }),

                rollupPluginBabel({
                    babelHelpers: 'bundled',
                    extensions: EXTENSIONS,
                    exclude: /[\\/]node_modules[\\/]/
                }),

                rollupPluginCommonJS(),

                rollupPluginReplace({
                    values: {
                        '__DEV__': JSON.stringify(dev),
                        'process.env.NODE_ENV': JSON.stringify(dev ? 'development' : 'production')
                    },
                    preventAssignment: true
                })
            ],

            external: Object.keys(EXTERNALS)
        });
    };

    return [
        // dist/unplugin.js
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'umd',
                    file: path.resolve(OUTPUT_UMD, 'unplugin.js'),
                    exports: 'named',
                    name: 'XNaiveUIUnplugin',
                    globals: EXTERNALS
                }
            })
        ),
        // dist/unplugin.prod.js
        deepmerge(
            baseConfig(false),
            defineConfig({
                output: {
                    format: 'umd',
                    file: path.resolve(OUTPUT_UMD, 'unplugin.prod.js'),
                    exports: 'named',
                    name: 'XNaiveUIUnplugin',
                    globals: EXTERNALS,
                    plugins: [rollupPluginTerser()]
                }
            })
        ),
        // lib/unplugin.cjs
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'cjs',
                    dir: OUTPUT_CJS,
                    exports: 'named',
                    preserveModules: true,
                    entryFileNames: '[name].cjs'
                }
            })
        ),
        // es/unplugin.mjs
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'esm',
                    dir: OUTPUT_ESM,
                    exports: undefined,
                    preserveModules: true,
                    entryFileNames: '[name].mjs'
                }
            })
        )
    ];
}

export default [...configureMain(), ...configureUnplugin()];
