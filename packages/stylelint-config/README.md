# required (S)CSS Coding Standard

required coding standard for (S)CSS, based on the rules provided by [`@wordpress/stylelint-config`](https://developer.wordpress.org/block-editor/packages/packages-stylelint-config/).

## Installation

This package is a stylelint shareable configuration. Install it together with its peer dependencies:

```bash
npm install --save-dev @wearerequired/stylelint-config stylelint @wordpress/stylelint-config stylelint-scss
```

> npm 7+ installs peer dependencies automatically, so listing them is optional
> for a working install — but installing them explicitly keeps them pinned in
> your `package.json` (and visible to editors/CI).

Requires stylelint 16 and `@wordpress/stylelint-config` 23 or newer.

> **Migrating from v6:** stylelint 16 moved its stylistic (formatting) rules into
> [`@stylistic/stylelint-plugin`](https://github.com/stylelint-stylistic/stylelint-stylistic).
> This config keeps enforcing formatting by extending
> `@wordpress/stylelint-config/stylistic`, so those rules now carry the
> `@stylistic/` prefix. Update `stylelint` to `^16.8.2`,
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
