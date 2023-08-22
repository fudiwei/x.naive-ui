/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: {
        'vue/setup-compiler-macros': true,
        'node': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    root: true,
    rules: {
        'indent': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['warn', 'windows'],
        'max-len': ['warn', 120],
        'no-console': 'off',
        'no-extra-boolean-cast': 'off',
        'prettier/prettier': ['warn', { trailingComma: 'none' }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/triple-slash-reference': 'off'
    }
};
