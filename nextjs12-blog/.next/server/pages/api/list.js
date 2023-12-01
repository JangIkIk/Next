"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/list";
exports.ids = ["pages/api/list"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/list.ts":
/*!*******************************!*\
  !*** ./src/pages/api/list.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst dataFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), \"src/pages/api/db.json\");\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(dataFilePath, \"utf-8\");\n        const jsonData = JSON.parse(data);\n        res.status(200).json(jsonData);\n    } else if (req.method === \"POST\") {\n        const newData = req.body;\n        const currentData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(dataFilePath, \"utf-8\"));\n        const updateData = [\n            ...currentData,\n            newData\n        ];\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(dataFilePath, JSON.stringify(updateData));\n        res.status(200).json(\"성공\");\n    } else if (req.method === \"DELETE\") {} else if (req.method === \"PATCH\") {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xpc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFb0I7QUFDSTtBQUN4QixNQUFNRSxZQUFZLEdBQUdELG1EQUFZLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsdUJBQXVCLENBQUM7QUFPMUQsU0FBU0MsT0FBTyxDQUM3QkMsR0FBbUIsRUFDbkJDLEdBQXdDLEVBQ3hDO0lBRUEsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFDO1FBQ3RCLE1BQU1DLElBQUksR0FBR1Ysc0RBQWUsQ0FBQ0UsWUFBWSxFQUFFLE9BQU8sQ0FBQztRQUNuRCxNQUFNVSxRQUFRLEdBQWNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixJQUFJLENBQUM7UUFDNUNGLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUVKLFFBQVEsQ0FBRTtJQUNsQyxPQUFPLElBQUdMLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBQztRQUM5QixNQUFNUSxPQUFPLEdBQUdWLEdBQUcsQ0FBQ1csSUFBSTtRQUN4QixNQUFNQyxXQUFXLEdBQUdOLElBQUksQ0FBQ0MsS0FBSyxDQUFDZCxzREFBZSxDQUFDRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEUsTUFBTWtCLFVBQVUsR0FBRztlQUFJRCxXQUFXO1lBQUVGLE9BQU87U0FBQztRQUM1Q2pCLHVEQUFnQixDQUFDRSxZQUFZLEVBQUVXLElBQUksQ0FBQ1MsU0FBUyxDQUFDRixVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNEWixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE9BQU8sSUFBR1QsR0FBRyxDQUFDRSxNQUFNLEtBQUssUUFBUSxFQUFDLENBRWxDLE9BQU8sSUFBR0YsR0FBRyxDQUFDRSxNQUFNLEtBQUssT0FBTyxFQUFDLENBRWpDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzMTItYmxvZy8uL3NyYy9wYWdlcy9hcGkvbGlzdC50cz9mY2EyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuY29uc3QgZGF0YUZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvcGFnZXMvYXBpL2RiLmpzb24nKTtcblxuaW50ZXJmYWNlIEJsb2dJdGVtc3tcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxCbG9nSXRlbXMgfCBzdHJpbmc+XG4pIHtcblxuICBpZihyZXEubWV0aG9kID09PSBcIkdFVFwiKXtcbiAgICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGRhdGFGaWxlUGF0aCwgJ3V0Zi04Jyk7XG4gICAgY29uc3QganNvbkRhdGE6IEJsb2dJdGVtcyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oIGpzb25EYXRhIClcbiAgfSBlbHNlIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKXtcbiAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG4gICAgY29uc3QgY3VycmVudERhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhkYXRhRmlsZVBhdGgsICd1dGYtOCcpKTtcbiAgICBjb25zdCB1cGRhdGVEYXRhID0gWy4uLmN1cnJlbnREYXRhLCBuZXdEYXRhXTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGRhdGFGaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwi7ISx6rO1XCIpO1xuICB9IGVsc2UgaWYocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIil7XG4gICAgXG4gIH0gZWxzZSBpZihyZXEubWV0aG9kID09PSBcIlBBVENIXCIpe1xuXG4gIH1cbn1cblxuXG5cblxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImRhdGFGaWxlUGF0aCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJqc29uRGF0YSIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iLCJuZXdEYXRhIiwiYm9keSIsImN1cnJlbnREYXRhIiwidXBkYXRlRGF0YSIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/list.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/list.ts"));
module.exports = __webpack_exports__;

})();