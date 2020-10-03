# required Coding Standards

The required coding standards represent the best practices for enabling a consistent code style across the team. The standards do not only contain stylistic rules. They are also defined to prevent potential security vulnerabilities or to leverage more modern syntax for enhanced performance.  
This project is inspired by the [Human Made Coding Standards](https://github.com/humanmade/coding-standards) project.

For the JavaScript coding standard head over to [@wearerequired/eslint-config](packages/eslint-config).  
For the (S)CSS coding standard head over to [@wearerequired/stylelint-config](packages/stylelint-config).

For team members: Please contact our internal handbook if you need help with [setting up the coding standards in your environment](https://handbook.required.com/development/coding-standards/).

## required PHP Coding Standard

### Setup

1. `composer require --dev dealerdirect/phpcodesniffer-composer-installer wearerequired/coding-standards`
2. Run the standards checks using the following command:

```
vendor/bin/phpcs .
```

The final `.` here specifies the files you want to test; this is typically the current directory (`.`), but you can also selectively check files or directories by specifying them instead.

You can add this to your Travis CI configuration as a test:

```yaml
script:
  - phpunit
  - vendor/bin/phpcs .
```

**Bonus**: To make things easier, you can add something as follows to your `composer.json` file:

```json
{
	"scripts": {
		"format": "vendor/bin/phpcbf --report-summary --report-source .",
		"lint": "vendor/bin/phpcs --report-summary --report-source ."
	}
}
```

After that, run `composer lint` to run the standards checks and `composer format` to try auto-fixing of errors and warnings.

#### Excluding Files

This standard includes special support for a `.phpcsignore` file (in the future, this should be [built into phpcs itself](https://github.com/squizlabs/PHP_CodeSniffer/issues/1884)). You can place a `.phpcsignore` file in your root directory (wherever you're going to run `phpcs` from).

The format of this file is similar to `.gitignore` and similar files: one pattern per line, comment lines should start with a `#`, and whitespace-only lines are ignored:

```
# Exclude our tests directory.
tests/

# Exclude any file ending with ".inc"
*\.inc
```

Note that the patterns should match [the PHP_CodeSniffer style](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage#ignoring-files-and-folders): `*` is translated to `.*` for convenience, but all other characters work like a regular expression.

Patterns are relative to the directory that the `.phpcsignore` file lives in. On load, they are translated to absolute patterns: e.g. `*/tests/*` in `/your/dir/.phpcsignore` will become `/your/dir/.*/tests/.*` as a regular expression. **This differs from the regular PHP_CodeSniffer practice.**

#### Advanced/Extending

You can create your own custom standard file (e.g. `phpcs.xml.dist`) if you want to extend these coding standards:

```xml
<?xml version="1.0"?>
<ruleset name="Project Standard">
	<description>Project specific coding standard.</description>

	<!-- Files or directories to check -->
	<file>.</file>

	<!-- Use required Coding Standards -->
	<rule ref="Required"/>

	<!-- Your custom rules go here -->
</ruleset>
```

You can then reference this file when running phpcs:

```
vendor/bin/phpcs
```

An example for a custom rule is to validate the text domain:

```xml
<rule ref="WordPress.WP.I18n">
	<properties>
		<property name="text_domain" type="array">
			<element value="plugin-name"/>
		</property>
	</properties>
</rule>
```

or to ensure the correct prefix is used:

```xml
<rule ref="WordPress.NamingConventions.PrefixAllGlobals">
	<properties>
		<property name="prefixes" type="array">
			<element value="Required\PluginName"/>
			<element value="plugin_name"/>
		</property>
	</properties>
</rule>
```

If the project is a WordPress theme you have to set the following rule:

```xml
<rule ref="WordPress.Files.FileName">
	<properties>
		<property name="is_theme" value="true" />
	</properties>
</rule>
```

### Included Checks

The phpcs standard is based upon the `WordPress-Core`, `WordPress-Docs`, and `WordPress-Extra` rules from the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards). It also uses [VariableAnalysis](https://github.com/sirbrillig/phpcs-variable-analysis) for problematic variable use and some `SlevomatCodingStandard` rules from the [Slevomat Coding Standard](https://github.com/slevomat/coding-standard). Most of the sniffs are also providing automatic errors fixing for `phpcbf`.


## EditorConfig

The [EditorConfig](https://editorconfig.org/) standard helps developers define and maintain consistent coding styles between different editors and IDEs. This way it's easier to follow the given coding standards in a project, without the need to fiddle with IDE settings.

The recommended `.editorconfig` file for a WordPress project looks like this:

```editorconfig
root = true

[*]
charset = utf-8
indent_style = tab
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[{*.json,*.yml}]
indent_style = space
indent_size = 2
```
