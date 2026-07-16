---
"@wearerequired/stylelint-config": major
---

Update to stylelint 16 and `@wordpress/stylelint-config` 23.

- Raise the `stylelint` peer dependency from `^14` to `^16.8.2` and the `@wordpress/stylelint-config` peer dependency from `^21` to `^23`. Add `stylelint-scss` (`^6.4.0`) as a peer dependency.
- Extend `@wordpress/stylelint-config/stylistic` (and `/scss-stylistic` for the SCSS preset) so stylelint keeps enforcing formatting after stylelint 16 moved the stylistic rules into `@stylistic/stylelint-plugin`. The stylistic rules now carry the `@stylistic/` prefix; required's overrides are preserved (`max-line-length: 100`, `max-empty-lines: 1`, `number-leading-zero: never`, `function-parentheses-space-inside: always-single-line`, `function-comma-space-after: always-single-line`, `media-feature-parentheses-space-inside: always`).
- Remove the `@stylistic/stylelint-plugin` and `stylelint-config-recommended-scss` direct dependencies — both are provided transitively by `@wordpress/stylelint-config`.

The BEM `selector-class-pattern`, `function-url-quotes`, the `postcss-mixins` `at-rule-no-unknown` allowance and the `*-empty-line-before` rules are kept.
