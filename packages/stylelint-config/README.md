# required (S)CSS Coding Standard

required coding standard for (S)CSS, based on the rules provided by [`@wordpress/stylelint-config`](https://developer.wordpress.org/block-editor/packages/packages-stylelint-config/).

## Installation

This package is an stylelint shareable configuration and requires `stylelint`, `@wordpress/stylelint-config` and `stylelint-scss` to be installed. To install this config and the peerDependencies run:

```bash
npx install-peerdeps --dev @wearerequired/stylelint-config@latest
```

Requires stylelint 16 and `@wordpress/stylelint-config` 23 or newer.

> **Migrating from v6:** stylelint 16 removed the stylistic core rules (spacing,
> line length, leading zeros, …); formatting is now handled by Prettier /
> `@stylistic/stylelint-plugin`. Update `stylelint` to `^16.8.2`,
> `@wordpress/stylelint-config` to `^23` and add `stylelint-scss` (`^6.4.0`).

## Usage

To opt-in to the default configuration, extend your own project's `stylelint.config.js` file:

```js
module.exports = {
	extends: [ '@wearerequired/stylelint-config' ],
};
```

### SCSS Preset

In addition to the default preset, there is also a SCSS preset. This preset extends both `@wearerequired/stylelint-config` and [`stylelint-config-recommended-scss`](https://github.com/stylelint-scss/stylelint-config-recommended-scss).

```js
module.exports = {
	extends: [ '@wearerequired/stylelint-config/scss' ],
};
```

<br>

[![a required open source product - let's get in touch](https://media.required.com/images/open-source-banner.png)](https://required.com/en/lets-get-in-touch/)
