(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[225],{

/***/ "./node_modules/prismjs/components/prism-latte.min.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-latte.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){t.languages.latte={comment:/^\{\*[\s\S]*/,ld:{pattern:/^\{(?:[=_]|\/?(?!\d|\w+\()\w+|)/,inside:{punctuation:/^\{\/?/,tag:{pattern:/.+/,alias:"important"}}},rd:{pattern:/\}$/,inside:{punctuation:/.+/}},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:t.languages.php}};var e=t.languages.extend("markup",{});t.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:t.languages.php}}}}}},e.tag),t.hooks.add("before-tokenize",function(a){if("latte"===a.language){t.languages["markup-templating"].buildPlaceholders(a,"latte",/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*[\s\S]*?\*\/)*?\}/g),a.grammar=e}}),t.hooks.add("after-tokenize",function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"latte")})}(Prism);

/***/ })

}]);