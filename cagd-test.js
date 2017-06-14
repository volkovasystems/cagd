const assert = require( "assert" );
const cagd = require( "./cagd.js" );

let test = {};
cagd( "hello", "world", test );

let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
assert.equal( test.hello, "world", "should have value 'hello'" );
assert.equal( descriptor.configurable, true, "should be true" );
assert.equal( descriptor.enumerable, true, "should be true" );
assert.equal( descriptor.writable, false, "should be false" );

console.log( "ok" );
