module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-refresh',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'warn', // Good rule, but shouldn't be an error
    '@typescript-eslint/no-empty-function': 'warn', // Fine, but shouldn't be an error
    '@typescript-eslint/no-empty-interface': 'off', // Often used as preparation for future changes
    '@typescript-eslint/no-explicit-any': 'off', // This is needed in specific scenario's, so no error plz
    '@typescript-eslint/no-extra-semi': 'warn', // Fine, but shouldn't be an error
    '@typescript-eslint/no-inferrable-types': 'off', // I'll explicitly type what I want, whenever I want, damnit
    '@typescript-eslint/no-namespace': 'off', // Understandable, but no, we'll use namespaces for a variety of usages
    '@typescript-eslint/no-non-null-assertion': 'off', // This is needed in a multitude of scenario's, I'm not filling my code with eslint comments
    '@typescript-eslint/no-unused-vars': 'off', // TS already tells us this
    'comma-dangle': ['warn', 'always-multiline'], // Trailing comma's FTW
    'indent': ['warn', 2, { 'SwitchCase': 1 }], // Indentation should be 2
    'no-constant-condition': ['warn', { 'checkLoops': false }], // Good rule, but constants in loops are fine
    'no-empty-pattern': 'warn', // Fine, but shouldn't be an error
    'no-empty': ['warn', { 'allowEmptyCatch': true }], // Fine, but shouldn't be an error and we'll allow empty catches since we need them often
    'no-inner-declarations': 'off', // Strange rule, will also error when declaring a non-exported function inside a namespace
    'no-undef': 'off', // TS will warn us more correctly about this
    'no-useless-catch': 'off', // Well, if we ever write a useless catch, there is a clear reason why we'd do that
    'no-useless-escape': 'warn', // Good rule, but shouldn't be an error
    'no-var': 'warn', // Don't use var, but let or const instead
    'prefer-const': 'warn', // Good rule, but shouldn't be an error
    'quotes': ['warn', 'single'], // Single quotes!
    'react-hooks/exhaustive-deps': ['warn', {'additionalHooks': '(useAbortEffect)',}],
    'react-hooks/rules-of-hooks': 'warn', // Stop being so annoying eslint....
    'react-refresh/only-export-components': ['warn',{ allowConstantExport: true }],
    'react/display-name': 'off', // Doesn't work properly if your only prop happens to be an object
    'react/jsx-uses-react': 'off', // JSX doesn't use React import anymore for React v17+
    'react/prop-types': 'off', // Moot rule when using TS, using properties that aren't defined isn't allowed by TS anyway
    'react/react-in-jsx-scope': 'off', // Not needed anymore for React v17+
    'react/require-render-return': 'off', // Moot rule when using TS and when extending Component
    'semi': ['warn', 'always'], // Always end a line with a semi-colon
  },
}
