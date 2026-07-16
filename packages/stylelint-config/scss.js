const base = require( './' );

module.exports = {
	// scss-stylistic already includes /stylistic + the SCSS rules; reuse the
	// base preset's rule overrides on top of it (rather than extending './',
	// which would re-apply the CSS /stylistic values and clobber the
	// SCSS-specific brace handling).
	extends: '@wordpress/stylelint-config/scss-stylistic',

	rules: {
		...base.rules,

		// In SCSS, unknown at-rules are handled by scss/at-rule-no-unknown
		// (which understands @if/@else/@mixin/…); the base preset's
		// postcss-mixins override would otherwise flag them.
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': [
			'always',
			{
				except: [ 'blockless-after-blockless', 'first-nested' ],
				ignore: [ 'after-comment' ],
				ignoreAtRules: [ 'else' ],
			},
		],
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/selector-no-redundant-nesting-selector': true,
	},
};
