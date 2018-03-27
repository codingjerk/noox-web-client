const rules = {
  "accessor-pairs": ["error"],
  "array-bracket-newline": ["error", "consistent"],
  "array-bracket-spacing": ["error", "never"],
  "array-callback-return": ["error"],
  "arrow-body-style": ["error", "as-needed"],
  "arrow-parens": ["error", "as-needed", {"requireForBlockBody": false}],
  "block-scoped-var": ["error"],
  "block-spacing": ["error", "always"],
  "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
  "callback-return": ["error"],
  "camelcase": ["error"],
  "capitalized-comments": ["error", "always"],
  "class-methods-use-this": ["error"],
  "comma-dangle": ["error", {"arrays": "always-multiline","objects": "always-multiline","imports": "always-multiline","exports": "always-multiline","functions": "never",}],
  "complexity": ["warn", 11],
  "computed-property-spacing": ["error"],
  "consistent-return": ["error"],
  "consistent-this": ["error", "self"],
  "curly": ["error"],
  "default-case": ["error"],
  "dot-location": ["error", "property"],
  "dot-notation": ["warn", {"allowKeywords": true}],
  "eol-last": ["error"],
  "eqeqeq": ["error"],
  "for-direction": ["error"],
  "func-call-spacing": ["error"],
  "func-names": ["error", "never"],
  "func-style": ["error", "expression", {"allowArrowFunctions": true}],
  "function-paren-newline": ["error", "multiline"],
  "generator-star-spacing": ["error", {"before": false, "after": true}],
  "getter-return": ["error"],
  "global-require": ["error"],
  "guard-for-in": ["error"],
  "handle-callback-err": ["error"],
  "id-blacklist": ["error", "l", "i", "j"],
  "id-length": ["error", {"min": 3, "exceptions": ["_", "_1", "_2", "_3"]}],
  "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"],
  "implicit-arrow-linebreak": ["error", "beside"],
  "indent": ["error", 2],
  "init-declarations": ["error", "always"],
  "jsx-quotes": ["error", "prefer-double"],
  "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
  "keyword-spacing": ["error", {"before": true,"after": true,"overrides": {"return": {"after": true},"throw": {"after": true},"case": {"after": true},},}],
  "linebreak-style": ["error", "unix"],
  "lines-between-class-members": ["error", "always", {"exceptAfterSingleLine": false}],
  "max-depth": ["error", {"max": 5}],
  "max-len": ["error", {"code": 100}],
  "max-lines": ["error", {"max": 300, "skipBlankLines": true, "skipComments": true}],
  "max-nested-callbacks": ["error", {"max": 3}],
  "max-params": ["error", {"max": 3}],
  "max-statements": ["error", {"max": 15}],
  "max-statements-per-line": ["error", {"max": 1}],
  "new-cap": ["error"],
  "new-parens": ["error"],
  "newline-per-chained-call": ["error"],
  "no-alert": ["error"],
  "no-array-constructor": ["error"],
  "no-await-in-loop": ["error"],
  "no-bitwise": ["error"],
  "no-buffer-constructor": ["error"],
  "no-caller": ["error"],
  "no-catch-shadow": ["error"],
  "no-confusing-arrow": ["error", {"allowParens": true}],
  "no-continue": ["error"],
  "no-duplicate-imports": ["error"],
  "no-else-return": ["warn"],
  "no-empty-function": ["error"],
  "no-eq-null": ["error"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-floating-decimal": ["error"],
  "no-implicit-coercion": ["error"],
  "no-implicit-globals": ["error"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["warn"],
  "no-invalid-this": ["error"],
  "no-iterator": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": ["error"],
  "no-mixed-requires": ["error"],
  "no-multi-assign": ["error"],
  "no-multi-spaces": ["error"],
  "no-multi-str": ["error"],
  "no-multiple-empty-lines": ["error", {"max": 1, "maxEOF": 0, "maxBOF": 0}],
  "no-nested-ternary": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-object": ["error"],
  "no-new-require": ["error"],
  "no-new-wrappers": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": ["error"],
  "no-path-concat": ["error"],
  "no-plusplus": ["error"],
  "no-process-env": ["error"],
  "no-process-exit": ["error"],
  "no-proto": ["error"],
  "no-prototype-builtins": ["error"],
  "no-restricted-imports": ["error", {"paths": [],"patterns": [],}],
  "no-restricted-properties": ["error", {"object": "arguments","property": "callee","message": "arguments.callee is deprecated",}, {"object": "global","property": "isFinite","message": "Please use Number.isFinite instead",}, {"object": "self","property": "isFinite","message": "Please use Number.isFinite instead",}, {"object": "window","property": "isFinite","message": "Please use Number.isFinite instead",}, {"object": "global","property": "isNaN","message": "Please use Number.isNaN instead",}, {"object": "self","property": "isNaN","message": "Please use Number.isNaN instead",}, {"object": "window","property": "isNaN","message": "Please use Number.isNaN instead",}, {"property": "__defineGetter__","message": "Please use Object.defineProperty instead.",}, {"property": "__defineSetter__","message": "Please use Object.defineProperty instead.",}, {"object": "Math","property": "pow","message": "Use the exponentiation operator (**) instead.",}],
  "no-restricted-syntax": ["error", {"selector": "ForInStatement", "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",}, {"selector": "ForOfStatement","message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",}, {"selector": "LabeledStatement","message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",}, {"selector": "WithStatement","message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",}],
  "no-return-assign": ["error"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-self-compare": ["error"],
  "no-sequences": ["error"],
  "no-shadow": ["error"],
  "no-shadow-restricted-names": ["error"],
  "no-sync": ["error"],
  "no-tabs": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-throw-literal": ["error"],
  "no-trailing-spaces": ["error"],
  "no-undef-init": ["error"],
  "no-undefined": ["error"],
  "no-underscore-dangle": ["error", {"allow": ["_", "_1", "_2", "_3"]}],
  "no-unmodified-loop-condition": ["warn"],
  "no-unneeded-ternary": ["error"],
  "no-unused-expressions": ["error", {"allowShortCircuit": false,"allowTernary": false,"allowTaggedTemplates": false,}],
  "no-use-before-define": ["error"],
  "no-useless-call": ["error"],
  "no-useless-computed-key": ["error"],
  "no-useless-concat": ["error"],
  "no-useless-constructor": ["error"],
  "no-useless-rename": ["error"],
  "no-useless-return": ["error"],
  "no-var": ["error"],
  "no-void": ["error"],
  "no-warning-comments": ["error"],
  "no-whitespace-before-property": ["error"],
  "no-with": ["error"],
  "object-curly-newline": ["error", {"consistent": true}],
  "object-curly-spacing": ["error", "never"],
  "object-shorthand": ["error"],
  "one-var": ["error", "never"],
  "one-var-declaration-per-line": ["error", "always"],
  "operator-assignment": ["error", "always"],
  "operator-linebreak": ["error", "before", {"overrides": {"=": "after"}}],
  "padded-blocks": ["error", "never"],
  "prefer-arrow-callback": ["error"],
  "prefer-const": ["error"],
  "prefer-destructuring": ["error", {"VariableDeclarator": {"array": false,"object": true,},"AssignmentExpression": {"array": true,"object": true,},}, {"enforceForRenamedProperties": false,}],
  "prefer-numeric-literals": ["error"],
  "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
  "prefer-template": ["error"],
  "quote-props": ["error", "consistent"],
  "quotes": ["error", "double"],
  "radix": ["error"],
  "require-await": ["off"],
  "rest-spread-spacing": ["error", "never"],
  "semi": ["error", "always"],
  "semi-spacing": ["error"],
  "semi-style": ["error"],
  "space-before-blocks": ["error", "always"],
  "space-before-function-paren": ["error", "never"],
  "space-in-parens": ["error", "never"],
  "space-infix-ops": ["error"],
  "space-unary-ops": ["error"],
  "spaced-comment": ["error", "always"],
  "strict": ["error", "never"],
  "switch-colon-spacing": ["error"],
  "symbol-description": ["error"],
  "template-curly-spacing": ["error", "never"],
  "template-tag-spacing": ["error", "never"],
  "unicode-bom": ["error", "never"],
  "valid-jsdoc": ["error"],
  "vars-on-top": ["error"],
  "wrap-iife": ["error"],
  "yield-star-spacing": ["error", "after"],
  "yoda": ["error", "never"],
};

const config = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  rules,
};

module.exports = config;