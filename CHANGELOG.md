# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
* [@wearerequired/eslint-config](https://www.npmjs.com/package/@wearerequired/eslint-config) for linting JavaScript files.
* [@wearerequired/stylelint-config](https://www.npmjs.com/package/@wearerequired/stylelint-config) for linting (S)CSS files.

## [1.4.1] - 2020-05-18

### Changed
* Update slevomat/coding-standard from 6.3.3 to [6.3.5](https://github.com/slevomat/coding-standard/releases/tag/6.3.5).
* Update wp-coding-standards/wpcs from 2.2.1 to [2.3.0](https://github.com/wordpress/wordpress-coding-standards/releases/tag/2.3.0).

## [1.4.0] - 2020-05-04

### Changed
* Update slevomat/coding-standard from 6.2.0 to [6.3.3](https://github.com/slevomat/coding-standard/releases/tag/6.3.3).
* Disable `Generic.Commenting.DocComment.MissingShort` due to false-positives.
* Allow the use of `json_encode()` and filesystem functions.
* Allow `@global` and `@throws` annotations in PHPDoc.

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

[Unreleased]: https://github.com/wearerequired/coding-standards/compare/1.4.1...HEAD
[1.4.1]: https://github.com/wearerequired/coding-standards/compare/1.4.0...1.4.1
[1.4.0]: https://github.com/wearerequired/coding-standards/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/wearerequired/coding-standards/compare/1.2.1...1.3.0
[1.2.1]: https://github.com/wearerequired/coding-standards/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/wearerequired/coding-standards/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/wearerequired/coding-standards/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/wearerequired/coding-standards/compare/4c576a1...1.0.0
