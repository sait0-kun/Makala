(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[208],{

/***/ "./node_modules/prismjs/components/prism-json5.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json5.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/

	Prism.languages.json5 = Prism.languages.extend('json', {
		'property': [
			{
				pattern: RegExp(string.source + '(?=\\s*:)'),
				greedy: true
			},
			{
				pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,
				alias: 'unquoted'
			}
		],
		'string': {
			pattern: string,
			greedy: true
		},
		'number': /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+\b)?/
	});

}(Prism));


/***/ })

}]);