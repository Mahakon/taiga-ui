/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        '@tinkoff/eslint-config-angular',
        './scripts/eslint/nx.js',
    ],
    ignorePatterns: ['projects/**/test.ts', 'projects/**/icons/all.ts'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-prototype-builtins': 'off',
        // note you must disable the base rule as it can report incorrect errors
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: true,
                ignoreImport: false,
                ignoreExport: true,
            },
        ],
        'no-return-assign': ['error', 'always'],
        'no-implicit-coercion': ['error', {allow: ['!!']}],
    },
};
