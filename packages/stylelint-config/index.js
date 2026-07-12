module.exports = {
	// The /stylistic preset keeps stylelint enforcing formatting (via
	// @stylistic/stylelint-plugin, a dependency of @wordpress/stylelint-config)
	// now that stylelint 16 removed those rules from core.
	extends: '@wordpress/stylelint-config/stylistic',
	rules: {
		// required overrides of the WordPress @stylistic defaults.
		'@stylistic/max-line-length': 100, // WordPress: 80.
		'@stylistic/max-empty-lines': 1, // WordPress: 2.
		'@stylistic/media-feature-parentheses-space-inside': 'always',
		'@stylistic/function-parentheses-space-inside': 'always-single-line', // WordPress: never.
		'@stylistic/function-comma-space-after': 'always-single-line', // WordPress: always.
		'@stylistic/number-leading-zero': 'never', // WordPress: always.

		// required custom rules.
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
		'selector-class-pattern': [
			// See https://en.bem.info/methodology/naming-convention/#two-dashes-style.
			'^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$',
			{
				resolveNestedSelectors: true,
				message:
					'Selector should use lowercase and hyphens to separate words or in BEM style: block-name__elem-name--mod-name (selector-class-pattern)',
			},
		],
		'function-url-quotes': [
			'always',
			{
				except: [ 'empty' ],
			},
		],
		// At-rules used by postcss-mixins.
		'at-rule-no-unknown': [ true, { ignoreAtRules: [ 'define-mixin', 'mixin' ] } ],
	},
};
