webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/epk.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/epk.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/fonts/Amiri-Regular.ttf */ \"./public/fonts/Amiri-Regular.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../public/fonts/Amiri-Bold.ttf */ \"./public/fonts/Amiri-Bold.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"EPKFont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: \\\"EPKFontBold\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n#epk_epk__dlS4h {\\n  max-width: 1500px;\\n  margin: 0 auto;\\n  font-family: \\\"EPKFont\\\";\\n}\\n\\n#epk_epkTitle__1AQ-m {\\n  align-self: center;\\n  border-bottom: #551616 2px solid;\\n  width: 100%;\\n}\\n\\n#epk_mainText__3CATs {\\n  min-width: 260px;\\n  flex-basis: 70%;\\n}\\n@media (max-width: 576px) {\\n  #epk_mainText__3CATs {\\n    width: 100%;\\n    flex-basis: 100%;\\n  }\\n}\\n\\n#epk_pressPhotos__2r-8t {\\n  width: 350px;\\n}\\n@media (max-width: 576px) {\\n  #epk_pressPhotos__2r-8t {\\n    width: 100%;\\n  }\\n}\\n#epk_pressPhotos__2r-8t .epk_pressPhoto__2py7E {\\n  margin-bottom: 2px;\\n  flex-direction: row;\\n}\\n\\n.epk_logos__3boo5 {\\n  background-color: #ddd1d1;\\n  text-align: center;\\n  padding-left: -50px;\\n}\\n\\n.epk_wrapper__1X9aL {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n#epk_upcoming__6Xv9Q {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n#epk_upcoming__6Xv9Q .epk_upcomingItem__22egv {\\n  font-family: \\\"EPKFontBold\\\";\\n  padding: 2px;\\n  flex-grow: 1;\\n  min-width: 370px;\\n}\", \"\",{\"version\":3,\"sources\":[\"C:/Users/Joakim/wailnofront/pages/epk.module.scss\",\"C:/Users/Joakim/wailnofront/theme/responsive.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,sBAAA;EACA,4CAAA;AADJ;AAGA;EACI,0BAAA;EACA,4CAAA;AADJ;AAGA;EACI,iBAAA;EACA,cAAA;EACA,sBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,gCAAA;EACA,WAAA;AADJ;;AAKA;EACI,gBAAA;EACA,eAAA;AAFJ;ACTI;EDSJ;IAIQ,WAAA;IACA,gBAAA;EAAN;AACF;;AAGA;EACI,YAAA;AAAJ;ACnBI;EDkBJ;IAGQ,WAAA;EAEN;AACF;AADI;EACI,kBAAA;EACA,mBAAA;AAGR;;AACA;EACI,yBAAA;EACA,kBAAA;EACA,mBAAA;AAEJ;;AAKA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,8BAAA;AAFJ;AAYA;EACI,aAAA;EACA,eAAA;AAVJ;AAWI;EACI,0BAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;AATR\",\"file\":\"epk.module.scss\",\"sourcesContent\":[\"@import '../theme/responsive.scss';\\r\\n\\r\\n@font-face {\\r\\n    font-family: \\\"EPKFont\\\";\\r\\n    src: url('../public/fonts/Amiri-Regular.ttf');\\r\\n}\\r\\n@font-face {\\r\\n    font-family: \\\"EPKFontBold\\\";\\r\\n    src: url('../public/fonts/Amiri-Bold.ttf');\\r\\n}\\r\\n#epk {\\r\\n    max-width: 1500px;\\r\\n    margin: 0 auto;\\r\\n    font-family: \\\"EPKFont\\\";\\r\\n}\\r\\n\\r\\n#epkTitle {\\r\\n    align-self: center;\\r\\n    border-bottom: rgb(85, 22, 22) 2px solid;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n#mainText {\\r\\n    min-width: 260px;\\r\\n    flex-basis: 70%;\\r\\n    @include sm {\\r\\n        width: 100%;\\r\\n        flex-basis: 100%;\\r\\n\\r\\n    }\\r\\n}\\r\\n#pressPhotos {\\r\\n    width: 350px;\\r\\n    @include sm {\\r\\n        width: 100%;\\r\\n    }\\r\\n    .pressPhoto {\\r\\n        margin-bottom: 2px;\\r\\n        flex-direction: row;\\r\\n    }\\r\\n}\\r\\n\\r\\n.logos {\\r\\n    background-color: rgb(221, 209, 209);\\r\\n    text-align: center;\\r\\n    padding-left: -50px;\\r\\n}\\r\\n\\r\\n.bottomBackgroundImage {\\r\\n\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap:  wrap;\\r\\n    justify-content: space-between;\\r\\n    @include sm {\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n#downloads {\\r\\n}\\r\\n\\r\\n#upcoming {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    .upcomingItem {\\r\\n        font-family: \\\"EPKFontBold\\\";\\r\\n        padding: 2px;\\r\\n        flex-grow: 1;\\r\\n        min-width: 370px;\\r\\n        .upcomingImage {\\r\\n            img {\\r\\n               \\r\\n            }\\r\\n        }\\r\\n\\r\\n        .releaseDate {\\r\\n        }\\r\\n    }\\r\\n  \\r\\n}\",\"// Small tablets and large smartphones (landscape view)\\r\\n$screen-sm-min: 576px;\\r\\n\\r\\n// Small tablets (portrait view)\\r\\n$screen-md-min: 768px;\\r\\n\\r\\n// Tablets and small desktops\\r\\n$screen-lg-min: 992px;\\r\\n\\r\\n// Large tablets and desktops\\r\\n$screen-xl-min: 1200px;\\r\\n\\r\\n// Small devices\\r\\n@mixin sm {\\r\\n    @media (max-width: #{$screen-sm-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Medium devices\\r\\n @mixin md {\\r\\n    @media (min-width: #{$screen-md-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Large devices\\r\\n @mixin lg {\\r\\n    @media (min-width: #{$screen-lg-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Extra large devices\\r\\n @mixin xl {\\r\\n    @media (min-width: #{$screen-xl-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n\\r\\n // Custom devices\\r\\n@mixin rwd($screen) {\\r\\n    @media (min-width: $screen+'px') {\\r\\n        @content;\\r\\n    }\\r\\n }\"]}]);\n// Exports\nexports.locals = {\n\t\"epk\": \"epk_epk__dlS4h\",\n\t\"epkTitle\": \"epk_epkTitle__1AQ-m\",\n\t\"mainText\": \"epk_mainText__3CATs\",\n\t\"pressPhotos\": \"epk_pressPhotos__2r-8t\",\n\t\"pressPhoto\": \"epk_pressPhoto__2py7E\",\n\t\"logos\": \"epk_logos__3boo5\",\n\t\"wrapper\": \"epk_wrapper__1X9aL\",\n\t\"upcoming\": \"epk_upcoming__6Xv9Q\",\n\t\"upcomingItem\": \"epk_upcomingItem__22egv\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsubW9kdWxlLnNjc3M/N2Q4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsMkVBQW1DO0FBQy9FLG9DQUFvQyxtQkFBTyxDQUFDLHFFQUFnQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLDZCQUE2Qix5REFBeUQsR0FBRyxjQUFjLGlDQUFpQyx5REFBeUQsR0FBRyxtQkFBbUIsc0JBQXNCLG1CQUFtQiw2QkFBNkIsR0FBRywwQkFBMEIsdUJBQXVCLHFDQUFxQyxnQkFBZ0IsR0FBRywwQkFBMEIscUJBQXFCLG9CQUFvQixHQUFHLDZCQUE2QiwwQkFBMEIsa0JBQWtCLHVCQUF1QixLQUFLLEdBQUcsNkJBQTZCLGlCQUFpQixHQUFHLDZCQUE2Qiw2QkFBNkIsa0JBQWtCLEtBQUssR0FBRyxrREFBa0QsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5QixrQkFBa0Isd0JBQXdCLG9CQUFvQixtQ0FBbUMsR0FBRyx3QkFBd0Isa0JBQWtCLG9CQUFvQixHQUFHLGlEQUFpRCxpQ0FBaUMsaUJBQWlCLGlCQUFpQixxQkFBcUIsR0FBRyxPQUFPLDRKQUE0SixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcscUZBQXFGLG9CQUFvQixpQ0FBaUMsc0RBQXNELEtBQUssZ0JBQWdCLHFDQUFxQyxtREFBbUQsS0FBSyxVQUFVLDBCQUEwQix1QkFBdUIsaUNBQWlDLEtBQUssbUJBQW1CLDJCQUEyQixpREFBaUQsb0JBQW9CLEtBQUssdUJBQXVCLHlCQUF5Qix3QkFBd0IscUJBQXFCLHdCQUF3Qiw2QkFBNkIsYUFBYSxLQUFLLGtCQUFrQixxQkFBcUIscUJBQXFCLHdCQUF3QixTQUFTLHFCQUFxQiwrQkFBK0IsZ0NBQWdDLFNBQVMsS0FBSyxnQkFBZ0IsNkNBQTZDLDJCQUEyQiw0QkFBNEIsS0FBSyxnQ0FBZ0MsU0FBUyxrQkFBa0Isc0JBQXNCLDRCQUE0Qix5QkFBeUIsdUNBQXVDLHFCQUFxQixhQUFhLEtBQUssd0JBQXdCLEtBQUssbUJBQW1CLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlDQUF5Qyx5QkFBeUIseUJBQXlCLDZCQUE2Qiw0QkFBNEIscUJBQXFCLG9DQUFvQyxhQUFhLDhCQUE4QixhQUFhLFNBQVMsV0FBVyxvRkFBb0Ysa0VBQWtFLCtEQUErRCxnRUFBZ0UsdUNBQXVDLDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLFNBQVMsTUFBTSwyQ0FBMkMsNkJBQTZCLGVBQWUsR0FBRyxxQkFBcUIsU0FBUyxNQUFNLDBDQUEwQyw2QkFBNkIsZUFBZSxHQUFHLHFCQUFxQixTQUFTLE1BQU0sZ0RBQWdELDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLFNBQVMsTUFBTSxtREFBbUQsMENBQTBDLHFCQUFxQixTQUFTLE1BQU0sR0FBRztBQUNoMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3BhZ2VzL2Vway5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vcHVibGljL2ZvbnRzL0FtaXJpLVJlZ3VsYXIudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL3B1YmxpYy9mb250cy9BbWlyaS1Cb2xkLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVQS0ZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRVBLRm9udEJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4jZXBrX2Vwa19fZGxTNGgge1xcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRVBLRm9udFxcXCI7XFxufVxcblxcbiNlcGtfZXBrVGl0bGVfXzFBUS1tIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206ICM1NTE2MTYgMnB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlcGtfbWFpblRleHRfXzNDQVRzIHtcXG4gIG1pbi13aWR0aDogMjYwcHg7XFxuICBmbGV4LWJhc2lzOiA3MCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2Vwa19tYWluVGV4dF9fM0NBVHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2Vwa19wcmVzc1Bob3Rvc19fMnItOHQge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICNlcGtfcHJlc3NQaG90b3NfXzJyLTh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiNlcGtfcHJlc3NQaG90b3NfXzJyLTh0IC5lcGtfcHJlc3NQaG90b19fMnB5N0Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmVwa19sb2dvc19fM2JvbzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDFkMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogLTUwcHg7XFxufVxcblxcbi5lcGtfd3JhcHBlcl9fMVg5YUwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNlcGtfdXBjb21pbmdfXzZYdjlRIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbiNlcGtfdXBjb21pbmdfXzZYdjlRIC5lcGtfdXBjb21pbmdJdGVtX18yMmVndiB7XFxuICBmb250LWZhbWlseTogXFxcIkVQS0ZvbnRCb2xkXFxcIjtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1pbi13aWR0aDogMzcwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL0pvYWtpbS93YWlsbm9mcm9udC9wYWdlcy9lcGsubW9kdWxlLnNjc3NcIixcIkM6L1VzZXJzL0pvYWtpbS93YWlsbm9mcm9udC90aGVtZS9yZXNwb25zaXZlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxzQkFBQTtFQUNBLDRDQUFBO0FBREo7QUFHQTtFQUNJLDBCQUFBO0VBQ0EsNENBQUE7QUFESjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFGSjtBQ1RJO0VEU0o7SUFJUSxXQUFBO0lBQ0EsZ0JBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksWUFBQTtBQUFKO0FDbkJJO0VEa0JKO0lBR1EsV0FBQTtFQUVOO0FBQ0Y7QUFESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBRko7QUFZQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBVko7QUFXSTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVRSXCIsXCJmaWxlXCI6XCJlcGsubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vdGhlbWUvcmVzcG9uc2l2ZS5zY3NzJztcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJFUEtGb250XFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4uL3B1YmxpYy9mb250cy9BbWlyaS1SZWd1bGFyLnR0ZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJFUEtGb250Qm9sZFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9wdWJsaWMvZm9udHMvQW1pcmktQm9sZC50dGYnKTtcXHJcXG59XFxyXFxuI2VwayB7XFxyXFxuICAgIG1heC13aWR0aDogMTUwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJFUEtGb250XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuI2Vwa1RpdGxlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiByZ2IoODUsIDIyLCAyMikgMnB4IHNvbGlkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21haW5UZXh0IHtcXHJcXG4gICAgbWluLXdpZHRoOiAyNjBweDtcXHJcXG4gICAgZmxleC1iYXNpczogNzAlO1xcclxcbiAgICBAaW5jbHVkZSBzbSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI3ByZXNzUGhvdG9zIHtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBAaW5jbHVkZSBzbSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAucHJlc3NQaG90byB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5sb2dvcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIwOSwgMjA5KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tQmFja2dyb3VuZEltYWdlIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6ICB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIEBpbmNsdWRlIHNtIHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZG93bmxvYWRzIHtcXHJcXG59XFxyXFxuXFxyXFxuI3VwY29taW5nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAudXBjb21pbmdJdGVtIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiRVBLRm9udEJvbGRcXFwiO1xcclxcbiAgICAgICAgcGFkZGluZzogMnB4O1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAzNzBweDtcXHJcXG4gICAgICAgIC51cGNvbWluZ0ltYWdlIHtcXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWxlYXNlRGF0ZSB7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbn1cIixcIi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcXHJcXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XFxyXFxuXFxyXFxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcXHJcXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XFxyXFxuXFxyXFxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcXHJcXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XFxyXFxuXFxyXFxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcXHJcXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xcclxcblxcclxcbi8vIFNtYWxsIGRldmljZXNcXHJcXG5AbWl4aW4gc20ge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC8vIE1lZGl1bSBkZXZpY2VzXFxyXFxuIEBtaXhpbiBtZCB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gfVxcclxcbiBcXHJcXG4gLy8gTGFyZ2UgZGV2aWNlc1xcclxcbiBAbWl4aW4gbGcge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC8vIEV4dHJhIGxhcmdlIGRldmljZXNcXHJcXG4gQG1peGluIHhsIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XFxyXFxuICAgICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiB9XFxyXFxuXFxyXFxuIC8vIEN1c3RvbSBkZXZpY2VzXFxyXFxuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKydweCcpIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJlcGtcIjogXCJlcGtfZXBrX19kbFM0aFwiLFxuXHRcImVwa1RpdGxlXCI6IFwiZXBrX2Vwa1RpdGxlX18xQVEtbVwiLFxuXHRcIm1haW5UZXh0XCI6IFwiZXBrX21haW5UZXh0X18zQ0FUc1wiLFxuXHRcInByZXNzUGhvdG9zXCI6IFwiZXBrX3ByZXNzUGhvdG9zX18yci04dFwiLFxuXHRcInByZXNzUGhvdG9cIjogXCJlcGtfcHJlc3NQaG90b19fMnB5N0VcIixcblx0XCJsb2dvc1wiOiBcImVwa19sb2dvc19fM2JvbzVcIixcblx0XCJ3cmFwcGVyXCI6IFwiZXBrX3dyYXBwZXJfXzFYOWFMXCIsXG5cdFwidXBjb21pbmdcIjogXCJlcGtfdXBjb21pbmdfXzZYdjlRXCIsXG5cdFwidXBjb21pbmdJdGVtXCI6IFwiZXBrX3VwY29taW5nSXRlbV9fMjJlZ3ZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/epk.module.scss\n");

/***/ })

})