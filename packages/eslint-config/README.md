# required JavaScript Coding Standard

required coding standard for JavaScript, based on the rules provided by [`@wordpress/eslint-plugin`](https://developer.wordpress.org/block-editor/packages/packages-eslint-plugin/).

## Installation

This package is an ESLint shareable configuration and requires `eslint` and `@wordpress/eslint-plugin` to be installed. To install this config and the peerDependencies run:

```bash
npx install-peerdeps --dev @wearerequired/eslint-config@latest
```

Requires ESLint 9 and `@wordpress/eslint-plugin` 25 or newer.

> **Note:** ESLint 10 is not supported yet. `@wordpress/eslint-plugin` still
> bundles the classic `eslint-plugin-import@2`, whose peer range excludes ESLint
> 10, which prevents npm from hoisting the TypeScript import resolver. The peer
> range will be widened to include ESLint 10 once that is resolved upstream.

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
