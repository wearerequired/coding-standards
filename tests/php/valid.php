<?php
/**
 * Example file that conforms to the Required standard.
 */

namespace Required\Test;

/**
 * Sums a list of integers.
 *
 * @param int[] $numbers Numbers to add up.
 * @return int Sum of the given numbers.
 */
function sum_numbers( array $numbers ): int {
	return \array_sum( $numbers );
}
