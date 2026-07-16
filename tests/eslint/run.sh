#!/usr/bin/env bash
#
# Smoke test for @wearerequired/eslint-config: the config loads, accepts
# conforming code and rejects violations.
set -u
cd "$(dirname "$0")/../.."
# shellcheck source=tests/lib/assert.sh
. tests/lib/assert.sh

eslint="./node_modules/.bin/eslint"
config="packages/eslint-config/index.js"

echo "→ eslint"
expect_clean "valid.js clean" "$eslint" --config "$config" tests/eslint/valid.js
expect_rule "invalid.js flagged by prettier/prettier" "prettier/prettier" \
	"$eslint" --config "$config" tests/eslint/invalid.js

exit "$status"
