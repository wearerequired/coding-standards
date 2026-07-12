#!/usr/bin/env bash
#
# Smoke test for @wearerequired/stylelint-config (default + SCSS presets).
set -u
cd "$(dirname "$0")/../.."
# shellcheck source=tests/lib/assert.sh
. tests/lib/assert.sh

stylelint="./node_modules/.bin/stylelint"
css="packages/stylelint-config/index.js"
scss="packages/stylelint-config/scss.js"

echo "→ stylelint (default preset)"
expect_clean "valid.css clean" "$stylelint" --config "$css" tests/stylelint/valid.css
expect_rule "invalid.css flagged by selector-class-pattern" "selector-class-pattern" \
	"$stylelint" --config "$css" tests/stylelint/invalid.css

echo "→ stylelint (SCSS preset)"
expect_clean "valid.scss clean" "$stylelint" --config "$scss" tests/stylelint/valid.scss
expect_rule "invalid.scss flagged by scss/selector-no-redundant-nesting-selector" \
	"scss/selector-no-redundant-nesting-selector" \
	"$stylelint" --config "$scss" tests/stylelint/invalid.scss

exit "$status"
