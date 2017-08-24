"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "cagd",
			"path": "cagd/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/cagd.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"cagd": "cagd"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const cagd = require( "./cagd.js" );
//: @end-server

//: @client:
const cagd = require( "./cagd.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "cagd", ( ) => {

	describe( "`cagd( 'hello', 'world', { } )`", ( ) => {
		it( "should contain hello property with a value of 'world'", ( ) => {

			let test = { };
			cagd( "hello", "world", test );

			assert.equal( test.hello, "world" );

		} );
	} );


	describe( "`Property descriptor configurable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let test = { };
			cagd( "hello", "world", test );
			let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

			assert.equal( descriptor.configurable, true );

		} );
	} );


	describe( "`Property descriptor enumerable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let test = { };
			cagd( "hello", "world", test );
			let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

			assert.equal( descriptor.enumerable, true );

		} );
	} );


	describe( "`Property descriptor writable`", ( ) => {
		it( "should be equal to false", ( ) => {

			let test = { };
			cagd( "hello", "world", test );
			let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

			assert.equal( descriptor.writable, false );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "cagd", ( ) => {

	describe( "`cagd( 'hello', 'world', { } )`", ( ) => {
		it( "should contain hello property with a value of 'world'", ( ) => {

			let test = { };
			cagd( "hello", "world", test );

			assert.equal( test.hello, "world" );

		} );
	} );


	describe( "`Property descriptor configurable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let test = { };
			cagd( "hello", "world", test );
			let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

			assert.equal( descriptor.configurable, true );

		} );
	} );


	describe( "`Property descriptor enumerable`", ( ) => {
		it( "should be equal to true", ( ) => {

			let test = { };
			cagd( "hello", "world", test );
			let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

			assert.equal( descriptor.enumerable, true );

		} );
	} );


	describe( "`Property descriptor writable`", ( ) => {
		it( "should be equal to false", ( ) => {

			let test = { };
			cagd( "hello", "world", test );
			let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

			assert.equal( descriptor.writable, false );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "cagd", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`cagd( 'hello', 'world', { } )`", ( ) => {
		it( "should contain hello property with a value of 'world'", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(
				function( ){
					let test = { };
					cagd( "hello", "world", test );
					return test.hello;
				}
			).value;

			assert.equal( result, "world" );

		} );
	} );


	describe( "`Property descriptor configurable`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(
				function( ){
					let test = { };
					cagd( "hello", "world", test );
					let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
					return descriptor.configurable;
				}
			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );


	describe( "`Property descriptor enumerable`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(
				function( ){
					let test = { };
					cagd( "hello", "world", test );
					let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
					return descriptor.enumerable;
				}
			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );


	describe( "`Property descriptor writable`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(
				function( ){
					let test = { };
					cagd( "hello", "world", test );
					let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
					return descriptor.writable;
				}
			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
