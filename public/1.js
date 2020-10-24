(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/addProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/addProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'addProduct',
  data: function data() {
    return {
      form: {
        _token: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        name: "",
        trademark: "",
        price: "",
        quantity: "",
        unit_of_measurement: "",
        category: "",
        description: "",
        images: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['addProduct'])), {}, {
    loadImage: function loadImage(e) {
      var file = e.target.files[0];
      this.form.images = file;
    },
    saveProduct: function saveProduct() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.addProduct(_this.form);

              case 2:
                _this.$router.push({
                  name: 'list-product'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/addProduct.vue?vue&type=template&id=260884b9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/addProduct.vue?vue&type=template&id=260884b9& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "card m-4",
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.saveProduct($event)
          }
        }
      },
      [
        _c("input", {
          attrs: { type: "hidden", name: "_token" },
          domProps: { value: _vm.form._token }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "nombre-prod" } },
            [_vm._v(" NomBre: ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "text",
              id: "nombre-prod",
              name: "name",
              placeholder: "Ej: gaseosa"
            },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "marca-prod" } },
            [_vm._v(" Marca:")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.trademark,
                expression: "form.trademark"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "text",
              id: "marca-prod",
              name: "trademark",
              placeholder: "Ej: Coca-cola"
            },
            domProps: { value: _vm.form.trademark },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "trademark", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "precio-prod" } },
            [_vm._v(" Precio:")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.price,
                expression: "form.price"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "number",
              id: "precio-prod",
              name: "price",
              placeholder: "Ej: $100"
            },
            domProps: { value: _vm.form.price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "cantidad-prod" } },
            [_vm._v(" Cantidad: ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.quantity,
                expression: "form.quantity"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "number",
              id: "cantidad-prod",
              name: "quantity",
              placeholder: "Ej: 3"
            },
            domProps: { value: _vm.form.quantity },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "quantity", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "unidad-prod" } },
            [_vm._v(" Unidad:  ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.unit_of_measurement,
                expression: "form.unit_of_measurement"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "text",
              id: "unidad-prod",
              name: "unit_of_measurement",
              placeholder: "Ej: litros"
            },
            domProps: { value: _vm.form.unit_of_measurement },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "unit_of_measurement", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "categoria-prod" } },
            [_vm._v(" Categoría: ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.category,
                expression: "form.category"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "text",
              id: "categoria-prod",
              name: "category",
              placeholder: "Ej: alimento"
            },
            domProps: { value: _vm.form.category },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "category", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3", attrs: { for: "descripcion-prod" } },
            [_vm._v(" Breve descripción: ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.description,
                expression: "form.description"
              }
            ],
            staticClass: "form-control col-md-7",
            attrs: {
              type: "text",
              id: "descripcion-prod",
              name: "description",
              placeholder: "Ej: botella de plástico"
            },
            domProps: { value: _vm.form.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "description", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-5", attrs: { for: "images-prod" } },
            [_vm._v(" Imagen del producto: ")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control-file col-md-5",
            attrs: { type: "file", id: "images-prod", accept: "image/*" },
            on: { change: _vm.loadImage }
          })
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("input", {
        staticClass: "btn btn-primary",
        attrs: { type: "submit", value: "enviar datos" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/product/addProduct.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/product/addProduct.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addProduct_vue_vue_type_template_id_260884b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProduct.vue?vue&type=template&id=260884b9& */ "./resources/js/components/product/addProduct.vue?vue&type=template&id=260884b9&");
/* harmony import */ var _addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/product/addProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addProduct_vue_vue_type_template_id_260884b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addProduct_vue_vue_type_template_id_260884b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/addProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/addProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/product/addProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/addProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/addProduct.vue?vue&type=template&id=260884b9&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/product/addProduct.vue?vue&type=template&id=260884b9& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_260884b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addProduct.vue?vue&type=template&id=260884b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/addProduct.vue?vue&type=template&id=260884b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_260884b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_260884b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);