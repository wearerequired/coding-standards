module.exports = {
	extends: '@wordpress/stylelint-config',
	plugins: [ '@stylistic/stylelint-plugin' ],
	rules: {
		// stylelint 16 removed max-line-length from core; keep enforcing it via
		// @stylistic (parity with the JS printWidth of 100).
		'@stylistic/max-line-length': 100,
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
