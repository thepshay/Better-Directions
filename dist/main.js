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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap&libraries=places\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  console.log('initMap');\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleDeleteAddress)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleSubmitAddress)();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1LLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RFIsK0NBQTVEO0FBQ0FLLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FmLEVBQUFBLHlEQUFPO0FBQ1BDLEVBQUFBLGdFQUFjO0FBQ2RDLEVBQUFBLHFFQUFtQjtBQUNuQkMsRUFBQUEscUVBQW1CO0FBQ3BCLENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQge2xvYWRNYXB9IGZyb20gJy4vc2NyaXB0cy9sb2FkbWFwJ1xuaW1wb3J0IHtoYW5kbGVOZXdJbnB1dCwgaGFuZGxlRGVsZXRlQWRkcmVzcywgaGFuZGxlU3VibWl0QWRkcmVzc30gZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInXG5cbi8vIGNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIGluZGV4LmpzJylcblxuLy8gQ3JlYXRlIHRoZSBzY3JpcHQgdGFnLCBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXNcbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmFwaX0mY2FsbGJhY2s9aW5pdE1hcCZsaWJyYXJpZXM9cGxhY2VzYDtcbnNjcmlwdC5hc3luYyA9IHRydWU7XG5cbi8vIEFwcGVuZCB0aGUgJ3NjcmlwdCcgZWxlbWVudCB0byAnaGVhZCdcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuLy8gQXR0YWNoIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGB3aW5kb3dgIG9iamVjdFxud2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2luaXRNYXAnKTtcbiAgbG9hZE1hcCgpO1xuICBoYW5kbGVOZXdJbnB1dCgpO1xuICBoYW5kbGVEZWxldGVBZGRyZXNzKCk7XG4gIGhhbmRsZVN1Ym1pdEFkZHJlc3MoKTtcbn07XG4iXSwibmFtZXMiOlsiY29uZmlnIiwibG9hZE1hcCIsImhhbmRsZU5ld0lucHV0IiwiaGFuZGxlRGVsZXRlQWRkcmVzcyIsImhhbmRsZVN1Ym1pdEFkZHJlc3MiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcGkiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImluaXRNYXAiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/loadmap.js":
/*!********************************!*\
  !*** ./src/scripts/loadmap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMap\": function() { return /* binding */ loadMap; }\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/scripts/sidebar.js\");\n\n\nfunction loadMap() {\n  console.log('loadmap');\n  var mapOptions = {\n    center: {\n      lat: 37,\n      lng: -96\n    },\n    zoom: 5\n  };\n  var map = new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n  (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.addAutoToStartInput)();\n  return map;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sb2FkbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUVBLE1BQU1DLFVBQVUsR0FBRztBQUNqQkMsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLEdBQUcsRUFBRSxFQUFQO0FBQVdDLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0FBQWpCLEtBRFM7QUFFakJDLElBQUFBLElBQUksRUFBRTtBQUZXLEdBQW5CO0FBS0EsTUFBTUMsR0FBRyxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxHQUFoQixDQUFvQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EVixVQUFwRCxDQUFaO0FBQ0FKLEVBQUFBLDZEQUFtQjtBQUNuQixTQUFPUyxHQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9zY3JpcHRzL2xvYWRtYXAuanM/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FkZEF1dG9Ub1N0YXJ0SW5wdXR9IGZyb20gJy4vc2lkZWJhcidcblxuZnVuY3Rpb24gbG9hZE1hcCgpIHtcbiAgY29uc29sZS5sb2coJ2xvYWRtYXAnKVxuXG4gIGNvbnN0IG1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiB7IGxhdDogMzcsIGxuZzogLTk2IH0sXG4gICAgem9vbTogNSxcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIG1hcE9wdGlvbnMpO1xuICBhZGRBdXRvVG9TdGFydElucHV0KCk7XG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCB7bG9hZE1hcH1cblxuIl0sIm5hbWVzIjpbImFkZEF1dG9Ub1N0YXJ0SW5wdXQiLCJsb2FkTWFwIiwiY29uc29sZSIsImxvZyIsIm1hcE9wdGlvbnMiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/loadmap.js\n");

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; },\n/* harmony export */   \"handleDeleteAddress\": function() { return /* binding */ handleDeleteAddress; },\n/* harmony export */   \"addAutoToStartInput\": function() { return /* binding */ addAutoToStartInput; },\n/* harmony export */   \"handleSubmitAddress\": function() { return /* binding */ handleSubmitAddress; }\n/* harmony export */ });\n/* harmony import */ var _loadmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadmap */ \"./src/scripts/loadmap.js\");\n\nvar addressUl = document.querySelector(\".address-list\");\nvar searchDiv = document.querySelector('.search-div');\n\nfunction addAutoToStartInput() {\n  var startInput = document.querySelector('.start-address input');\n  addAutocomplete(startInput);\n} // Enables next input field and dynamically appends a input bar underneath.\n\n\nfunction handleNewInput() {\n  console.log('handleNewInput'); // creates a new input bar\n\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.parentElement.matches('li.input-additional')) {\n      var inputLi = document.querySelector(\".input-additional\");\n      var newDisabledLi = inputLi.cloneNode(true);\n      inputLi.classList.remove('input-additional'); // undisables current li\n      // limit user to only 10 entries\n      // it hits 10, adds a hidden class to last element (used in handleDelete Input)\n\n      if (document.querySelectorAll('.address-list li').length === 10) {\n        newDisabledLi.classList.add('hidden');\n      }\n\n      addressUl.appendChild(newDisabledLi); //add autocomplete address to inputs\n\n      var input = inputLi.querySelector('.address-input');\n      addAutocomplete(input);\n    }\n  });\n} // deletes li that hosts the input\n\n\nfunction handleDeleteAddress() {\n  console.log('handleDeleteAddress'); // removes parent li \n\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.matches('button.remove-address')) {\n      e.target.parentNode.parentNode.remove(); // If there is 9 showing elements, unhides hidden element\n\n      if (document.querySelectorAll('.address-list li').length === 10) {\n        var hiddenLi = document.querySelector(\".hidden\");\n        hiddenLi.classList.remove('hidden');\n      }\n    }\n  });\n}\n\nfunction handleSubmitAddress() {\n  console.log('handleSubmitAddress');\n  addressUl.addEventListener('click', function (e) {\n    if (e.target && e.target.matches('button.submit-address')) {\n      var li = e.target.parentNode.parentNode;\n      var input = li.querySelector('.address-input');\n      console.log(input.value);\n    }\n  });\n}\n\nfunction addAutocomplete(input) {\n  console.log('addAutocomplete');\n  var autocompleteOptions = {\n    types: []\n  };\n  var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHbEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNjLFVBQVQsQ0FBb0JBLFVBQS9CO0FBQ0EsVUFBTUYsS0FBSyxHQUFHSyxFQUFFLENBQUMzQixhQUFILENBQWlCLGdCQUFqQixDQUFkO0FBQ0FNLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFLLENBQUNNLEtBQWxCO0FBQ0Q7QUFDRixHQU5EO0FBT0Q7O0FBRUQsU0FBU3hCLGVBQVQsQ0FBeUJrQixLQUF6QixFQUFnQztBQUM5QmhCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0EsTUFBTXNCLG1CQUFtQixHQUFHO0FBQzFCQyxJQUFBQSxLQUFLLEVBQUU7QUFEbUIsR0FBNUI7QUFHQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBbUJDLFlBQXZCLENBQW9DYixLQUFwQyxFQUEyQ08sbUJBQTNDLENBQXJCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9zY3JpcHRzL3NpZGViYXIuanM/MmMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRNYXB9IGZyb20gJy4vbG9hZG1hcCdcblxuY29uc3QgYWRkcmVzc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWxpc3RcIilcbmNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZGl2Jyk7XG5cbmZ1bmN0aW9uIGFkZEF1dG9Ub1N0YXJ0SW5wdXQoKXtcbiAgY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1hZGRyZXNzIGlucHV0Jyk7XG4gIGFkZEF1dG9jb21wbGV0ZShzdGFydElucHV0KTtcbn1cblxuXG4vLyBFbmFibGVzIG5leHQgaW5wdXQgZmllbGQgYW5kIGR5bmFtaWNhbGx5IGFwcGVuZHMgYSBpbnB1dCBiYXIgdW5kZXJuZWF0aC5cbmZ1bmN0aW9uIGhhbmRsZU5ld0lucHV0KCl7XG4gIGNvbnNvbGUubG9nKCdoYW5kbGVOZXdJbnB1dCcpXG4gIC8vIGNyZWF0ZXMgYSBuZXcgaW5wdXQgYmFyXG4gIGFkZHJlc3NVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcygnbGkuaW5wdXQtYWRkaXRpb25hbCcpICkge1xuXG5cbiAgICAgIGNvbnN0IGlucHV0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWFkZGl0aW9uYWxcIik7IFxuICAgICAgY29uc3QgbmV3RGlzYWJsZWRMaSA9IGlucHV0TGkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaW5wdXRMaS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1hZGRpdGlvbmFsJyk7ICAvLyB1bmRpc2FibGVzIGN1cnJlbnQgbGlcbiAgICAgIFxuICAgICAgLy8gbGltaXQgdXNlciB0byBvbmx5IDEwIGVudHJpZXNcbiAgICAgIC8vIGl0IGhpdHMgMTAsIGFkZHMgYSBoaWRkZW4gY2xhc3MgdG8gbGFzdCBlbGVtZW50ICh1c2VkIGluIGhhbmRsZURlbGV0ZSBJbnB1dClcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1saXN0IGxpJykubGVuZ3RoID09PSAxMCkge1xuICAgICAgICBuZXdEaXNhYmxlZExpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgICBhZGRyZXNzVWwuYXBwZW5kQ2hpbGQobmV3RGlzYWJsZWRMaSk7XG5cbiAgICAgIC8vYWRkIGF1dG9jb21wbGV0ZSBhZGRyZXNzIHRvIGlucHV0c1xuICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dExpLnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWlucHV0JylcbiAgICAgIGFkZEF1dG9jb21wbGV0ZShpbnB1dClcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBkZWxldGVzIGxpIHRoYXQgaG9zdHMgdGhlIGlucHV0XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVBZGRyZXNzKCkge1xuICBjb25zb2xlLmxvZygnaGFuZGxlRGVsZXRlQWRkcmVzcycpXG4gIC8vIHJlbW92ZXMgcGFyZW50IGxpIFxuICBhZGRyZXNzVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2J1dHRvbi5yZW1vdmUtYWRkcmVzcycpKSB7XG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIDkgc2hvd2luZyBlbGVtZW50cywgdW5oaWRlcyBoaWRkZW4gZWxlbWVudFxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWxpc3QgbGknKS5sZW5ndGggPT09IDEwKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIik7IFxuICAgICAgICBoaWRkZW5MaS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEFkZHJlc3MoKSB7XG4gIGNvbnNvbGUubG9nKCdoYW5kbGVTdWJtaXRBZGRyZXNzJylcbiAgYWRkcmVzc1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCdidXR0b24uc3VibWl0LWFkZHJlc3MnKSkge1xuICAgICAgY29uc3QgbGkgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgIGNvbnN0IGlucHV0ID0gbGkucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtaW5wdXQnKVxuICAgICAgY29uc29sZS5sb2coaW5wdXQudmFsdWUpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRBdXRvY29tcGxldGUoaW5wdXQpIHtcbiAgY29uc29sZS5sb2coJ2FkZEF1dG9jb21wbGV0ZScpXG4gIGNvbnN0IGF1dG9jb21wbGV0ZU9wdGlvbnMgPSB7XG4gICAgdHlwZXM6IFtdXG4gIH1cbiAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoaW5wdXQsIGF1dG9jb21wbGV0ZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7aGFuZGxlTmV3SW5wdXQsIGhhbmRsZURlbGV0ZUFkZHJlc3MsIGFkZEF1dG9Ub1N0YXJ0SW5wdXQsIFxuICBoYW5kbGVTdWJtaXRBZGRyZXNzfSJdLCJuYW1lcyI6WyJsb2FkTWFwIiwiYWRkcmVzc1VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoRGl2IiwiYWRkQXV0b1RvU3RhcnRJbnB1dCIsInN0YXJ0SW5wdXQiLCJhZGRBdXRvY29tcGxldGUiLCJoYW5kbGVOZXdJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJtYXRjaGVzIiwiaW5wdXRMaSIsIm5ld0Rpc2FibGVkTGkiLCJjbG9uZU5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbnB1dCIsImhhbmRsZURlbGV0ZUFkZHJlc3MiLCJwYXJlbnROb2RlIiwiaGlkZGVuTGkiLCJoYW5kbGVTdWJtaXRBZGRyZXNzIiwibGkiLCJ2YWx1ZSIsImF1dG9jb21wbGV0ZU9wdGlvbnMiLCJ0eXBlcyIsImF1dG9jb21wbGV0ZSIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

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