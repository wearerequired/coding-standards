#!/usr/bin/env bash
#
# Shared assertions for the coding-standard smoke tests. Source this file, then
# use expect_clean / expect_rule with an arbitrary linter command. Any mismatch
# sets `status=1` and prints the linter output; callers end with `exit "$status"`.

status=0

# Indent captured linter output under the failing assertion.
_dump() {
	printf '%s\n' "$1" | sed 's/^/      /'
}

# expect_clean <label> <command...> — the command must exit 0 (no violations).
expect_clean() {
	local label="$1"
	shift
	local output
	if output=$( "$@" 2>&1 ); then
		echo "  ✓ $label"
	else
		echo "  ✗ $label — expected no violations"
		_dump "$output"
		status=1
	fi
}

# expect_rule <label> <rule> <command...> — the command must exit non-zero AND
# report <rule>, so a specific rule is pinned rather than "some violation".
# Guards against a dependency bump silently dropping one custom rule while the
# fixture still trips others.
expect_rule() {
	local label="$1" rule="$2"
	shift 2
	local output
	output=$( "$@" 2>&1 )
	if [ $? -eq 0 ]; then
		echo "  ✗ $label — expected violations, got none"
		status=1
	elif printf '%s' "$output" | grep -qF "$rule"; then
		echo "  ✓ $label ($rule)"
	else
		echo "  ✗ $label — expected rule '$rule' not reported"
		_dump "$output"
		status=1
	fi
}
