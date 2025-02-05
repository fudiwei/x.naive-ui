import eslintVuePrettierConfig from '@vue/eslint-config-prettier';
import eslintVueStandardConfig from '@vue/eslint-config-standard';
import { defineConfigWithVueTs, vueTsConfigs as eslintVueTsConfigs } from '@vue/eslint-config-typescript';
import { flatConfigs as eslintImportConfigs } from 'eslint-plugin-import';
import eslintVuePlugin from 'eslint-plugin-vue';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    ignores: ['/dist/**', '/es/**', '/lib/**', '**/*.vuecode']
  },

  ...eslintVueStandardConfig,

  ...eslintVuePlugin.configs['flat/essential'],

  ...defineConfigWithVueTs(eslintVueTsConfigs.recommended),

  eslintVuePrettierConfig,

  eslintImportConfigs.recommended,

  {
    name: 'my-eslint-config/overrides',
    rules: {
      'indent': ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['warn', 'windows'],
      'max-len': ['warn', 160],
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
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^__',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },

  {
    name: 'my-eslint-config/import-sort',
    rules: {
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
          pathGroups: [
            {
              pattern: 'vue*',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'vue/**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'vue-*',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'vue-*/**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@vue*/**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '~/**',
              group: 'external',
              position: 'after'
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true
        }
      ]
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  }
];
