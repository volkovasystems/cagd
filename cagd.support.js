"use strict";var _defineProperty = require("babel-runtime/core-js/object/define-property");var _defineProperty2 = _interopRequireDefault(_defineProperty);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                                                        	@module-license:
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
                                                                                                                                                                                                                                                        	@end-module-license
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        	@module-configuration:
                                                                                                                                                                                                                                                        		{
                                                                                                                                                                                                                                                        			"package": "cagd",
                                                                                                                                                                                                                                                        			"path": "cagd/cagd.js",
                                                                                                                                                                                                                                                        			"file": "cagd.js",
                                                                                                                                                                                                                                                        			"module": "cagd",
                                                                                                                                                                                                                                                        			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                                                        			"email": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                                                        			"repository": "https://github.com/volkovasystems/cagd.git",
                                                                                                                                                                                                                                                        			"test": "cagd-test.js",
                                                                                                                                                                                                                                                        			"global": true
                                                                                                                                                                                                                                                        		}
                                                                                                                                                                                                                                                        	@end-module-configuration
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        	@module-documentation:
                                                                                                                                                                                                                                                        		Caged property to entity.
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		Property can be a number or string.
                                                                                                                                                                                                                                                        		Property value will be configurable, enumerable and non-writable.
                                                                                                                                                                                                                                                        		This will try to override existing property.
                                                                                                                                                                                                                                                        	@end-module-documentation
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        	@include:
                                                                                                                                                                                                                                                        		{
                                                                                                                                                                                                                                                        			"falzy": "falzy",
                                                                                                                                                                                                                                                        			"protype": "protype",
                                                                                                                                                                                                                                                        			"wichevr": "wichevr",
                                                                                                                                                                                                                                                        			"zelf": "zelf"
                                                                                                                                                                                                                                                        		}
                                                                                                                                                                                                                                                        	@end-include
                                                                                                                                                                                                                                                        */

var falzy = require("falzy");
var protype = require("protype");
var wichevr = require("wichevr");
var zelf = require("zelf");

var cagd = function cagd(property, value, entity) {
	/*;
                                                   	@meta-configuration:
                                                   		{
                                                   			"property:required": [
                                                   				"number",
                                                   				"string"
                                                   			],
                                                   			"value:required": "*",
                                                   			"entity": "*"
                                                   		}
                                                   	@end-meta-configuration
                                                   */

	if (falzy(property) || !protype(property, NUMBER + STRING)) {
		throw new Error("invalid property");
	}

	entity = wichevr(entity, zelf(this));

	try {
		(0, _defineProperty2.default)(entity, property, {
			"value": value,

			"configurable": true,
			"enumerable": true,
			"writable": false });


	} catch (error) {}

	return entity;
};

module.exports = cagd;

//# sourceMappingURL=cagd.support.js.map