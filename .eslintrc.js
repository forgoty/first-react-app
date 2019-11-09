module.exports = {
  extends: 'airbnb',
  rules: {
    'react/prop-types': [2, { ignore: ['className', 'children', 'forwardRef', 'router', 't'] }],
    'no-plusplus': 'off',
    'semi': ['error', 'never'],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
