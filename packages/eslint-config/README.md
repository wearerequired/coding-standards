# required JavaScript Coding Standard

required coding standard for JavaScript, based on the rules provided by [`@wordpress/eslint-plugin`](https://developer.wordpress.org/block-editor/packages/packages-eslint-plugin/).

## Installation

This package is an ESLint shareable configuration. Install it together with its peer dependencies:

```bash
npm install --save-dev @wearerequired/eslint-config eslint @wordpress/eslint-plugin "prettier@npm:wp-prettier@^3"
```

> npm 7+ installs peer dependencies automatically, so listing them is optional
> for a working install — but installing them explicitly keeps them pinned in
> your `package.json` (and visible to editors/CI). Use `wp-prettier`, not the
> standard Prettier: the config relies on the `parenSpacing` option, which only
> `wp-prettier` provides.

Requires ESLint 9 or 10 and `@wordpress/eslint-plugin` 25 or newer.

> **Note — ESLint 10:** works when ESLint is provided by `@wordpress/scripts`
> (v32+, the recommended WordPress setup) — it bundles ESLint 10 and
> `@wordpress/eslint-plugin` 25 in a controlled tree. For a **standalone** direct
> ESLint 10 install (no `@wordpress/scripts`), the classic `eslint-plugin-import@2`
> bundled by `@wordpress/eslint-plugin` still stops at ESLint 9 in its peer range,
> so npm nests the TypeScript import resolver and it fails to load
> (`typescript with invalid interface loaded as resolver`); install
> `eslint-import-resolver-typescript` as a direct dependency or use
> `--legacy-peer-deps` there. This resolves once WordPress moves to
> `eslint-plugin-import-x` (see
> [WordPress/gutenberg#76654](https://github.com/WordPress/gutenberg/pull/76654)).

## Usage

This package exports a [flat config](https://eslint.org/docs/latest/use/configure/configuration-files).
Create an `eslint.config.js` file in your project root:

```js
const config = require( '@wearerequired/eslint-config' );

module.exports = config;
```

To add your own overrides, spread the config into an array:

```js
const config = require( '@wearerequired/eslint-config' );

module.exports = [
	...config,
	{
		rules: {
			// Your project-specific overrides.
		},
	},
];
```

### Migrating from v6

1. Remove `.eslintrc*` and `.eslintignore` and add an `eslint.config.js` as shown above (move ignore patterns into an `{ ignores: [ … ] }` config object).
2. Update `eslint` to `^9` and `@wordpress/eslint-plugin` to `>=25`.
3. If you install ESLint via [`wearerequired/lint-action`](https://github.com/wearerequired/lint-action), make sure your version supports ESLint 9 / flat config.
4. Prefer `npm ci` over `npm i` in CI so installs are reproducible.
5. Browser globals are no longer predefined (this matches the WordPress default). If you lint `.js` / `.jsx` files that use bare DOM-only globals (`MutationObserver`, `getComputedStyle`, `IntersectionObserver`, …), add them via `languageOptions.globals` in your `eslint.config.js` or access them through `window.`. TypeScript files are unaffected (`no-undef` is off for TS).

<br>

[![a required open source product - let's get in touch](https://media.required.com/images/open-source-banner.png)](https://required.com/en/lets-get-in-touch/)
