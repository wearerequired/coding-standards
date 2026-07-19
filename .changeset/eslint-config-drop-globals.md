---
"@wearerequired/eslint-config": major
---

Do not enable browser globals. This matches the WordPress default — `@wordpress/eslint-plugin` deliberately does not enable the `browser` environment (the v6 config added `env: { browser: true }`). It also removes the `globals` dependency, so the package now ships with no runtime dependencies.

In `.js` / `.jsx` files, bare DOM-only globals (`MutationObserver`, `getComputedStyle`, `IntersectionObserver`, `ResizeObserver`, …) are no longer predefined; add them per project via `languageOptions.globals` or access them through `window.`. `.ts` / `.tsx` files are unaffected (`no-undef` is off for TypeScript).
