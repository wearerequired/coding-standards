# required JavaScript Coding Standard

required coding standard for JavaScript, based on the rules provided by [`@wordpress/eslint-plugin`](https://developer.wordpress.org/block-editor/packages/packages-eslint-plugin/).

## Installation

This package is an ESLint shareable configuration and requires `eslint` and `@wordpress/eslint-plugin` to be installed. To install this config and the peerDependencies run:

```bash
npx install-peerdeps --dev @wearerequired/eslint-config@latest
```

## Usage

To opt-in to the default configuration, extend your own project's `.eslintrc.js` file:

```js
module.exports = {
	extends: [ '@wearerequired/eslint-config' ],
};
```
