const allExtensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    'compat',
    'import', //
    'unicorn',
    'unused-imports',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    // 设置 '@typescript-eslint/comma-dangle' 校验
    // Turn on '@typescript-eslint/comma-dangle' rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle.md
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],

    // 启用 '@typescript-eslint/consistent-type-imports' 校验
    // Turn off '@typescript-eslint/consistent-type-imports'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': ['error'],

    // 禁用 '@typescript-eslint/explicit-function-return-type' 校验
    // Turn off '@typescript-eslint/explicit-function-return-type'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 0,

    // 禁用 '@typescript-eslint/explicit-module-boundary-types' 校验
    // Turn off '@typescript-eslint/explicit-module-boundary-types'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // 开启 '@typescript-eslint/func-call-spacing' 校验
    // Turn on '@typescript-eslint/func-call-spacing'
    // https://typescript-eslint.io/rules/func-call-spacing
    'func-call-spacing': 0,
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // 开启 '@typescript-eslint/keyword-spacing' 校验
    // Turn on '@typescript-eslint/keyword-spacing'
    // https://typescript-eslint.io/rules/keyword-spacing
    'keyword-spacing': 0,
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    // 开启 '@typescript-eslint/member-delimiter-style' 警告
    // Turn on '@typescript-eslint/member-delimiter-style' warning
    // https://typescript-eslint.io/rules/member-delimiter-style
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],

    // 开启 '@typescript-eslint/object-curly-spacing' 校验
    // Turn on '@typescript-eslint/object-curly-spacing'
    // https://typescript-eslint.io/rules/keyword-spacing
    'object-curly-spacing': 0,
    '@typescript-eslint/object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],

    // 设置 '@typescript-eslint/naming-convention' 校验
    // Turn on '@typescript-eslint/naming-convention'
    // https://typescript-eslint.io/rules/naming-convention
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'enum', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
      { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
    ],

    // 禁用 '@typescript-eslint/no-var-requires' 校验
    // Turn off '@typescript-eslint/no-var-requires'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 0,

    // 禁用 '@typescript-eslint/no-explicit-any' 校验
    // Turn off '@typescript-eslint/no-explicit-any'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 0,

    // 禁用 '@typescript-eslint/no-non-null-assertion' 校验
    // Turn off '@typescript-eslint/no-non-null-assertion'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': 0,

    // 禁用 '@typescript-eslint/no-unused-expressions' 校验
    // Turn off '@typescript-eslint/no-unused-expressions'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    '@typescript-eslint/no-unused-expressions': 0,


    // 开启 '@typescript-eslint/no-use-before-define' 校验
    // Turn on '@typescript-eslint/no-use-before-define'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': ['error'],

    // 设置 'quotes' 校验
    // Turn on 'quotes'
    // https://typescript-eslint.io/rules/quotes
    quotes: 0,
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // 禁用 '@typescript-eslint/return-await' 校验
    // Turn off '@typescript-eslint/return-await'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/return-await': 0,

    // 开启 'block-spacing' 校验
    // Turn on 'block-spacing'
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['warn', 'always'],

    // 开启 'compat/compat' 校验
    // Turn on 'compat/compat'
    // https://eslint.org/docs/rules/array-bracket-spacing
    'compat/compat': 'error',

    // 设置 'array-bracket-spacing' 校验
    // Turn on 'array-bracket-spacing'
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // 开启 'array-callback-return' 校验
    // Turn on 'array-callback-return'
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error'],

    // 禁用 'arrow-parens' 校验, 按需(多个参数)添加箭头函数参数的括号
    // Turn off 'arrow-parens'
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],

    // 开启 'class-methods-use-this' 校验
    // Turn on 'class-methods-use-this'
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error'],

    // 禁用 'consistent-return' 校验
    // Turn off 'consistent-return'
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 0,

    // 禁用 'global-require' 校验 允许在非全局范围使用 require
    // Turn off 'global-require'
    // https://eslint.org/docs/rules/global-require
    'global-require': 0,

    // 禁用 'import/no-cycle' 校验
    // Turn off 'import/no-cycle'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': 0,

    // 禁用 'import/named' 校验
    // Turn off 'import/named'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    'import/named': 0,

    // 设置 'import/no-unresolved' 校验
    // Turn on 'import/no-unresolved'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true }],

    // 禁用 'import/prefer-default-export' 校验
    // Turn off 'import/prefer-default-export'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,

    // 禁用 'import/extensions' 校验 允许倒入模块时不写扩展名
    // Turn off 'import/extensions'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': 0,

    // 禁用 'import/newline-after-import' 校验 import/require 后可以不留空行
    // Turn off 'import/newline-after-import'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 0,

    // 设置 '@typescript-eslint/no-non-null-assertion' 校验
    // Turn on 'import/no-extraneous-dependencies'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // 开启 'lines-between-class-members' 校验 要求多行类成员后留空行
    // Turn on 'lines-between-class-members'
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // 禁用 'max-classes-per-file' 校验, 允许在一个文件内定义多个类
    // Turn on 'max-classes-per-file'
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 0,

    // 设置行最大长度
    // enforce a maximum line length (max-len)
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', { code: 480, comments: 480, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],

    // 允许使用位运算符
    // allow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 0,

    // 禁用 'no-continue' 校验, 允许使用 continue 关键字
    // Turn off 'no-continue'
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 0,

    // 禁用 'no-multi-assign' 校验, 允许连续赋值
    // Turn off 'no-multi-assign'
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 0,

    // 设置 'no-multiple-empty-lines' 校验
    // Turn on 'no-multiple-empty-lines'
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],

    // 禁用 'no-nested-ternary' 校验, 允许连续的三元判断。
    // Turn off 'no-multiple-empty-lines'
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 0,

    // 设置 'no-param-reassign' 校验, 禁止 prop 覆盖
    // Turn on 'no-param-reassign'
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { props: true }],

    // 禁止 "no-restricted-syntax" 校验
    // Turn off 'no-restricted-syntax'
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 0,

    // 禁止 行尾部多余的空格
    // Block trailing spaces
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': ['error'],

    // 禁用 'no-plusplus' 校验 允许使用 ++ -- 操作符
    // Turn off 'no-plusplus'
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 0,

    // 禁用 'object-curly-newline' 校验，对象字面量内是否换行根据上下文自行决定.
    // Turn off 'object-curly-newline'
    // https://eslint.org/docs/rules/no-plusplus
    'object-curly-newline': 0,

    // 启用 'one-var' 校验，要求每个 let/const/var 关键字只能定义一个变量.
    // Turn on 'one-var'
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // 开启 'object-shorthand' 校验，
    // Turn on 'object-shorthand'
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always'],

    // 禁用 'padded-blocks' 校验, 允许代码块首行留空。
    // Turn off 'padded-blocks'
    // https://eslint.org/docs/rules/no-plusplus
    'padded-blocks': 0,

    // 开启 'prefer-const' 校验
    // Turn off 'prefer-const'
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': ['error'],

    // 开启 'prefer-template' 校验
    // Turn off 'prefer-template'
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': ['error'],

    // 设置 'quote-props' 校验
    // Turn on 'quote-props'
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed'],

    // 设置 'quote-props' 校验
    // Turn on 'quote-props'
    // https://eslint.org/docs/rules/quote-props
    'space-in-parens': ['error', 'never'],

    // 开启 'unicorn/better-regex' 校验
    // Turn 'unicorn/better-regex' rule on
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
    'unicorn/better-regex': 'error',

    // 开启 'unicorn/error-message' 校验
    // Turn 'unicorn/error-message' rule on
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
    'unicorn/error-message': 'error',

    // 开启 'unicorn/escape-case' 校验
    // Turn 'unicorn/escape-case' rule on
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
    'unicorn/escape-case': 'error',

    // 关闭 'unicorn/prefer-top-level-await' 校验
    // Turn off 'unicorn/prefer-top-level-await'
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],

    // 关闭 'unicorn/no-document-cookie' 校验
    // Turn off 'unicorn/no-document-cookie'
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
    'unicorn/no-document-cookie': 0,

    // 关闭 'unicorn/no-document-cookie' 校验
    // Turn off 'unicorn/no-empty-file'
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
    'unicorn/no-empty-file': 0,

    // 关闭 'unicorn/no-null' 校验
    // Turn off 'unicorn/no-null'
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    'unicorn/no-null': 0,

    // 关闭 'unicorn/expiring-todo-comments' 校验
    // Turn off 'unicorn/expiring-todo-comments'
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': 0,

    // 关闭 'unicorn/prefer-top-level-await' 校验
    // Turn off 'unicorn/prefer-top-level-await'
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
    'unicorn/prefer-top-level-await': 0,

    'unicorn/consistent-destructuring': 0,
    'unicorn/consistent-function-scoping': 0,
    'unicorn/explicit-length-check': 0,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/no-array-callback-reference': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-nested-ternary': 0,
    'unicorn/prefer-spread': 0,
    'unicorn/prevent-abbreviations': 0,

    // 设置 'no-unused-vars' 校验
    // Turn on 'no-unused-vars'
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: { extensions: allExtensions },
    },
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // 在 js 文件中关闭 'unicorn:prefer-module' 校验
        // Turn of 'unicorn:prefer-module' verify in '*.js' files
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
        'unicorn/prefer-module': 0,
      },
    },
  ],
};
