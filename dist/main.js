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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap&libraries=places\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleDeleteInput)();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1JLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RFAsK0NBQTVEO0FBQ0FJLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCWixFQUFBQSx5REFBTztBQUNQQyxFQUFBQSxnRUFBYztBQUNkQyxFQUFBQSxtRUFBaUI7QUFDbEIsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7bG9hZE1hcH0gZnJvbSAnLi9zY3JpcHRzL2xvYWRtYXAnXG5pbXBvcnQge2hhbmRsZU5ld0lucHV0LCBoYW5kbGVEZWxldGVJbnB1dH0gZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInXG5cbi8vIGNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIGluZGV4LmpzJylcblxuLy8gQ3JlYXRlIHRoZSBzY3JpcHQgdGFnLCBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXNcbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmFwaX0mY2FsbGJhY2s9aW5pdE1hcCZsaWJyYXJpZXM9cGxhY2VzYDtcbnNjcmlwdC5hc3luYyA9IHRydWU7XG5cbi8vIEFwcGVuZCB0aGUgJ3NjcmlwdCcgZWxlbWVudCB0byAnaGVhZCdcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuLy8gQXR0YWNoIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGB3aW5kb3dgIG9iamVjdFxud2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgbG9hZE1hcCgpO1xuICBoYW5kbGVOZXdJbnB1dCgpO1xuICBoYW5kbGVEZWxldGVJbnB1dCgpO1xufTtcbiJdLCJuYW1lcyI6WyJjb25maWciLCJsb2FkTWFwIiwiaGFuZGxlTmV3SW5wdXQiLCJoYW5kbGVEZWxldGVJbnB1dCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFwaSIsImFzeW5jIiwiaGVhZCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiaW5pdE1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/loadmap.js":
/*!********************************!*\
  !*** ./src/scripts/loadmap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMap\": function() { return /* binding */ loadMap; }\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/scripts/sidebar.js\");\n\n\nfunction loadMap() {\n  console.log('sanity check, loadmap');\n  var mapOptions = {\n    center: {\n      lat: 37,\n      lng: -96\n    },\n    zoom: 5\n  };\n  var map = new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n  (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.addAutoToStartInput)();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sb2FkbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFFQSxNQUFNQyxVQUFVLEdBQUc7QUFDakJDLElBQUFBLE1BQU0sRUFBRTtBQUFFQyxNQUFBQSxHQUFHLEVBQUUsRUFBUDtBQUFXQyxNQUFBQSxHQUFHLEVBQUUsQ0FBQztBQUFqQixLQURTO0FBRWpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGVyxHQUFuQjtBQUtBLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvRFYsVUFBcEQsQ0FBWjtBQUVBSixFQUFBQSw2REFBbUI7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9zY3JpcHRzL2xvYWRtYXAuanM/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FkZEF1dG9Ub1N0YXJ0SW5wdXR9IGZyb20gJy4vc2lkZWJhcidcblxuZnVuY3Rpb24gbG9hZE1hcCgpIHtcbiAgY29uc29sZS5sb2coJ3Nhbml0eSBjaGVjaywgbG9hZG1hcCcpXG5cbiAgY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6IHsgbGF0OiAzNywgbG5nOiAtOTYgfSxcbiAgICB6b29tOiA1LFxuICB9XG5cbiAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwgbWFwT3B0aW9ucyk7XG5cbiAgYWRkQXV0b1RvU3RhcnRJbnB1dCgpO1xufVxuXG5leHBvcnQge2xvYWRNYXB9XG4iXSwibmFtZXMiOlsiYWRkQXV0b1RvU3RhcnRJbnB1dCIsImxvYWRNYXAiLCJjb25zb2xlIiwibG9nIiwibWFwT3B0aW9ucyIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/loadmap.js\n");

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; },\n/* harmony export */   \"handleDeleteInput\": function() { return /* binding */ handleDeleteInput; },\n/* harmony export */   \"addAutoToStartInput\": function() { return /* binding */ addAutoToStartInput; }\n/* harmony export */ });\nconsole.log('sanity check, sidebar');\nvar addressUl = document.querySelector(\".address-list\");\nvar searchDiv = document.querySelector('.search-div');\n\nfunction addAutoToStartInput() {\n  var startInput = document.querySelector('.start-address input');\n  addAutocomplete(startInput);\n} // Enables next input field and dynamically appends a input bar underneath.\n\n\nfunction handleNewInput() {\n  // creates a new input bar\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.parentElement.matches('li.input-additional')) {\n      var inputLi = document.querySelector(\".input-additional\");\n      var newDisabledLi = inputLi.cloneNode(true);\n      inputLi.classList.remove('input-additional'); // undisables current li\n      // limit user to only 10 entries\n      // it hits 10, adds a hidden class to last element (used in handleDelete Input)\n\n      if (document.querySelectorAll('.address-list li').length === 10) {\n        newDisabledLi.classList.add('hidden');\n      }\n\n      addressUl.appendChild(newDisabledLi); //add autocomplete address to inputs\n\n      var input = inputLi.querySelector('.address-input');\n      addAutocomplete(input);\n    }\n  });\n} // deletes li that hosts the input\n\n\nfunction handleDeleteInput() {\n  // removes parent li \n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.matches('button.remove-address')) {\n      e.target.parentNode.parentNode.remove(); // If there is 9 showing elements, unhides hidden element\n\n      if (document.querySelectorAll('.address-list li').length === 10) {\n        var hiddenLi = document.querySelector(\".hidden\");\n        hiddenLi.classList.remove('hidden');\n      }\n    }\n  });\n}\n\nfunction addAutocomplete(input) {\n  var autocompleteOptions = {\n    types: []\n  };\n  var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7O0FBRUEsU0FBU0UsbUJBQVQsR0FBOEI7QUFDNUIsTUFBTUMsVUFBVSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQW5CO0FBQ0FJLEVBQUFBLGVBQWUsQ0FBQ0QsVUFBRCxDQUFmO0FBQ0QsRUFHRDs7O0FBQ0EsU0FBU0UsY0FBVCxHQUF5QjtBQUV2QjtBQUNBUCxFQUFBQSxTQUFTLENBQUNRLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUFDLENBQUMsRUFBSTtBQUV2QyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLENBQStCLHFCQUEvQixDQUFoQixFQUF3RTtBQUN0RSxVQUFNQyxPQUFPLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBaEI7QUFDQSxVQUFNWSxhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQixJQUFsQixDQUF0QjtBQUNBRixNQUFBQSxPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGtCQUF6QixFQUhzRSxDQUd2QjtBQUUvQztBQUNBOztBQUNBLFVBQUloQixRQUFRLENBQUNpQixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE1BQTlDLEtBQXlELEVBQTdELEVBQWlFO0FBQy9ETCxRQUFBQSxhQUFhLENBQUNFLFNBQWQsQ0FBd0JJLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0Q7O0FBQ0RwQixNQUFBQSxTQUFTLENBQUNxQixXQUFWLENBQXNCUCxhQUF0QixFQVZzRSxDQVl0RTs7QUFDQSxVQUFNUSxLQUFLLEdBQUdULE9BQU8sQ0FBQ1gsYUFBUixDQUFzQixnQkFBdEIsQ0FBZDtBQUNBSSxNQUFBQSxlQUFlLENBQUNnQixLQUFELENBQWY7QUFDRDtBQUNGLEdBbEJEO0FBbUJELEVBRUQ7OztBQUNBLFNBQVNDLGlCQUFULEdBQTZCO0FBRTNCO0FBQ0F2QixFQUFBQSxTQUFTLENBQUNRLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUFDLENBQUMsRUFBRTtBQUNyQyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLE9BQVQsQ0FBaUIsdUJBQWpCLENBQWhCLEVBQTJEO0FBQ3pESCxNQUFBQSxDQUFDLENBQUNDLE1BQUYsQ0FBU2MsVUFBVCxDQUFvQkEsVUFBcEIsQ0FBK0JQLE1BQS9CLEdBRHlELENBR3pEOztBQUNBLFVBQUloQixRQUFRLENBQUNpQixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE1BQTlDLEtBQXlELEVBQTdELEVBQWlFO0FBQy9ELFlBQU1NLFFBQVEsR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBdUIsUUFBQUEsUUFBUSxDQUFDVCxTQUFULENBQW1CQyxNQUFuQixDQUEwQixRQUExQjtBQUNEO0FBQ0Y7QUFDRixHQVZEO0FBV0Q7O0FBRUQsU0FBU1gsZUFBVCxDQUF5QmdCLEtBQXpCLEVBQWdDO0FBQzlCLE1BQU1JLG1CQUFtQixHQUFHO0FBQzFCQyxJQUFBQSxLQUFLLEVBQUU7QUFEbUIsR0FBNUI7QUFHQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBbUJDLFlBQXZCLENBQW9DVixLQUFwQyxFQUEyQ0ksbUJBQTNDLENBQXJCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9zY3JpcHRzL3NpZGViYXIuanM/MmMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnc2FuaXR5IGNoZWNrLCBzaWRlYmFyJylcblxuY29uc3QgYWRkcmVzc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWxpc3RcIilcbmNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZGl2Jyk7XG5cbmZ1bmN0aW9uIGFkZEF1dG9Ub1N0YXJ0SW5wdXQoKXtcbiAgY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1hZGRyZXNzIGlucHV0Jyk7XG4gIGFkZEF1dG9jb21wbGV0ZShzdGFydElucHV0KTtcbn1cblxuXG4vLyBFbmFibGVzIG5leHQgaW5wdXQgZmllbGQgYW5kIGR5bmFtaWNhbGx5IGFwcGVuZHMgYSBpbnB1dCBiYXIgdW5kZXJuZWF0aC5cbmZ1bmN0aW9uIGhhbmRsZU5ld0lucHV0KCl7XG4gIFxuICAvLyBjcmVhdGVzIGEgbmV3IGlucHV0IGJhclxuICBhZGRyZXNzVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoJ2xpLmlucHV0LWFkZGl0aW9uYWwnKSApIHtcbiAgICAgIGNvbnN0IGlucHV0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWFkZGl0aW9uYWxcIik7IFxuICAgICAgY29uc3QgbmV3RGlzYWJsZWRMaSA9IGlucHV0TGkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaW5wdXRMaS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1hZGRpdGlvbmFsJyk7ICAvLyB1bmRpc2FibGVzIGN1cnJlbnQgbGlcbiAgICAgIFxuICAgICAgLy8gbGltaXQgdXNlciB0byBvbmx5IDEwIGVudHJpZXNcbiAgICAgIC8vIGl0IGhpdHMgMTAsIGFkZHMgYSBoaWRkZW4gY2xhc3MgdG8gbGFzdCBlbGVtZW50ICh1c2VkIGluIGhhbmRsZURlbGV0ZSBJbnB1dClcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1saXN0IGxpJykubGVuZ3RoID09PSAxMCkge1xuICAgICAgICBuZXdEaXNhYmxlZExpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgICBhZGRyZXNzVWwuYXBwZW5kQ2hpbGQobmV3RGlzYWJsZWRMaSk7XG5cbiAgICAgIC8vYWRkIGF1dG9jb21wbGV0ZSBhZGRyZXNzIHRvIGlucHV0c1xuICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dExpLnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWlucHV0JylcbiAgICAgIGFkZEF1dG9jb21wbGV0ZShpbnB1dClcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBkZWxldGVzIGxpIHRoYXQgaG9zdHMgdGhlIGlucHV0XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVJbnB1dCgpIHtcblxuICAvLyByZW1vdmVzIHBhcmVudCBsaSBcbiAgYWRkcmVzc1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCdidXR0b24ucmVtb3ZlLWFkZHJlc3MnKSkge1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyA5IHNob3dpbmcgZWxlbWVudHMsIHVuaGlkZXMgaGlkZGVuIGVsZW1lbnRcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1saXN0IGxpJykubGVuZ3RoID09PSAxMCkge1xuICAgICAgICBjb25zdCBoaWRkZW5MaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpOyBcbiAgICAgICAgaGlkZGVuTGkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRBdXRvY29tcGxldGUoaW5wdXQpIHtcbiAgY29uc3QgYXV0b2NvbXBsZXRlT3B0aW9ucyA9IHtcbiAgICB0eXBlczogW11cbiAgfVxuICBjb25zdCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShpbnB1dCwgYXV0b2NvbXBsZXRlT3B0aW9ucylcbn1cblxuXG5leHBvcnQge2hhbmRsZU5ld0lucHV0LCBoYW5kbGVEZWxldGVJbnB1dCwgYWRkQXV0b1RvU3RhcnRJbnB1dH0iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImFkZHJlc3NVbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaERpdiIsImFkZEF1dG9Ub1N0YXJ0SW5wdXQiLCJzdGFydElucHV0IiwiYWRkQXV0b2NvbXBsZXRlIiwiaGFuZGxlTmV3SW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJtYXRjaGVzIiwiaW5wdXRMaSIsIm5ld0Rpc2FibGVkTGkiLCJjbG9uZU5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbnB1dCIsImhhbmRsZURlbGV0ZUlucHV0IiwicGFyZW50Tm9kZSIsImhpZGRlbkxpIiwiYXV0b2NvbXBsZXRlT3B0aW9ucyIsInR5cGVzIiwiYXV0b2NvbXBsZXRlIiwiZ29vZ2xlIiwibWFwcyIsInBsYWNlcyIsIkF1dG9jb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

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