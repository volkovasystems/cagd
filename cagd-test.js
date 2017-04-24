
const cagd = require( "./cagd.js" );

let test = { };
cagd( "sample", 123, test );

console.log( Object.getOwnPropertyDescriptor( test, "sample" ) );
