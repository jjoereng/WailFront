webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/epk.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/epk.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"#epk_epk__dlS4h {\\n  max-width: 1500px;\\n  margin: 0 auto;\\n}\\n\\n#epk_epkTitle__1AQ-m {\\n  align-self: center;\\n  border-bottom: #551616 2px solid;\\n  width: 100%;\\n}\\n\\n#epk_mainText__3CATs {\\n  min-width: 260px;\\n  flex-basis: 70%;\\n}\\n@media (max-width: 576px) {\\n  #epk_mainText__3CATs {\\n    width: 100%;\\n    flex-basis: 1000%;\\n  }\\n}\\n\\n#epk_pressPhotos__2r-8t {\\n  width: 350px;\\n}\\n@media (max-width: 576px) {\\n  #epk_pressPhotos__2r-8t {\\n    width: 100%;\\n  }\\n}\\n#epk_pressPhotos__2r-8t .epk_pressPhoto__2py7E {\\n  margin-bottom: 2px;\\n  flex-direction: row;\\n}\\n\\n.epk_logos__3boo5 {\\n  background-color: #ddd1d1;\\n  text-align: center;\\n  padding-left: -50px;\\n}\\n\\n.epk_wrapper__1X9aL {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n#epk_upcoming__6Xv9Q {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n#epk_upcoming__6Xv9Q .epk_upcomingItem__22egv {\\n  padding: 2px;\\n  width: 370px;\\n}\", \"\",{\"version\":3,\"sources\":[\"C:/Users/Joakim/wailnofront/pages/epk.module.scss\",\"C:/Users/Joakim/wailnofront/theme/responsive.scss\"],\"names\":[],\"mappings\":\"AACA;EACI,iBAAA;EACA,cAAA;AAAJ;;AAIA;EACI,kBAAA;EACA,gCAAA;EACA,WAAA;AADJ;;AAKA;EACI,gBAAA;EACA,eAAA;AAFJ;ACAI;EDAJ;IAIQ,WAAA;IACA,iBAAA;EAAN;AACF;;AAGA;EACI,YAAA;AAAJ;ACVI;EDSJ;IAGQ,WAAA;EAEN;AACF;AADI;EACI,kBAAA;EACA,mBAAA;AAGR;;AACA;EACI,yBAAA;EACA,kBAAA;EACA,mBAAA;AAEJ;;AAKA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,8BAAA;AAFJ;AAYA;EACI,aAAA;EACA,eAAA;AAVJ;AAWI;EACI,YAAA;EACA,YAAA;AATR\",\"file\":\"epk.module.scss\",\"sourcesContent\":[\"@import '../theme/responsive.scss';\\r\\n#epk {\\r\\n    max-width: 1500px;\\r\\n    margin: 0 auto;\\r\\n \\r\\n}\\r\\n\\r\\n#epkTitle {\\r\\n    align-self: center;\\r\\n    border-bottom: rgb(85, 22, 22) 2px solid;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n#mainText {\\r\\n    min-width: 260px;\\r\\n    flex-basis: 70%;\\r\\n    @include sm {\\r\\n        width: 100%;\\r\\n        flex-basis: 1000%;\\r\\n\\r\\n    }\\r\\n}\\r\\n#pressPhotos {\\r\\n    width: 350px;\\r\\n    @include sm {\\r\\n        width: 100%;\\r\\n    }\\r\\n    .pressPhoto {\\r\\n        margin-bottom: 2px;\\r\\n        flex-direction: row;\\r\\n    }\\r\\n}\\r\\n\\r\\n.logos {\\r\\n    background-color: rgb(221, 209, 209);\\r\\n    text-align: center;\\r\\n    padding-left: -50px;\\r\\n}\\r\\n\\r\\n.bottomBackgroundImage {\\r\\n\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap:  wrap;\\r\\n    justify-content: space-between;\\r\\n    @include sm {\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n#downloads {\\r\\n}\\r\\n\\r\\n#upcoming {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    .upcomingItem {\\r\\n        padding: 2px;\\r\\n        width: 370px;\\r\\n        .upcomingImage {\\r\\n            img {\\r\\n               \\r\\n            }\\r\\n        }\\r\\n\\r\\n        .releaseDate {\\r\\n        }\\r\\n    }\\r\\n  \\r\\n}\",\"// Small tablets and large smartphones (landscape view)\\r\\n$screen-sm-min: 576px;\\r\\n\\r\\n// Small tablets (portrait view)\\r\\n$screen-md-min: 768px;\\r\\n\\r\\n// Tablets and small desktops\\r\\n$screen-lg-min: 992px;\\r\\n\\r\\n// Large tablets and desktops\\r\\n$screen-xl-min: 1200px;\\r\\n\\r\\n// Small devices\\r\\n@mixin sm {\\r\\n    @media (max-width: #{$screen-sm-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Medium devices\\r\\n @mixin md {\\r\\n    @media (min-width: #{$screen-md-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Large devices\\r\\n @mixin lg {\\r\\n    @media (min-width: #{$screen-lg-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Extra large devices\\r\\n @mixin xl {\\r\\n    @media (min-width: #{$screen-xl-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n\\r\\n // Custom devices\\r\\n@mixin rwd($screen) {\\r\\n    @media (min-width: $screen+'px') {\\r\\n        @content;\\r\\n    }\\r\\n }\"]}]);\n// Exports\nexports.locals = {\n\t\"epk\": \"epk_epk__dlS4h\",\n\t\"epkTitle\": \"epk_epkTitle__1AQ-m\",\n\t\"mainText\": \"epk_mainText__3CATs\",\n\t\"pressPhotos\": \"epk_pressPhotos__2r-8t\",\n\t\"pressPhoto\": \"epk_pressPhoto__2py7E\",\n\t\"logos\": \"epk_logos__3boo5\",\n\t\"wrapper\": \"epk_wrapper__1X9aL\",\n\t\"upcoming\": \"epk_upcoming__6Xv9Q\",\n\t\"upcomingItem\": \"epk_upcomingItem__22egv\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsubW9kdWxlLnNjc3M/N2Q4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcsMEJBQTBCLHVCQUF1QixxQ0FBcUMsZ0JBQWdCLEdBQUcsMEJBQTBCLHFCQUFxQixvQkFBb0IsR0FBRyw2QkFBNkIsMEJBQTBCLGtCQUFrQix3QkFBd0IsS0FBSyxHQUFHLDZCQUE2QixpQkFBaUIsR0FBRyw2QkFBNkIsNkJBQTZCLGtCQUFrQixLQUFLLEdBQUcsa0RBQWtELHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsOEJBQThCLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3QixvQkFBb0IsbUNBQW1DLEdBQUcsd0JBQXdCLGtCQUFrQixvQkFBb0IsR0FBRyxpREFBaUQsaUJBQWlCLGlCQUFpQixHQUFHLE9BQU8sNEpBQTRKLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLHFGQUFxRixVQUFVLDBCQUEwQix1QkFBdUIsVUFBVSxtQkFBbUIsMkJBQTJCLGlEQUFpRCxvQkFBb0IsS0FBSyx1QkFBdUIseUJBQXlCLHdCQUF3QixxQkFBcUIsd0JBQXdCLDhCQUE4QixhQUFhLEtBQUssa0JBQWtCLHFCQUFxQixxQkFBcUIsd0JBQXdCLFNBQVMscUJBQXFCLCtCQUErQixnQ0FBZ0MsU0FBUyxLQUFLLGdCQUFnQiw2Q0FBNkMsMkJBQTJCLDRCQUE0QixLQUFLLGdDQUFnQyxTQUFTLGtCQUFrQixzQkFBc0IsNEJBQTRCLHlCQUF5Qix1Q0FBdUMscUJBQXFCLGFBQWEsS0FBSyx3QkFBd0IsS0FBSyxtQkFBbUIsc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5Qiw0QkFBNEIscUJBQXFCLG9DQUFvQyxhQUFhLDhCQUE4QixhQUFhLFNBQVMsV0FBVyxvRkFBb0Ysa0VBQWtFLCtEQUErRCxnRUFBZ0UsdUNBQXVDLDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLFNBQVMsTUFBTSwyQ0FBMkMsNkJBQTZCLGVBQWUsR0FBRyxxQkFBcUIsU0FBUyxNQUFNLDBDQUEwQyw2QkFBNkIsZUFBZSxHQUFHLHFCQUFxQixTQUFTLE1BQU0sZ0RBQWdELDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLFNBQVMsTUFBTSxtREFBbUQsMENBQTBDLHFCQUFxQixTQUFTLE1BQU0sR0FBRztBQUMzb0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3BhZ2VzL2Vway5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNlcGtfZXBrX19kbFM0aCB7XFxuICBtYXgtd2lkdGg6IDE1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jZXBrX2Vwa1RpdGxlX18xQVEtbSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAjNTUxNjE2IDJweCBzb2xpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZXBrX21haW5UZXh0X18zQ0FUcyB7XFxuICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgZmxleC1iYXNpczogNzAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICNlcGtfbWFpblRleHRfXzNDQVRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMDAlO1xcbiAgfVxcbn1cXG5cXG4jZXBrX3ByZXNzUGhvdG9zX18yci04dCB7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2Vwa19wcmVzc1Bob3Rvc19fMnItOHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI2Vwa19wcmVzc1Bob3Rvc19fMnItOHQgLmVwa19wcmVzc1Bob3RvX18ycHk3RSB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZXBrX2xvZ29zX18zYm9vNSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkMWQxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAtNTBweDtcXG59XFxuXFxuLmVwa193cmFwcGVyX18xWDlhTCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2Vwa191cGNvbWluZ19fNlh2OVEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuI2Vwa191cGNvbWluZ19fNlh2OVEgLmVwa191cGNvbWluZ0l0ZW1fXzIyZWd2IHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvSm9ha2ltL3dhaWxub2Zyb250L3BhZ2VzL2Vway5tb2R1bGUuc2Nzc1wiLFwiQzovVXNlcnMvSm9ha2ltL3dhaWxub2Zyb250L3RoZW1lL3Jlc3BvbnNpdmUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUZKO0FDQUk7RURBSjtJQUlRLFdBQUE7SUFDQSxpQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxZQUFBO0FBQUo7QUNWSTtFRFNKO0lBR1EsV0FBQTtFQUVOO0FBQ0Y7QUFESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBRko7QUFZQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBVko7QUFXSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBVFJcIixcImZpbGVcIjpcImVway5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi90aGVtZS9yZXNwb25zaXZlLnNjc3MnO1xcclxcbiNlcGsge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4jZXBrVGl0bGUge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHJnYig4NSwgMjIsIDIyKSAycHggc29saWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWFpblRleHQge1xcclxcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xcclxcbiAgICBmbGV4LWJhc2lzOiA3MCU7XFxyXFxuICAgIEBpbmNsdWRlIHNtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZmxleC1iYXNpczogMTAwMCU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI3ByZXNzUGhvdG9zIHtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBAaW5jbHVkZSBzbSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAucHJlc3NQaG90byB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5sb2dvcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIwOSwgMjA5KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tQmFja2dyb3VuZEltYWdlIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6ICB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIEBpbmNsdWRlIHNtIHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZG93bmxvYWRzIHtcXHJcXG59XFxyXFxuXFxyXFxuI3VwY29taW5nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAudXBjb21pbmdJdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzNzBweDtcXHJcXG4gICAgICAgIC51cGNvbWluZ0ltYWdlIHtcXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWxlYXNlRGF0ZSB7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbn1cIixcIi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcXHJcXG4kc2NyZWVuLXNtLW1pbjogNTc2cHg7XFxyXFxuXFxyXFxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcXHJcXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XFxyXFxuXFxyXFxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcXHJcXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XFxyXFxuXFxyXFxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcXHJcXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4O1xcclxcblxcclxcbi8vIFNtYWxsIGRldmljZXNcXHJcXG5AbWl4aW4gc20ge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC8vIE1lZGl1bSBkZXZpY2VzXFxyXFxuIEBtaXhpbiBtZCB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gfVxcclxcbiBcXHJcXG4gLy8gTGFyZ2UgZGV2aWNlc1xcclxcbiBAbWl4aW4gbGcge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC8vIEV4dHJhIGxhcmdlIGRldmljZXNcXHJcXG4gQG1peGluIHhsIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XFxyXFxuICAgICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiB9XFxyXFxuXFxyXFxuIC8vIEN1c3RvbSBkZXZpY2VzXFxyXFxuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKydweCcpIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJlcGtcIjogXCJlcGtfZXBrX19kbFM0aFwiLFxuXHRcImVwa1RpdGxlXCI6IFwiZXBrX2Vwa1RpdGxlX18xQVEtbVwiLFxuXHRcIm1haW5UZXh0XCI6IFwiZXBrX21haW5UZXh0X18zQ0FUc1wiLFxuXHRcInByZXNzUGhvdG9zXCI6IFwiZXBrX3ByZXNzUGhvdG9zX18yci04dFwiLFxuXHRcInByZXNzUGhvdG9cIjogXCJlcGtfcHJlc3NQaG90b19fMnB5N0VcIixcblx0XCJsb2dvc1wiOiBcImVwa19sb2dvc19fM2JvbzVcIixcblx0XCJ3cmFwcGVyXCI6IFwiZXBrX3dyYXBwZXJfXzFYOWFMXCIsXG5cdFwidXBjb21pbmdcIjogXCJlcGtfdXBjb21pbmdfXzZYdjlRXCIsXG5cdFwidXBjb21pbmdJdGVtXCI6IFwiZXBrX3VwY29taW5nSXRlbV9fMjJlZ3ZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/epk.module.scss\n");

/***/ })

})