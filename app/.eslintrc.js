module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
  ],
  plugins: [
    "vue",
    "prettier",
  ],
  env: {
    "browser": true
  }
}
