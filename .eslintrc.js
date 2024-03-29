module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@antfu'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'warn',
  },
}
