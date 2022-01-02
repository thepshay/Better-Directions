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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap&libraries=places\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  console.log('initMap');\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.setupStartingInput)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1JLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RFAsK0NBQTVEO0FBQ0FJLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FkLEVBQUFBLHlEQUFPO0FBQ1BFLEVBQUFBLG9FQUFrQjtBQUNsQkQsRUFBQUEsZ0VBQWM7QUFFZixDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyLURpcmVjdGlvbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtsb2FkTWFwfSBmcm9tICcuL3NjcmlwdHMvbG9hZG1hcCdcbmltcG9ydCB7aGFuZGxlTmV3SW5wdXQsIHNldHVwU3RhcnRpbmdJbnB1dH0gZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInXG5cbi8vIGNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIGluZGV4LmpzJylcblxuLy8gQ3JlYXRlIHRoZSBzY3JpcHQgdGFnLCBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXNcbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmFwaX0mY2FsbGJhY2s9aW5pdE1hcCZsaWJyYXJpZXM9cGxhY2VzYDtcbnNjcmlwdC5hc3luYyA9IHRydWU7XG5cbi8vIEFwcGVuZCB0aGUgJ3NjcmlwdCcgZWxlbWVudCB0byAnaGVhZCdcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuLy8gQXR0YWNoIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGB3aW5kb3dgIG9iamVjdFxud2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2luaXRNYXAnKTtcbiAgbG9hZE1hcCgpO1xuICBzZXR1cFN0YXJ0aW5nSW5wdXQoKTtcbiAgaGFuZGxlTmV3SW5wdXQoKTtcbiAgXG59O1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsImxvYWRNYXAiLCJoYW5kbGVOZXdJbnB1dCIsInNldHVwU3RhcnRpbmdJbnB1dCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFwaSIsImFzeW5jIiwiaGVhZCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiaW5pdE1hcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/loadmap.js":
/*!********************************!*\
  !*** ./src/scripts/loadmap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMap\": function() { return /* binding */ loadMap; }\n/* harmony export */ });\nfunction loadMap() {\n  console.log('loadmap');\n  var mapOptions = {\n    center: {\n      lat: 37,\n      lng: -96\n    },\n    zoom: 5\n  };\n  var map = new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n  return map;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sb2FkbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUEsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsR0FBRyxFQUFFLEVBQVA7QUFBV0MsTUFBQUEsR0FBRyxFQUFFLENBQUM7QUFBakIsS0FEUztBQUVqQkMsSUFBQUEsSUFBSSxFQUFFO0FBRlcsR0FBbkI7QUFLQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0RWLFVBQXBELENBQVo7QUFDQSxTQUFPSyxHQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9zY3JpcHRzL2xvYWRtYXAuanM/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkTWFwKCkge1xuICBjb25zb2xlLmxvZygnbG9hZG1hcCcpXG5cbiAgY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6IHsgbGF0OiAzNywgbG5nOiAtOTYgfSxcbiAgICB6b29tOiA1LFxuICB9XG5cbiAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwgbWFwT3B0aW9ucyk7XG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCB7bG9hZE1hcH1cblxuIl0sIm5hbWVzIjpbImxvYWRNYXAiLCJjb25zb2xlIiwibG9nIiwibWFwT3B0aW9ucyIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/loadmap.js\n");

/***/ }),

