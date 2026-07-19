---
"@wearerequired/eslint-config": major
---

Switch to [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files). The package now exports an array of flat config objects.

- Raise the `eslint` peer dependency from `>=8 <9` to `^9.0.0 || ^10.0.0`. ESLint 10 works when ESLint comes from `@wordpress/scripts` (v32+, the recommended WordPress setup). A standalone direct ESLint 10 install may need `--legacy-peer-deps` because the classic `eslint-plugin-import@2` bundled by `@wordpress/eslint-plugin` still stops at ESLint 9 in its peer range (fixed upstream once WordPress moves to `eslint-plugin-import-x`).
- Raise the `@wordpress/eslint-plugin` peer dependency from `>=17 <25` to `^25.0.0`. This version bundles both `typescript-eslint` and `eslint-import-resolver-typescript` as direct dependencies, which fixes the recurring transitive `@typescript-eslint` resolution failures. The upper bound is kept because the config spreads the plugin's `configs.recommended` flat-config array, whose shape may change across majors.
- Refresh the `import/core-modules` allowlist to the current set of WordPress script packages, so their imports are not reported as unresolved. Adds 20 packages, including `@wordpress/preferences`, `@wordpress/preferences-persistence`, `@wordpress/commands`, `@wordpress/interactivity`, `@wordpress/patterns` and `@wordpress/router`.

Migration: delete `.eslintrc*` and `.eslintignore`, then add an `eslint.config.js` in your project root:

```js
const config = require( '@wearerequired/eslint-config' );

module.exports = config;
```
