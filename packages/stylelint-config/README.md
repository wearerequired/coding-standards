# required (S)CSS Coding Standard

required coding standard for (S)CSS, based on the rules provided by [`stylelint-config-wordpress`](https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress).

## Installation

This package is an ESLint shareable configuration and requires `stylelint` and `stylelint-config-wordpress` to be installed. To install this config and the peerDependencies run:

```bash
npx install-peerdeps --dev @wearerequired/stylelint-config@latest
```

## Usage

To opt-in to the default configuration, extend your own project's `stylelint.config.js` file:

```js
module.exports = {
	extends: [ '@wearerequired/stylelint-config' ],
};
```
