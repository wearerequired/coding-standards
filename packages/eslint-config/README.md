# required JavaScript Coding Standards

required coding standards for JavaScript, inspired by the [Human Made Coding Standards](https://github.com/humanmade/coding-standards) project.

## Installation

This package is an ESLint shareable configuration and requires `eslint` and `@wordpress/eslint-plugin` to be installed. To install this config and the peerDependencies run:

```bash
	npx install-peerdeps --dev @wearerequired/eslint-config@latest
```

## Usage

To opt-in to the default configuration, extend your own project's `.eslintrc` file:

```json
{
	"extends": [ "@wearerequired/eslint-config" ]
}
```
