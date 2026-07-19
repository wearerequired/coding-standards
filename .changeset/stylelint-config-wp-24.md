---
"@wearerequired/stylelint-config": major
---

Raise the `@wordpress/stylelint-config` peer dependency from `^23` to `^24`. `24.0.0` is a drop-in for our purposes — it keeps the same `stylelint` (`^16.8.2`) and `stylelint-scss` (`^6.4.0`) peers and the same `.`, `/scss`, `/stylistic` and `/scss-stylistic` exports. Verified against required's stylistic overrides (`@stylistic/max-line-length` etc.) and the BEM `selector-class-pattern`.
