"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ssg-info/ssg-list",{

/***/ "./src/pages/ssg-info/ssg-list.tsx":
/*!*****************************************!*\
  !*** ./src/pages/ssg-info/ssg-list.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Simple; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_simple_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/simple.module.css */ \"./src/styles/simple.module.css\");\n/* harmony import */ var _styles_simple_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_simple_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSG = true;\nfunction Simple(param) {\n    var data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"공지사항\"\n                }, void 0, false, {\n                    fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_simple_module_css__WEBPACK_IMPORTED_MODULE_3___default().simpleLayout),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"공지사항 리스트\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: data && data.map(function(param) {\n                            var key = param.key, date = param.date, title = param.title;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/ssg-info/\".concat(key),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_simple_module_css__WEBPACK_IMPORTED_MODULE_3___default().listLayout),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: [\n                                            title,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 19\n                                            }, _this),\n                                            key,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            }, _this),\n                                            date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 21\n                                }, _this)\n                            }, key, false, {\n                                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"홈으로 돌아가기\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 30\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Simple;\nvar _c;\n$RefreshReg$(_c, \"Simple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3NnLWluZm8vc3NnLWxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNBO0FBR21COztBQVFqQyxTQUFTRyxNQUFNLENBQUUsS0FBc0QsRUFBQztRQUF2RCxJQUFLLEdBQUwsS0FBc0QsQ0FBckRDLElBQUk7O0lBQ2pDLHFCQUNJOzswQkFDSSw4REFBQ0osa0RBQUk7MEJBQ0QsNEVBQUNLLE9BQUs7OEJBQUMsTUFBSTs7Ozs7d0JBQVE7Ozs7O29CQUNoQjswQkFDUCw4REFBQ0MsU0FBTztnQkFBQ0MsU0FBUyxFQUFFTCwrRUFBbUI7O2tDQUN2Qyw4REFBQ08sSUFBRTtrQ0FBQyxVQUFROzs7Ozs0QkFBSztrQ0FDakIsOERBQUNDLElBQUU7a0NBQ0FOLElBQUksSUFBSUEsSUFBSSxDQUFDTyxHQUFHLENBQUM7Z0NBQUdDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRVIsS0FBSyxTQUFMQSxLQUFLO2lEQUNqQyw4REFBQ0osa0RBQUk7Z0NBQUNhLElBQUksRUFBRSxZQUFXLENBQU0sT0FBSkYsR0FBRyxDQUFFOzBDQUM1Qiw0RUFBQ0csSUFBRTtvQ0FBQ1IsU0FBUyxFQUFFTCw2RUFBaUI7OENBQ2xDLDRFQUFDZSxHQUFDOzs0Q0FDRFosS0FBSzswREFDTiw4REFBQ2EsSUFBRTs7OztxREFBRzs0Q0FDTE4sR0FBRzswREFDSiw4REFBQ00sSUFBRTs7OztxREFBRzs0Q0FDTEwsSUFBSTs7Ozs7OzZDQUNEOzs7Ozt5Q0FDRzsrQkFUK0JELEdBQUc7Ozs7cUNBVWxDO3lCQUNWLENBQUM7Ozs7OzRCQUNDO2tDQUNMLDhEQUFDWCxrREFBSTt3QkFBQ2EsSUFBSSxFQUFFLEdBQUc7a0NBQUUsNEVBQUNHLEdBQUM7c0NBQUMsVUFBUTs7Ozs7Z0NBQUk7Ozs7OzRCQUFPOzs7Ozs7b0JBQy9COztvQkFDVCxDQUNMO0FBQ04sQ0FBQztBQTNCdUJkLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NzZy1pbmZvL3NzZy1saXN0LnRzeD9jOWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhLCBNYXJrZG93bkRhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vcHVibGljL2xpYi9wb3N0cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9zaW1wbGUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSwgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6R2V0U3RhdGljUHJvcHM8e2RhdGE6IE1hcmtkb3duRGF0YVR5cGVbXX0+ID0gKCk9PntcbiAgICBjb25zdCBkYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZSgge2RhdGF9OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KXtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+6rO17KeA7IKs7ZWtPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNpbXBsZUxheW91dH0+XG4gICAgICAgICAgICA8aDI+6rO17KeA7IKs7ZWtIOumrOyKpO2KuDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEubWFwKCh7IGtleSwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zc2ctaW5mby8ke2tleX1gfSAga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdExheW91dH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAge2tleX1cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT48YT7tmYjsnLzroZwg64+M7JWE6rCA6riwPC9hPjwvTGluaz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwic3R5bGVzIiwiU2ltcGxlIiwiZGF0YSIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNpbXBsZUxheW91dCIsImgyIiwidWwiLCJtYXAiLCJrZXkiLCJkYXRlIiwiaHJlZiIsImxpIiwibGlzdExheW91dCIsImEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/ssg-info/ssg-list.tsx\n"));

/***/ })

});