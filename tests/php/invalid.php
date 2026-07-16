<?php
/**
 * Example file with violations.
 *
 * @author Someone
 */

namespace Required\Test;

function bad_function( $value ) {
	$data = array( 1, 2, 3 );
	return $data;
}