/***/ "./src/scripts/new-elements.js":
/*!*************************************!*\
  !*** ./src/scripts/new-elements.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInputDiv\": function() { return /* binding */ createInputDiv; },\n/* harmony export */   \"createRemoveBtn\": function() { return /* binding */ createRemoveBtn; },\n/* harmony export */   \"createSubmitButton\": function() { return /* binding */ createSubmitButton; },\n/* harmony export */   \"createDisabledInputLi\": function() { return /* binding */ createDisabledInputLi; }\n/* harmony export */ });\n\n\nfunction createInputDiv() {\n  var submitBtn = createSubmitButton();\n  var removeBtn = createRemoveBtn();\n  var divContainer = document.createElement('div');\n  divContainer.classList.add('search-div');\n  var addressInput = document.createElement('input');\n  addressInput.classList.add('address-input');\n  addressInput.setAttribute('type', 'text');\n  addressInput.setAttribute('spellcheck', 'false');\n  addressInput.setAttribute('placeholder', 'Enter Additional Address');\n  divContainer.appendChild(addressInput);\n  divContainer.appendChild(submitBtn);\n  divContainer.appendChild(removeBtn);\n  return divContainer;\n}\n\nfunction createSubmitButton() {\n  var submitBtn = document.createElement('button');\n  submitBtn.classList.add('submit-address');\n  submitBtn.textContent = '✔️';\n  submitBtn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    console.log('check');\n  });\n  return submitBtn;\n}\n\nfunction createRemoveBtn() {\n  var removeBtn = document.createElement('button');\n  removeBtn.classList.add('remove-address');\n  removeBtn.textContent = '🗑️';\n  removeBtn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    console.log('trash');\n    removeLi(e);\n  });\n  return removeBtn;\n}\n\nfunction createDisabledInputLi() {\n  var disabledLi = document.createElement('li');\n  disabledLi.classList.add('address-list-item');\n  disabledLi.classList.add('input-additional');\n  return disabledLi;\n}\n\nfunction removeLi(e) {\n  var currLi = e.target.parentNode.parentNode;\n  currLi.remove();\n\n  if (document.querySelectorAll('.address-list li').length === 10) {\n    var hiddenLi = document.querySelector(\"li.hidden\");\n    console.log(hiddenLi);\n    hiddenLi.classList.remove('hidden');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9uZXctZWxlbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUksU0FBUyxHQUFHRixrQkFBa0IsRUFBcEM7QUFDQSxNQUFNRyxTQUFTLEdBQUdKLGVBQWUsRUFBakM7QUFFQSxNQUFNSyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRixFQUFBQSxZQUFZLENBQUNHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFlBQTNCO0FBRUEsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBckI7QUFDQUcsRUFBQUEsWUFBWSxDQUFDRixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixlQUEzQjtBQUNBQyxFQUFBQSxZQUFZLENBQUNDLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsTUFBbEM7QUFDQUQsRUFBQUEsWUFBWSxDQUFDQyxZQUFiLENBQTBCLFlBQTFCLEVBQXdDLE9BQXhDO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0MsWUFBYixDQUEwQixhQUExQixFQUF5QywwQkFBekM7QUFHQU4sRUFBQUEsWUFBWSxDQUFDTyxXQUFiLENBQXlCRixZQUF6QjtBQUNBTCxFQUFBQSxZQUFZLENBQUNPLFdBQWIsQ0FBeUJULFNBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ08sV0FBYixDQUF5QlIsU0FBekI7QUFDQSxTQUFPQyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU0osa0JBQVQsR0FBOEI7QUFDNUIsTUFBTUUsU0FBUyxHQUFHRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQUosRUFBQUEsU0FBUyxDQUFDSyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixnQkFBeEI7QUFDQU4sRUFBQUEsU0FBUyxDQUFDVSxXQUFWLEdBQXlCLElBQXpCO0FBQ0FWLEVBQUFBLFNBQVMsQ0FBQ1csZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQUMsQ0FBQyxFQUFHO0FBQ3RDQSxJQUFBQSxDQUFDLENBQUNDLGVBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNELEdBSEQ7QUFJQSxTQUFPZixTQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsZUFBVCxHQUEyQjtBQUN6QixNQUFNSSxTQUFTLEdBQUdFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBSCxFQUFBQSxTQUFTLENBQUNJLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLGdCQUF4QjtBQUNBTCxFQUFBQSxTQUFTLENBQUNTLFdBQVYsR0FBeUIsS0FBekI7QUFDQVQsRUFBQUEsU0FBUyxDQUFDVSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFBQyxDQUFDLEVBQUc7QUFDdENBLElBQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FDLElBQUFBLFFBQVEsQ0FBQ0osQ0FBRCxDQUFSO0FBQ0QsR0FKRDtBQUtBLFNBQU9YLFNBQVA7QUFDRDs7QUFFRCxTQUFTRixxQkFBVCxHQUFpQztBQUMvQixNQUFNa0IsVUFBVSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7QUFDQWEsRUFBQUEsVUFBVSxDQUFDWixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixtQkFBekI7QUFDQVcsRUFBQUEsVUFBVSxDQUFDWixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQkFBekI7QUFDQSxTQUFPVyxVQUFQO0FBQ0Q7O0FBRUQsU0FBU0QsUUFBVCxDQUFrQkosQ0FBbEIsRUFBcUI7QUFDbkIsTUFBTU0sTUFBTSxHQUFHTixDQUFDLENBQUNPLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQkEsVUFBbkM7QUFDQUYsRUFBQUEsTUFBTSxDQUFDRyxNQUFQOztBQUVBLE1BQUlsQixRQUFRLENBQUNtQixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE1BQTlDLEtBQXlELEVBQTdELEVBQWlFO0FBQy9ELFFBQU1DLFFBQVEsR0FBR3JCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQVgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlTLFFBQVo7QUFFQUEsSUFBQUEsUUFBUSxDQUFDbkIsU0FBVCxDQUFtQmdCLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL3NjcmlwdHMvbmV3LWVsZW1lbnRzLmpzP2FjNDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjcmVhdGVJbnB1dERpdiwgY3JlYXRlUmVtb3ZlQnRuLCBjcmVhdGVTdWJtaXRCdXR0b24sY3JlYXRlRGlzYWJsZWRJbnB1dExpfVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dERpdigpIHtcbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlU3VibWl0QnV0dG9uKCk7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZVJlbW92ZUJ0bigpO1xuXG4gIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWRpdicpO1xuXG4gIGNvbnN0IGFkZHJlc3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGFkZHJlc3NJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLWlucHV0Jyk7XG4gIGFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBhZGRyZXNzSW5wdXQuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ2ZhbHNlJyk7XG4gIGFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIEFkZGl0aW9uYWwgQWRkcmVzcycpO1xuXG5cbiAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NJbnB1dCk7XG4gIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgcmV0dXJuIGRpdkNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWFkZHJlc3MnKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ICA9ICfinJTvuI8nO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc29sZS5sb2coJ2NoZWNrJylcbiAgfSk7XG4gIHJldHVybiBzdWJtaXRCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ0bigpIHtcbiAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYWRkcmVzcycpO1xuICByZW1vdmVCdG4udGV4dENvbnRlbnQgID0gJ/Cfl5HvuI8nXG4gIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZygndHJhc2gnKTtcbiAgICByZW1vdmVMaShlKTtcbiAgfSlcbiAgcmV0dXJuIHJlbW92ZUJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzYWJsZWRJbnB1dExpKCkge1xuICBjb25zdCBkaXNhYmxlZExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgZGlzYWJsZWRMaS5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLWxpc3QtaXRlbScpO1xuICBkaXNhYmxlZExpLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWFkZGl0aW9uYWwnKTtcbiAgcmV0dXJuIGRpc2FibGVkTGk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpKGUpIHtcbiAgY29uc3QgY3VyckxpID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjdXJyTGkucmVtb3ZlKCk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWxpc3QgbGknKS5sZW5ndGggPT09IDEwKSB7XG4gICAgY29uc3QgaGlkZGVuTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGkuaGlkZGVuXCIpOyBcbiAgICBjb25zb2xlLmxvZyhoaWRkZW5MaSlcblxuICAgIGhpZGRlbkxpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59Il0sIm5hbWVzIjpbImNyZWF0ZUlucHV0RGl2IiwiY3JlYXRlUmVtb3ZlQnRuIiwiY3JlYXRlU3VibWl0QnV0dG9uIiwiY3JlYXRlRGlzYWJsZWRJbnB1dExpIiwic3VibWl0QnRuIiwicmVtb3ZlQnRuIiwiZGl2Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkcmVzc0lucHV0Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUxpIiwiZGlzYWJsZWRMaSIsImN1cnJMaSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaGlkZGVuTGkiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/new-elements.js\n");

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; },\n/* harmony export */   \"setupStartingInput\": function() { return /* binding */ setupStartingInput; }\n/* harmony export */ });\n/* harmony import */ var _loadmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _new_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-elements */ \"./src/scripts/new-elements.js\");\n\n\n\nfunction setupStartingInput() {\n  var startLi = document.querySelector('.start-address');\n  var submitBtn = startLi.querySelector('.submit-address');\n  submitBtn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    console.log('check');\n  });\n}\n\nfunction handleNewInput() {\n  var addressUl = document.querySelector(\".address-list\");\n  addressUl.addEventListener('click', function (e) {\n    addNewInputBar(e);\n  });\n}\n\nfunction addAutocomplete(input) {\n  var autocompleteOptions = {\n    types: []\n  };\n  var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);\n}\n\nfunction addNewInputBar(e) {\n  if (e.target && e.target.matches('li.input-additional')) {\n    var newLi = document.querySelector('.input-additional');\n    var addressUl = document.querySelector(\".address-list\");\n    newLi.appendChild((0,_new_elements__WEBPACK_IMPORTED_MODULE_1__.createInputDiv)());\n    newLi.classList.remove('input-additional');\n    var disabledLi = (0,_new_elements__WEBPACK_IMPORTED_MODULE_1__.createDisabledInputLi)();\n    addressUl.appendChild(disabledLi);\n\n    if (document.querySelectorAll('.address-list li').length === 11) {\n      disabledLi.classList.add('hidden');\n    }\n\n    var input = newLi.querySelector('.address-input');\n    addAutocomplete(input);\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNLLGtCQUFULEdBQThCO0FBQzVCLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsT0FBTyxDQUFDRSxhQUFSLENBQXNCLGlCQUF0QixDQUFsQjtBQUNBQyxFQUFBQSxTQUFTLENBQUNDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUFDLENBQUMsRUFBRTtBQUNyQ0EsSUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBU0MsY0FBVCxHQUEwQjtBQUN4QixNQUFNQyxTQUFTLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFsQjtBQUNBUSxFQUFBQSxTQUFTLENBQUNOLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUFDLENBQUMsRUFBRTtBQUNyQ00sSUFBQUEsY0FBYyxDQUFDTixDQUFELENBQWQ7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU08sZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsTUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJDLElBQUFBLEtBQUssRUFBRTtBQURtQixHQUE1QjtBQUdBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsTUFBWixDQUFtQkMsWUFBdkIsQ0FBb0NQLEtBQXBDLEVBQTJDQyxtQkFBM0MsQ0FBckI7QUFDRDs7QUFFRCxTQUFTSCxjQUFULENBQXdCTixDQUF4QixFQUEyQjtBQUN6QixNQUFJQSxDQUFDLENBQUNnQixNQUFGLElBQVloQixDQUFDLENBQUNnQixNQUFGLENBQVNDLE9BQVQsQ0FBaUIscUJBQWpCLENBQWhCLEVBQXdEO0FBQ3RELFFBQU1DLEtBQUssR0FBR3RCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBZDtBQUNBLFFBQU1RLFNBQVMsR0FBR1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0FxQixJQUFBQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0I3Qiw2REFBYyxFQUFoQztBQUNBNEIsSUFBQUEsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixrQkFBdkI7QUFFQSxRQUFNQyxVQUFVLEdBQUc3QixvRUFBcUIsRUFBeEM7QUFDQVksSUFBQUEsU0FBUyxDQUFDYyxXQUFWLENBQXNCRyxVQUF0Qjs7QUFFQSxRQUFJMUIsUUFBUSxDQUFDMkIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxNQUE5QyxLQUF5RCxFQUE3RCxFQUFpRTtBQUMvREYsTUFBQUEsVUFBVSxDQUFDRixTQUFYLENBQXFCSyxHQUFyQixDQUF5QixRQUF6QjtBQUNEOztBQUVELFFBQU1qQixLQUFLLEdBQUdVLEtBQUssQ0FBQ3JCLGFBQU4sQ0FBb0IsZ0JBQXBCLENBQWQ7QUFDQVUsSUFBQUEsZUFBZSxDQUFDQyxLQUFELENBQWY7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyLURpcmVjdGlvbnMvLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzPzJjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZE1hcCB9IGZyb20gXCIuL2xvYWRtYXBcIjtcbmltcG9ydCB7Y3JlYXRlSW5wdXREaXYsIGNyZWF0ZVJlbW92ZUJ0biwgY3JlYXRlU3VibWl0QnV0dG9uLCBcbiAgY3JlYXRlRGlzYWJsZWRJbnB1dExpfSBmcm9tICcuL25ldy1lbGVtZW50cyc7XG5cbmZ1bmN0aW9uIHNldHVwU3RhcnRpbmdJbnB1dCgpIHtcbiAgY29uc3Qgc3RhcnRMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1hZGRyZXNzJyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IHN0YXJ0TGkucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1hZGRyZXNzJyk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXdJbnB1dCgpIHtcbiAgY29uc3QgYWRkcmVzc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWxpc3RcIik7XG4gIGFkZHJlc3NVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICBhZGROZXdJbnB1dEJhcihlKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQXV0b2NvbXBsZXRlKGlucHV0KSB7XG4gIGNvbnN0IGF1dG9jb21wbGV0ZU9wdGlvbnMgPSB7XG4gICAgdHlwZXM6IFtdXG4gIH1cbiAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoaW5wdXQsIGF1dG9jb21wbGV0ZU9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGFkZE5ld0lucHV0QmFyKGUpIHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2xpLmlucHV0LWFkZGl0aW9uYWwnKSl7XG4gICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYWRkaXRpb25hbCcpO1xuICAgIGNvbnN0IGFkZHJlc3NVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcmVzcy1saXN0XCIpO1xuICAgIG5ld0xpLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0RGl2KCkpO1xuICAgIG5ld0xpLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWFkZGl0aW9uYWwnKVxuXG4gICAgY29uc3QgZGlzYWJsZWRMaSA9IGNyZWF0ZURpc2FibGVkSW5wdXRMaSgpXG4gICAgYWRkcmVzc1VsLmFwcGVuZENoaWxkKGRpc2FibGVkTGkpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWxpc3QgbGknKS5sZW5ndGggPT09IDExKSB7XG4gICAgICBkaXNhYmxlZExpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXQgPSBuZXdMaS5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1pbnB1dCcpXG4gICAgYWRkQXV0b2NvbXBsZXRlKGlucHV0KVxuICB9XG59XG5cbmV4cG9ydCB7aGFuZGxlTmV3SW5wdXQsIHNldHVwU3RhcnRpbmdJbnB1dH0iXSwibmFtZXMiOlsibG9hZE1hcCIsImNyZWF0ZUlucHV0RGl2IiwiY3JlYXRlUmVtb3ZlQnRuIiwiY3JlYXRlU3VibWl0QnV0dG9uIiwiY3JlYXRlRGlzYWJsZWRJbnB1dExpIiwic2V0dXBTdGFydGluZ0lucHV0Iiwic3RhcnRMaSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN1Ym1pdEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU5ld0lucHV0IiwiYWRkcmVzc1VsIiwiYWRkTmV3SW5wdXRCYXIiLCJhZGRBdXRvY29tcGxldGUiLCJpbnB1dCIsImF1dG9jb21wbGV0ZU9wdGlvbnMiLCJ0eXBlcyIsImF1dG9jb21wbGV0ZSIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwibmV3TGkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRpc2FibGVkTGkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

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