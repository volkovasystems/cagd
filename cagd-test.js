const assert = require( "assert" );
const cagd = require( "./cagd.js" );

let test = { };
assert.deepEqual( cagd( "sample", 123, test ), { "sample": 123 } );

console.log( Object.getOwnPropertyDescriptor( test, "sample" ) );

console.log( "ok" );
