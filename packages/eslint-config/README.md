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

Requires ESLint 9 and `@wordpress/eslint-plugin` 25 or newer.

> **Note — ESLint 10:** not supported yet. `@wordpress/eslint-plugin@25` still
> bundles the classic `eslint-plugin-import@2` and `@babel/eslint-parser`, whose
> peer ranges stop at ESLint 9. Under ESLint 10 npm can no longer hoist those
> plugins (or the TypeScript import resolver they pull in), so the resolver fails
> to load with `typescript with invalid interface loaded as resolver`. It can be
> forced to work by installing `eslint-import-resolver-typescript` as a direct
> dependency or with `--legacy-peer-deps`, but that is a per-project workaround.
> This peer range becomes `^9.0.0 || ^10.0.0` — a one-line change — once
> WordPress ships a release that moves to `eslint-plugin-import-x` (see
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

<br>

[![a required open source product - let's get in touch](https://media.required.com/images/open-source-banner.png)](https://required.com/en/lets-get-in-touch/)
