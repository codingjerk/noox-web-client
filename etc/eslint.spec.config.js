const rules = {
  "no-undef": ["off"],
  "no-unused-expressions": ["off"],
  "react/react-in-jsx-scope": ["off"],
};

const config = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
  },
  "extends": [
    "./eslint.config.js",
  ],
  rules,
};

module.exports = config;
