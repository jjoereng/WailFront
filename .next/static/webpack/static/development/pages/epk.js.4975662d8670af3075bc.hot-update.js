webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./pages/epk.js":
/*!**********************!*\
  !*** ./pages/epk.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Logo */ \"./components/Logo.js\");\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./epk.module.scss */ \"./pages/epk.module.scss\");\n/* harmony import */ var _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_epk_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\Users\\\\Joakim\\\\wailnofront\\\\pages\\\\epk.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[title == \\\"EPK\\\"][0]{\\n  title,\\n  body,\\n  pressphotos,\\n  \\\"bios\\\": bios[].asset->{url, originalFilename},\\n  upcomingReleases\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// epk.js\n\n\n\n\n\n\n\n\nvar EPK = function EPK(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$pressphotos = props.pressphotos,\n      pressphotos = _props$pressphotos === void 0 ? [] : _props$pressphotos,\n      _props$bios = props.bios,\n      bios = _props$bios === void 0 ? [] : _props$bios,\n      _props$upcomingReleas = props.upcomingReleases,\n      upcomingReleases = _props$upcomingReleas === void 0 ? [] : _props$upcomingReleas;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.epk,\n    \"class\": \"page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"container-horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.epkTitle,\n    \"class\": \"center-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"div\", {\n    className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mainText,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    blocks: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, bios && __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.downloads,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"Bio\"), bios.map(function (bio) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, bio.originalFilename);\n  })))), pressphotos && __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.pressPhotos,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \"Press photos\"), pressphotos.map(function (pressphoto) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.pressPhoto,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: urlFor(pressphoto).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"item responsive\",\n      src: urlFor(pressphoto).width(400).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    })));\n  }))), __jsx(\"div\", {\n    \"class\": \"center-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    color: 'red',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    color: 'black',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })), upcomingReleases && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, \"Upcoming releases\"), __jsx(\"div\", {\n    id: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.upcoming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, upcomingReleases.map(function (upcoming) {\n    return __jsx(\"div\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.upcomingItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 19\n      }\n    }, upcoming.releaseName), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 19\n      }\n    }, \"Release date: \", __jsx(\"span\", {\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.releaseDate,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 38\n      }\n    }, upcoming.releaseDate)), __jsx(\"a\", {\n      href: upcoming.releaseURL,\n      className: _epk_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.upcomingImage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      \"class\": \"responsive\",\n      src: urlFor(upcoming.releaseImage).width(500).url(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 21\n      }\n    })));\n  })))), __jsx(\"img\", {\n    \"class\": \"responsive\",\n    src: \"/images/epkbotimg.jpg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = EPK;\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nEPK.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EPK);\n\nvar _c;\n\n$RefreshReg$(_c, \"EPK\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsuanM/ZDgwMCJdLCJuYW1lcyI6WyJFUEsiLCJwcm9wcyIsInRpdGxlIiwiYm9keSIsInByZXNzcGhvdG9zIiwiYmlvcyIsInVwY29taW5nUmVsZWFzZXMiLCJzdHlsZXMiLCJlcGsiLCJlcGtUaXRsZSIsIndyYXBwZXIiLCJtYWluVGV4dCIsImRvd25sb2FkcyIsIm1hcCIsImJpbyIsIm9yaWdpbmFsRmlsZW5hbWUiLCJwcmVzc1Bob3RvcyIsInByZXNzcGhvdG8iLCJwcmVzc1Bob3RvIiwidXJsRm9yIiwidXJsIiwid2lkdGgiLCJ1cGNvbWluZyIsInVwY29taW5nSXRlbSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZURhdGUiLCJyZWxlYXNlVVJMIiwidXBjb21pbmdJbWFnZSIsInJlbGVhc2VJbWFnZSIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQSxxQkFRakJBLEtBUmlCLENBRW5CQyxLQUZtQjtBQUFBLE1BRW5CQSxLQUZtQiw2QkFFWCxlQUZXO0FBQUEsb0JBUWpCRCxLQVJpQixDQUduQkUsSUFIbUI7QUFBQSxNQUduQkEsSUFIbUIsNEJBR1osRUFIWTtBQUFBLDJCQVFqQkYsS0FSaUIsQ0FJbkJHLFdBSm1CO0FBQUEsTUFJbkJBLFdBSm1CLG1DQUlMLEVBSks7QUFBQSxvQkFRakJILEtBUmlCLENBS25CSSxJQUxtQjtBQUFBLE1BS25CQSxJQUxtQiw0QkFLWixFQUxZO0FBQUEsOEJBUWpCSixLQVJpQixDQU1uQkss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RCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUdELElBQU1JLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBUUFsQyxHQUFHLENBQUNtQyxlQUFKO0FBQUEsOExBQXNCLGlCQUFnQkMsT0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQjtBQURvQixrQ0FFRUEsT0FBTyxDQUFDSCxLQUZWLENBRVpJLElBRlksRUFFWkEsSUFGWSxvQ0FFTCxFQUZLO0FBQUE7QUFBQSxtQkFHUE4sK0NBQU0sQ0FBQ08sS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUNJLGtCQUFJLEVBQUpBO0FBQUQsYUFBcEIsQ0FITzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lckMsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9lcGsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlcGsuanNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXBrLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG5jb25zdCBFUEsgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcclxuICAgIGJvZHkgPSBbXSxcclxuICAgIHByZXNzcGhvdG9zID0gW10sXHJcbiAgICBiaW9zID0gW10sXHJcbiAgICB1cGNvbWluZ1JlbGVhc2VzID0gW11cclxuXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmVwa30gY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICA8aDEgaWQ9e3N0eWxlcy5lcGtUaXRsZX0gY2xhc3M9XCJjZW50ZXItdGV4dFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubWFpblRleHR9PlxyXG4gICAgICAgICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17Ym9keX0vPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2Jpb3MgJiYgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5kb3dubG9hZHN9PlxyXG4gICAgICAgICAgICAgIDxoMj5CaW88L2gyPlxyXG4gICAgICAgICAgICAgIHtiaW9zLm1hcChiaW8gPT4gXHJcbiAgICAgICAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICAgICAgICB7YmlvLm9yaWdpbmFsRmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtwcmVzc3Bob3RvcyAmJiBcclxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnByZXNzUGhvdG9zfT5cclxuICAgICAgICAgICAgICA8aDI+UHJlc3MgcGhvdG9zPC9oMj5cclxuICAgICAgICAgICAgICB7cHJlc3NwaG90b3MubWFwKHByZXNzcGhvdG8gPT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzc1Bob3RvfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXt1cmxGb3IocHJlc3NwaG90bykudXJsKCl9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIml0ZW0gcmVzcG9uc2l2ZVwiIHNyYz17dXJsRm9yKHByZXNzcGhvdG8pLndpZHRoKDQwMCkudXJsKCl9Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItdGV4dFwiPlxyXG4gICAgICAgIDxMb2dvIGNvbG9yPXsnd2hpdGUnfT48L0xvZ28+XHJcbiAgICAgICAgPExvZ28gY29sb3I9eydyZWQnfT48L0xvZ28+XHJcbiAgICAgICAgPExvZ28gY29sb3I9eydibGFjayd9PjwvTG9nbz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXBjb21pbmdSZWxlYXNlcyAmJiBcclxuICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgcmVsZWFzZXM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMudXBjb21pbmd9PlxyXG4gICAgICAgICAgICAgIHt1cGNvbWluZ1JlbGVhc2VzLm1hcCh1cGNvbWluZyA9PiBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwY29taW5nSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e3VwY29taW5nLnJlbGVhc2VOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlJlbGVhc2UgZGF0ZTogPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZURhdGV9Pnt1cGNvbWluZy5yZWxlYXNlRGF0ZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VwY29taW5nLnJlbGVhc2VVUkx9IGNsYXNzTmFtZT17c3R5bGVzLnVwY29taW5nSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzPVwicmVzcG9uc2l2ZVwiIHNyYz17dXJsRm9yKHVwY29taW5nLnJlbGVhc2VJbWFnZSkud2lkdGgoNTAwKS51cmwoKX0vPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVzcG9uc2l2ZVwiIHNyYz1cIi9pbWFnZXMvZXBrYm90aW1nLmpwZ1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKlt0aXRsZSA9PSBcIkVQS1wiXVswXXtcclxuICB0aXRsZSxcclxuICBib2R5LFxyXG4gIHByZXNzcGhvdG9zLFxyXG4gIFwiYmlvc1wiOiBiaW9zW10uYXNzZXQtPnt1cmwsIG9yaWdpbmFsRmlsZW5hbWV9LFxyXG4gIHVwY29taW5nUmVsZWFzZXNcclxufWA7XHJcblxyXG5FUEsuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwge3NsdWd9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRVBLOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/epk.js\n");

/***/ })

})