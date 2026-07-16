#!/usr/bin/env bash
#
# Smoke test for the Required and Required-Strict PHPCS standards. Verifies the
# rulesets load (no broken sniff references after dependency updates) and that
# the custom rules accept/reject the fixtures.
set -u
cd "$(dirname "$0")/../.."
# shellcheck source=tests/lib/assert.sh
. tests/lib/assert.sh

# PHPCompatibility needs a testVersion; without it PHP 8.1+ triggers a trim(null)
# deprecation in php-compatibility 9.x. This is a harness concern, so it is set
# here rather than baked into a fixture ruleset. --no-cache avoids the Required
# ruleset's own <arg name="cache"/> reusing stale results between runs.
# -s shows sniff codes so expect_rule can pin a specific sniff.
phpcs="vendor/bin/phpcs"
args=(-s --runtime-set testVersion 7.4- --no-cache)

echo "→ Required"
expect_clean "valid.php clean" "$phpcs" --standard=Required "${args[@]}" tests/php/valid.php
expect_rule "invalid.php flagged by short-array sniff" "Generic.Arrays.DisallowLongArraySyntax" \
	"$phpcs" --standard=Required "${args[@]}" tests/php/invalid.php

echo "→ Required-Strict"
expect_clean "valid-strict.php clean" "$phpcs" --standard=Required-Strict "${args[@]}" tests/php/valid-strict.php
expect_rule "valid.php flagged by DeclareStrictTypes" "SlevomatCodingStandard.TypeHints.DeclareStrictTypes" \
	"$phpcs" --standard=Required-Strict "${args[@]}" tests/php/valid.php

exit "$status"
