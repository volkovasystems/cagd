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
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var cagd = require("./cagd.support.js");
//: @end-client






//: @client:

describe("cagd", function () {

	describe("`cagd( 'hello', 'world', { } )`", function () {
		it("should contain hello property with a value of 'world'", function () {

			var test = {};
			cagd("hello", "world", test);

			assert.equal(test.hello, "world");

		});
	});


	describe("`Property descriptor configurable`", function () {
		it("should be equal to true", function () {

			var test = {};
			cagd("hello", "world", test);
			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");

			assert.equal(descriptor.configurable, true);

		});
	});


	describe("`Property descriptor enumerable`", function () {
		it("should be equal to true", function () {

			var test = {};
			cagd("hello", "world", test);
			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");

			assert.equal(descriptor.enumerable, true);

		});
	});


	describe("`Property descriptor writable`", function () {
		it("should be equal to false", function () {

			var test = {};
			cagd("hello", "world", test);
			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");

			assert.equal(descriptor.writable, false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY2FnZCIsImRlc2NyaWJlIiwiaXQiLCJ0ZXN0IiwiZXF1YWwiLCJoZWxsbyIsImRlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSx1REFBSixFQUE2RCxZQUFPOztBQUVuRSxPQUFJQyxPQUFPLEVBQVg7QUFDQUgsUUFBTSxPQUFOLEVBQWUsT0FBZixFQUF3QkcsSUFBeEI7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0UsS0FBbkIsRUFBMEIsT0FBMUI7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7OztBQVlBSixVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckMsT0FBSUMsT0FBTyxFQUFYO0FBQ0FILFFBQU0sT0FBTixFQUFlLE9BQWYsRUFBd0JHLElBQXhCO0FBQ0EsT0FBSUcsYUFBYSx3Q0FBaUNILElBQWpDLEVBQXVDLE9BQXZDLENBQWpCOztBQUVBTCxVQUFPTSxLQUFQLENBQWNFLFdBQVdDLFlBQXpCLEVBQXVDLElBQXZDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQU4sVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLE9BQU8sRUFBWDtBQUNBSCxRQUFNLE9BQU4sRUFBZSxPQUFmLEVBQXdCRyxJQUF4QjtBQUNBLE9BQUlHLGFBQWEsd0NBQWlDSCxJQUFqQyxFQUF1QyxPQUF2QyxDQUFqQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRSxXQUFXRSxVQUF6QixFQUFxQyxJQUFyQzs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7O0FBYUFQLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREMsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QyxPQUFJQyxPQUFPLEVBQVg7QUFDQUgsUUFBTSxPQUFOLEVBQWUsT0FBZixFQUF3QkcsSUFBeEI7QUFDQSxPQUFJRyxhQUFhLHdDQUFpQ0gsSUFBakMsRUFBdUMsT0FBdkMsQ0FBakI7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0UsV0FBV0csUUFBekIsRUFBbUMsS0FBbkM7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7O0FBWUEsQ0FwREQ7O0FBc0RBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY2FnZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiY2FnZC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2FnZC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiY2FnZFwiOiBcImNhZ2RcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGNhZ2QgPSByZXF1aXJlKCBcIi4vY2FnZC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImNhZ2RcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgY2FnZCggJ2hlbGxvJywgJ3dvcmxkJywgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gaGVsbG8gcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mICd3b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRjYWdkKCBcImhlbGxvXCIsIFwid29ybGRcIiwgdGVzdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3QuaGVsbG8sIFwid29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciBjb25maWd1cmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRjYWdkKCBcImhlbGxvXCIsIFwid29ybGRcIiwgdGVzdCApO1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0ZXN0LCBcImhlbGxvXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciBlbnVtZXJhYmxlYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0Y2FnZCggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGVzdCwgXCJoZWxsb1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5lbnVtZXJhYmxlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIHdyaXRhYmxlYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgdGVzdCA9IHsgfTtcblx0XHRcdGNhZ2QoIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCB0ZXN0ICk7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwiaGVsbG9cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iud3JpdGFibGUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
