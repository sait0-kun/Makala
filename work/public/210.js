(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[210],{

/***/ "./node_modules/prismjs/components/prism-jsonp.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsonp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.jsonp = Prism.languages.extend('json', {
	'punctuation': /[{}[\]();,.]/
});

Prism.languages.insertBefore('jsonp', 'punctuation', {
	'function': /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/
});


/***/ })

}]);