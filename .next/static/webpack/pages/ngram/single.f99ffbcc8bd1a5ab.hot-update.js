"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ngram/single",{

/***/ "./pages/ngram/single.jsx":
/*!********************************!*\
  !*** ./pages/ngram/single.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ single)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/esm/index.js\");\n// import useSWR from \"swr\"\n\nvar _s = $RefreshSig$();\n\n\nfunction single() {\n    _s();\n    // const {data, err} = useSWR('https://homestuck-1-5-352988256386.us-central1.run.app/api/available');\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"single.useEffect\": ()=>{\n            fetch('https://homestuck-1-5-352988256386.us-central1.run.app/api/available').then({\n                \"single.useEffect\": (res)=>res.json()\n            }[\"single.useEffect\"]).then({\n                \"single.useEffect\": (data)=>{\n                    setData(data);\n                }\n            }[\"single.useEffect\"]);\n        }\n    }[\"single.useEffect\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: [\n                \"WASD:\",\n                data,\n                console.log(data)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vriska\\\\Downloads\\\\homestuck-react\\\\pages\\\\ngram\\\\single.jsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(single, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZ3JhbS9zaW5nbGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLDJCQUEyQjs7O0FBQ2lCO0FBQ0Q7QUFDNUIsU0FBU0c7O0lBQ3BCLHNHQUFzRztJQUN0RyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakNELGdEQUFTQTs0QkFBQztZQUNOTSxNQUFNLHdFQUNOQyxJQUFJO29DQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7bUNBQ3RCRixJQUFJO29DQUFDLENBQUNIO29CQUNGQyxRQUFRRDtnQkFFWjs7UUFDSjs7SUFDQSxxQkFDSTtrQkFHQSw0RUFBQ0YsdUZBQVNBOztnQkFBQztnQkFFTkU7Z0JBQ0FNLFFBQVFDLEdBQUcsQ0FBQ1A7Ozs7Ozs7O0FBS3pCO0dBdkJ3QkQiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVnJpc2thXFxEb3dubG9hZHNcXGhvbWVzdHVjay1yZWFjdFxccGFnZXNcXG5ncmFtXFxzaW5nbGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW5nbGUoKXtcclxuICAgIC8vIGNvbnN0IHtkYXRhLCBlcnJ9ID0gdXNlU1dSKCdodHRwczovL2hvbWVzdHVjay0xLTUtMzUyOTg4MjU2Mzg2LnVzLWNlbnRyYWwxLnJ1bi5hcHAvYXBpL2F2YWlsYWJsZScpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9ob21lc3R1Y2stMS01LTM1Mjk4ODI1NjM4Ni51cy1jZW50cmFsMS5ydW4uYXBwL2FwaS9hdmFpbGFibGUnKS5cclxuICAgICAgICB0aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLlxyXG4gICAgICAgIHRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICBXQVNEOlxyXG4gICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsInNpbmdsZSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ngram/single.jsx\n"));

/***/ })

});