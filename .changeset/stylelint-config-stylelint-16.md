---
"@wearerequired/stylelint-config": major
---

Update to stylelint 16 and `@wordpress/stylelint-config` 23.

- Raise the `stylelint` peer dependency from `^14` to `^16.8.2` and the `@wordpress/stylelint-config` peer dependency from `^21` to `^23`.
- Add `stylelint-scss` (`^6.4.0`) as a peer dependency and add `@stylistic/stylelint-plugin` / bump `stylelint-config-recommended-scss` to `^14.1.0`.
- Drop the pure-formatting rules that stylelint 16 removed from core (`max-empty-lines`, `media-feature-parentheses-space-inside`, `function-parentheses-space-inside`, `function-comma-space-after`, `number-leading-zero`) and the stylistic SCSS brace rules; whitespace/formatting is delegated to Prettier.
- Keep enforcing line length: `max-line-length: 100` moves to `@stylistic/max-line-length: 100`.

The BEM `selector-class-pattern`, `function-url-quotes`, the `postcss-mixins` `at-rule-no-unknown` allowance and the `*-empty-line-before` rules are kept.
