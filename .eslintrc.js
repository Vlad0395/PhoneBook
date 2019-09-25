module.exports = {
	parser: 'babel-eslint',
	extends: ['react-app', 'prettier'],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ['react', 'prettier', 'json'],
	rules: {
		'no-unused-vars': [
			'error',
			{
				args: 'after-used',
				argsIgnorePattern: '^event$',
				ignoreRestSiblings: true,
				vars: 'all',
			},
		],
		'default-case': 0, // tmp
		'jsx-a11y/anchor-is-valid': 0, // tmp
		'no-useless-escape': 0, // tmp
		// curly: [2, 'multi-line'],
		'jsx-quotes': 1,
		'no-shadow': 1,
		'no-trailing-spaces': 1,
		'object-curly-spacing': [1, 'always'],
		quotes: [2, 'single', 'avoid-escape'],
		'react/jsx-boolean-value': 1,
		'react/jsx-uses-react': 1,
		'react/no-deprecated': 1,
		'react/jsx-uses-vars': 1,
		'react/jsx-wrap-multilines': 1,
		// 'react/no-did-mount-set-state': 1,
		// 'react/no-did-update-set-state': 1,
		'react/no-unknown-property': 1,
		'react/self-closing-comp': 1,
		'react/sort-prop-types': 1,
		semi: 2,
		strict: 0,
	},
	globals: {
		SOCKET_IP: true,
		SERVER_NAME: true,
		SERVER_NAME_DEV: true,
		SERVER_NAME_LOCAL: true,
		SERVER_NAME_BETA: true,
		SENTRY_URL: true,
		chrome: true,
		location: true,
	},
	parserOptions: {
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
};
