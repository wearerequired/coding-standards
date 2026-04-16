const config = require( './packages/eslint-config' );

module.exports = [
	{
		ignores: [ 'vendor/**', 'Required/**' ],
	},
	...config,
];
