(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[352],{

/***/ "./node_modules/prismjs/components/prism-robotframework.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-robotframework.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){var r={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},o={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function n(t,n){var e={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var a in n)e[a]=n[a];return e.tag={pattern:/([\r\n](?:  |\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},e.variable=o,e.comment=r,{pattern:RegExp("^ ?\\*{3}[ \t]*<name>[ \t]*\\*{3}(?:.|[\r\n](?!\\*{3}))*".replace(/<name>/g,function(){return t}),"im"),alias:"section",inside:e}}var e={pattern:/(\[Documentation\](?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},a={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:o}},i={pattern:/([\r\n](?:  |\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:o}};t.languages.robotframework={settings:n("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:n("Variables"),"test-cases":n("Test Cases",{"test-name":a,documentation:e,property:i}),keywords:n("Keywords",{"keyword-name":a,documentation:e,property:i}),tasks:n("Tasks",{"task-name":a,documentation:e,property:i}),comment:r},t.languages.robot=t.languages.robotframework}(Prism);

/***/ })

}]);