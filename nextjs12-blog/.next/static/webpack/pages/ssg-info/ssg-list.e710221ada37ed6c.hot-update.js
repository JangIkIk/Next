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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Simple; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_simple_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/simple.module.css */ \"./src/styles/simple.module.css\");\n/* harmony import */ var _styles_simple_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_simple_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Simple(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"공지사항\"\n                }, void 0, false, {\n                    fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_simple_module_css__WEBPACK_IMPORTED_MODULE_4___default().simpleLayout),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"공지사항 리스트\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: data && data.map(function(param) {\n                            var key = param.key, date = param.date, title = param.title;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/ssg-info/\".concat(key),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_simple_module_css__WEBPACK_IMPORTED_MODULE_4___default().listLayout),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: [\n                                            title,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                                lineNumber: 28,\n                                                columnNumber: 19\n                                            }, _this),\n                                            key,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            }, _this),\n                                            date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                }, _this)\n                            }, key, false, {\n                                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 19\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"홈으로 돌아가기\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 30\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return router;\n                        },\n                        children: \"테스트로 돌아가기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jangjun-ig/Desktop/nextjs12-blog/src/pages/ssg-info/ssg-list.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Simple, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Simple;\nvar _c;\n$RefreshReg$(_c, \"Simple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3NnLWluZm8vc3NnLWxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNBO0FBQ1c7QUFFUTs7QUFRakMsU0FBU0ksTUFBTSxDQUFFLEtBQXNELEVBQUM7UUFBdkQsSUFBSyxHQUFMLEtBQXNELENBQXJEQyxJQUFJOzs7SUFDakMsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLHFCQUNJOzswQkFDSSw4REFBQ0Ysa0RBQUk7MEJBQ0QsNEVBQUNPLE9BQUs7OEJBQUMsTUFBSTs7Ozs7d0JBQVE7Ozs7O29CQUNoQjswQkFDUCw4REFBQ0MsU0FBTztnQkFBQ0MsU0FBUyxFQUFFTiwrRUFBbUI7O2tDQUN2Qyw4REFBQ1EsSUFBRTtrQ0FBQyxVQUFROzs7Ozs0QkFBSztrQ0FDakIsOERBQUNDLElBQUU7a0NBQ0FQLElBQUksSUFBSUEsSUFBSSxDQUFDUSxHQUFHLENBQUM7Z0NBQUdDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRVIsS0FBSyxTQUFMQSxLQUFLO2lEQUNqQyw4REFBQ04sa0RBQUk7Z0NBQUNlLElBQUksRUFBRSxZQUFXLENBQU0sT0FBSkYsR0FBRyxDQUFFOzBDQUM1Qiw0RUFBQ0csSUFBRTtvQ0FBQ1IsU0FBUyxFQUFFTiw2RUFBaUI7OENBQ2xDLDRFQUFDZ0IsR0FBQzs7NENBQ0RaLEtBQUs7MERBQ04sOERBQUNhLElBQUU7Ozs7cURBQUc7NENBQ0xOLEdBQUc7MERBQ0osOERBQUNNLElBQUU7Ozs7cURBQUc7NENBQ0xMLElBQUk7Ozs7Ozs2Q0FDRDs7Ozs7eUNBQ0c7K0JBVCtCRCxHQUFHOzs7O3FDQVVsQzt5QkFDVixDQUFDOzs7Ozs0QkFDQztrQ0FDTCw4REFBQ2Isa0RBQUk7d0JBQUNlLElBQUksRUFBRSxHQUFHO2tDQUFFLDRFQUFDRyxHQUFDO3NDQUFDLFVBQVE7Ozs7O2dDQUFJOzs7Ozs0QkFBTztrQ0FDdkMsOERBQUNFLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBSWhCLE1BQU07eUJBQUE7a0NBQUUsV0FBUzs7Ozs7NEJBQVM7Ozs7OztvQkFDdkM7O29CQUNULENBQ0w7QUFDTixDQUFDO0dBN0J1QkYsTUFBTTs7UUFDWEYsa0RBQVM7OztBQURKRSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zc2ctaW5mby9zc2ctbGlzdC50c3g/YzliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSwgTWFya2Rvd25EYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9saWIvcG9zdHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvc2ltcGxlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB0eXBlIHsgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOkdldFN0YXRpY1Byb3BzPHtkYXRhOiBNYXJrZG93bkRhdGFUeXBlW119PiA9ICgpPT57XG4gICAgY29uc3QgZGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpO1xuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGUoIHtkYXRhfTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPil7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPuqzteyngOyCrO2VrTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zaW1wbGVMYXlvdXR9PlxuICAgICAgICAgICAgPGgyPuqzteyngOyCrO2VrSDrpqzsiqTtirg8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgoeyBrZXksIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3NnLWluZm8vJHtrZXl9YH0gIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RMYXlvdXR9PlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+PGE+7ZmI7Jy866GcIOuPjOyVhOqwgOq4sDwvYT48L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5yb3V0ZXJ9Pu2FjOyKpO2KuOuhnCDrj4zslYTqsIDquLA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwidXNlUm91dGVyIiwic3R5bGVzIiwiU2ltcGxlIiwiZGF0YSIsInJvdXRlciIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNpbXBsZUxheW91dCIsImgyIiwidWwiLCJtYXAiLCJrZXkiLCJkYXRlIiwiaHJlZiIsImxpIiwibGlzdExheW91dCIsImEiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/ssg-info/ssg-list.tsx\n"));

/***/ })

});