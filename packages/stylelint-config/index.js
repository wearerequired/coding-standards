module.exports = {
	extends: 'stylelint-config-wordpress',
	rules: {
		'max-line-length': 100,
		'max-empty-lines': 1,
		'rule-empty-line-before': [
			'always',
			{
				except: [ 'first-nested' ],
				ignore: [ 'after-comment' ],
			},
		],
		'comment-empty-line-before': [
			'always',
			{
				except: [ 'first-nested' ],
				ignore: [ 'stylelint-commands' ],
			},
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: [ 'blockless-after-blockless', 'first-nested' ],
				ignore: [ 'after-comment' ],
			},
		],
		'media-feature-parentheses-space-inside': 'always',
		'function-parentheses-space-inside': 'always-single-line',
		'function-comma-space-after': 'always-single-line',
		'number-leading-zero': 'never',
		'selector-class-pattern': [
			// See https://en.bem.info/methodology/naming-convention/#two-dashes-style.
			'^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$',
			{
				resolveNestedSelectors: true,
				message:
					'Selector should use lowercase and hyphens to separate words or in BEM style: block-name__elem-name--mod-name (selector-class-pattern)',
			},
		],
	},
	'function-url-quotes': [
		'always',
		{
			except: [ 'empty' ],
		},
	],
	// At-rules used by postcss-mixins.
	'at-rule-no-unknown': [ true, { ignoreAtRules: [ 'define-mixin', 'mixin' ] } ],
};
