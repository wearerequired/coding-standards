module.exports = {
	extends: [ './', 'stylelint-config-recommended-scss' ].map( require.resolve ),

	plugins: [ 'stylelint-scss' ],

	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: [ 'blockless-after-blockless', 'first-nested' ],
				ignore: [ 'after-comment' ],
				ignoreAtRules: [ 'else' ],
			},
		],
		'scss/at-else-empty-line-before': 'never',
		'scss/selector-no-redundant-nesting-selector': true,
	},
};
