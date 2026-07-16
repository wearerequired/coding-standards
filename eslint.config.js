const config = require( './packages/eslint-config' );

module.exports = [
	{
		ignores: [ 'vendor/**', 'Required/**', 'Required-Strict/**', 'tests/**' ],
	},
	...config,
];
