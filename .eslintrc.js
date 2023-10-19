module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'object-shorthand': 'off',
        'no-extra-boolean-cast': 'off',
        'eol-last': 'off',
        'no-trailing-spaces': 'off',
        'react/react-in-jsx-scope': 'off',
    }
}
