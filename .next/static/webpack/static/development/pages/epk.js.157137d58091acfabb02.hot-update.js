webpackHotUpdate("static\\development\\pages\\epk.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/epk.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/epk.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"#epk_epk__dlS4h {\\n  max-width: 1500px;\\n  margin: 0 auto;\\n}\\n\\n#epk_epkTitle__1AQ-m {\\n  align-self: center;\\n  border-bottom: #551616 2px solid;\\n  width: 100%;\\n}\\n\\n#epk_mainText__3CATs {\\n  min-width: 260px;\\n}\\n@media (max-width: 576px) {\\n  #epk_mainText__3CATs {\\n    width: 100%;\\n  }\\n}\\n\\n#epk_pressPhotos__2r-8t {\\n  width: 350px;\\n}\\n@media (max-width: 576px) {\\n  #epk_pressPhotos__2r-8t {\\n    width: 100%;\\n  }\\n}\\n#epk_pressPhotos__2r-8t .epk_pressPhoto__2py7E {\\n  margin-bottom: 2px;\\n  flex-direction: row;\\n}\\n\\n.epk_logos__3boo5 {\\n  background-color: #ddd1d1;\\n  text-align: center;\\n  padding-left: -50px;\\n}\\n\\n.epk_wrapper__1X9aL {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n#epk_upcoming__6Xv9Q {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n#epk_upcoming__6Xv9Q .epk_upcomingItem__22egv {\\n  padding: 2px;\\n  width: 370px;\\n}\", \"\",{\"version\":3,\"sources\":[\"C:/Users/Joakim/wailnofront/pages/epk.module.scss\",\"C:/Users/Joakim/wailnofront/theme/responsive.scss\"],\"names\":[],\"mappings\":\"AACA;EACI,iBAAA;EACA,cAAA;AAAJ;;AAIA;EACI,kBAAA;EACA,gCAAA;EACA,WAAA;AADJ;;AAKA;EACI,gBAAA;AAFJ;ACCI;EDAJ;IAGQ,WAAA;EAAN;AACF;;AAEA;EACI,YAAA;AACJ;ACRI;EDMJ;IAGQ,WAAA;EAGN;AACF;AAFI;EACI,kBAAA;EACA,mBAAA;AAIR;;AAAA;EACI,yBAAA;EACA,kBAAA;EACA,mBAAA;AAGJ;;AAIA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,8BAAA;AADJ;AAWA;EACI,aAAA;EACA,eAAA;AATJ;AAUI;EACI,YAAA;EACA,YAAA;AARR\",\"file\":\"epk.module.scss\",\"sourcesContent\":[\"@import '../theme/responsive.scss';\\r\\n#epk {\\r\\n    max-width: 1500px;\\r\\n    margin: 0 auto;\\r\\n \\r\\n}\\r\\n\\r\\n#epkTitle {\\r\\n    align-self: center;\\r\\n    border-bottom: rgb(85, 22, 22) 2px solid;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n#mainText {\\r\\n    min-width: 260px;\\r\\n    @include sm {\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n#pressPhotos {\\r\\n    width: 350px;\\r\\n    @include sm {\\r\\n        width: 100%;\\r\\n    }\\r\\n    .pressPhoto {\\r\\n        margin-bottom: 2px;\\r\\n        flex-direction: row;\\r\\n    }\\r\\n}\\r\\n\\r\\n.logos {\\r\\n    background-color: rgb(221, 209, 209);\\r\\n    text-align: center;\\r\\n    padding-left: -50px;\\r\\n}\\r\\n\\r\\n.bottomBackgroundImage {\\r\\n\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap:  wrap;\\r\\n    justify-content: space-between;\\r\\n    @include sm {\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n#downloads {\\r\\n}\\r\\n\\r\\n#upcoming {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    .upcomingItem {\\r\\n        padding: 2px;\\r\\n        width: 370px;\\r\\n        .upcomingImage {\\r\\n            img {\\r\\n               \\r\\n            }\\r\\n        }\\r\\n\\r\\n        .releaseDate {\\r\\n        }\\r\\n    }\\r\\n  \\r\\n}\",\"// Small tablets and large smartphones (landscape view)\\r\\n$screen-sm-min: 576px;\\r\\n\\r\\n// Small tablets (portrait view)\\r\\n$screen-md-min: 768px;\\r\\n\\r\\n// Tablets and small desktops\\r\\n$screen-lg-min: 992px;\\r\\n\\r\\n// Large tablets and desktops\\r\\n$screen-xl-min: 1200px;\\r\\n\\r\\n// Small devices\\r\\n@mixin sm {\\r\\n    @media (max-width: #{$screen-sm-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Medium devices\\r\\n @mixin md {\\r\\n    @media (min-width: #{$screen-md-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Large devices\\r\\n @mixin lg {\\r\\n    @media (min-width: #{$screen-lg-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n \\r\\n // Extra large devices\\r\\n @mixin xl {\\r\\n    @media (min-width: #{$screen-xl-min}) {\\r\\n        @content;\\r\\n    }\\r\\n }\\r\\n\\r\\n // Custom devices\\r\\n@mixin rwd($screen) {\\r\\n    @media (min-width: $screen+'px') {\\r\\n        @content;\\r\\n    }\\r\\n }\"]}]);\n// Exports\nexports.locals = {\n\t\"epk\": \"epk_epk__dlS4h\",\n\t\"epkTitle\": \"epk_epkTitle__1AQ-m\",\n\t\"mainText\": \"epk_mainText__3CATs\",\n\t\"pressPhotos\": \"epk_pressPhotos__2r-8t\",\n\t\"pressPhoto\": \"epk_pressPhoto__2py7E\",\n\t\"logos\": \"epk_logos__3boo5\",\n\t\"wrapper\": \"epk_wrapper__1X9aL\",\n\t\"upcoming\": \"epk_upcoming__6Xv9Q\",\n\t\"upcomingItem\": \"epk_upcomingItem__22egv\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcGsubW9kdWxlLnNjc3M/N2Q4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcsMEJBQTBCLHVCQUF1QixxQ0FBcUMsZ0JBQWdCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLDZCQUE2QiwwQkFBMEIsa0JBQWtCLEtBQUssR0FBRyw2QkFBNkIsaUJBQWlCLEdBQUcsNkJBQTZCLDZCQUE2QixrQkFBa0IsS0FBSyxHQUFHLGtEQUFrRCx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLDhCQUE4Qix1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0Isb0JBQW9CLG1DQUFtQyxHQUFHLHdCQUF3QixrQkFBa0Isb0JBQW9CLEdBQUcsaURBQWlELGlCQUFpQixpQkFBaUIsR0FBRyxPQUFPLDRKQUE0SixXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLHFGQUFxRixVQUFVLDBCQUEwQix1QkFBdUIsVUFBVSxtQkFBbUIsMkJBQTJCLGlEQUFpRCxvQkFBb0IsS0FBSyx1QkFBdUIseUJBQXlCLHFCQUFxQix3QkFBd0IsU0FBUyxLQUFLLGtCQUFrQixxQkFBcUIscUJBQXFCLHdCQUF3QixTQUFTLHFCQUFxQiwrQkFBK0IsZ0NBQWdDLFNBQVMsS0FBSyxnQkFBZ0IsNkNBQTZDLDJCQUEyQiw0QkFBNEIsS0FBSyxnQ0FBZ0MsU0FBUyxrQkFBa0Isc0JBQXNCLDRCQUE0Qix5QkFBeUIsdUNBQXVDLHFCQUFxQixhQUFhLEtBQUssd0JBQXdCLEtBQUssbUJBQW1CLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIsNEJBQTRCLHFCQUFxQixvQ0FBb0MsYUFBYSw4QkFBOEIsYUFBYSxTQUFTLFdBQVcsb0ZBQW9GLGtFQUFrRSwrREFBK0QsZ0VBQWdFLHVDQUF1Qyw2QkFBNkIsZUFBZSxHQUFHLHFCQUFxQixTQUFTLE1BQU0sMkNBQTJDLDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLFNBQVMsTUFBTSwwQ0FBMEMsNkJBQTZCLGVBQWUsR0FBRyxxQkFBcUIsU0FBUyxNQUFNLGdEQUFnRCw2QkFBNkIsZUFBZSxHQUFHLHFCQUFxQixTQUFTLE1BQU0sbURBQW1ELDBDQUEwQyxxQkFBcUIsU0FBUyxNQUFNLEdBQUc7QUFDaGhIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9lcGsubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjZXBrX2Vwa19fZGxTNGgge1xcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2Vwa19lcGtUaXRsZV9fMUFRLW0ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogIzU1MTYxNiAycHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Vwa19tYWluVGV4dF9fM0NBVHMge1xcbiAgbWluLXdpZHRoOiAyNjBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjZXBrX21haW5UZXh0X18zQ0FUcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4jZXBrX3ByZXNzUGhvdG9zX18yci04dCB7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2Vwa19wcmVzc1Bob3Rvc19fMnItOHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI2Vwa19wcmVzc1Bob3Rvc19fMnItOHQgLmVwa19wcmVzc1Bob3RvX18ycHk3RSB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZXBrX2xvZ29zX18zYm9vNSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkMWQxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAtNTBweDtcXG59XFxuXFxuLmVwa193cmFwcGVyX18xWDlhTCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2Vwa191cGNvbWluZ19fNlh2OVEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuI2Vwa191cGNvbWluZ19fNlh2OVEgLmVwa191cGNvbWluZ0l0ZW1fXzIyZWd2IHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiAzNzBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvSm9ha2ltL3dhaWxub2Zyb250L3BhZ2VzL2Vway5tb2R1bGUuc2Nzc1wiLFwiQzovVXNlcnMvSm9ha2ltL3dhaWxub2Zyb250L3RoZW1lL3Jlc3BvbnNpdmUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7QUNDSTtFREFKO0lBR1EsV0FBQTtFQUFOO0FBQ0Y7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUNSSTtFRE1KO0lBR1EsV0FBQTtFQUdOO0FBQ0Y7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBREo7QUFXQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBVEo7QUFVSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBUlJcIixcImZpbGVcIjpcImVway5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi90aGVtZS9yZXNwb25zaXZlLnNjc3MnO1xcclxcbiNlcGsge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4jZXBrVGl0bGUge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHJnYig4NSwgMjIsIDIyKSAycHggc29saWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWFpblRleHQge1xcclxcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xcclxcbiAgICBAaW5jbHVkZSBzbSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4jcHJlc3NQaG90b3Mge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIEBpbmNsdWRlIHNtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5wcmVzc1Bob3RvIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjA5LCAyMDkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b21CYWNrZ3JvdW5kSW1hZ2Uge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogIHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgQGluY2x1ZGUgc20ge1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbiNkb3dubG9hZHMge1xcclxcbn1cXHJcXG5cXHJcXG4jdXBjb21pbmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC51cGNvbWluZ0l0ZW0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDM3MHB4O1xcclxcbiAgICAgICAgLnVwY29taW5nSW1hZ2Uge1xcclxcbiAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnJlbGVhc2VEYXRlIHtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgXFxyXFxufVwiLFwiLy8gU21hbGwgdGFibGV0cyBhbmQgbGFyZ2Ugc21hcnRwaG9uZXMgKGxhbmRzY2FwZSB2aWV3KVxcclxcbiRzY3JlZW4tc20tbWluOiA1NzZweDtcXHJcXG5cXHJcXG4vLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxcclxcbiRzY3JlZW4tbWQtbWluOiA3NjhweDtcXHJcXG5cXHJcXG4vLyBUYWJsZXRzIGFuZCBzbWFsbCBkZXNrdG9wc1xcclxcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcXHJcXG5cXHJcXG4vLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xcclxcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XFxyXFxuXFxyXFxuLy8gU21hbGwgZGV2aWNlc1xcclxcbkBtaXhpbiBzbSB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gfVxcclxcbiBcXHJcXG4gLy8gTWVkaXVtIGRldmljZXNcXHJcXG4gQG1peGluIG1kIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XFxyXFxuICAgICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiB9XFxyXFxuIFxcclxcbiAvLyBMYXJnZSBkZXZpY2VzXFxyXFxuIEBtaXhpbiBsZyB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gfVxcclxcbiBcXHJcXG4gLy8gRXh0cmEgbGFyZ2UgZGV2aWNlc1xcclxcbiBAbWl4aW4geGwge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcXHJcXG4gICAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gLy8gQ3VzdG9tIGRldmljZXNcXHJcXG5AbWl4aW4gcndkKCRzY3JlZW4pIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4rJ3B4Jykge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gfVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImVwa1wiOiBcImVwa19lcGtfX2RsUzRoXCIsXG5cdFwiZXBrVGl0bGVcIjogXCJlcGtfZXBrVGl0bGVfXzFBUS1tXCIsXG5cdFwibWFpblRleHRcIjogXCJlcGtfbWFpblRleHRfXzNDQVRzXCIsXG5cdFwicHJlc3NQaG90b3NcIjogXCJlcGtfcHJlc3NQaG90b3NfXzJyLTh0XCIsXG5cdFwicHJlc3NQaG90b1wiOiBcImVwa19wcmVzc1Bob3RvX18ycHk3RVwiLFxuXHRcImxvZ29zXCI6IFwiZXBrX2xvZ29zX18zYm9vNVwiLFxuXHRcIndyYXBwZXJcIjogXCJlcGtfd3JhcHBlcl9fMVg5YUxcIixcblx0XCJ1cGNvbWluZ1wiOiBcImVwa191cGNvbWluZ19fNlh2OVFcIixcblx0XCJ1cGNvbWluZ0l0ZW1cIjogXCJlcGtfdXBjb21pbmdJdGVtX18yMmVndlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/epk.module.scss\n");

/***/ })

})