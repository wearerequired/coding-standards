---
"@wearerequired/eslint-config": major
---

Switch to [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files). The package now exports an array of flat config objects.

- Raise the `eslint` peer dependency from `>=8 <9` to `^9.0.0`. ESLint 10 is not supported yet: `@wordpress/eslint-plugin` still bundles the classic `eslint-plugin-import@2`, whose peer range excludes ESLint 10, so npm nests (instead of hoists) the TypeScript import resolver and it fails to load. This will be raised to include `^10.0.0` once the upstream plugin adds ESLint 10 support.
- Raise the `@wordpress/eslint-plugin` peer dependency from `>=17 <25` to `^25.0.0`. This version bundles both `typescript-eslint` and `eslint-import-resolver-typescript` as direct dependencies, which fixes the recurring transitive `@typescript-eslint` resolution failures. The upper bound is kept because the config spreads the plugin's `configs.recommended` flat-config array, whose shape may change across majors.

Migration: delete `.eslintrc*` and `.eslintignore`, then add an `eslint.config.js` in your project root:

```js
const config = require( '@wearerequired/eslint-config' );

module.exports = config;
```
