module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vue',
    ],
    rules: {
        indent: ['error', 4],
        'max-len': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': 'off',
        'no-shadow': 'off', // Investigate
        'no-alert': 'off', // TODO
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'class-methods-use-this': 'off', // We need to use abstract methods
        'import/no-unresolved': 'off', // https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config/index.js#L39
        'import/extensions': 'off',
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/multiline-html-element-content-newline': ['error', {
            allowEmptyLines: true,
        }],
        'vue/max-attributes-per-line': ['error', {
            multiline: {
                allowFirstLine: true,
            },
        }],
    },
    ignorePatterns: [
        'static/**/*',
    ],
};
