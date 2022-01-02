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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar */ \"./src/scripts/sidebar.js\");\n\n\n // console.log('sanity check, index.js')\n// Create the script tag, set the appropriate attributes\n\nvar script = document.createElement('script');\nscript.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.config.api, \"&callback=initMap&libraries=places\");\nscript.async = true; // Append the 'script' element to 'head'\n\ndocument.head.appendChild(script); // Attach your callback function to the `window` object\n\nwindow.initMap = function () {\n  console.log('initMap');\n  (0,_scripts_loadmap__WEBPACK_IMPORTED_MODULE_1__.loadMap)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.setupStartingInput)();\n  (0,_scripts_sidebar__WEBPACK_IMPORTED_MODULE_2__.handleNewInput)();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1JLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLHlEQUE0RFAsK0NBQTVEO0FBQ0FJLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsRUFFQTs7QUFDQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEdBRUE7O0FBQ0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FkLEVBQUFBLHlEQUFPO0FBQ1BFLEVBQUFBLG9FQUFrQjtBQUNsQkQsRUFBQUEsZ0VBQWM7QUFDZixDQUxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmV0dGVyLURpcmVjdGlvbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtsb2FkTWFwfSBmcm9tICcuL3NjcmlwdHMvbG9hZG1hcCdcbmltcG9ydCB7aGFuZGxlTmV3SW5wdXQsIHNldHVwU3RhcnRpbmdJbnB1dH0gZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInXG5cbi8vIGNvbnNvbGUubG9nKCdzYW5pdHkgY2hlY2ssIGluZGV4LmpzJylcblxuLy8gQ3JlYXRlIHRoZSBzY3JpcHQgdGFnLCBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXNcbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmFwaX0mY2FsbGJhY2s9aW5pdE1hcCZsaWJyYXJpZXM9cGxhY2VzYDtcbnNjcmlwdC5hc3luYyA9IHRydWU7XG5cbi8vIEFwcGVuZCB0aGUgJ3NjcmlwdCcgZWxlbWVudCB0byAnaGVhZCdcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuLy8gQXR0YWNoIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGB3aW5kb3dgIG9iamVjdFxud2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2luaXRNYXAnKTtcbiAgbG9hZE1hcCgpO1xuICBzZXR1cFN0YXJ0aW5nSW5wdXQoKTtcbiAgaGFuZGxlTmV3SW5wdXQoKTtcbn07XG4iXSwibmFtZXMiOlsiY29uZmlnIiwibG9hZE1hcCIsImhhbmRsZU5ld0lucHV0Iiwic2V0dXBTdGFydGluZ0lucHV0Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXBpIiwiYXN5bmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJpbml0TWFwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInputDiv\": function() { return /* binding */ createInputDiv; },\n/* harmony export */   \"createRemoveBtn\": function() { return /* binding */ createRemoveBtn; },\n/* harmony export */   \"createDisabledInputLi\": function() { return /* binding */ createDisabledInputLi; }\n/* harmony export */ });\n\n\nfunction createInputDiv() {\n  // const submitBtn = createSubmitButton();\n  var removeBtn = createRemoveBtn();\n  var divContainer = document.createElement('div');\n  divContainer.classList.add('search-div');\n  var addressInput = document.createElement('input');\n  addressInput.classList.add('address-input');\n  addressInput.setAttribute('type', 'text');\n  addressInput.setAttribute('spellcheck', 'false');\n  addressInput.setAttribute('placeholder', 'Enter Additional Address');\n  divContainer.appendChild(addressInput); // divContainer.appendChild(submitBtn);\n\n  divContainer.appendChild(removeBtn);\n  return divContainer;\n}\n\nfunction createRemoveBtn() {\n  var removeBtn = document.createElement('button');\n  removeBtn.classList.add('remove-address');\n  removeBtn.textContent = '🗑️';\n  removeBtn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    console.log('trash');\n    removeLi(e);\n  });\n  return removeBtn;\n}\n\nfunction createDisabledInputLi() {\n  var disabledLi = document.createElement('li');\n  disabledLi.classList.add('address-list-item');\n  disabledLi.classList.add('input-additional');\n  return disabledLi;\n}\n\nfunction removeLi(e) {\n  var currLi = e.target.parentNode.parentNode;\n  currLi.remove();\n\n  if (document.querySelectorAll('.address-list li').length === 10) {\n    var hiddenLi = document.querySelector(\"li.hidden\");\n    console.log(hiddenLi);\n    hiddenLi.classList.remove('hidden');\n  }\n} // function createSubmitButton() {\n//   const submitBtn = document.createElement('button');\n//   submitBtn.classList.add('submit-address');\n//   submitBtn.textContent  = '✔️';\n//   submitBtn.addEventListener('click', e=> {\n//     e.stopPropagation();\n//     submitAddress(e);\n//   });\n//   return submitBtn;\n// }\n// function submitAddress(e) {\n//   const parentDiv = e.target.parentNode;\n//   const input = parentDiv.querySelector('input.address-input');\n//   console.log(input.value)\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9uZXctZWxlbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsY0FBVCxHQUEwQjtBQUN4QjtBQUNBLE1BQU1HLFNBQVMsR0FBR0YsZUFBZSxFQUFqQztBQUVBLE1BQU1HLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FGLEVBQUFBLFlBQVksQ0FBQ0csU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsWUFBM0I7QUFFQSxNQUFNQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFyQjtBQUNBRyxFQUFBQSxZQUFZLENBQUNGLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGVBQTNCO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0MsWUFBYixDQUEwQixNQUExQixFQUFrQyxNQUFsQztBQUNBRCxFQUFBQSxZQUFZLENBQUNDLFlBQWIsQ0FBMEIsWUFBMUIsRUFBd0MsT0FBeEM7QUFDQUQsRUFBQUEsWUFBWSxDQUFDQyxZQUFiLENBQTBCLGFBQTFCLEVBQXlDLDBCQUF6QztBQUdBTixFQUFBQSxZQUFZLENBQUNPLFdBQWIsQ0FBeUJGLFlBQXpCLEVBZHdCLENBZXhCOztBQUNBTCxFQUFBQSxZQUFZLENBQUNPLFdBQWIsQ0FBeUJSLFNBQXpCO0FBQ0EsU0FBT0MsWUFBUDtBQUNEOztBQUdELFNBQVNILGVBQVQsR0FBMkI7QUFDekIsTUFBTUUsU0FBUyxHQUFHRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQUgsRUFBQUEsU0FBUyxDQUFDSSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixnQkFBeEI7QUFDQUwsRUFBQUEsU0FBUyxDQUFDUyxXQUFWLEdBQXlCLEtBQXpCO0FBRUFULEVBQUFBLFNBQVMsQ0FBQ1UsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQUMsQ0FBQyxFQUFHO0FBQ3RDQSxJQUFBQSxDQUFDLENBQUNDLGVBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBQyxJQUFBQSxRQUFRLENBQUNKLENBQUQsQ0FBUjtBQUNELEdBSkQ7QUFLQSxTQUFPWCxTQUFQO0FBQ0Q7O0FBRUQsU0FBU0QscUJBQVQsR0FBaUM7QUFDL0IsTUFBTWlCLFVBQVUsR0FBR2QsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQW5CO0FBQ0FhLEVBQUFBLFVBQVUsQ0FBQ1osU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsbUJBQXpCO0FBQ0FXLEVBQUFBLFVBQVUsQ0FBQ1osU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsa0JBQXpCO0FBQ0EsU0FBT1csVUFBUDtBQUNEOztBQUVELFNBQVNELFFBQVQsQ0FBa0JKLENBQWxCLEVBQXFCO0FBQ25CLE1BQU1NLE1BQU0sR0FBR04sQ0FBQyxDQUFDTyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JBLFVBQW5DO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0csTUFBUDs7QUFFQSxNQUFJbEIsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxNQUE5QyxLQUF5RCxFQUE3RCxFQUFpRTtBQUMvRCxRQUFNQyxRQUFRLEdBQUdyQixRQUFRLENBQUNzQixhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0FYLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxRQUFaO0FBRUFBLElBQUFBLFFBQVEsQ0FBQ25CLFNBQVQsQ0FBbUJnQixNQUFuQixDQUEwQixRQUExQjtBQUNEO0FBQ0YsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CZXR0ZXItRGlyZWN0aW9ucy8uL3NyYy9zY3JpcHRzL25ldy1lbGVtZW50cy5qcz9hYzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y3JlYXRlSW5wdXREaXYsIGNyZWF0ZVJlbW92ZUJ0bixjcmVhdGVEaXNhYmxlZElucHV0TGl9XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0RGl2KCkge1xuICAvLyBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVTdWJtaXRCdXR0b24oKTtcbiAgY29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlUmVtb3ZlQnRuKCk7XG5cbiAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtZGl2Jyk7XG5cbiAgY29uc3QgYWRkcmVzc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkcmVzc0lucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MtaW5wdXQnKTtcbiAgYWRkcmVzc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcbiAgYWRkcmVzc0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgQWRkaXRpb25hbCBBZGRyZXNzJyk7XG5cblxuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0lucHV0KTtcbiAgLy8gZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICByZXR1cm4gZGl2Q29udGFpbmVyXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnRuKCkge1xuICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1hZGRyZXNzJyk7XG4gIHJlbW92ZUJ0bi50ZXh0Q29udGVudCAgPSAn8J+Xke+4jydcblxuICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc29sZS5sb2coJ3RyYXNoJyk7XG4gICAgcmVtb3ZlTGkoZSk7XG4gIH0pXG4gIHJldHVybiByZW1vdmVCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkSW5wdXRMaSgpIHtcbiAgY29uc3QgZGlzYWJsZWRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRpc2FibGVkTGkuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1saXN0LWl0ZW0nKTtcbiAgZGlzYWJsZWRMaS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1hZGRpdGlvbmFsJyk7XG4gIHJldHVybiBkaXNhYmxlZExpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaShlKSB7XG4gIGNvbnN0IGN1cnJMaSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY3VyckxpLnJlbW92ZSgpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1saXN0IGxpJykubGVuZ3RoID09PSAxMCkge1xuICAgIGNvbnN0IGhpZGRlbkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLmhpZGRlblwiKTsgXG4gICAgY29uc29sZS5sb2coaGlkZGVuTGkpXG5cbiAgICBoaWRkZW5MaS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24oKSB7XG4vLyAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWFkZHJlc3MnKTtcbi8vICAgc3VibWl0QnRuLnRleHRDb250ZW50ICA9ICfinJTvuI8nO1xuXG4vLyAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiB7XG4vLyAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbi8vICAgICBzdWJtaXRBZGRyZXNzKGUpO1xuLy8gICB9KTtcbi8vICAgcmV0dXJuIHN1Ym1pdEJ0bjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc3VibWl0QWRkcmVzcyhlKSB7XG4vLyAgIGNvbnN0IHBhcmVudERpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4vLyAgIGNvbnN0IGlucHV0ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmFkZHJlc3MtaW5wdXQnKTtcbi8vICAgY29uc29sZS5sb2coaW5wdXQudmFsdWUpXG4vLyB9Il0sIm5hbWVzIjpbImNyZWF0ZUlucHV0RGl2IiwiY3JlYXRlUmVtb3ZlQnRuIiwiY3JlYXRlRGlzYWJsZWRJbnB1dExpIiwicmVtb3ZlQnRuIiwiZGl2Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkcmVzc0lucHV0Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUxpIiwiZGlzYWJsZWRMaSIsImN1cnJMaSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaGlkZGVuTGkiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/new-elements.js\n");

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNewInput\": function() { return /* binding */ handleNewInput; },\n/* harmony export */   \"setupStartingInput\": function() { return /* binding */ setupStartingInput; }\n/* harmony export */ });\n/* harmony import */ var _loadmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadmap */ \"./src/scripts/loadmap.js\");\n/* harmony import */ var _new_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-elements */ \"./src/scripts/new-elements.js\");\n\n\n\nfunction setupStartingInput() {\n  var startLi = document.querySelector('.start-address'); // const submitBtn = startLi.querySelector('.submit-address');\n  // submitBtn.addEventListener('click', e=>{\n  //   e.stopPropagation();\n  //   console.log('check');\n  // })\n\n  var startInput = document.querySelector('.start-address input');\n  addAutocomplete(startInput);\n}\n\nfunction handleNewInput() {\n  var addressUl = document.querySelector(\".address-list\");\n  addressUl.addEventListener('click', function (e) {\n    addNewInputBar(e);\n  });\n}\n\nfunction addAutocomplete(input) {\n  var autocompleteOptions = {\n    types: []\n  };\n  var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);\n}\n\nfunction addNewInputBar(e) {\n  if (e.target && e.target.matches('li.input-additional')) {\n    var newLi = document.querySelector('.input-additional');\n    var addressUl = document.querySelector(\".address-list\");\n    newLi.appendChild((0,_new_elements__WEBPACK_IMPORTED_MODULE_1__.createInputDiv)());\n    newLi.classList.remove('input-additional');\n    var disabledLi = (0,_new_elements__WEBPACK_IMPORTED_MODULE_1__.createDisabledInputLi)();\n    addressUl.appendChild(disabledLi);\n\n    if (document.querySelectorAll('.address-list li').length === 11) {\n      disabledLi.classList.add('hidden');\n    }\n\n    var input = newLi.querySelector('.address-input');\n    addAutocomplete(input);\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNLLGtCQUFULEdBQThCO0FBQzVCLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFoQixDQUQ0QixDQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFuQjtBQUNBRSxFQUFBQSxlQUFlLENBQUNELFVBQUQsQ0FBZjtBQUNEOztBQUVELFNBQVNFLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsU0FBUyxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQUksRUFBQUEsU0FBUyxDQUFDQyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFBQyxDQUFDLEVBQUU7QUFDckNDLElBQUFBLGNBQWMsQ0FBQ0QsQ0FBRCxDQUFkO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNKLGVBQVQsQ0FBeUJNLEtBQXpCLEVBQWdDO0FBQzlCLE1BQU1DLG1CQUFtQixHQUFHO0FBQzFCQyxJQUFBQSxLQUFLLEVBQUU7QUFEbUIsR0FBNUI7QUFHQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBbUJDLFlBQXZCLENBQW9DUCxLQUFwQyxFQUEyQ0MsbUJBQTNDLENBQXJCO0FBQ0Q7O0FBRUQsU0FBU0YsY0FBVCxDQUF3QkQsQ0FBeEIsRUFBMkI7QUFDekIsTUFBSUEsQ0FBQyxDQUFDVSxNQUFGLElBQVlWLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxPQUFULENBQWlCLHFCQUFqQixDQUFoQixFQUF3RDtBQUN0RCxRQUFNQyxLQUFLLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWQ7QUFDQSxRQUFNSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFsQjtBQUNBa0IsSUFBQUEsS0FBSyxDQUFDQyxXQUFOLENBQWtCMUIsNkRBQWMsRUFBaEM7QUFDQXlCLElBQUFBLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsa0JBQXZCO0FBRUEsUUFBTUMsVUFBVSxHQUFHMUIsb0VBQXFCLEVBQXhDO0FBQ0FRLElBQUFBLFNBQVMsQ0FBQ2UsV0FBVixDQUFzQkcsVUFBdEI7O0FBRUEsUUFBSXZCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsTUFBOUMsS0FBeUQsRUFBN0QsRUFBaUU7QUFDL0RGLE1BQUFBLFVBQVUsQ0FBQ0YsU0FBWCxDQUFxQkssR0FBckIsQ0FBeUIsUUFBekI7QUFDRDs7QUFFRCxRQUFNakIsS0FBSyxHQUFHVSxLQUFLLENBQUNsQixhQUFOLENBQW9CLGdCQUFwQixDQUFkO0FBQ0FFLElBQUFBLGVBQWUsQ0FBQ00sS0FBRCxDQUFmO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0JldHRlci1EaXJlY3Rpb25zLy4vc3JjL3NjcmlwdHMvc2lkZWJhci5qcz8yYzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRNYXAgfSBmcm9tIFwiLi9sb2FkbWFwXCI7XG5pbXBvcnQge2NyZWF0ZUlucHV0RGl2LCBjcmVhdGVSZW1vdmVCdG4sIGNyZWF0ZVN1Ym1pdEJ1dHRvbiwgXG4gIGNyZWF0ZURpc2FibGVkSW5wdXRMaX0gZnJvbSAnLi9uZXctZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBzZXR1cFN0YXJ0aW5nSW5wdXQoKSB7XG4gIGNvbnN0IHN0YXJ0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYWRkcmVzcycpO1xuICAvLyBjb25zdCBzdWJtaXRCdG4gPSBzdGFydExpLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYWRkcmVzcycpO1xuICAvLyBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XG4gIC8vICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgLy8gICBjb25zb2xlLmxvZygnY2hlY2snKTtcbiAgLy8gfSlcblxuICBjb25zdCBzdGFydElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWFkZHJlc3MgaW5wdXQnKTtcbiAgYWRkQXV0b2NvbXBsZXRlKHN0YXJ0SW5wdXQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXdJbnB1dCgpIHtcbiAgY29uc3QgYWRkcmVzc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWxpc3RcIik7XG4gIGFkZHJlc3NVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICBhZGROZXdJbnB1dEJhcihlKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQXV0b2NvbXBsZXRlKGlucHV0KSB7XG4gIGNvbnN0IGF1dG9jb21wbGV0ZU9wdGlvbnMgPSB7XG4gICAgdHlwZXM6IFtdXG4gIH1cbiAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoaW5wdXQsIGF1dG9jb21wbGV0ZU9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGFkZE5ld0lucHV0QmFyKGUpIHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2xpLmlucHV0LWFkZGl0aW9uYWwnKSl7XG4gICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYWRkaXRpb25hbCcpO1xuICAgIGNvbnN0IGFkZHJlc3NVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcmVzcy1saXN0XCIpO1xuICAgIG5ld0xpLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0RGl2KCkpO1xuICAgIG5ld0xpLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWFkZGl0aW9uYWwnKVxuXG4gICAgY29uc3QgZGlzYWJsZWRMaSA9IGNyZWF0ZURpc2FibGVkSW5wdXRMaSgpXG4gICAgYWRkcmVzc1VsLmFwcGVuZENoaWxkKGRpc2FibGVkTGkpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWxpc3QgbGknKS5sZW5ndGggPT09IDExKSB7XG4gICAgICBkaXNhYmxlZExpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXQgPSBuZXdMaS5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1pbnB1dCcpXG4gICAgYWRkQXV0b2NvbXBsZXRlKGlucHV0KVxuICB9XG59XG5cbmV4cG9ydCB7aGFuZGxlTmV3SW5wdXQsIHNldHVwU3RhcnRpbmdJbnB1dH0iXSwibmFtZXMiOlsibG9hZE1hcCIsImNyZWF0ZUlucHV0RGl2IiwiY3JlYXRlUmVtb3ZlQnRuIiwiY3JlYXRlU3VibWl0QnV0dG9uIiwiY3JlYXRlRGlzYWJsZWRJbnB1dExpIiwic2V0dXBTdGFydGluZ0lucHV0Iiwic3RhcnRMaSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0SW5wdXQiLCJhZGRBdXRvY29tcGxldGUiLCJoYW5kbGVOZXdJbnB1dCIsImFkZHJlc3NVbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYWRkTmV3SW5wdXRCYXIiLCJpbnB1dCIsImF1dG9jb21wbGV0ZU9wdGlvbnMiLCJ0eXBlcyIsImF1dG9jb21wbGV0ZSIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwibmV3TGkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRpc2FibGVkTGkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/sidebar.js\n");

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