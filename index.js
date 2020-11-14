'use strict';

module.exports = {
    extends: [
        './rules/errors',
        './rules/best-practices',
        './rules/variables',
        './rules/style',
        './rules/ecmascript-6',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        node: true,
        es6: true,
        mocha: true,
    },
};
