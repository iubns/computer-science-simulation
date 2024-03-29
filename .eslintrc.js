module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    $: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console':
      process.env.VUE_APP_NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':
      process.env.VUE_APP_NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 'off',
    '@typescript-eslint/indent': ['error', 2],
    indent: ['error', 2, { SwitchCase: 1 }],
    'brace-style': ['error', '1tbs'],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'no-undef': 'error',
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 190,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignorePattern: 'd="([\\s\\S]*?)"'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'keyword-spacing': [2, { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['functions', 'arrowFunctions'] }
    ],
    'no-empty-function': ['error', { allow: ['functions', 'arrowFunctions'] }],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': ['error'],
    quotes: ['error', 'single'],
    'space-before-blocks': ['error', 'always'],
    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: false, classes: true, variables: false }
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false }
    ],
    'no-empty': 'error',
    'no-duplicate-imports': 'error',
    semi: ['error', 'never'],
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none', // 'none' or 'semi' or 'comma'
          requireLast: true
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'class',
        format: ['PascalCase']
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
