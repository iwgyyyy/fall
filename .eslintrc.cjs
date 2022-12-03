module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks'
  ],
  rules: {
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
      SwitchCase: 1
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/triple-slash-reference': 'off',
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-max-props-per-line': [2, { when: 'multiline' }],
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'never',
    '@typescript-eslint/space-before-function-paren': 'never'
  }
};
