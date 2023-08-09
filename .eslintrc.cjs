const path = require('path');

console.log({path});

module.exports = {
  extends: ["next/core-web-vitals", "../../.eslintrc.json"],
  settings: {
    "import/resolver": {
      "node": {
        "paths": [
          __dirname
        ]
      },
      "alias": {
        "root": __dirname,
        "map": [
          ["@/utilities", path.join(__dirname, "/shared/utilities")],
          ["@/constants", path.join(__dirname, "/shared/constants")],
          ["@/styles", path.join(__dirname, "/shared/styles")],
          ["@/UI", path.join(__dirname, "/components/UI")],
          ["@/hooks", path.join(__dirname, "/shared/hooks")],
          ["@/features", path.join(__dirname, "/features")],
          ["@/services", path.join(__dirname, "/_api/services")]
        ],
        "extensions": [".ts", ".js", ".jsx", ".json"]
      }
    }
  },
  rules: {
    "@next/next/no-img-element": "off",
    "import/no-unresolved": "error",
    "import/named": "error"
  }
};
