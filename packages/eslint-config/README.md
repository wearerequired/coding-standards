# required JavaScript Coding Standard

required coding standard for JavaScript, based on the rules provided by [`@wordpress/eslint-plugin`](https://developer.wordpress.org/block-editor/packages/packages-eslint-plugin/).

## Installation

This package is an ESLint shareable configuration and requires `eslint`, `@wordpress/eslint-plugin`, and `prettier` as peer dependencies:

```bash
npm install --save-dev @wearerequired/eslint-config eslint @wordpress/eslint-plugin prettier
```

## Usage

This package ships a [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) (ESLint 9+). Create an `eslint.config.js` in your project root:

```js
const config = require( '@wearerequired/eslint-config' );

module.exports = config;
```

To layer your own rules or ignore paths, spread the config and append overrides:

```js
const config = require( '@wearerequired/eslint-config' );

module.exports = [
	{ ignores: [ 'build/**', 'dist/**' ] },
	...config,
	{
		rules: {
			// Project overrides.
		},
	},
];
```

<br>

[![a required open source product - let's get in touch](https://media.required.com/images/open-source-banner.png)](https://required.com/en/lets-get-in-touch/)
