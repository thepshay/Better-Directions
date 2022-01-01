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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap&libraries=places\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.addAutoToStartInput)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleDeleteInput)();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1LLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RFIsK0NBQTVEO0FBQ0FLLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCYixFQUFBQSx5REFBTztBQUNQRyxFQUFBQSxxRUFBbUI7QUFDbkJGLEVBQUFBLGdFQUFjO0FBQ2RDLEVBQUFBLG1FQUFpQjtBQUNsQixDQUxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyLURpcmVjdGlvbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtsb2FkTWFwfSBmcm9tICcuL3NjcmlwdHMvbG9hZG1hcCdcbmltcG9ydCB7aGFuZGxlTmV3SW5wdXQsIGhhbmRsZURlbGV0ZUlucHV0LCBhZGRBdXRvVG9TdGFydElucHV0fSBmcm9tICcuL3NjcmlwdHMvc2lkZWJhcidcblxuLy8gY29uc29sZS5sb2coJ3Nhbml0eSBjaGVjaywgaW5kZXguanMnKVxuXG4vLyBDcmVhdGUgdGhlIHNjcmlwdCB0YWcsIHNldCB0aGUgYXBwcm9wcmlhdGUgYXR0cmlidXRlc1xuY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5zY3JpcHQuc3JjID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtjb25maWcuYXBpfSZjYWxsYmFjaz1pbml0TWFwJmxpYnJhcmllcz1wbGFjZXNgO1xuc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuLy8gQXBwZW5kIHRoZSAnc2NyaXB0JyBlbGVtZW50IHRvICdoZWFkJ1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4vLyBBdHRhY2ggeW91ciBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgYHdpbmRvd2Agb2JqZWN0XG53aW5kb3cuaW5pdE1hcCA9IGZ1bmN0aW9uKCkge1xuICBsb2FkTWFwKCk7XG4gIGFkZEF1dG9Ub1N0YXJ0SW5wdXQoKTtcbiAgaGFuZGxlTmV3SW5wdXQoKTtcbiAgaGFuZGxlRGVsZXRlSW5wdXQoKTtcbn07XG4iXSwibmFtZXMiOlsiY29uZmlnIiwibG9hZE1hcCIsImhhbmRsZU5ld0lucHV0IiwiaGFuZGxlRGVsZXRlSW5wdXQiLCJhZGRBdXRvVG9TdGFydElucHV0Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXBpIiwiYXN5bmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJpbml0TWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; },\n/* harmony export */   \"handleDeleteInput\": function() { return /* binding */ handleDeleteInput; },\n/* harmony export */   \"addAutoToStartInput\": function() { return /* binding */ addAutoToStartInput; }\n/* harmony export */ });\nconsole.log('sanity check, sidebar');\nvar addressUl = document.querySelector(\".address-list\");\nvar searchDiv = document.querySelector('.search-div'); // Enables next input field and dynamically appends a input bar underneath.\n\nfunction handleNewInput() {\n  // creates a new input bar\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.parentElement.matches('li.input-additional')) {\n      var inputLi = document.querySelector(\".input-additional\");\n      var newDisabledLi = inputLi.cloneNode(true);\n      inputLi.classList.remove('input-additional'); // undisables current li\n      // limit user to only 10 entries\n      // it hits 10, adds a hidden class to last element (used in handleDelete Input)\n\n      if (document.querySelectorAll('.address-list li').length === 10) {\n        newDisabledLi.classList.add('hidden');\n      }\n\n      addressUl.appendChild(newDisabledLi); //add autocomplete address to inputs\n\n      var input = inputLi.querySelector('.address-input');\n      addAutocomplete(input);\n    }\n  });\n} // deletes li that hosts the input\n\n\nfunction handleDeleteInput() {\n  // removes parent li \n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.matches('button.remove-address')) {\n      e.target.parentNode.parentNode.remove(); // If there is 9 showing elements, unhides hidden element\n\n      if (document.querySelectorAll('.address-list li').length === 10) {\n        var hiddenLi = document.querySelector(\".hidden\");\n        hiddenLi.classList.remove('hidden');\n      }\n    }\n  });\n}\n\nfunction addAutocomplete(input) {\n  var autocompleteOptions = {\n    types: []\n  };\n  var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);\n}\n\nfunction addAutoToStartInput() {\n  var startInput = document.querySelector('.start-address input');\n  addAutocomplete(startInput);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEIsRUFHQTs7QUFDQSxTQUFTRSxjQUFULEdBQXlCO0FBRXZCO0FBQ0FKLEVBQUFBLFNBQVMsQ0FBQ0ssZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQUMsQ0FBQyxFQUFJO0FBRXZDLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixJQUFZRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QkMsT0FBdkIsQ0FBK0IscUJBQS9CLENBQWhCLEVBQXdFO0FBQ3RFLFVBQU1DLE9BQU8sR0FBR1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFoQjtBQUNBLFVBQU1TLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxTQUFSLENBQWtCLElBQWxCLENBQXRCO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsa0JBQXpCLEVBSHNFLENBR3ZCO0FBRS9DO0FBQ0E7O0FBQ0EsVUFBSWIsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE1BQTlDLEtBQXlELEVBQTdELEVBQWlFO0FBQy9ETCxRQUFBQSxhQUFhLENBQUNFLFNBQWQsQ0FBd0JJLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0Q7O0FBQ0RqQixNQUFBQSxTQUFTLENBQUNrQixXQUFWLENBQXNCUCxhQUF0QixFQVZzRSxDQWF0RTs7QUFDQSxVQUFNUSxLQUFLLEdBQUdULE9BQU8sQ0FBQ1IsYUFBUixDQUFzQixnQkFBdEIsQ0FBZDtBQUNBa0IsTUFBQUEsZUFBZSxDQUFDRCxLQUFELENBQWY7QUFDRDtBQUNGLEdBbkJEO0FBb0JELEVBRUQ7OztBQUNBLFNBQVNFLGlCQUFULEdBQTZCO0FBRTNCO0FBQ0FyQixFQUFBQSxTQUFTLENBQUNLLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUFDLENBQUMsRUFBRTtBQUNyQyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLE9BQVQsQ0FBaUIsdUJBQWpCLENBQWhCLEVBQTJEO0FBQ3pESCxNQUFBQSxDQUFDLENBQUNDLE1BQUYsQ0FBU2UsVUFBVCxDQUFvQkEsVUFBcEIsQ0FBK0JSLE1BQS9CLEdBRHlELENBR3pEOztBQUNBLFVBQUliLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxNQUE5QyxLQUF5RCxFQUE3RCxFQUFpRTtBQUMvRCxZQUFNTyxRQUFRLEdBQUd0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBakI7QUFDQXFCLFFBQUFBLFFBQVEsQ0FBQ1YsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDRDtBQUNGO0FBQ0YsR0FWRDtBQVdEOztBQUVELFNBQVNNLGVBQVQsQ0FBeUJELEtBQXpCLEVBQWdDO0FBQzlCLE1BQU1LLG1CQUFtQixHQUFHO0FBQzFCQyxJQUFBQSxLQUFLLEVBQUU7QUFEbUIsR0FBNUI7QUFHQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBbUJDLFlBQXZCLENBQW9DWCxLQUFwQyxFQUEyQ0ssbUJBQTNDLENBQXJCO0FBQ0Q7O0FBRUQsU0FBU08sbUJBQVQsR0FBOEI7QUFDNUIsTUFBTUMsVUFBVSxHQUFHL0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFuQjtBQUNBa0IsRUFBQUEsZUFBZSxDQUFDWSxVQUFELENBQWY7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL3NjcmlwdHMvc2lkZWJhci5qcz8yYzExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIHNpZGViYXInKVxuXG5jb25zdCBhZGRyZXNzVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtbGlzdFwiKVxuY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kaXYnKTtcblxuXG4vLyBFbmFibGVzIG5leHQgaW5wdXQgZmllbGQgYW5kIGR5bmFtaWNhbGx5IGFwcGVuZHMgYSBpbnB1dCBiYXIgdW5kZXJuZWF0aC5cbmZ1bmN0aW9uIGhhbmRsZU5ld0lucHV0KCl7XG4gIFxuICAvLyBjcmVhdGVzIGEgbmV3IGlucHV0IGJhclxuICBhZGRyZXNzVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoJ2xpLmlucHV0LWFkZGl0aW9uYWwnKSApIHtcbiAgICAgIGNvbnN0IGlucHV0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWFkZGl0aW9uYWxcIik7IFxuICAgICAgY29uc3QgbmV3RGlzYWJsZWRMaSA9IGlucHV0TGkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaW5wdXRMaS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1hZGRpdGlvbmFsJyk7ICAvLyB1bmRpc2FibGVzIGN1cnJlbnQgbGlcbiAgICAgIFxuICAgICAgLy8gbGltaXQgdXNlciB0byBvbmx5IDEwIGVudHJpZXNcbiAgICAgIC8vIGl0IGhpdHMgMTAsIGFkZHMgYSBoaWRkZW4gY2xhc3MgdG8gbGFzdCBlbGVtZW50ICh1c2VkIGluIGhhbmRsZURlbGV0ZSBJbnB1dClcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1saXN0IGxpJykubGVuZ3RoID09PSAxMCkge1xuICAgICAgICBuZXdEaXNhYmxlZExpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgICBhZGRyZXNzVWwuYXBwZW5kQ2hpbGQobmV3RGlzYWJsZWRMaSk7XG5cblxuICAgICAgLy9hZGQgYXV0b2NvbXBsZXRlIGFkZHJlc3MgdG8gaW5wdXRzXG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0TGkucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtaW5wdXQnKVxuICAgICAgYWRkQXV0b2NvbXBsZXRlKGlucHV0KVxuICAgIH1cbiAgfSk7XG59XG5cbi8vIGRlbGV0ZXMgbGkgdGhhdCBob3N0cyB0aGUgaW5wdXRcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUlucHV0KCkge1xuXG4gIC8vIHJlbW92ZXMgcGFyZW50IGxpIFxuICBhZGRyZXNzVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2J1dHRvbi5yZW1vdmUtYWRkcmVzcycpKSB7XG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIDkgc2hvd2luZyBlbGVtZW50cywgdW5oaWRlcyBoaWRkZW4gZWxlbWVudFxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWxpc3QgbGknKS5sZW5ndGggPT09IDEwKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIik7IFxuICAgICAgICBoaWRkZW5MaS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZEF1dG9jb21wbGV0ZShpbnB1dCkge1xuICBjb25zdCBhdXRvY29tcGxldGVPcHRpb25zID0ge1xuICAgIHR5cGVzOiBbXVxuICB9XG4gIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGlucHV0LCBhdXRvY29tcGxldGVPcHRpb25zKVxufVxuXG5mdW5jdGlvbiBhZGRBdXRvVG9TdGFydElucHV0KCl7XG4gIGNvbnN0IHN0YXJ0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYWRkcmVzcyBpbnB1dCcpO1xuICBhZGRBdXRvY29tcGxldGUoc3RhcnRJbnB1dCk7XG59XG5cblxuZXhwb3J0IHtoYW5kbGVOZXdJbnB1dCwgaGFuZGxlRGVsZXRlSW5wdXQsIGFkZEF1dG9Ub1N0YXJ0SW5wdXR9Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzVWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hEaXYiLCJoYW5kbGVOZXdJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIm1hdGNoZXMiLCJpbnB1dExpIiwibmV3RGlzYWJsZWRMaSIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImlucHV0IiwiYWRkQXV0b2NvbXBsZXRlIiwiaGFuZGxlRGVsZXRlSW5wdXQiLCJwYXJlbnROb2RlIiwiaGlkZGVuTGkiLCJhdXRvY29tcGxldGVPcHRpb25zIiwidHlwZXMiLCJhdXRvY29tcGxldGUiLCJnb29nbGUiLCJtYXBzIiwicGxhY2VzIiwiQXV0b2NvbXBsZXRlIiwiYWRkQXV0b1RvU3RhcnRJbnB1dCIsInN0YXJ0SW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

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