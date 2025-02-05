import eslintPluginVue from 'eslint-plugin-vue';
import vueEslintStandardConfig from '@vue/eslint-config-standard';
import { defineConfigWithVueTs, vueTsConfigs as vueEslintTsConfigs } from '@vue/eslint-config-typescript';
import vueEslintPrettierConfig from '@vue/eslint-config-prettier';

export default [
  {
    ignores: ['/dist/**', '/es/**', '/lib/**', '**/*.vuecode']
  },

  ...vueEslintStandardConfig,
  ...eslintPluginVue.configs['flat/essential'],
  ...defineConfigWithVueTs(vueEslintTsConfigs.recommended),
  vueEslintPrettierConfig,
  {
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
  }
];
