(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[340],{

/***/ "./node_modules/prismjs/components/prism-reason.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-reason.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.reason=Prism.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/}),Prism.languages.insertBefore("reason","class-name",{character:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,alias:"string"},constructor:{pattern:/\b[A-Z]\w*\b(?!\s*\.)/,alias:"variable"},label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete Prism.languages.reason.function;

/***/ })

}]);