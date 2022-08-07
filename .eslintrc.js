module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['import', 'unused-imports', '@typescript-eslint', 'jsdoc', 'solid'],
  extends: ['google', 'prettier', 'plugin:solid/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'require-jsdoc': 0,
    'valid-jsdoc': 0,

    'import/newline-after-import': 1,
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    'unused-imports/no-unused-imports': 1,
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }],

    'jsdoc/require-jsdoc': 2,
    'jsdoc/require-param': 2,
    'jsdoc/require-param-description': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-property': 2,
    'jsdoc/require-property-description': 2,
    'jsdoc/require-property-name': 2,
    'jsdoc/require-property-type': 2,
    'jsdoc/require-returns': 2,
    'jsdoc/require-returns-check': 2,
    'jsdoc/require-returns-description': 2,
    'jsdoc/require-returns-type': 2,
    'jsdoc/require-throws': 2,
    'jsdoc/require-yields': 2,
    'jsdoc/require-yields-check': 2,
    'jsdoc/tag-lines': 2,
    'jsdoc/valid-types': 2,

    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        modifiers: ['const'],
        types: ['function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'property',
        format: [],
      },
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
    ],
  },
}
