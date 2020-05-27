webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./pages/epk.js":
/*!**********************!*\
  !*** ./pages/epk.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./epk.module.scss */ \"./pages/epk.module.scss\");\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_epk_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\Users\\\\Joakim\\\\wailnofront\\\\pages\\\\epk.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[title == \\\"EPK\\\"][0]{\\n  title,\\n  body,\\n  pressphotos,\\n  \\\"bios\\\": bios[].asset->{url, originalFilename},\\n  upcomingReleases\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// epk.js\n\n\n\n\n\n\n\nvar EPK = function EPK(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$pressphotos = props.pressphotos,\n      pressphotos = _props$pressphotos === void 0 ? [] : _props$pressphotos,\n      _props$bios = props.bios,\n      bios = _props$bios === void 0 ? [] : _props$bios,\n      _props$upcomingReleas = props.upcomingReleases,\n      upcomingReleases = _props$upcomingReleas === void 0 ? [] : _props$upcomingReleas;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.epk,\n    \"class\": \"page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"container-horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.epkTitle,\n    \"class\": \"center-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"div\", {\n    className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mainText,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    blocks: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, bios && __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.downloads,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"Bio\"), bios.map(function (bio) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }, bio.originalFilename);\n  })))), pressphotos && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"Press photos\"), pressphotos.map(function (pressphoto) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.pressPhoto,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: urlFor(pressphoto).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"item responsive\",\n      src: urlFor(pressphoto).width(400).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    })));\n  }))), upcomingReleases && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Upcoming releases\"), __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.upcoming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, upcomingReleases.map(function (upcoming) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.upcomingItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    }, upcoming.releaseName), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 19\n      }\n    }, \"Release date: \", __jsx(\"span\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.releaseDate,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 38\n      }\n    }, upcoming.releaseDate)), __jsx(\"a\", {\n      href: upcoming.releaseURL,\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.upcomingImage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"responsive\",\n      src: urlFor(upcoming.releaseImage).width(500).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }\n    })));\n  })))), __jsx(\"img\", {\n    \"class\": \"responsive\",\n    src: \"/images/epkbotimg.jpg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = EPK;\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nEPK.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EPK);\n\nvar _c;\n\n$RefreshReg$(_c, \"EPK\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsuanM/ZDgwMCJdLCJuYW1lcyI6WyJFUEsiLCJwcm9wcyIsInRpdGxlIiwiYm9keSIsInByZXNzcGhvdG9zIiwiYmlvcyIsInVwY29taW5nUmVsZWFzZXMiLCJzdHlsZXMiLCJlcGsiLCJlcGtUaXRsZSIsIndyYXBwZXIiLCJtYWluVGV4dCIsImRvd25sb2FkcyIsIm1hcCIsImJpbyIsIm9yaWdpbmFsRmlsZW5hbWUiLCJwcmVzc3Bob3RvIiwicHJlc3NQaG90byIsInVybEZvciIsInVybCIsIndpZHRoIiwidXBjb21pbmciLCJ1cGNvbWluZ0l0ZW0iLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VEYXRlIiwicmVsZWFzZVVSTCIsInVwY29taW5nSW1hZ2UiLCJyZWxlYXNlSW1hZ2UiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEscUJBUWpCQSxLQVJpQixDQUVuQkMsS0FGbUI7QUFBQSxNQUVuQkEsS0FGbUIsNkJBRVgsZUFGVztBQUFBLG9CQVFqQkQsS0FSaUIsQ0FHbkJFLElBSG1CO0FBQUEsTUFHbkJBLElBSG1CLDRCQUdaLEVBSFk7QUFBQSwyQkFRakJGLEtBUmlCLENBSW5CRyxXQUptQjtBQUFBLE1BSW5CQSxXQUptQixtQ0FJTCxFQUpLO0FBQUEsb0JBUWpCSCxLQVJpQixDQUtuQkksSUFMbUI7QUFBQSxNQUtuQkEsSUFMbUIsNEJBS1osRUFMWTtBQUFBLDhCQVFqQkosS0FSaUIsQ0FNbkJLLGdCQU5tQjtBQUFBLE1BTW5CQSxn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QUFBO0FBQUEsR0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVwQyxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Vway5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVway5qc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcGsubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuXHJcbmNvbnN0IEVQSyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLFxyXG4gICAgYm9keSA9IFtdLFxyXG4gICAgcHJlc3NwaG90b3MgPSBbXSxcclxuICAgIGJpb3MgPSBbXSxcclxuICAgIHVwY29taW5nUmVsZWFzZXMgPSBbXVxyXG5cclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuZXBrfSBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWhvcml6b250YWxcIj5cclxuICAgICAgICAgIDxoMSBpZD17c3R5bGVzLmVwa1RpdGxlfSBjbGFzcz1cImNlbnRlci10ZXh0XCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5tYWluVGV4dH0+XHJcbiAgICAgICAgICAgIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtib2R5fS8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YmlvcyAmJiBcclxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmRvd25sb2Fkc30+XHJcbiAgICAgICAgICAgICAgPGgyPkJpbzwvaDI+XHJcbiAgICAgICAgICAgICAge2Jpb3MubWFwKGJpbyA9PiBcclxuICAgICAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAgICAgIHtiaW8ub3JpZ2luYWxGaWxlbmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3ByZXNzcGhvdG9zICYmIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5QcmVzcyBwaG90b3M8L2gyPlxyXG4gICAgICAgICAgICAgIHtwcmVzc3Bob3Rvcy5tYXAocHJlc3NwaG90byA9PiBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXNzUGhvdG99PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3VybEZvcihwcmVzc3Bob3RvKS51cmwoKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaXRlbSByZXNwb25zaXZlXCIgc3JjPXt1cmxGb3IocHJlc3NwaG90bykud2lkdGgoNDAwKS51cmwoKX0vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3VwY29taW5nUmVsZWFzZXMgJiYgXHJcbiAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGgyPlVwY29taW5nIHJlbGVhc2VzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnVwY29taW5nfT5cclxuICAgICAgICAgICAgICB7dXBjb21pbmdSZWxlYXNlcy5tYXAodXBjb21pbmcgPT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGNvbWluZ0l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt1cGNvbWluZy5yZWxlYXNlTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5SZWxlYXNlIGRhdGU6IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlbGVhc2VEYXRlfT57dXBjb21pbmcucmVsZWFzZURhdGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cGNvbWluZy5yZWxlYXNlVVJMfSBjbGFzc05hbWU9e3N0eWxlcy51cGNvbWluZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzcz1cInJlc3BvbnNpdmVcIiBzcmM9e3VybEZvcih1cGNvbWluZy5yZWxlYXNlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBjbGFzcz1cInJlc3BvbnNpdmVcIiBzcmM9XCIvaW1hZ2VzL2Vwa2JvdGltZy5qcGdcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbdGl0bGUgPT0gXCJFUEtcIl1bMF17XHJcbiAgdGl0bGUsXHJcbiAgYm9keSxcclxuICBwcmVzc3Bob3RvcyxcclxuICBcImJpb3NcIjogYmlvc1tdLmFzc2V0LT57dXJsLCBvcmlnaW5hbEZpbGVuYW1lfSxcclxuICB1cGNvbWluZ1JlbGVhc2VzXHJcbn1gO1xyXG5cclxuRVBLLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHtzbHVnfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVQSzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/epk.js\n");

/***/ })

})