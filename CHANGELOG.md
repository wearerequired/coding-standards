# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
* PHP: Remove `minimum_supported_wp_version` and `testVersion`.

## [4.0.0] - 2022-12-08

### Changed
* JS: Increase minimum peer dependency of `@wordpress/eslint-plugin` from 10 to 13.
* JS: Increase minimum peer dependency of `prettier` to 2.6.
* CSS: Increase minimum peer dependency of `@wordpress/stylelint-config` to 21.
* PHP: Increase minimum PHP requirement to 7.2.
* PHP: Update slevomat/coding-standard from 7.0.18 to [8.6.4](https://github.com/slevomat/coding-standard/releases/tag/8.6.4).
* PHP: Update phpcompatibility/phpcompatibility-wp from 2.1.3 to [2.1.4](https://github.com/PHPCompatibility/PHPCompatibilityWP/releases/tag/2.1.4).
* PHP: Update sirbrillig/phpcs-variable-analysis from 2.11.2 to [2.11.9](https://github.com/sirbrillig/phpcs-variable-analysis/releases/tag/v2.11.9).


## [3.0.0] - 2022-02-11

### Added
* CSS: Add SCSS preset for stylelint-config.

### Changed
* PHP: Update slevomat/coding-standard from 7.0.12 to [7.0.18](https://github.com/slevomat/coding-standard/releases/tag/7.0.18).
* PHP: Update phpcompatibility/phpcompatibility-wp from 2.1.1 to [2.1.3](https://github.com/PHPCompatibility/PHPCompatibilityWP/releases/tag/2.1.3).
* PHP: Allow to install on PHP 8.
* JS: Increase minimum peer dependency of `eslint` from 7 to 8.
* JS: Increase minimum peer dependency of `@wordpress/eslint-plugin` from 8/9 to 10.
* CSS: Increase minimum peer dependency of `stylelint` from 13 to 14.
* CSS: Increase minimum peer dependency of `@wordpress/stylelint-config` from 19 to 20.

### Fixed
* CSS: Correctly set rules for `function-url-quotes` and `at-rule-no-unknown`.

## [2.2.0] - 2021-07-15

### Changed
* PHP: Update slevomat/coding-standard from 6.4.1 to [7.0.12](https://github.com/slevomat/coding-standard/releases/tag/7.0.12).
* PHP: Update sirbrillig/phpcs-variable-analysis from 2.11.0 to [2.11.2](https://github.com/sirbrillig/phpcs-variable-analysis/releases/tag/v2.11.2).

## [2.1.0] - 2021-04-13

### Changed
* JS: Allow `@wordpress/eslint-plugin` v9 as dependency.
* PHP: Update sirbrillig/phpcs-variable-analysis from 2.10.2 to [2.11.0](https://github.com/sirbrillig/phpcs-variable-analysis/releases/tag/v2.11.0).

## [2.0.0] - 2021-02-26

### Changed
* PHP: Update sirbrillig/phpcs-variable-analysis from 2.10.0 to [2.10.2](https://github.com/sirbrillig/phpcs-variable-analysis/releases/tag/v2.10.2).
* PHP: Increase `testVersion` for PHP Compatibility check to 7.4.
* PHP: Increase `minimum_supported_wp_version` to 5.3.
* CSS: Replace `stylelint-config-wordpress` with `@wordpress/stylelint-config`.
* JS: Allow `@wordpress/eslint-plugin` v8 as dependency, remove v6.

### Added
* PHP Rule `SlevomatCodingStandard.TypeHints.ReturnTypeHint`: Require type hints for return values.
* PHP Rule `SlevomatCodingStandard.TypeHints.ParameterTypeHint`: Require type hints for parameters.
* PHP Rule `SlevomatCodingStandard.TypeHints.UselessConstantTypeHint`: Disallow useless `@var` annotations.
* PHP Rule `SlevomatCodingStandard.Classes.ClassConstantVisibility`: Require declaring the visibility of class constants.
* PHP Rule `SlevomatCodingStandard.Functions.RequireArrowFunction`: Require short closures/arrow functions if possible.
* PHP Rule `SlevomatCodingStandard.Functions.ArrowFunctionDeclaration`: Require specific style of arrow functions.

## [1.6.0] - 2020-12-12

### Changed
* Update slevomat/coding-standard from 6.3.8 to [6.4.1](https://github.com/slevomat/coding-standard/releases/tag/6.4.1).
* Update sirbrillig/phpcs-variable-analysis from 2.8.2 to [2.10.0](https://github.com/sirbrillig/phpcs-variable-analysis/releases/tag/v2.10.0) for PHP 7.4 support.
* PHP: Add `@subpackage` to list of disallowed annotations.
* CSS: Use renamed `declaration-property-unit-allowed-list` rule to avoid a deprecation warning. [[#103](https://github.com/wearerequired/coding-standards/issues/103)]

## [1.5.1] - 2020-06-15

### Changed
* Update sirbrillig/phpcs-variable-analysis from 2.8.1 to [2.8.2](https://github.com/sirbrillig/phpcs-variable-analysis/releases/tag/v2.8.2).
* Update slevomat/coding-standard from 6.3.7 to [6.3.8](https://github.com/slevomat/coding-standard/releases/tag/6.3.8).
* CSS: Always require quotes in `url()` unless empty.
* CSS: Allow at-rules used by postcss-mixins.
* Support `eslint` peer dependency up to 7.x.
* Support `@wordpress/eslint-plugin` peer dependency up to 7.x.

## [1.5.0] - 2020-05-26

### Added
* [@wearerequired/eslint-config](https://www.npmjs.com/package/@wearerequired/eslint-config) for linting JavaScript files.
* [@wearerequired/stylelint-config](https://www.npmjs.com/package/@wearerequired/stylelint-config) for linting (S)CSS files.

### Changed
* Update slevomat/coding-standard from 6.3.5 to [6.3.7](https://github.com/slevomat/coding-standard/releases/tag/6.3.7).

## [1.4.1] - 2020-05-18

### Changed
* Update slevomat/coding-standard from 6.3.3 to [6.3.5](https://github.com/slevomat/coding-standard/releases/tag/6.3.5).
* Update wp-coding-standards/wpcs from 2.2.1 to [2.3.0](https://github.com/wordpress/wordpress-coding-standards/releases/tag/2.3.0).

## [1.4.0] - 2020-05-04

### Changed
* Update slevomat/coding-standard from 6.2.0 to [6.3.3](https://github.com/slevomat/coding-standard/releases/tag/6.3.3).
* PHP: Disable `Generic.Commenting.DocComment.MissingShort` due to false-positives.
* PHP: Allow the use of `json_encode()` and filesystem functions.
* PHP: Allow `@global` and `@throws` annotations in PHPDoc.

## [1.3.0] - 2020-04-01

### Added
* Re-enable rules `SlevomatCodingStandard.Namespaces.FullyQualifiedExceptions` and `SlevomatCodingStandard.Namespaces.UnusedUses` rules.
* Rule `SlevomatCodingStandard.Commenting.DocCommentSpacing`: Require specific order of PHPDoc annotations with empty newline between specific groups.
* Rule `SlevomatCodingStandard.Namespaces.FullyQualifiedGlobalFunctions`  with `includeSpecialFunctions` set: Require root namespace for special compiled PHP functions to benefit of  performance optimizations by the Zend engine.

### Changed
* Update slevomat/coding-standard from 6.1.4 to [6.2.0](https://github.com/slevomat/coding-standard/releases/tag/6.2.0).

## [1.2.1] - 2020-03-20

### Removed
* Disable rule `SlevomatCodingStandard.Namespaces.FullyQualifiedExceptions` due to performance issues.
* Disable rule `SlevomatCodingStandard.Namespaces.UnusedUses` due to performance issues.

## [1.2.0] - 2020-02-27

### Added
* Rule `SlevomatCodingStandard.Namespaces.UnusedUses`: Disallow unused namespace imports.
* Rule `SlevomatCodingStandard.Commenting.ForbiddenAnnotations`: Disallow annotations for `@package`, `@author`, `@created`, `@copyright`, `@version`, `@access`, and `@license`.
* Rule `SlevomatCodingStandard.ControlStructures.RequireNullCoalesceOperator`: Require use of null coalesce operator (`??`) when possible.
* Rule `SlevomatCodingStandard.Classes.ModernClassNameReference`: Class names should be referenced via `::class` constant when possible.
* Rule `SlevomatCodingStandard.Namespaces.FullyQualifiedExceptions`: References to types named Exception or ending with Exception/Error must be referenced via a fully qualified name.
* Rule `SlevomatCodingStandard.TypeHints.LongTypeHints`: Use shorthand scalar typehint variants in phpDocs.
* Set PHP_CodeSniffer to cache results between runs.

### Changed
* Update slevomat/coding-standard from 5.0.4 to [6.1.4](https://github.com/slevomat/coding-standard/releases/tag/6.1.4).
* Update wp-coding-standards/wpcs from 2.2.0 to [2.2.1](https://github.com/WordPress/WordPress-Coding-Standards/releases/tag/2.2.1).
* Allow use of shorthand ternary operator.

## [1.1.0] - 2020-01-02

### Changed
* Updated readme to mention all included checks.
* Declare PHP 7.1 requirement.
* Allow short array syntax.
* Update and use exact versions for requirements.
  * phpcompatibility/phpcompatibility-wp: 2.1.0
  * sirbrillig/phpcs-variable-analysis: 2.8.0
  * slevomat/coding-standard: 5.0.4
  * wp-coding-standards/wpcs: 2.2.0

## [1.0.0] - 2019-03-15

### Added
* [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) for adopting default coding standards of WordPress.
* [VariableAnalysis](https://github.com/sirbrillig/phpcs-variable-analysis) for problematic variable use.
* [Slevomat Coding Standard](https://github.com/slevomat/coding-standard) for PHP >=7 development.

[Unreleased]: https://github.com/wearerequired/coding-standards/compare/4.0.0...HEAD
[4.0.0]: https://github.com/wearerequired/coding-standards/compare/3.0.0...4.0.0
[3.0.0]: https://github.com/wearerequired/coding-standards/compare/2.2.0...3.0.0
[2.2.0]: https://github.com/wearerequired/coding-standards/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/wearerequired/coding-standards/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/wearerequired/coding-standards/compare/1.6.0...2.0.0
[1.6.0]: https://github.com/wearerequired/coding-standards/compare/1.5.1...1.6.0
[1.5.1]: https://github.com/wearerequired/coding-standards/compare/1.5.0...1.5.1
[1.5.0]: https://github.com/wearerequired/coding-standards/compare/1.4.1...1.5.0
[1.4.1]: https://github.com/wearerequired/coding-standards/compare/1.4.0...1.4.1
[1.4.0]: https://github.com/wearerequired/coding-standards/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/wearerequired/coding-standards/compare/1.2.1...1.3.0
[1.2.1]: https://github.com/wearerequired/coding-standards/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/wearerequired/coding-standards/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/wearerequired/coding-standards/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/wearerequired/coding-standards/compare/4c576a1...1.0.0
