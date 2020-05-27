webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./pages/epk.js":
/*!**********************!*\
  !*** ./pages/epk.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./epk.module.scss */ \"./pages/epk.module.scss\");\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_epk_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\Users\\\\Joakim\\\\wailnofront\\\\pages\\\\epk.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[title == \\\"EPK\\\"][0]{\\n  title,\\n  body,\\n  pressphotos,\\n  \\\"bios\\\": bios[].asset->{url, originalFilename},\\n  upcomingReleases\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// epk.js\n\n\n\n\n\n\n\nvar EPK = function EPK(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$pressphotos = props.pressphotos,\n      pressphotos = _props$pressphotos === void 0 ? [] : _props$pressphotos,\n      _props$bios = props.bios,\n      bios = _props$bios === void 0 ? [] : _props$bios,\n      _props$upcomingReleas = props.upcomingReleases,\n      upcomingReleases = _props$upcomingReleas === void 0 ? [] : _props$upcomingReleas;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.epk,\n    \"class\": \"page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"container-horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.epkTitle,\n    \"class\": \"center-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"div\", {\n    className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    blocks: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }), upcomingReleases && __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.upcoming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, \"Upcoming releases\"), upcomingReleases.map(function (upcoming) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.upcomingItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: upcoming.releaseURL,\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.upcomingImage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"responsive\",\n      src: urlFor(upcoming.releaseImage).width(250).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 19\n      }\n    })), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 19\n      }\n    }, \"Release date: \", upcoming.releaseDate), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 19\n      }\n    }, upcoming.releaseName));\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, bios && __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.downloads,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \"Bio\"), bios.map(function (bio) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, bio.originalFilename);\n  }))), pressphotos && __jsx(\"div\", {\n    \"class\": \"container-vetical\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"Press photos\"), pressphotos.map(function (pressphoto) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.pressPhoto,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: urlFor(pressphoto).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"item responsive\",\n      src: urlFor(pressphoto).width(400).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    })));\n  })))), __jsx(\"img\", {\n    \"class\": \"responsive\",\n    src: \"/images/epkbotimg.jpg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = EPK;\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nEPK.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EPK);\n\nvar _c;\n\n$RefreshReg$(_c, \"EPK\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsuanM/ZDgwMCJdLCJuYW1lcyI6WyJFUEsiLCJwcm9wcyIsInRpdGxlIiwiYm9keSIsInByZXNzcGhvdG9zIiwiYmlvcyIsInVwY29taW5nUmVsZWFzZXMiLCJzdHlsZXMiLCJlcGsiLCJlcGtUaXRsZSIsIndyYXBwZXIiLCJ1cGNvbWluZyIsIm1hcCIsInVwY29taW5nSXRlbSIsInJlbGVhc2VVUkwiLCJ1cGNvbWluZ0ltYWdlIiwidXJsRm9yIiwicmVsZWFzZUltYWdlIiwid2lkdGgiLCJ1cmwiLCJyZWxlYXNlRGF0ZSIsInJlbGVhc2VOYW1lIiwiZG93bmxvYWRzIiwiYmlvIiwib3JpZ2luYWxGaWxlbmFtZSIsInByZXNzcGhvdG8iLCJwcmVzc1Bob3RvIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLHFCQVFqQkEsS0FSaUIsQ0FFbkJDLEtBRm1CO0FBQUEsTUFFbkJBLEtBRm1CLDZCQUVYLGVBRlc7QUFBQSxvQkFRakJELEtBUmlCLENBR25CRSxJQUhtQjtBQUFBLE1BR25CQSxJQUhtQiw0QkFHWixFQUhZO0FBQUEsMkJBUWpCRixLQVJpQixDQUluQkcsV0FKbUI7QUFBQSxNQUluQkEsV0FKbUIsbUNBSUwsRUFKSztBQUFBLG9CQVFqQkgsS0FSaUIsQ0FLbkJJLElBTG1CO0FBQUEsTUFLbkJBLElBTG1CLDRCQUtaLEVBTFk7QUFBQSw4QkFRakJKLEtBUmlCLENBTW5CSyxnQkFObUI7QUFBQSxNQU1uQkEsZ0JBTm1CLHNDQU1B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Q0FBQ1MsVUFBRCxDQUFOLENBQW1CTixHQUFuQixFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQU0saUJBQVg7QUFBNkIsU0FBRyxFQUFFSCxNQUFNLENBQUNTLFVBQUQsQ0FBTixDQUFtQlAsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLEdBQTlCLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURBLENBRDJCO0FBQUEsR0FBMUIsQ0FGSCxDQS9CSixDQUpGLENBREYsRUFpREU7QUFBSyxhQUFNLFlBQVg7QUFBd0IsT0FBRyxFQUFDLHVCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRGLENBREY7QUFxREQsQ0EvREQ7O0tBQU1uQixHOztBQWlFTixTQUFTZ0IsTUFBVCxDQUFpQlcsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFHRCxJQUFNSSxLQUFLLEdBQUdDLDJDQUFILG1CQUFYOztBQVFBaEMsR0FBRyxDQUFDaUMsZUFBSjtBQUFBLDhMQUFzQixpQkFBZ0JDLE9BQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEI7QUFEb0Isa0NBRUVBLE9BQU8sQ0FBQ0gsS0FGVixDQUVaSSxJQUZZLEVBRVpBLElBRlksb0NBRUwsRUFGSztBQUFBO0FBQUEsbUJBR1BOLCtDQUFNLENBQUNPLEtBQVAsQ0FBYUwsS0FBYixFQUFvQjtBQUFDSSxrQkFBSSxFQUFKQTtBQUFELGFBQXBCLENBSE87O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZW5DLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZXBrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXBrLmpzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCc7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vway5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuY29uc3QgRVBLID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXHJcbiAgICBib2R5ID0gW10sXHJcbiAgICBwcmVzc3Bob3RvcyA9IFtdLFxyXG4gICAgYmlvcyA9IFtdLFxyXG4gICAgdXBjb21pbmdSZWxlYXNlcyA9IFtdXHJcblxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5lcGt9IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgPGgxIGlkPXtzdHlsZXMuZXBrVGl0bGV9IGNsYXNzPVwiY2VudGVyLXRleHRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17Ym9keX0vPlxyXG4gICAgICAgICAge3VwY29taW5nUmVsZWFzZXMgJiYgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy51cGNvbWluZ30+XHJcbiAgICAgICAgICAgICAgPGgyPlVwY29taW5nIHJlbGVhc2VzPC9oMj5cclxuICAgICAgICAgICAgICB7dXBjb21pbmdSZWxlYXNlcy5tYXAodXBjb21pbmcgPT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGNvbWluZ0l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cGNvbWluZy5yZWxlYXNlVVJMfSBjbGFzc05hbWU9e3N0eWxlcy51cGNvbWluZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3M9XCJyZXNwb25zaXZlXCIgc3JjPXt1cmxGb3IodXBjb21pbmcucmVsZWFzZUltYWdlKS53aWR0aCgyNTApLnVybCgpfS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5SZWxlYXNlIGRhdGU6IHt1cGNvbWluZy5yZWxlYXNlRGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57dXBjb21pbmcucmVsZWFzZU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtiaW9zICYmIFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuZG93bmxvYWRzfT5cclxuICAgICAgICAgICAgICA8aDI+QmlvPC9oMj5cclxuICAgICAgICAgICAgICB7Ymlvcy5tYXAoYmlvID0+IFxyXG4gICAgICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICAgICAge2Jpby5vcmlnaW5hbEZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtwcmVzc3Bob3RvcyAmJiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci12ZXRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgPGgyPlByZXNzIHBob3RvczwvaDI+XHJcbiAgICAgICAgICAgICAge3ByZXNzcGhvdG9zLm1hcChwcmVzc3Bob3RvID0+IFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc3NQaG90b30+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17dXJsRm9yKHByZXNzcGhvdG8pLnVybCgpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpdGVtIHJlc3BvbnNpdmVcIiBzcmM9e3VybEZvcihwcmVzc3Bob3RvKS53aWR0aCg0MDApLnVybCgpfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVzcG9uc2l2ZVwiIHNyYz1cIi9pbWFnZXMvZXBrYm90aW1nLmpwZ1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKlt0aXRsZSA9PSBcIkVQS1wiXVswXXtcclxuICB0aXRsZSxcclxuICBib2R5LFxyXG4gIHByZXNzcGhvdG9zLFxyXG4gIFwiYmlvc1wiOiBiaW9zW10uYXNzZXQtPnt1cmwsIG9yaWdpbmFsRmlsZW5hbWV9LFxyXG4gIHVwY29taW5nUmVsZWFzZXNcclxufWA7XHJcblxyXG5FUEsuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwge3NsdWd9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRVBLOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/epk.js\n");

/***/ })

})