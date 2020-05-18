// See @wordpress/prettier-config.
const prettierConfig = {
	useTabs: true,
	tabWidth: 4,
	printWidth: 100, // Default 80.
	singleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	parenSpacing: true,
	jsxBracketSameLine: false,
	semi: true,
	arrowParens: 'always',
};

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		'prettier/prettier': [ 'error', prettierConfig ],
	},
};
