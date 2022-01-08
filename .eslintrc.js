module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["react"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
}
