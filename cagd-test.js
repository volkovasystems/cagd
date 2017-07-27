const assert = require( "assert" );
const cagd = require( "./cagd.js" );

let test = { };
cagd( "hello", "world", test );

let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

assert.equal( test.hello, "world", "should be equal to 'hello'" );

assert.equal( descriptor.configurable, true, "should be equal to true" );

assert.equal( descriptor.enumerable, true, "should be equal to true" );

assert.equal( descriptor.writable, false, "should be equal to false" );

console.log( "ok" );
