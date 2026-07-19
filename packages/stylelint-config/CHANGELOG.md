# @wearerequired/stylelint-config

## 7.0.0

### Major Changes

- 3f8da04: Update to stylelint 16 and `@wordpress/stylelint-config` 23.

  - Raise the `stylelint` peer dependency from `^14` to `^16.8.2` and the `@wordpress/stylelint-config` peer dependency from `^21` to `^23`. Add `stylelint-scss` (`^6.4.0`) as a peer dependency.
  - Extend `@wordpress/stylelint-config/stylistic` (and `/scss-stylistic` for the SCSS preset) so stylelint keeps enforcing formatting after stylelint 16 moved the stylistic rules into `@stylistic/stylelint-plugin`. The stylistic rules now carry the `@stylistic/` prefix; required's overrides are preserved (`max-line-length: 100`, `max-empty-lines: 1`, `number-leading-zero: never`, `function-parentheses-space-inside: always-single-line`, `function-comma-space-after: always-single-line`, `media-feature-parentheses-space-inside: always`).
  - Remove the `@stylistic/stylelint-plugin` and `stylelint-config-recommended-scss` direct dependencies — both are provided transitively by `@wordpress/stylelint-config`.

  The BEM `selector-class-pattern`, `function-url-quotes`, the `postcss-mixins` `at-rule-no-unknown` allowance and the `*-empty-line-before` rules are kept.

- 6b3fe4a: Raise the `@wordpress/stylelint-config` peer dependency from `^23` to `^24`. `24.0.0` is a drop-in for our purposes — it keeps the same `stylelint` (`^16.8.2`) and `stylelint-scss` (`^6.4.0`) peers and the same `.`, `/scss`, `/stylistic` and `/scss-stylistic` exports. Verified against required's stylistic overrides (`@stylistic/max-line-length` etc.) and the BEM `selector-class-pattern`.

## 7.0.0-alpha.1

### Major Changes

- 6b3fe4a: Raise the `@wordpress/stylelint-config` peer dependency from `^23` to `^24`. `24.0.0` is a drop-in for our purposes — it keeps the same `stylelint` (`^16.8.2`) and `stylelint-scss` (`^6.4.0`) peers and the same `.`, `/scss`, `/stylistic` and `/scss-stylistic` exports. Verified against required's stylistic overrides (`@stylistic/max-line-length` etc.) and the BEM `selector-class-pattern`.

## 7.0.0-alpha.0

### Major Changes

- 3f8da04: Update to stylelint 16 and `@wordpress/stylelint-config` 23.

  - Raise the `stylelint` peer dependency from `^14` to `^16.8.2` and the `@wordpress/stylelint-config` peer dependency from `^21` to `^23`. Add `stylelint-scss` (`^6.4.0`) as a peer dependency.
  - Extend `@wordpress/stylelint-config/stylistic` (and `/scss-stylistic` for the SCSS preset) so stylelint keeps enforcing formatting after stylelint 16 moved the stylistic rules into `@stylistic/stylelint-plugin`. The stylistic rules now carry the `@stylistic/` prefix; required's overrides are preserved (`max-line-length: 100`, `max-empty-lines: 1`, `number-leading-zero: never`, `function-parentheses-space-inside: always-single-line`, `function-comma-space-after: always-single-line`, `media-feature-parentheses-space-inside: always`).
  - Remove the `@stylistic/stylelint-plugin` and `stylelint-config-recommended-scss` direct dependencies — both are provided transitively by `@wordpress/stylelint-config`.

  The BEM `selector-class-pattern`, `function-url-quotes`, the `postcss-mixins` `at-rule-no-unknown` allowance and the `*-empty-line-before` rules are kept.
