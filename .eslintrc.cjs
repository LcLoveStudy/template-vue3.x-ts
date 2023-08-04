/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
// 官网:https://www.tkcnn.com/eslint/
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard',
    'prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 0, // 关闭对组件名称的检查
    eqeqeq: 'off', // 严格区分==和===
    'max-lines': ['error', { max: 500, skipComments: false, skipBlankLines: false }],
    'no-alert': 'error', // 禁止使用alert
    'no-empty': 'error', // 禁止使用空块语句
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 禁止使用空函数(允许箭头函数)
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }], // 禁止使用链式赋值表达式
    'no-redeclare': 'error', // 禁止变量重新声明
    'no-shadow': 'error', // 禁止在外部作用域中声明的隐藏变量中的变量声明
    'no-undef-init': 'error', // 不允许将变量初始化为 undefined
    'no-useless-return': 'error', // 不允许多余的返回语句
    'no-var': 'error', // 需要 let 或 const 而不是 var
    'require-await': 'error' // 没有await时禁止使用async
  }
}
