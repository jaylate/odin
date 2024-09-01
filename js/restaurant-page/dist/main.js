/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ \"./src/pages.js\");\n\n\nlet homeButton = document.getElementById(\"home\");\nlet menuButton = document.getElementById(\"menu\");\nlet aboutButton = document.getElementById(\"about\");\n\nhomeButton.addEventListener(\"click\", _pages_js__WEBPACK_IMPORTED_MODULE_0__.homePage);\nmenuButton.addEventListener(\"click\", _pages_js__WEBPACK_IMPORTED_MODULE_0__.menuPage);\naboutButton.addEventListener(\"click\", _pages_js__WEBPACK_IMPORTED_MODULE_0__.aboutPage);\n\n(0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsK0NBQVE7QUFDN0MscUNBQXFDLCtDQUFRO0FBQzdDLHNDQUFzQyxnREFBUzs7QUFFL0MsbURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hvbWVQYWdlLCBtZW51UGFnZSwgYWJvdXRQYWdlfSBmcm9tIFwiLi9wYWdlcy5qc1wiO1xuXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xubGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVBhZ2UpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVBhZ2UpO1xuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFib3V0UGFnZSk7XG5cbmhvbWVQYWdlKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage),\n/* harmony export */   homePage: () => (/* binding */ homePage),\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nlet content = document.getElementById(\"content\");\nlet header = document.createElement(\"h1\");\nlet description = document.createElement(\"div\");\n\nconst homePage = () => {   \n    header.textContent = \"Apple Cafe\";\n    description.textContent = \"A cafe full of apples everywhere\";\n    \n    content.appendChild(header);\n    content.appendChild(description);\n};\n\nconst menuPage = () => {\n    header.textContent = \"Menu\";\n    description.textContent = \"Here is a list of our dishes:\";\n    \n    let menu = document.createElement(\"ul\");\n    for (let item of [\"Apple Pie - 2$\", \"Apple with apples - 0.5$\", \"Apple big plate - 10$\"]) {\n\tlet li = document.createElement(\"li\");\n\tli.textContent = item;\n\tmenu.appendChild(li);\n    }\n\n    content.appendChild(header);\n    content.appendChild(description);\n    content.appendChild(menu);\n};\n\nconst aboutPage = () => {\n    header.textContent = \"About\";\n    description.textContent = \"AppleGuy - 1-800-APPLES\";\n\n    content.appendChild(header);\n    content.appendChild(description);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMuanM/Yzg0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5sZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7ICAgXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBcHBsZSBDYWZlXCI7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgY2FmZSBmdWxsIG9mIGFwcGxlcyBldmVyeXdoZXJlXCI7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJIZXJlIGlzIGEgbGlzdCBvZiBvdXIgZGlzaGVzOlwiO1xuICAgIFxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgW1wiQXBwbGUgUGllIC0gMiRcIiwgXCJBcHBsZSB3aXRoIGFwcGxlcyAtIDAuNSRcIiwgXCJBcHBsZSBiaWcgcGxhdGUgLSAxMCRcIl0pIHtcblx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRsaS50ZXh0Q29udGVudCA9IGl0ZW07XG5cdG1lbnUuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFib3V0UGFnZSA9ICgpID0+IHtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkFwcGxlR3V5IC0gMS04MDAtQVBQTEVTXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;