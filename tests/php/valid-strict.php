<?php
/**
 * Example file that conforms to the Required-Strict standard.
 */

declare(strict_types=1);

namespace Required\Test;

/**
 * Multiplies two integers.
 *
 * @param int $a First factor.
 * @param int $b Second factor.
 * @return int Product of the two factors.
 */
function multiply( int $a, int $b ): int {
	return $a * $b;
}
