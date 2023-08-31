module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error', {allow: ['warn', 'error']}],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    // eslint-plugin-import
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-cycle': 2,
    'import/no-duplicates': 1,
    'import/no-unresolved': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ["src"],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
