/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution.
*
* @module @stdlib/stats-base-dists-pareto-type1-logpdf
*
* @example
* var logpdf = require( '@stdlib/stats-base-dists-pareto-type1-logpdf' );
*
* var y = logpdf( 4.0, 1.0, 1.0 );
* // returns ~-2.773
*
* y = logpdf( 20.0, 1.0, 10.0 );
* // returns ~-3.689
*
* y = logpdf( 7.0, 2.0, 6.0 );
* // returns ~-1.561
*
* var mylogpdf = logpdf.factory( 0.5, 0.5 );
*
* y = mylogpdf( 0.8 );
* // returns ~-0.705
*
* y = mylogpdf( 2.0 );
* // returns ~-2.079
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
