(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/themes/default/components/Main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'store',
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getStore'])),
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['singleStore']),
  created: function created() {
    this.getStore();
  },
  components: {
    Navigation: function Navigation() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../layout/Navigation */ "./resources/js/themes/default/layout/Navigation.vue"));
    },
    TempFooter: function TempFooter() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../layout/TempFooter */ "./resources/js/themes/default/layout/TempFooter.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\n=========================================\n=========================================\n\n   Boutique | Ecommerce bootstrap template\n\n=========================================\n========================================= */\n/*\n*\n* ==========================================\n* GENERAL\n* ==========================================\n*\n*/\n.text-small {\n  font-size: 0.85rem !important;\n}\n.text-gray {\n  color: #aaa !important;\n}\nstrong {\n  font-weight: 700;\n}\nbutton:focus, button:active {\n  outline: none;\n}\n\n/*\n*\n* ==========================================\n* NAVBAR\n* ==========================================\n*\n*/\n.navbar {\n  position: relative;\n}\n.navbar .dropdown-menu {\n  border-top: 2px solid #dcb14a;\n}\n.navbar .dropdown-menu::before {\n  content: \"\";\n  display: block;\n  border-left: 0.5rem solid transparent;\n  border-right: 0.5rem solid transparent;\n  border-bottom: 0.5rem solid #dcb14a;\n  position: absolute;\n  top: -0.5rem;\n  left: 1rem;\n}\n@media (min-width: 992px) {\n.navbar-brand {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n}\n.navbar .dropdown-menu {\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(0.5rem);\n  transition: 0.2s ease all;\n}\n@media (min-width: 992px) {\n.navbar .dropdown-menu {\n    display: block;\n}\n}\n@media (max-width: 991.98px) {\n.navbar .dropdown-menu.always-animated {\n    display: block;\n}\n}\n.navbar .dropdown-menu.show {\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0px);\n  transition: 0.2s ease all;\n}\n.megamenu {\n  position: static;\n}\n.megamenu .dropdown-menu {\n  width: 100%;\n  z-index: 999;\n}\n\n/*\n*\n* ==========================================\n* HERO\n* ==========================================\n*\n*/\n.hero {\n  min-height: 30rem;\n}\n\n/*\n*\n* ==========================================\n* CATEGORY\n* ==========================================\n*\n*/\n.category-item {\n  display: block;\n  position: relative;\n  color: #343a40;\n  transition: all 0.3s;\n}\n.category-item img {\n  transition: all 0.3s;\n}\n.category-item-title {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);\n  font-size: 0.8rem;\n}\n.category-item:hover img {\n  opacity: 0.7;\n}\n\n/*\n*\n* ==========================================\n* PRODUCT\n* ==========================================\n*\n*/\n.product img {\n  -webkit-filter: grayscale(40%);\n  filter: grayscale(40%);\n  transition: all 0.3s;\n}\n.product-overlay {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 1rem 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.product-overlay ul li {\n  transition: all 0.3s;\n}\n.product-overlay ul li:first-of-type {\n  transform: translateX(-10px);\n  opacity: 0;\n}\n.product-overlay ul li:last-of-type {\n  transform: translateX(10px);\n  opacity: 0;\n}\n.product:hover img {\n  opacity: 0.3;\n}\n.product:hover .product-overlay {\n  opacity: 1;\n}\n.product:hover .product-overlay li {\n  opacity: 1;\n  transform: none;\n}\n.product .badge {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 999;\n}\n\n/*\n*\n* ==========================================\n* PRODUCT MODAL\n* ==========================================\n*\n*/\n.product-view {\n  min-height: 20rem;\n}\n.quantity {\n  display: flex;\n  align-items: center;\n  font-family: inherit;\n}\n.quantity input {\n  width: 2rem;\n  text-align: center;\n}\n.quantity button {\n  background: none;\n  border: none;\n  width: 1rem;\n  outline: none;\n}\n\n/*\n*\n* ==========================================\n* FOOTER\n* ==========================================\n*\n*/\n.footer-link {\n  font-size: 0.85rem;\n  position: relative;\n  color: #999;\n  transition: all 0.3s;\n}\n.footer-link:hover, .footer-link:focus {\n  padding-left: 0.6rem;\n  color: #fff;\n  text-decoration: none;\n}\n.footer-link:hover::before, .footer-link:focus::before {\n  opacity: 1;\n}\n.footer-link::before {\n  content: \"\\F0DA\";\n  display: inline-block;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  color: #fff;\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n/*\n* ===================================================\n*    Custom Bootstrapious Utils\n* ===================================================\n*/\n/*\n   Text utils\n   ------------------------\n*/\n.text-uppercase {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.text-sm {\n  font-size: 0.875rem;\n}\n.text-base {\n  font-size: 1rem;\n}\n.text-lg {\n  font-size: 1.25rem;\n}\n.text-xs {\n  font-size: 0.65rem !important;\n}\n.text-shadow {\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n}\n.text-shadow-primary {\n  text-shadow: 2px 2px 2px rgba(220, 177, 74, 0.1);\n}\n.text-decoration-underline {\n  text-decoration: underline;\n}\n.text-inherit {\n  color: inherit;\n}\n\n/*\n    Rounded corners - lg, sm\n   ------------------------\n*/\n.rounded-lg {\n  border-radius: 0;\n}\n.rounded-sm {\n  border-radius: 0;\n}\n.rounded-xl {\n  border-radius: 10rem;\n}\n\n/*\n    Responsive borders - border-[breakpoint]\n   ------------------------\n*/\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n@media (min-width: 576px) {\n.border-sm {\n    border: 1px solid #dee2e6 !important;\n}\n}\n@media (min-width: 768px) {\n.border-md {\n    border: 1px solid #dee2e6 !important;\n}\n}\n@media (min-width: 992px) {\n.border-lg {\n    border: 1px solid #dee2e6 !important;\n}\n}\n@media (min-width: 1200px) {\n.border-xl {\n    border: 1px solid #dee2e6 !important;\n}\n}\n/*\n    Opacity helpers - .opacity-[1-9]\n    ------------------------\n*/\n.opacity-1 {\n  opacity: 0.1;\n}\n.opacity-2 {\n  opacity: 0.2;\n}\n.opacity-3 {\n  opacity: 0.3;\n}\n.opacity-4 {\n  opacity: 0.4;\n}\n.opacity-5 {\n  opacity: 0.5;\n}\n.opacity-6 {\n  opacity: 0.6;\n}\n.opacity-7 {\n  opacity: 0.7;\n}\n.opacity-8 {\n  opacity: 0.8;\n}\n.opacity-9 {\n  opacity: 0.9;\n}\n.opacity-10 {\n  opacity: 1;\n}\n\n/*\n    Z-index helpers - .z-index-[10-50]\n    ------------------------\n*/\n.z-index-10 {\n  z-index: 10;\n}\n.z-index-20 {\n  z-index: 20;\n}\n.z-index-30 {\n  z-index: 30;\n}\n.z-index-40 {\n  z-index: 40;\n}\n.z-index-50 {\n  z-index: 50;\n}\n\n/*\n     Letter spacing helpers - .letter-spacing-[0-5]\n    ------------------------\n*/\n.letter-spacing-0 {\n  letter-spacing: 0 !important;\n}\n.letter-spacing-1 {\n  letter-spacing: 0.1em;\n}\n.letter-spacing-2 {\n  letter-spacing: 0.2em;\n}\n.letter-spacing-3 {\n  letter-spacing: 0.3em;\n}\n.letter-spacing-4 {\n  letter-spacing: 0.4em;\n}\n.letter-spacing-5 {\n  letter-spacing: 0.5em;\n}\n\n/*\n     Colours and backgrounds\n    ------------------------\n*/\n.text-hover-primary {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-primary:focus, .text-hover-primary:hover {\n  color: #dcb14a !important;\n}\na.text-hover-primary {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-primary:focus, a.text-hover-primary:hover {\n  color: #dcb14a !important;\n}\n.bg-primary-light {\n  background-color: #fbf6e9;\n}\n.border-primary {\n  border-color: #dcb14a !important;\n}\n.text-hover-secondary {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-secondary:focus, .text-hover-secondary:hover {\n  color: #6c757d !important;\n}\na.text-hover-secondary {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-secondary:focus, a.text-hover-secondary:hover {\n  color: #6c757d !important;\n}\n.bg-secondary-light {\n  background-color: #edeeef;\n}\n.border-secondary {\n  border-color: #6c757d !important;\n}\n.text-hover-success {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-success:focus, .text-hover-success:hover {\n  color: #28a745 !important;\n}\na.text-hover-success {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-success:focus, a.text-hover-success:hover {\n  color: #28a745 !important;\n}\n.bg-success-light {\n  background-color: #e5f4e9;\n}\n.border-success {\n  border-color: #28a745 !important;\n}\n.text-hover-info {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-info:focus, .text-hover-info:hover {\n  color: #17a2b8 !important;\n}\na.text-hover-info {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-info:focus, a.text-hover-info:hover {\n  color: #17a2b8 !important;\n}\n.bg-info-light {\n  background-color: #e3f4f6;\n}\n.border-info {\n  border-color: #17a2b8 !important;\n}\n.text-hover-warning {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-warning:focus, .text-hover-warning:hover {\n  color: #ffc107 !important;\n}\na.text-hover-warning {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-warning:focus, a.text-hover-warning:hover {\n  color: #ffc107 !important;\n}\n.bg-warning-light {\n  background-color: #fff8e1;\n}\n.border-warning {\n  border-color: #ffc107 !important;\n}\n.text-hover-danger {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-danger:focus, .text-hover-danger:hover {\n  color: #dc3545 !important;\n}\na.text-hover-danger {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-danger:focus, a.text-hover-danger:hover {\n  color: #dc3545 !important;\n}\n.bg-danger-light {\n  background-color: #fbe7e9;\n}\n.border-danger {\n  border-color: #dc3545 !important;\n}\n.text-hover-light {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-light:focus, .text-hover-light:hover {\n  color: #f8f9fa !important;\n}\na.text-hover-light {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-light:focus, a.text-hover-light:hover {\n  color: #f8f9fa !important;\n}\n.bg-light-light {\n  background-color: #fefefe;\n}\n.border-light {\n  border-color: #f8f9fa !important;\n}\n.text-hover-dark {\n  transition: all 0.2s ease-in-out;\n}\n.text-hover-dark:focus, .text-hover-dark:hover {\n  color: #111111 !important;\n}\na.text-hover-dark {\n  transition: all 0.2s ease-in-out;\n}\na.text-hover-dark:focus, a.text-hover-dark:hover {\n  color: #111111 !important;\n}\n.bg-dark-light {\n  background-color: #e2e2e2;\n}\n.border-dark {\n  border-color: #111111 !important;\n}\n.bg-gray-100 {\n  background: #f8f9fa !important;\n}\n.text-gray-100 {\n  color: #f8f9fa;\n}\n.bg-gray-200 {\n  background: #e9ecef !important;\n}\n.text-gray-200 {\n  color: #e9ecef;\n}\n.bg-gray-300 {\n  background: #dee2e6 !important;\n}\n.text-gray-300 {\n  color: #dee2e6;\n}\n.bg-gray-400 {\n  background: #ced4da !important;\n}\n.text-gray-400 {\n  color: #ced4da;\n}\n.bg-gray-500 {\n  background: #adb5bd !important;\n}\n.text-gray-500 {\n  color: #adb5bd;\n}\n.bg-gray-600 {\n  background: #6c757d !important;\n}\n.text-gray-600 {\n  color: #6c757d;\n}\n.bg-gray-700 {\n  background: #495057 !important;\n}\n.text-gray-700 {\n  color: #495057;\n}\n.bg-gray-800 {\n  background: #343a40 !important;\n}\n.text-gray-800 {\n  color: #343a40;\n}\n.bg-gray-900 {\n  background: #212529 !important;\n}\n.text-gray-900 {\n  color: #212529;\n}\n.badge-primary-light {\n  color: #dcb14a;\n  background-color: #fbf6e9;\n}\n.badge-secondary-light {\n  color: #6c757d;\n  background-color: #edeeef;\n}\n.badge-success-light {\n  color: #28a745;\n  background-color: #e5f4e9;\n}\n.badge-info-light {\n  color: #17a2b8;\n  background-color: #e3f4f6;\n}\n.badge-warning-light {\n  color: #ffc107;\n  background-color: #fff8e1;\n}\n.badge-danger-light {\n  color: #dc3545;\n  background-color: #fbe7e9;\n}\n.badge-light-light {\n  color: #f8f9fa;\n  background-color: #fefefe;\n}\n.badge-dark-light {\n  color: #111111;\n  background-color: #e2e2e2;\n}\n\n/*\n     Transparent overlays\n    ------------------------\n*/\n.overlay-content {\n  position: relative;\n  z-index: 20;\n}\n@media (min-width: 576px) {\n.light-overlay-sm,\n.overlay-hover-light-sm {\n    position: relative;\n}\n.light-overlay-sm::after,\n.overlay-hover-light-sm::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    background: #fff;\n}\n}\n@media (min-width: 576px) {\n.overlay-hover-light-sm::after {\n    transition: opacity 0.15s linear;\n    opacity: 0;\n}\n}\n@media (min-width: 576px) {\n.light-overlay-sm::after,\n.overlay-hover-light-sm:hover::after {\n    opacity: 0.4;\n}\n}\n@media (min-width: 576px) {\n.light-overlay-sm-0::after,\n.overlay-hover-light-sm-0:hover::after {\n    display: none;\n}\n}\n.dark-overlay-sm {\n  position: relative;\n}\n@media (min-width: 576px) {\n.dark-overlay-sm::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    opacity: 0.4;\n    background: #000;\n}\n}\n@media (min-width: 576px) {\n.dark-overlay-sm-0::after {\n    display: none;\n}\n}\n@media (min-width: 768px) {\n.light-overlay-md,\n.overlay-hover-light-md {\n    position: relative;\n}\n.light-overlay-md::after,\n.overlay-hover-light-md::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    background: #fff;\n}\n}\n@media (min-width: 768px) {\n.overlay-hover-light-md::after {\n    transition: opacity 0.15s linear;\n    opacity: 0;\n}\n}\n@media (min-width: 768px) {\n.light-overlay-md::after,\n.overlay-hover-light-md:hover::after {\n    opacity: 0.4;\n}\n}\n@media (min-width: 768px) {\n.light-overlay-md-0::after,\n.overlay-hover-light-md-0:hover::after {\n    display: none;\n}\n}\n.dark-overlay-md {\n  position: relative;\n}\n@media (min-width: 768px) {\n.dark-overlay-md::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    opacity: 0.4;\n    background: #000;\n}\n}\n@media (min-width: 768px) {\n.dark-overlay-md-0::after {\n    display: none;\n}\n}\n@media (min-width: 992px) {\n.light-overlay-lg,\n.overlay-hover-light-lg {\n    position: relative;\n}\n.light-overlay-lg::after,\n.overlay-hover-light-lg::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    background: #fff;\n}\n}\n@media (min-width: 992px) {\n.overlay-hover-light-lg::after {\n    transition: opacity 0.15s linear;\n    opacity: 0;\n}\n}\n@media (min-width: 992px) {\n.light-overlay-lg::after,\n.overlay-hover-light-lg:hover::after {\n    opacity: 0.4;\n}\n}\n@media (min-width: 992px) {\n.light-overlay-lg-0::after,\n.overlay-hover-light-lg-0:hover::after {\n    display: none;\n}\n}\n.dark-overlay-lg {\n  position: relative;\n}\n@media (min-width: 992px) {\n.dark-overlay-lg::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    opacity: 0.4;\n    background: #000;\n}\n}\n@media (min-width: 992px) {\n.dark-overlay-lg-0::after {\n    display: none;\n}\n}\n@media (min-width: 1200px) {\n.light-overlay-xl,\n.overlay-hover-light-xl {\n    position: relative;\n}\n.light-overlay-xl::after,\n.overlay-hover-light-xl::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    background: #fff;\n}\n}\n@media (min-width: 1200px) {\n.overlay-hover-light-xl::after {\n    transition: opacity 0.15s linear;\n    opacity: 0;\n}\n}\n@media (min-width: 1200px) {\n.light-overlay-xl::after,\n.overlay-hover-light-xl:hover::after {\n    opacity: 0.4;\n}\n}\n@media (min-width: 1200px) {\n.light-overlay-xl-0::after,\n.overlay-hover-light-xl-0:hover::after {\n    display: none;\n}\n}\n.dark-overlay-xl {\n  position: relative;\n}\n@media (min-width: 1200px) {\n.dark-overlay-xl::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \" \";\n    opacity: 0.4;\n    background: #000;\n}\n}\n@media (min-width: 1200px) {\n.dark-overlay-xl-0::after {\n    display: none;\n}\n}\n.light-overlay,\n.overlay-hover-light {\n  position: relative;\n}\n.light-overlay::after,\n.overlay-hover-light::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: \" \";\n  background: #fff;\n}\n.overlay-hover-light::after {\n  transition: opacity 0.15s linear;\n  opacity: 0;\n}\n.light-overlay::after,\n.overlay-hover-light:hover::after {\n  opacity: 0.4;\n}\n.light-overlay-0::after,\n.overlay-hover-light-0:hover::after {\n  display: none;\n}\n.dark-overlay {\n  position: relative;\n}\n.dark-overlay::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: \" \";\n  opacity: 0.4;\n  background: #000;\n}\n.dark-overlay-0::after {\n  display: none;\n}\n\n/*\n     Other\n    ------------------------\n*/\n.overflow-visible {\n  overflow: visible !important;\n}\n.shadow-0 {\n  box-shadow: none !important;\n}\n.bg-cover {\n  background-size: cover !important;\n}\n.bg-center {\n  background-position: center center !important;\n}\n.reset-anchor {\n  color: inherit;\n  transition: all 0.3s;\n}\n.reset-anchor:hover, .reset-anchor:focus {\n  text-decoration: none;\n}\n.index-forward {\n  z-index: 99;\n  position: relative;\n}\n.headings-font-family {\n  font-family: inherit !important;\n}\n.no-select {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/*\n* ===================================================\n*    Custom Orion Icons\n* ===================================================\n*/\n.svg-icon {\n  width: 32px;\n  height: 32px;\n  vertical-align: text-bottom;\n  stroke: currentColor;\n  stroke-width: 3;\n  --layer1:currentColor;\n  --layer2:currentColor;\n  --layer3:currentColor;\n}\n.svg-icon.svg-icon-light {\n  stroke-width: 2;\n}\n.svg-icon.svg-icon-heavy {\n  stroke-width: 4;\n}\n.svg-icon-big {\n  width: 48px;\n  height: 48px;\n}\n.svg-icon-sm {\n  width: 24px;\n  height: 24px;\n}\n\n/*\n*\n* ==========================================\n* OWL THUMBS\n* ==========================================\n*\n*/\n.owl-thumb-item {\n  cursor: pointer;\n  background: #111111;\n}\n.owl-thumb-item img {\n  transition: all 0.3s;\n}\n.owl-thumb-item.active img {\n  opacity: 0.8;\n}\n\n/*\n*\n* ==========================================\n* NOUISLIDER\n* ==========================================\n*\n*/\n.noUi-target {\n  background: #efefef;\n  border-radius: 0;\n  border: none;\n  box-shadow: none;\n}\n.noUi-horizontal {\n  height: 2px;\n}\n@media (max-width: 991.98px) {\n.noUi-horizontal {\n    height: 3px;\n}\n}\n.noUi-horizontal .noUi-handle {\n  width: 10px;\n  height: 10px;\n  right: -10px;\n  top: -4px;\n  outline: none;\n  border-radius: 50%;\n  background: #111111;\n  border: none !important;\n  box-shadow: none;\n  cursor: pointer;\n}\n@media (max-width: 991.98px) {\n.noUi-horizontal .noUi-handle {\n    top: -3px;\n}\n}\n.noUi-horizontal .noUi-handle::before, .noUi-horizontal .noUi-handle::after {\n  display: none;\n}\n.noUi-connect {\n  background: #111111;\n}\n.noUi-tooltip {\n  font-size: 0.75rem;\n  font-family: inherit;\n  background: #fff;\n  border-radius: 0;\n  border: none;\n  color: #111111;\n  padding: 0.2rem 0;\n}\n.noUi-handle-lower .noUi-tooltip {\n  left: 0;\n  transform: none;\n}\n.noUi-handle-upper .noUi-tooltip {\n  left: auto;\n  right: 0;\n  transform: none;\n}\n\n/*\n*\n* ==========================================\n* BOOTSTRAP SELECT\n* ==========================================\n*\n*/\n.bootstrap-select {\n  display: block !important;\n}\n.bootstrap-select .bs-select-form-control.dropdown-toggle {\n  display: block !important;\n  border: 1px solid #ced4da !important;\n  padding: 0.2rem 1rem !important;\n  outline: none !important;\n  box-shadow: none;\n}\n.bootstrap-select .bs-select-form-control.dropdown-toggle::after {\n  margin-left: -0.5rem !important;\n}\n.bootstrap-select .dropdown-menu {\n  padding: 0;\n  border-radius: 0;\n  border-color: #ddd;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);\n  max-height: 200px !important;\n  transform: none !important;\n  margin: 0 !important;\n  max-width: 100%;\n}\n.bootstrap-select .dropdown-menu .dropdown-item {\n  padding: 0.7rem 1rem;\n  transition: all 0.3s;\n  outline: none !important;\n  font-size: 0.85rem;\n  transform: none !important;\n  font-weight: 300;\n  border-bottom: 1px solid #eee;\n}\n.bootstrap-select .dropdown-menu .dropdown-item.active, .bootstrap-select .dropdown-menu .dropdown-item:active {\n  background: #f8f9fa !important;\n  color: #343a40 !important;\n}\n.bootstrap-select .filter-option-inner-inner {\n  color: #adb5bd;\n  font-size: 0.85rem;\n  font-weight: 300;\n  font-family: \"Libre Franklin\", sans-serif;\n  line-height: 1.5rem !important;\n  text-transform: capitalize;\n  transform: translateY(1px);\n  letter-spacing: 0;\n}\n.bootstrap-select .filter-option-inner-inner.selected {\n  color: #111111;\n  font-size: 0.95rem;\n}\n.bootstrap-select .bs-searchbox {\n  padding: 0.5rem;\n}\n.bootstrap-select .bs-searchbox input {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.bootstrap-select .bs-searchbox input:focus {\n  box-shadow: none;\n  border: 1px solid #ddd;\n}\n.bootstrap-select .bs-searchbox input::-moz-placeholder {\n  font-weight: 300;\n}\n.bootstrap-select .bs-searchbox input:-ms-input-placeholder {\n  font-weight: 300;\n}\n.bootstrap-select .bs-searchbox input::-ms-input-placeholder {\n  font-weight: 300;\n}\n.bootstrap-select .bs-searchbox input::placeholder {\n  font-weight: 300;\n}\n.bootstrap-select .no-results {\n  margin: 0 0.5rem 0.5rem 0.5rem;\n  padding: 0.2rem 1rem;\n}\n.bootstrap-select button.dropdown-toggle:active, .bootstrap-select button.dropdown-toggle:focus {\n  outline: none !important;\n}\n.bootstrap-select button.dropdown-toggle::after {\n  border: none;\n  content: \"\\F078\" !important;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 0.65rem;\n  vertical-align: middle !important;\n  padding-left: 0.1rem;\n  transform: translateY(-50%);\n  position: absolute;\n  right: 1rem;\n  top: calc(50% + 2px);\n}\n.bootstrap-select button.dropdown-toggle.form-control-lg .filter-option {\n  position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translateY(-50%);\n  height: 1.5rem;\n  line-height: 1.5rem;\n}\n.bootstrap-select .dropdown-toggle[aria-expanded=true]::after {\n  content: \"\\F077\" !important;\n}\n\n/*\n\n=====================\nSTYLE SWITCHER FOR DEMO\n=====================\n\n*/\n#style-switch-button {\n  position: fixed;\n  top: 120px;\n  left: 0px;\n  border-radius: 0;\n  z-index: 2;\n}\n#style-switch {\n  width: 300px;\n  padding: 20px;\n  position: fixed;\n  top: 160px;\n  left: 0;\n  background: #fff;\n  border: solid 1px #ced4da;\n  z-index: 2000;\n}\n#style-switch h4 {\n  color: #495057;\n}\n\n/* =========================================\n\n      THEMING OF THE BOOTSTRAP COMPONENTS\n\n   =========================================\n\n    1 - NAVBAR\n    2 - BUTTONS\n    3 - TYPE\n    4 - PAGINATION\n    5 - UTILITIES\n    6 - FORMS\n    7 - CODE\n    8 - NAV\n    9 - CARD\n    10 - DROPDOWNS\n    11 - MODALS\n    12 - BREADCRUMB\n\n*/\n/*\n * 1. NAVBAR\n */\n.navbar {\n  padding: 0.5rem 1rem;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n}\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  border: 1px solid transparent;\n  border-radius: 0;\n}\n.navbar-light .navbar-brand {\n  color: #dcb14a;\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: #dcb14a;\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(17, 17, 17, 0.99);\n  font-weight: 800;\n  font-size: 0.95rem;\n  transition: all 0.3s;\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: #dcb14a;\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(17, 17, 17, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: #dcb14a;\n}\n.navbar-light .navbar-toggler {\n  color: rgba(17, 17, 17, 0.99);\n  border-color: rgba(17, 17, 17, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(17, 17, 17, 0.99)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-light .navbar-text {\n  color: rgba(17, 17, 17, 0.99);\n}\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n/*\n * 2. BUTTONS\n */\n.btn {\n  font-weight: 400;\n  border: 1px solid transparent;\n  font-family: inherit;\n  padding: 0.375rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.btn {\n    transition: none;\n}\n}\n.btn:focus, .btn.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 177, 74, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n  background-image: none;\n}\n.btn-link {\n  font-weight: 400;\n  color: #dcb14a;\n}\n.btn-link:hover {\n  color: #b68b23;\n  text-decoration: underline;\n}\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n  box-shadow: none;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n}\n.btn-primary {\n  color: #212529;\n  background-color: #dcb14a;\n  border-color: #dcb14a;\n}\n.btn-primary:hover {\n  color: #212529;\n  background-color: #d6a32a;\n  border-color: #cc9b27;\n}\n.btn-primary:focus, .btn-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 177, 74, 0.5);\n  box-shadow: none;\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #212529;\n  background-color: #dcb14a;\n  border-color: #dcb14a;\n}\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #212529;\n  background-color: #cc9b27;\n  border-color: #c19325;\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 177, 74, 0.5);\n}\n.btn-primary:Focus {\n  text-decoration: none;\n}\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n  box-shadow: none;\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-secondary:Focus {\n  text-decoration: none;\n}\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n  box-shadow: none;\n}\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-success:Focus {\n  text-decoration: none;\n}\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n  box-shadow: none;\n}\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-info:Focus {\n  text-decoration: none;\n}\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n  box-shadow: none;\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-warning:Focus {\n  text-decoration: none;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n  box-shadow: none;\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-danger:Focus {\n  text-decoration: none;\n}\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n  box-shadow: none;\n}\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-light:Focus {\n  text-decoration: none;\n}\n.btn-dark {\n  color: #fff;\n  background-color: #111111;\n  border-color: #111111;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: black;\n  border-color: black;\n}\n.btn-dark:focus, .btn-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(17, 17, 17, 0.5);\n  box-shadow: none;\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #111111;\n  border-color: #111111;\n}\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: black;\n  border-color: black;\n}\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(17, 17, 17, 0.5);\n}\n.btn-dark:Focus {\n  text-decoration: none;\n}\n.btn-outline-primary {\n  color: #dcb14a;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dcb14a;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #dcb14a;\n  border-color: #dcb14a;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 177, 74, 0.5);\n  box-shadow: none;\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #dcb14a;\n  background-color: transparent;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #212529;\n  background-color: #dcb14a;\n  border-color: #dcb14a;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-primary:focus {\n  color: #fff;\n  background: #dcb14a;\n  text-decoration: none;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n  box-shadow: none;\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-secondary:focus {\n  color: #fff;\n  background: #6c757d;\n  text-decoration: none;\n}\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n  box-shadow: none;\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-success:focus {\n  color: #fff;\n  background: #28a745;\n  text-decoration: none;\n}\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n  box-shadow: none;\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-info:focus {\n  color: #fff;\n  background: #17a2b8;\n  text-decoration: none;\n}\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n  box-shadow: none;\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-warning:focus {\n  color: #fff;\n  background: #ffc107;\n  text-decoration: none;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n  box-shadow: none;\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-danger:focus {\n  color: #fff;\n  background: #dc3545;\n  text-decoration: none;\n}\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #fff;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n  box-shadow: none;\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-light:focus {\n  color: #fff;\n  background: #f8f9fa;\n  text-decoration: none;\n}\n.btn-outline-dark {\n  color: #111111;\n  background-color: transparent;\n  background-image: none;\n  border-color: #111111;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #111111;\n  border-color: #111111;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(17, 17, 17, 0.5);\n  box-shadow: none;\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #111111;\n  background-color: transparent;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #111111;\n  border-color: #111111;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: none;\n}\n.btn-outline-dark:focus {\n  color: #fff;\n  background: #111111;\n  text-decoration: none;\n}\n.btn-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.btn-sm {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0;\n}\n\n/*\n * 3. TYPE\n */\nbody {\n  font-family: \"Libre Franklin\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #111111;\n  background-color: #fff;\n}\na {\n  color: #dcb14a;\n  text-decoration: none;\n}\na:hover, a:focus {\n  color: #b68b23;\n  text-decoration: underline;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 900;\n  line-height: 1.2;\n  color: inherit;\n}\nh1,\n.h1 {\n  font-size: 2.2rem;\n}\nh2,\n.h2 {\n  font-size: 1.9rem;\n}\nh3,\n.h3 {\n  font-size: 1.65rem;\n}\nh4,\n.h4 {\n  font-size: 1.4rem;\n}\nh5,\n.h5 {\n  font-size: 1.15rem;\n}\nh6,\n.h6 {\n  font-size: 1rem;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\nhr {\n  border-top: 1px solid rgba(17, 17, 17, 0.1);\n}\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 2rem;\n  font-size: 1.25rem;\n  border-left: 5px solid #dcb14a;\n}\n.blockquote-footer {\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"\\2014\\A0\";\n}\n.text-primary {\n  color: #dcb14a !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #cc9b27 !important;\n}\n\n/*\n * 4. PAGINATION\n */\n.page-item:first-child .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.page-item.active .page-link {\n  color: #fff;\n  background-color: #111111;\n  border-color: #111111;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.page-link {\n  padding: 0.5rem 0.75rem;\n  line-height: 1.25;\n  color: #111111;\n  background-color: none;\n  border: 1px solid #eee;\n  margin: 0.2rem;\n  transition: all 0.3s;\n}\n.page-link:hover {\n  z-index: 2;\n  color: #111111;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: none;\n  text-decoration: none;\n  background-color: #111111;\n  color: #fff;\n}\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/*\n* 5. UTILITIES\n*/\n.bg-primary {\n  background-color: #dcb14a !important;\n}\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #cc9b27 !important;\n}\n.bg-secondary {\n  background-color: #6c757d !important;\n}\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n.bg-success {\n  background-color: #28a745 !important;\n}\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n.bg-info {\n  background-color: #17a2b8 !important;\n}\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n}\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n.bg-dark {\n  background-color: #111111 !important;\n}\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: black !important;\n}\n.border-primary {\n  border-color: #dcb14a !important;\n}\n.border-secondary {\n  border-color: #6c757d !important;\n}\n.border-success {\n  border-color: #28a745 !important;\n}\n.border-info {\n  border-color: #17a2b8 !important;\n}\n.border-warning {\n  border-color: #ffc107 !important;\n}\n.border-danger {\n  border-color: #dc3545 !important;\n}\n.border-light {\n  border-color: #f8f9fa !important;\n}\n.border-dark {\n  border-color: #111111 !important;\n}\n.text-primary {\n  color: #dcb14a !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #cc9b27 !important;\n}\n.text-secondary {\n  color: #6c757d !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #545b62 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #1e7e34 !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #117a8b !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #d39e00 !important;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bd2130 !important;\n}\n.text-light {\n  color: #f8f9fa !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #dae0e5 !important;\n}\n.text-dark {\n  color: #111111 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: black !important;\n}\n.badge-primary {\n  color: #212529;\n  background-color: #dcb14a;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-primary[href]:hover, .badge-primary[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #cc9b27;\n}\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #545b62;\n}\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-success[href]:hover, .badge-success[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1e7e34;\n}\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-info[href]:hover, .badge-info[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #117a8b;\n}\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-warning[href]:hover, .badge-warning[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #d39e00;\n}\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-danger[href]:hover, .badge-danger[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #bd2130;\n}\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-light[href]:hover, .badge-light[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #dae0e5;\n}\n.badge-dark {\n  color: #fff;\n  background-color: #111111;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 0;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n}\n.badge-dark[href]:hover, .badge-dark[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: black;\n}\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(17, 17, 17, 0.075) !important;\n}\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(17, 17, 17, 0.15) !important;\n}\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(17, 17, 17, 0.175) !important;\n}\n\n/*\n  * 6. FORMS\n  */\n.form-control {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.form-control {\n    transition: none;\n}\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #f1dfb5;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 177, 74, 0.25);\n  box-shadow: inset 0 0 1px #111111;\n  border-color: #111111;\n}\n.form-control::-moz-placeholder {\n  color: #adb5bd;\n  font-size: 0.85rem;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  color: #adb5bd;\n  font-size: 0.85rem;\n  font-weight: 400;\n}\n.form-control::-ms-input-placeholder {\n  color: #adb5bd;\n  font-size: 0.85rem;\n  font-weight: 400;\n}\n.form-control::placeholder {\n  color: #adb5bd;\n  font-size: 0.85rem;\n  font-weight: 400;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n}\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0;\n}\nselect.form-control-sm:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n.form-control-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0;\n}\nselect.form-control-lg:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: 0.2rem;\n}\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated .custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745;\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated .custom-select:valid:focus,\n.custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-control:valid ~ .valid-feedback,\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n.form-control.is-valid ~ .valid-tooltip, .was-validated .custom-select:valid ~ .valid-feedback,\n.was-validated .custom-select:valid ~ .valid-tooltip,\n.custom-select.is-valid ~ .valid-feedback,\n.custom-select.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  background-color: #71dd8a;\n}\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57;\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: 0.2rem;\n}\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated .custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated .custom-select:invalid:focus,\n.custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-control:invalid ~ .invalid-feedback,\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated .custom-select:invalid ~ .invalid-feedback,\n.was-validated .custom-select:invalid ~ .invalid-tooltip,\n.custom-select.is-invalid ~ .invalid-feedback,\n.custom-select.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  background-color: #efa2a9;\n}\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d;\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #dcb14a;\n}\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 177, 74, 0.25);\n}\n.custom-control-input:active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #f9f1e0;\n}\n.custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n.custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #dcb14a;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #dcb14a;\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(220, 177, 74, 0.5);\n}\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(220, 177, 74, 0.5);\n}\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #dcb14a;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(220, 177, 74, 0.5);\n}\n.custom-control-label {\n  font-weight: 400;\n  line-height: 2.1em;\n  cursor: pointer;\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  background: #dcb14a;\n  border-color: #dcb14a;\n}\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: rgba(220, 177, 74, 0.5);\n}\n\n/*\n* 7.CODE\n*/\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n}\n\n/*\n* 8. NAV\n*/\n.nav-link {\n  padding: 0.5rem 1rem;\n}\n.nav-link.disabled {\n  color: #6c757d;\n}\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  font-family: inherit;\n  color: #111111;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  transition: all 0.3s;\n  font-weight: 700;\n  padding: 0.7rem 1.5rem;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-link:hover,\n.nav-tabs .nav-item.show .nav-link {\n  background: #111111;\n  background-color: #111111;\n  color: #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n}\n.nav-pills .nav-link {\n  border-radius: 0;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #dcb14a;\n}\n\n/*\n* 9. CARD\n*/\n.card {\n  background-color: #fff;\n  border: 1px solid rgba(17, 17, 17, 0.125);\n  border-radius: 0;\n}\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.card-body {\n  padding: 1.25rem;\n}\n.card-title {\n  margin-bottom: 0.75rem;\n}\n.card-subtitle {\n  margin-top: -0.375rem;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n.card-header {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(17, 17, 17, 0.03);\n  border-bottom: 1px solid rgba(17, 17, 17, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0 - 1px) calc(0 - 1px) 0 0;\n}\n.card-header-transparent {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-bottom: none;\n}\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #f8f9fa;\n  border-top: 1px solid rgba(17, 17, 17, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0 - 1px) calc(0 - 1px);\n}\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n.card-img-overlay {\n  padding: 1.25rem;\n}\n.card-img-overlay-opacity {\n  background: rgba(0, 0, 0, 0.2);\n}\n.card-img {\n  border-radius: calc(0 - 1px);\n}\n.card-img-top {\n  border-top-left-radius: calc(0 - 1px);\n  border-top-right-radius: calc(0 - 1px);\n}\n.card-img-bottom {\n  border-bottom-right-radius: calc(0 - 1px);\n  border-bottom-left-radius: calc(0 - 1px);\n}\n.card-deck .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n.card-deck {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.card-deck .card {\n    margin-right: 15px;\n    margin-left: 15px;\n}\n}\n/*\n* 10. DROPDOWNS\n*/\n.dropdown-menu {\n  min-width: 12.5rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 0.9rem;\n  color: #111111;\n  background-color: #fff;\n  border: none;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.07);\n  border-radius: 0;\n}\n.dropdown-item {\n  padding: 0.375rem 1.5rem;\n  font-weight: 400;\n  color: #212529;\n  background: #fff;\n  font-size: 0.9rem;\n  transition: all 0.3s;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  background-color: #f8f9fa;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  background-color: #dcb14a;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n}\n\n/*\n* 11. MODALS\n*/\n.modal-content {\n  border-radius: 0;\n}\n@media (min-width: 992px) {\n.modal-lg {\n    min-width: 900px;\n}\n}\n.modal-backdrop.show {\n  opacity: 0.7;\n}\n\n/*\n * 12. BREADCRUMB\n */\n.breadcrumb {\n  background: #f8f9fa;\n}\n.breadcrumb-item {\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-weight: 900;\n  color: #111111;\n}\n.breadcrumb-item a {\n  color: inherit;\n  transition: all 0.3s;\n}\n.breadcrumb-item a:hover, .breadcrumb-item a:focus {\n  color: #dcb14a;\n  text-decoration: none;\n}\n.breadcrumb-item.active {\n  color: #aaa;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=template&id=6ca5f89d&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/themes/default/components/Main.vue?vue&type=template&id=6ca5f89d& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-holder" },
    [
      _c("Navigation"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("section", { staticClass: "py-5 bg-light" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row text-center" }, [
              _c("div", { staticClass: "col-lg-4 mb-3 mb-lg-0" }, [
                _c("div", { staticClass: "d-inline-block" }, [
                  _c("div", { staticClass: "media align-items-end" }, [
                    _c(
                      "svg",
                      { staticClass: "svg-icon svg-icon-big svg-icon-light" },
                      [
                        _c("use", {
                          attrs: { "xlink:href": "#delivery-time-1" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 mb-3 mb-lg-0" }, [
                _c("div", { staticClass: "d-inline-block" }, [
                  _c("div", { staticClass: "media align-items-end" }, [
                    _c(
                      "svg",
                      { staticClass: "svg-icon svg-icon-big svg-icon-light" },
                      [
                        _c("use", {
                          attrs: { "xlink:href": "#helpline-24h-1" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }, [
                _c("div", { staticClass: "d-inline-block" }, [
                  _c("div", { staticClass: "media align-items-end" }, [
                    _c(
                      "svg",
                      { staticClass: "svg-icon svg-icon-big svg-icon-light" },
                      [_c("use", { attrs: { "xlink:href": "#label-tag-1" } })]
                    ),
                    _vm._v(" "),
                    _vm._m(6)
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(7)
      ]),
      _vm._v(" "),
      _c("TempFooter")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "productView",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-lg modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-body p-0" }, [
                _c("div", { staticClass: "row align-items-stretch" }, [
                  _c("div", { staticClass: "col-lg-6 p-lg-0" }, [
                    _c("a", {
                      staticClass:
                        "product-view d-block h-100 bg-cover bg-center",
                      staticStyle: { background: "url(../img/product-5.jpg)" },
                      attrs: {
                        href: "../img/product-5.jpg",
                        "data-lightbox": "productview",
                        title: "Red digital smartwatch"
                      }
                    }),
                    _c("a", {
                      staticClass: "d-none",
                      attrs: {
                        href: "../img/product-5-alt-1.jpg",
                        title: "Red digital smartwatch",
                        "data-lightbox": "productview"
                      }
                    }),
                    _c("a", {
                      staticClass: "d-none",
                      attrs: {
                        href: "../img/product-5-alt-2.jpg",
                        title: "Red digital smartwatch",
                        "data-lightbox": "productview"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "close p-4",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        }
                      },
                      [
                        _c("span", { attrs: { "aria-hidden": "true" } }, [
                          _vm._v("×")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-5 my-md-4" }, [
                      _c("ul", { staticClass: "list-inline mb-2" }, [
                        _c("li", { staticClass: "list-inline-item m-0" }, [
                          _c("i", {
                            staticClass: "fas fa-star small text-warning"
                          })
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item m-0" }, [
                          _c("i", {
                            staticClass: "fas fa-star small text-warning"
                          })
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item m-0" }, [
                          _c("i", {
                            staticClass: "fas fa-star small text-warning"
                          })
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item m-0" }, [
                          _c("i", {
                            staticClass: "fas fa-star small text-warning"
                          })
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item m-0" }, [
                          _c("i", {
                            staticClass: "fas fa-star small text-warning"
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h2", { staticClass: "h4" }, [
                        _vm._v("Red digital smartwatch")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [_vm._v("$250")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-small mb-4" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes\n\t\t\t\t\t\t\t\t\tnascetur ridiculus mus. Vestibulum ultricies aliquam convallis.\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row align-items-stretch mb-4" },
                        [
                          _c("div", { staticClass: "col-sm-7 pr-sm-0" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "border d-flex align-items-center justify-content-between py-1 px-3"
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "small text-uppercase text-gray mr-4 no-select"
                                  },
                                  [_vm._v("Quantity")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "quantity" }, [
                                  _c("button", { staticClass: "dec-btn p-0" }, [
                                    _c("i", {
                                      staticClass: "fas fa-caret-left"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass:
                                      "form-control border-0 shadow-0 p-0",
                                    attrs: { type: "text", value: "1" }
                                  }),
                                  _vm._v(" "),
                                  _c("button", { staticClass: "inc-btn p-0" }, [
                                    _c("i", {
                                      staticClass: "fas fa-caret-right"
                                    })
                                  ])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-5 pl-sm-0" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0",
                                attrs: { href: "cart.html" }
                              },
                              [_vm._v("Add to cart")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-link text-dark p-0",
                          attrs: { href: "#" }
                        },
                        [
                          _c("i", { staticClass: "far fa-heart mr-2" }),
                          _vm._v("Add to wish list")
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "hero pb-3 bg-cover bg-center d-flex align-items-center",
        staticStyle: { background: "url(../img/hero-banner-alt.jpg)" }
      },
      [
        _c("div", { staticClass: "container py-5" }, [
          _c("div", { staticClass: "row px-4 px-lg-5" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c("p", { staticClass: "text-muted small text-uppercase mb-2" }, [
                _vm._v("New Inspiration 2020")
              ]),
              _vm._v(" "),
              _c("h1", { staticClass: "h2 text-uppercase mb-3" }, [
                _vm._v("20% off on new season")
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-dark", attrs: { href: "shop.html" } },
                [_vm._v("Browse collections")]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "pt-5" }, [
      _c("header", { staticClass: "text-center" }, [
        _c("p", { staticClass: "small text-muted small text-uppercase mb-1" }, [
          _vm._v("Carefully created collections")
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "h5 text-uppercase mb-4" }, [
          _vm._v("Browse our categories")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 mb-4 mb-md-0" }, [
          _c(
            "a",
            { staticClass: "category-item", attrs: { href: "shop.html" } },
            [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: __webpack_require__(/*! ../img/cat-img-1.jpg */ "./resources/js/themes/default/img/cat-img-1.jpg"), alt: "" }
              }),
              _c("strong", { staticClass: "category-item-title" }, [
                _vm._v("Clothes")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 mb-4 mb-md-0" }, [
          _c(
            "a",
            { staticClass: "category-item mb-4", attrs: { href: "shop.html" } },
            [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: __webpack_require__(/*! ../img/cat-img-2.jpg */ "./resources/js/themes/default/img/cat-img-2.jpg"), alt: "" }
              }),
              _c("strong", { staticClass: "category-item-title" }, [
                _vm._v("Shoes")
              ])
            ]
          ),
          _c(
            "a",
            { staticClass: "category-item", attrs: { href: "shop.html" } },
            [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: __webpack_require__(/*! ../img/cat-img-3.jpg */ "./resources/js/themes/default/img/cat-img-3.jpg"), alt: "" }
              }),
              _c("strong", { staticClass: "category-item-title" }, [
                _vm._v("Watches")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "a",
            { staticClass: "category-item", attrs: { href: "shop.html" } },
            [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: __webpack_require__(/*! ../img/cat-img-4.jpg */ "./resources/js/themes/default/img/cat-img-4.jpg"), alt: "" }
              }),
              _c("strong", { staticClass: "category-item-title" }, [
                _vm._v("Electronics")
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "py-5" }, [
      _c("header", [
        _c("p", { staticClass: "small text-muted small text-uppercase mb-1" }, [
          _vm._v("Made the hard way")
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "h5 text-uppercase mb-4" }, [
          _vm._v("Top trending products")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-" }),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-1.jpg */ "./resources/js/themes/default/img/product-1.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Kui Ye Chen’s AirPods")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$250")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-primary" }, [
                _vm._v("Sale")
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-2.jpg */ "./resources/js/themes/default/img/product-2.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Air Jordan 12 gym red")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$300")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-" }),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-3.jpg */ "./resources/js/themes/default/img/product-3.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Cyan cotton t-shirt")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$25")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-info" }, [
                _vm._v("New")
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-4.jpg */ "./resources/js/themes/default/img/product-4.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Timex Unisex Originals")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$351")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-danger" }, [
                _vm._v("Sold")
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-5.jpg */ "./resources/js/themes/default/img/product-5.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Red digital smartwatch")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$250")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-" }),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-6.jpg */ "./resources/js/themes/default/img/product-6.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Nike air max 95")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$300")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-" }),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-7.jpg */ "./resources/js/themes/default/img/product-7.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Joemalone Women prefume")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$25")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
          _c("div", { staticClass: "product text-center" }, [
            _c("div", { staticClass: "position-relative mb-3" }, [
              _c("div", { staticClass: "badge text-white badge-" }),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "d-block", attrs: { href: "detail.html" } },
                [
                  _c("img", {
                    staticClass: "img-fluid w-100",
                    attrs: { src: __webpack_require__(/*! ../img/product-8.jpg */ "./resources/js/themes/default/img/product-8.jpg"), alt: "..." }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-overlay" }, [
                _c("ul", { staticClass: "mb-0 list-inline" }, [
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item m-0 p-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-dark",
                        attrs: { href: "cart.html" }
                      },
                      [_vm._v("Add to cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-inline-item mr-0" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-dark",
                        attrs: { href: "#productView", "data-toggle": "modal" }
                      },
                      [_c("i", { staticClass: "fas fa-expand" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", [
              _c(
                "a",
                { staticClass: "reset-anchor", attrs: { href: "detail.html" } },
                [_vm._v("Apple Watch")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "small text-muted" }, [_vm._v("$351")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body text-left ml-3" }, [
      _c("h6", { staticClass: "text-uppercase mb-1" }, [
        _vm._v("Free shipping")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-small mb-0 text-muted" }, [
        _vm._v("Free shipping worlwide")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body text-left ml-3" }, [
      _c("h6", { staticClass: "text-uppercase mb-1" }, [
        _vm._v("24 x 7 service")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-small mb-0 text-muted" }, [
        _vm._v("Free shipping worlwide")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body text-left ml-3" }, [
      _c("h6", { staticClass: "text-uppercase mb-1" }, [
        _vm._v("Festival offer")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-small mb-0 text-muted" }, [
        _vm._v("Free shipping worlwide")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "py-5" }, [
      _c("div", { staticClass: "container p-0" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 mb-3 mb-lg-0" }, [
            _c("h5", { staticClass: "text-uppercase" }, [
              _vm._v("Let's be friends!")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-small text-muted mb-0" }, [
              _vm._v("Nisi nisi tempor consequat laboris nisi.")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6" }, [
            _c("form", { attrs: { action: "#" } }, [
              _c(
                "div",
                { staticClass: "input-group flex-column flex-sm-row mb-3" },
                [
                  _c("input", {
                    staticClass: "form-control form-control-lg py-3",
                    attrs: {
                      type: "email",
                      placeholder: "Enter your email address",
                      "aria-describedby": "button-addon2"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-dark btn-block",
                        attrs: { id: "button-addon2", type: "submit" }
                      },
                      [_vm._v("Subscribe")]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/themes/default/components/Main.vue":
/*!*********************************************************!*\
  !*** ./resources/js/themes/default/components/Main.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_6ca5f89d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=6ca5f89d& */ "./resources/js/themes/default/components/Main.vue?vue&type=template&id=6ca5f89d&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/themes/default/components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_6ca5f89d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_6ca5f89d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/themes/default/components/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/themes/default/components/Main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/themes/default/components/Main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/themes/default/components/Main.vue?vue&type=template&id=6ca5f89d&":
/*!****************************************************************************************!*\
  !*** ./resources/js/themes/default/components/Main.vue?vue&type=template&id=6ca5f89d& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_6ca5f89d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=6ca5f89d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/themes/default/components/Main.vue?vue&type=template&id=6ca5f89d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_6ca5f89d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_6ca5f89d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/themes/default/img/cat-img-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/cat-img-1.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cat-img-1.jpg?7570d55a676decabc47abe890655da7a";

/***/ }),

/***/ "./resources/js/themes/default/img/cat-img-2.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/cat-img-2.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cat-img-2.jpg?1b2e51d9d492acd8e6fb9a7efa7a2a00";

/***/ }),

/***/ "./resources/js/themes/default/img/cat-img-3.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/cat-img-3.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cat-img-3.jpg?49411dee0b368d4499a293896fd9d854";

/***/ }),

/***/ "./resources/js/themes/default/img/cat-img-4.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/cat-img-4.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cat-img-4.jpg?5db5d5ecde63c1efca03e37a5abd8a81";

/***/ }),

/***/ "./resources/js/themes/default/img/product-5.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/product-5.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/product-5.jpg?aff049a7ee27d4cf294ddeb8aea15fa8";

/***/ }),

/***/ "./resources/js/themes/default/img/product-6.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/product-6.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/product-6.jpg?c4210d289e9b87af6852af0a28c34a45";

/***/ }),

/***/ "./resources/js/themes/default/img/product-7.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/product-7.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/product-7.jpg?1f4b5e9ba06b4ca9281e2f3de3244f18";

/***/ }),

/***/ "./resources/js/themes/default/img/product-8.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/themes/default/img/product-8.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/product-8.jpg?d7432880bb79a3664d5f010332a6b168";

/***/ })

}]);