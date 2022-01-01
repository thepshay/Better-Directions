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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n};\n\n(0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();\n(0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleDeleteInput)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1JLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RFAsK0NBQTVEO0FBQ0FJLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCWixFQUFBQSx5REFBTztBQUNSLENBRkQ7O0FBSUFDLGdFQUFjO0FBQ2RDLG1FQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7bG9hZE1hcH0gZnJvbSAnLi9zY3JpcHRzL2xvYWRtYXAnXG5pbXBvcnQge2hhbmRsZU5ld0lucHV0LCBoYW5kbGVEZWxldGVJbnB1dH0gZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInXG5cbi8vIGNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIGluZGV4LmpzJylcblxuLy8gQ3JlYXRlIHRoZSBzY3JpcHQgdGFnLCBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXNcbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmFwaX0mY2FsbGJhY2s9aW5pdE1hcGA7XG5zY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4vLyBBcHBlbmQgdGhlICdzY3JpcHQnIGVsZW1lbnQgdG8gJ2hlYWQnXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbi8vIEF0dGFjaCB5b3VyIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHRoZSBgd2luZG93YCBvYmplY3RcbndpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24oKSB7XG4gIGxvYWRNYXAoKTtcbn07XG5cbmhhbmRsZU5ld0lucHV0KCk7XG5oYW5kbGVEZWxldGVJbnB1dCgpOyJdLCJuYW1lcyI6WyJjb25maWciLCJsb2FkTWFwIiwiaGFuZGxlTmV3SW5wdXQiLCJoYW5kbGVEZWxldGVJbnB1dCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFwaSIsImFzeW5jIiwiaGVhZCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiaW5pdE1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; },\n/* harmony export */   \"handleDeleteInput\": function() { return /* binding */ handleDeleteInput; }\n/* harmony export */ });\nconsole.log('sanity check, sidebar');\nvar addressUl = document.querySelector(\".address-list\");\nvar searchDiv = document.querySelector('.search-div'); // Enables next input field and dynamically appends a clone underneath.\n\nfunction handleNewInput() {\n  // adds eventlistener to parent and checks if target's parent is li.li.input-additional\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.parentElement.matches('li.input-additional')) {\n      var inputLi = document.querySelector(\".input-additional\");\n      var newDisabledLi = inputLi.cloneNode(true);\n      inputLi.classList.remove('input-additional'); // limit user to only 10 entries \n\n      if (document.querySelectorAll('.address-list li').length !== 10) {\n        addressUl.appendChild(newDisabledLi);\n      }\n    }\n  });\n} // deletes li that hosts the input\n\n\nfunction handleDeleteInput() {\n  addressUl.addEventListener('click', function (e) {\n    console.log(e.target);\n\n    if (e.target && e.target.matches('button.remove-address')) {\n      e.target.parentNode.parentNode.remove();\n    }\n  });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQixFQUVBOztBQUNBLFNBQVNFLGNBQVQsR0FBeUI7QUFHdkI7QUFDQUosRUFBQUEsU0FBUyxDQUFDSyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFBQyxDQUFDLEVBQUk7QUFFdkMsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLElBQVlELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxhQUFULENBQXVCQyxPQUF2QixDQUErQixxQkFBL0IsQ0FBaEIsRUFBd0U7QUFDdEUsVUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWhCO0FBQ0EsVUFBTVMsYUFBYSxHQUFHRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBdEI7QUFFQUYsTUFBQUEsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixrQkFBekIsRUFKc0UsQ0FNdEU7O0FBQ0EsVUFBSWIsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE1BQTlDLEtBQXlELEVBQTdELEVBQWlFO0FBQy9EaEIsUUFBQUEsU0FBUyxDQUFDaUIsV0FBVixDQUFzQk4sYUFBdEI7QUFDRDtBQUNGO0FBQ0YsR0FiRDtBQWNELEVBRUQ7OztBQUNBLFNBQVNPLGlCQUFULEdBQTZCO0FBRTNCbEIsRUFBQUEsU0FBUyxDQUFDSyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFBQyxDQUFDLEVBQUU7QUFDckNSLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxDQUFDLENBQUNDLE1BQWQ7O0FBQ0EsUUFBSUQsQ0FBQyxDQUFDQyxNQUFGLElBQVlELENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxPQUFULENBQWlCLHVCQUFqQixDQUFoQixFQUEyRDtBQUN6REgsTUFBQUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNZLFVBQVQsQ0FBb0JBLFVBQXBCLENBQStCTCxNQUEvQjtBQUNEO0FBQ0YsR0FMRDtBQVFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyLURpcmVjdGlvbnMvLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzPzJjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3Nhbml0eSBjaGVjaywgc2lkZWJhcicpXG5cbmNvbnN0IGFkZHJlc3NVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcmVzcy1saXN0XCIpXG5jb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWRpdicpO1xuXG4vLyBFbmFibGVzIG5leHQgaW5wdXQgZmllbGQgYW5kIGR5bmFtaWNhbGx5IGFwcGVuZHMgYSBjbG9uZSB1bmRlcm5lYXRoLlxuZnVuY3Rpb24gaGFuZGxlTmV3SW5wdXQoKXtcbiAgXG4gIFxuICAvLyBhZGRzIGV2ZW50bGlzdGVuZXIgdG8gcGFyZW50IGFuZCBjaGVja3MgaWYgdGFyZ2V0J3MgcGFyZW50IGlzIGxpLmxpLmlucHV0LWFkZGl0aW9uYWxcbiAgYWRkcmVzc1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5tYXRjaGVzKCdsaS5pbnB1dC1hZGRpdGlvbmFsJykgKSB7XG4gICAgICBjb25zdCBpbnB1dExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1hZGRpdGlvbmFsXCIpOyBcbiAgICAgIGNvbnN0IG5ld0Rpc2FibGVkTGkgPSBpbnB1dExpLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgaW5wdXRMaS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1hZGRpdGlvbmFsJyk7XG5cbiAgICAgIC8vIGxpbWl0IHVzZXIgdG8gb25seSAxMCBlbnRyaWVzIFxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWxpc3QgbGknKS5sZW5ndGggIT09IDEwKSB7XG4gICAgICAgIGFkZHJlc3NVbC5hcHBlbmRDaGlsZChuZXdEaXNhYmxlZExpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vLyBkZWxldGVzIGxpIHRoYXQgaG9zdHMgdGhlIGlucHV0XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVJbnB1dCgpIHtcblxuICBhZGRyZXNzVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCdidXR0b24ucmVtb3ZlLWFkZHJlc3MnKSkge1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgfSlcblxuXG59XG5cbmV4cG9ydCB7aGFuZGxlTmV3SW5wdXQsIGhhbmRsZURlbGV0ZUlucHV0fSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYWRkcmVzc1VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoRGl2IiwiaGFuZGxlTmV3SW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJtYXRjaGVzIiwiaW5wdXRMaSIsIm5ld0Rpc2FibGVkTGkiLCJjbG9uZU5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVEZWxldGVJbnB1dCIsInBhcmVudE5vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

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