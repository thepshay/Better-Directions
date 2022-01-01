/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\nvar config = {\n  api: 'AIzaSyDhuR_jAmnuQGa4spWicTHqwm7dAK5wn0k',\n  test: 'hello'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxHQUFHLEVBQUUseUNBRFE7QUFFYkMsRUFBQUEsSUFBSSxFQUFFO0FBRk8sQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vY29uZmlnLmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0ge1xuICBhcGk6ICdBSXphU3lEaHVSX2pBbW51UUdhNHNwV2ljVEhxd203ZEFLNXduMGsnLFxuICB0ZXN0OiAnaGVsbG8nXG59XG5cbmV4cG9ydCB7Y29uZmlnfTsiXSwibmFtZXMiOlsiY29uZmlnIiwiYXBpIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n};\n\n(0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RE4sK0NBQTVEO0FBQ0FHLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCWCxFQUFBQSx5REFBTztBQUNSLENBRkQ7O0FBSUFDLGdFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyLURpcmVjdGlvbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtsb2FkTWFwfSBmcm9tICcuL3NjcmlwdHMvbG9hZG1hcCdcbmltcG9ydCB7aGFuZGxlTmV3SW5wdXR9IGZyb20gJy4vc2NyaXB0cy9zaWRlYmFyJ1xuXG4vLyBjb25zb2xlLmxvZygnc2FuaXR5IGNoZWNrLCBpbmRleC5qcycpXG5cbi8vIENyZWF0ZSB0aGUgc2NyaXB0IHRhZywgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGVzXG5jb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbnNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke2NvbmZpZy5hcGl9JmNhbGxiYWNrPWluaXRNYXBgO1xuc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuLy8gQXBwZW5kIHRoZSAnc2NyaXB0JyBlbGVtZW50IHRvICdoZWFkJ1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4vLyBBdHRhY2ggeW91ciBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgYHdpbmRvd2Agb2JqZWN0XG53aW5kb3cuaW5pdE1hcCA9IGZ1bmN0aW9uKCkge1xuICBsb2FkTWFwKCk7XG59O1xuXG5oYW5kbGVOZXdJbnB1dCgpOyJdLCJuYW1lcyI6WyJjb25maWciLCJsb2FkTWFwIiwiaGFuZGxlTmV3SW5wdXQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcGkiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImluaXRNYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/loadmap.js":
/*!********************************!*\
  !*** ./src/scripts/loadmap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMap\": function() { return /* binding */ loadMap; }\n/* harmony export */ });\nfunction loadMap() {\n  console.log('sanity check, loadmap');\n  var map = new google.maps.Map(document.getElementById(\"map\"), {\n    center: {\n      lat: -34.397,\n      lng: 150.644\n    },\n    zoom: 8\n  });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sb2FkbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvRDtBQUM5REMsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLEdBQUcsRUFBRSxDQUFDLE1BQVI7QUFBZ0JDLE1BQUFBLEdBQUcsRUFBRTtBQUFyQixLQURzRDtBQUU5REMsSUFBQUEsSUFBSSxFQUFFO0FBRndELEdBQXBELENBQVo7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL3NjcmlwdHMvbG9hZG1hcC5qcz80NzNiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRNYXAoKSB7XG4gIGNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIGxvYWRtYXAnKVxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgY2VudGVyOiB7IGxhdDogLTM0LjM5NywgbG5nOiAxNTAuNjQ0IH0sXG4gICAgem9vbTogOCxcbiAgfSk7XG5cbn1cblxuZXhwb3J0IHtsb2FkTWFwfVxuIl0sIm5hbWVzIjpbImxvYWRNYXAiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/loadmap.js\n");

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; }\n/* harmony export */ });\nconsole.log('sanity check, sidebar'); // Enables next input field and dynamically appends a clone underneath.\n\nfunction handleNewInput() {\n  var addressUl = document.querySelector(\".address-list\"); // adds eventlistener to parent and checks if target's parent is li.li.input-additional\n\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.parentElement.matches('li.input-additional')) {\n      var inputLi = document.querySelector(\".input-additional\");\n      var newDisabledLi = inputLi.cloneNode(true);\n      inputLi.classList.remove('input-additional');\n      addressUl.appendChild(newDisabledLi);\n      console.log('hello');\n    }\n  });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosR0FFQTs7QUFDQSxTQUFTQyxjQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWxCLENBRHVCLENBR3ZCOztBQUNBRixFQUFBQSxTQUFTLENBQUNHLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUFDLENBQUMsRUFBSTtBQUN2QyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLENBQStCLHFCQUEvQixDQUFoQixFQUF3RTtBQUN0RSxVQUFNQyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBaEI7QUFFQSxVQUFNTyxhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQixJQUFsQixDQUF0QjtBQUVBRixNQUFBQSxPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGtCQUF6QjtBQUNBWixNQUFBQSxTQUFTLENBQUNhLFdBQVYsQ0FBc0JKLGFBQXRCO0FBQ0FaLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRDtBQUNGLEdBVkQ7QUFXRCIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL3NjcmlwdHMvc2lkZWJhci5qcz8yYzExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIHNpZGViYXInKVxuXG4vLyBFbmFibGVzIG5leHQgaW5wdXQgZmllbGQgYW5kIGR5bmFtaWNhbGx5IGFwcGVuZHMgYSBjbG9uZSB1bmRlcm5lYXRoLlxuZnVuY3Rpb24gaGFuZGxlTmV3SW5wdXQoKXtcbiAgY29uc3QgYWRkcmVzc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWxpc3RcIilcbiAgXG4gIC8vIGFkZHMgZXZlbnRsaXN0ZW5lciB0byBwYXJlbnQgYW5kIGNoZWNrcyBpZiB0YXJnZXQncyBwYXJlbnQgaXMgbGkubGkuaW5wdXQtYWRkaXRpb25hbFxuICBhZGRyZXNzVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5tYXRjaGVzKCdsaS5pbnB1dC1hZGRpdGlvbmFsJykgKSB7XG4gICAgICBjb25zdCBpbnB1dExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1hZGRpdGlvbmFsXCIpO1xuXG4gICAgICBjb25zdCBuZXdEaXNhYmxlZExpID0gaW5wdXRMaS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGlucHV0TGkuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtYWRkaXRpb25hbCcpO1xuICAgICAgYWRkcmVzc1VsLmFwcGVuZENoaWxkKG5ld0Rpc2FibGVkTGkpO1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQge2hhbmRsZU5ld0lucHV0fSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiaGFuZGxlTmV3SW5wdXQiLCJhZGRyZXNzVWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJtYXRjaGVzIiwiaW5wdXRMaSIsIm5ld0Rpc2FibGVkTGkiLCJjbG9uZU5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;