module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    "indent": ["warn", 2],
    "quotes": ["off"],
    "semi": ["warn", "always"],
    "eqeqeq": "warn",
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }]
  },
  extends: [
    "prettier"
  ]
}