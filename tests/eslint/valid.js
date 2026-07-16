/**
 * Fixture: valid JavaScript for @wearerequired/eslint-config.
 *
 * Proves the custom rules pass on conforming code:
 * - importing from `@wordpress/*` does not trigger
 *   `import/no-extraneous-dependencies` thanks to the `import/core-modules`
 *   allowlist;
 * - tabs, single quotes, `parenSpacing` and `printWidth: 100` satisfy the
 *   custom Prettier config.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Registers a filter.
 *
 * @param {string} hookName  The hook name.
 * @param {string} namespace The namespace.
 * @return {void}
 */
export function registerFilter( hookName, namespace ) {
	addFilter( hookName, namespace, ( value ) => value );
}
