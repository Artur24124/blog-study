module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:i18next/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
	rules: {
		indent: [2, 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'jsx-quotes': [2, 'prefer-single'],
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'warn',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': ['error', { markupOnly: true }],
	},
	globals: {
		__IS_DEV__: true,
	},
};
