webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./pages/epk.js":
/*!**********************!*\
  !*** ./pages/epk.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./epk.module.scss */ \"./pages/epk.module.scss\");\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_epk_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\Users\\\\Joakim\\\\wailnofront\\\\pages\\\\epk.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[title == \\\"EPK\\\"][0]{\\n  title,\\n  body,\\n  pressphotos\\n\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// epk.js\n\n\n\n\n\n\n\nvar EPK = function EPK(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$pressphotos = props.pressphotos,\n      pressphotos = _props$pressphotos === void 0 ? [] : _props$pressphotos;\n  return __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.EPK,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"container-horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.epkTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, title)), __jsx(\"div\", {\n    \"class\": \"container-horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    blocks: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), pressphotos && __jsx(\"div\", {\n    \"class\": \"container-vetical\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"Press photos\"), pressphotos.map(function (pressphoto) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.pressPhoto,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      href: urlFor(pressphoto).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"item\",\n      src: urlFor(pressphoto).width(400).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    })));\n  }))));\n};\n\n_c = EPK;\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nEPK.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EPK);\n\nvar _c;\n\n$RefreshReg$(_c, \"EPK\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsuanM/ZDgwMCJdLCJuYW1lcyI6WyJFUEsiLCJwcm9wcyIsInRpdGxlIiwiYm9keSIsInByZXNzcGhvdG9zIiwic3R5bGVzIiwiZXBrVGl0bGUiLCJtYXAiLCJwcmVzc3Bob3RvIiwicHJlc3NQaG90byIsInVybEZvciIsInVybCIsIndpZHRoIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLHFCQUtqQkEsS0FMaUIsQ0FFbkJDLEtBRm1CO0FBQUEsTUFFbkJBLEtBRm1CLDZCQUVYLGVBRlc7QUFBQSxvQkFLakJELEtBTGlCLENBR25CRSxJQUhtQjtBQUFBLE1BR25CQSxJQUhtQiw0QkFHWixFQUhZO0FBQUEsMkJBS2pCRixLQUxpQixDQUluQkcsV0FKbUI7QUFBQSxNQUluQkEsV0FKbUIsbUNBSUwsRUFKSztBQU9yQixTQUNFO0FBQUssTUFBRSxFQUFFQyx1REFBTSxDQUFDTCxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLE1BQUUsRUFBRUssdURBQU0sQ0FBQ0MsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCSixLQUExQixDQURGLENBREYsRUFJRTtBQUFLLGFBQU0sc0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBYyxVQUFNLEVBQUVDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHQyxXQUFXLElBQ1Y7QUFBSyxhQUFNLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUdBLFdBQVcsQ0FBQ0csR0FBWixDQUFnQixVQUFBQyxVQUFVO0FBQUEsV0FDM0I7QUFBSyxlQUFTLEVBQUVILHVEQUFNLENBQUNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFHLFVBQUksRUFBRUMsTUFBTSxDQUFDRixVQUFELENBQU4sQ0FBbUJHLEdBQW5CLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUssZUFBTSxNQUFYO0FBQWtCLFNBQUcsRUFBRUQsTUFBTSxDQUFDRixVQUFELENBQU4sQ0FBbUJJLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCRCxHQUE5QixFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsQ0FEQSxDQUQyQjtBQUFBLEdBQTFCLENBRkgsQ0FISixDQUpGLENBREY7QUFzQkQsQ0E3QkQ7O0tBQU1YLEc7O0FBK0JOLFNBQVNVLE1BQVQsQ0FBaUJHLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBR0QsSUFBTUksS0FBSyxHQUFHQywyQ0FBSCxtQkFBWDs7QUFPQWxCLEdBQUcsQ0FBQ21CLGVBQUo7QUFBQSw4TEFBc0IsaUJBQWdCQyxPQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCO0FBRG9CLGtDQUVFQSxPQUFPLENBQUNILEtBRlYsQ0FFWkksSUFGWSxFQUVaQSxJQUZZLG9DQUVMLEVBRks7QUFBQTtBQUFBLG1CQUdQTiwrQ0FBTSxDQUFDTyxLQUFQLENBQWFMLEtBQWIsRUFBb0I7QUFBQ0ksa0JBQUksRUFBSkE7QUFBRCxhQUFwQixDQUhPOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVyQixrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Vway5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVway5qc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vway5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBFUEsgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcclxuICAgIGJvZHkgPSBbXSxcclxuICAgIHByZXNzcGhvdG9zID0gW10sXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD17c3R5bGVzLkVQS30+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxoMSBpZD17c3R5bGVzLmVwa1RpdGxlfT57dGl0bGV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtib2R5fS8+XHJcbiAgICAgICAge3ByZXNzcGhvdG9zICYmIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci12ZXRpY2FsXCI+XHJcbiAgICAgICAgICAgIDxoMj5QcmVzcyBwaG90b3M8L2gyPlxyXG4gICAgICAgICAgICB7cHJlc3NwaG90b3MubWFwKHByZXNzcGhvdG8gPT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc3NQaG90b30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3VybEZvcihwcmVzc3Bob3RvKS51cmwoKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpdGVtXCIgc3JjPXt1cmxGb3IocHJlc3NwaG90bykud2lkdGgoNDAwKS51cmwoKX0vPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW3RpdGxlID09IFwiRVBLXCJdWzBde1xyXG4gIHRpdGxlLFxyXG4gIGJvZHksXHJcbiAgcHJlc3NwaG90b3NcclxuXHJcbn1gO1xyXG5cclxuRVBLLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHtzbHVnfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVQSzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/epk.js\n");

/***/ })

})