function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @po-ui/ng-components */
    "./node_modules/@po-ui/ng-components/__ivy_ngcc__/fesm2015/po-ui-ng-components.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _porow_porow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./porow/porow.component */
    "./src/app/porow/porow.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @po-ui/ng-code-editor */
    "./node_modules/@po-ui/ng-code-editor/__ivy_ngcc__/fesm2015/po-ui-ng-code-editor.js");
    /* harmony import */


    var _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component-layout/component-layout.component */
    "./src/app/component-layout/component-layout.component.ts");

    function AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_div_2_Template_po_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r5.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r5.value);
      }
    }

    function AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-code-editor", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_div_3_Template_po_code_editor_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r5.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r5.value);
      }
    }

    function AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-switch", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_Template_po_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var item_r5 = ctx.$implicit;
          return item_r5.showEditor = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_div_2_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_div_3_Template, 2, 1, "div", 13);
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r5.showEditor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.showEditor == undefined || item_r5.showEditor == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.showEditor == true);
      }
    }

    function AppComponent_po_widget_1_po_widget_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-list-view", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_po_widget_1_po_widget_7_div_3_ng_template_2_Template, 4, 3, "ng-template", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-items", ctx_r3.componentProperties);
      }
    }

    function AppComponent_po_widget_1_po_widget_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-widget", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-primary-action", function AppComponent_po_widget_1_po_widget_7_Template_po_widget_p_primary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.confirmarEdicaoComponente();
        })("p-secondary-action", function AppComponent_po_widget_1_po_widget_7_Template_po_widget_p_secondary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.adicionarSubComponentes();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-combo", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_1_po_widget_7_Template_po_combo_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.componentEdicao.component = $event;
        })("p-change", function AppComponent_po_widget_1_po_widget_7_Template_po_combo_p_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.changeComponentCombo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_1_po_widget_7_div_3_Template, 3, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-title", "Edi\xE7\xE3o Componente" + ((ctx_r2.componentEdicao == null ? null : ctx_r2.componentEdicao.component == null ? null : ctx_r2.componentEdicao.component.name) ? ctx_r2.componentEdicao == null ? null : ctx_r2.componentEdicao.component == null ? null : ctx_r2.componentEdicao.component.name : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.componentEdicao.component)("p-options", ctx_r2.componentsOptions)("p-filter-mode", "contains");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.componentEdicao != null);
      }
    }

    function AppComponent_po_widget_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-widget", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-primary-action", function AppComponent_po_widget_1_Template_po_widget_p_primary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.confirmarAlteracoes();
        })("p-secondary-action", function AppComponent_po_widget_1_Template_po_widget_p_secondary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_1_Template_po_button_p_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.adicionarComponente();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "po-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_1_Template_po_button_p_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.limparTela();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "po-widget", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "po-tree-view", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-selected", function AppComponent_po_widget_1_Template_po_tree_view_p_selected_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.treeViewItemSelecionado($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_po_widget_1_po_widget_7_Template, 4, 5, "po-widget", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-selectable", true)("p-items", ctx_r0.treeViewData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.componentEdicao != null);
      }
    }

    function AppComponent_app_component_layout_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-component-layout", 19);
      }

      if (rf & 2) {
        var item_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("componentData", item_r29);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(poNotification, resolver, injector) {
        _classCallCheck(this, AppComponent);

        this.poNotification = poNotification;
        this.resolver = resolver;
        this.injector = injector;
        this.components = [];
        this.listaComponents = [];
        this.actions = [{
          label: "Configuração",
          icon: 'po-icon po-icon-settings',
          action: this.openConfig.bind(this)
        }]; //Edição

        this.componentesEdicao = [];
        this.treeViewData = [];
        this.exibirConfig = false;
        this.componentsOptions = [];
        this._componentEdicao = null;
        this.componentProperties = [];
        this.listaComponents = this.obterComponentes(_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoComponentsModule"]);
        this.listaComponents.push(_porow_porow_component__WEBPACK_IMPORTED_MODULE_3__["PoRowComponent"]);
        this.componentsOptions = this.listaComponents.map(function (item) {
          return {
            label: item.name,
            value: item
          };
        });
      }

      _createClass(AppComponent, [{
        key: "obterComponentes",
        value: function obterComponentes(type) {
          var components = [];
          var _ngModule = type;

          for (var index = 0; index < _ngModule.decorators[0].args[0].exports.length; index++) {
            var element = _ngModule.decorators[0].args[0].exports[index];

            if (element.name.endsWith('Module')) {
              components = [].concat(_toConsumableArray(components), _toConsumableArray(this.obterComponentes(element)));
            } else if (element.name.endsWith('Component')) {
              components.push(element);
            }
          }

          return components;
        }
      }, {
        key: "confirmarAlteracoes",
        value: function confirmarAlteracoes() {
          this.confirmarAlteracoesComponentes();
          this.closeModal();
        }
      }, {
        key: "adicionarComponente",
        value: function adicionarComponente() {
          this.componentesEdicao.push({
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
            component: null,
            data: {},
            subComponent: []
          });
          this.atualizarTreeView();
        }
      }, {
        key: "confirmarAlteracoesComponentes",
        value: function confirmarAlteracoesComponentes() {
          var _this = this;

          var removerNaoConfigurados = function removerNaoConfigurados(itens) {
            for (var i = 0; i < itens.length; i++) {
              var element = itens[i];
              element.subComponent = removerNaoConfigurados(element.subComponent);
            }

            return itens.filter(function (f) {
              return f.component != null;
            });
          };

          this.componentesEdicao = removerNaoConfigurados(this.componentesEdicao);
          this.components = [];
          setTimeout(function () {
            _this.components = _toConsumableArray(_this.componentesEdicao);
          }, 500);
        }
      }, {
        key: "atualizarTreeView",
        value: function atualizarTreeView() {
          var _this2 = this;

          this.treeViewData = [];

          var mapper = function mapper(item) {
            var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var _a;

            var poTreeViewModel = {
              label: item.component != null ? item.component.name : "Novo Componente",
              value: item.id
            };

            if (poTreeViewModel.value == ((_a = _this2.componentEdicao) === null || _a === void 0 ? void 0 : _a.id)) {
              poTreeViewModel.expanded = true;
            }

            var subItems = [];

            for (var i = 0; i < item.subComponent.length; i++) {
              var element = item.subComponent[i];
              subItems.push(mapper(element, poTreeViewModel.expanded));
            }

            poTreeViewModel.subItems = subItems;
            return poTreeViewModel;
          };

          for (var i = 0; i < this.componentesEdicao.length; i++) {
            var element = this.componentesEdicao[i];
            this.treeViewData.push(mapper(element));
          }
        }
      }, {
        key: "limparTela",
        value: function limparTela() {
          this.componentEdicao = null;
          this.components = [];
          this.componentesEdicao = [];
          this.treeViewData = [];
        }
      }, {
        key: "buscarComponentPorId",
        value: function buscarComponentPorId(id) {
          var finder = function finder(id, parents) {
            var firstTry = parents.find(function (p) {
              return p.id == id;
            });
            if (firstTry) return firstTry;

            for (var i = 0; i < parents.length; i++) {
              var element = parents[i];
              var secondTry = finder(id, element.subComponent);
              if (secondTry) return secondTry;
            }

            return null;
          };

          return finder(id, this.componentesEdicao);
        }
      }, {
        key: "treeViewItemSelecionado",
        value: function treeViewItemSelecionado(treeViewItem) {
          var unmark = function unmark(dismarkItem) {
            dismarkItem.selected = false;

            if (dismarkItem.subItems != undefined || dismarkItem.subItems != null) {
              for (var i = 0; i < dismarkItem.subItems.length; i++) {
                var element = dismarkItem.subItems[i];
                unmark(element);
              }
            }
          };

          unmark(treeViewItem);
          var search = this.buscarComponentPorId(treeViewItem.value);
          this.treeViewData = _toConsumableArray(this.treeViewData);
          this.componentEdicao = search;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.exibirConfig = false;
        }
      }, {
        key: "openConfig",
        value: function openConfig() {
          this.exibirConfig = true;
          this.componentesEdicao = _toConsumableArray(this.components);
        }
      }, {
        key: "changeComponentCombo",
        value: function changeComponentCombo() {
          this.atualizarProriedadesComponente(this.componentEdicao);
        }
      }, {
        key: "obterItemTreeListPorId",
        value: function obterItemTreeListPorId(id) {
          var finder = function finder(id, parents) {
            var firstTry = parents.find(function (p) {
              return p.value == id;
            });
            if (firstTry) return firstTry;

            for (var i = 0; i < parents.length; i++) {
              var element = parents[i];
              var secondTry = finder(id, element.subItems);
              if (secondTry) return secondTry;
            }

            return null;
          };

          return finder(id, this.treeViewData);
        }
      }, {
        key: "confirmarEdicaoComponente",
        value: function confirmarEdicaoComponente() {
          this.componentEdicao.data = {};

          for (var i = 0; i < this.componentProperties.length; i++) {
            var element = this.componentProperties[i];

            if (element.value != undefined && element.value != null && element.value != '') {
              try {
                this.componentEdicao.data[element.name] = JSON.parse(element.value);
              } catch (error) {
                this.componentEdicao.data[element.name] = element.value;
              }
            }
          }

          var treeViewItem = this.obterItemTreeListPorId(this.componentEdicao.id);
          treeViewItem.label = this.componentEdicao.component != null ? this.componentEdicao.component.name : 'Novo Componente';
          this.treeViewData = _toConsumableArray(this.treeViewData);
          this.componentEdicao = null;
        }
      }, {
        key: "adicionarSubComponentes",
        value: function adicionarSubComponentes() {
          if (this.componentEdicao) {
            this.componentEdicao.subComponent.push({
              id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
              component: null,
              data: {},
              subComponent: []
            });
            this.atualizarTreeView();
          }
        }
      }, {
        key: "atualizarProriedadesComponente",
        value: function atualizarProriedadesComponente(value) {
          this.componentProperties = [];

          if (value == null || value == undefined) {
            return;
          }

          if (value.component == null || value.component == undefined) {
            return;
          }

          var componentRef = this.resolver.resolveComponentFactory(this.componentEdicao.component).create(this.injector);
          var descriptor = Object.assign({}, Object.getOwnPropertyDescriptors(componentRef.instance));
          descriptor = Object.assign(Object.assign({}, descriptor), Object.getOwnPropertyDescriptors(componentRef.instance.__proto__));
          descriptor = Object.assign(Object.assign({}, descriptor), Object.getOwnPropertyDescriptors(componentRef.instance.__proto__.__proto__));

          for (var key in componentRef.componentType["ɵcmp"].declaredInputs) {
            var element = componentRef.componentType["ɵcmp"].declaredInputs[key];
            descriptor[element] = null;
          }

          for (var _key in descriptor) {
            var _element = descriptor[_key];

            if (_element == null || _element.set) {
              var propriedade = {
                name: _key,
                value: ''
              };

              try {
                if (value.data[_key]) {
                  if (value.data[_key] instanceof Object) {
                    propriedade.value = JSON.stringify(value.data[_key]);
                  } else {
                    propriedade.value = value.data[_key] ? value.data[_key] : '';
                  }
                }
              } catch (error) {
                propriedade.value = value.data[_key] ? value.data[_key] : '';
              }

              this.componentProperties.push(propriedade);
            }
          }
        }
      }, {
        key: "componentEdicao",
        get: function get() {
          return this._componentEdicao;
          ;
        },
        set: function set(value) {
          this._componentEdicao = value;
          this.atualizarProriedadesComponente(value);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 3,
      consts: [["p-title", "PO Layout Builder", 3, "p-actions"], ["p-title", "Configura\xE7\xE3o", "p-primary-label", "Confirmar", "p-secondary-label", "Cancelar", 3, "p-primary-action", "p-secondary-action", 4, "ngIf"], [3, "componentData", 4, "ngFor", "ngForOf"], ["p-title", "Configura\xE7\xE3o", "p-primary-label", "Confirmar", "p-secondary-label", "Cancelar", 3, "p-primary-action", "p-secondary-action"], [1, "po-row", "po-mb-1"], ["p-type", "primary", "p-label", "Novo Componente", 3, "p-click"], ["p-type", "danger", "p-label", "Limpar", 1, "po-ml-1", 3, "p-click"], [1, "po-row"], ["p-height", "700", "p-title", "Componentes", 1, "po-lg-6", "po-mb-1"], [3, "p-selectable", "p-items", "p-selected"], ["class", "po-lg-6 po-mb-1", "p-height", "700", "p-primary-label", "Confirmar", "p-secondary-label", "Add Filhos", 3, "p-title", "p-primary-action", "p-secondary-action", 4, "ngIf"], ["p-height", "700", "p-primary-label", "Confirmar", "p-secondary-label", "Add Filhos", 1, "po-lg-6", "po-mb-1", 3, "p-title", "p-primary-action", "p-secondary-action"], ["name", "ComponentCombo", "p-label", "Componente:", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-options", "p-filter-mode", "ngModelChange", "p-change"], ["class", "po-row", 4, "ngIf"], ["p-property-title", "name", 1, "po-md-12", 3, "p-items"], ["p-list-view-content-template", ""], ["p-label", "Exibir editor avan\xE7ado?", "p-label-off", " ", "p-label-on", " ", 3, "ngModel", "ngModelChange"], ["name", "input", 1, "po-md-12", 3, "ngModel", "ngModelChange"], ["p-height", "300", "p-language", "json", 1, "po-md-12", 3, "ngModel", "ngModelChange"], [3, "componentData"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-page-default", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_po_widget_1_Template, 8, 3, "po-widget", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_component_layout_2_Template, 1, 1, "app-component-layout", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-actions", ctx.actions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exibirConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.components);
        }
      },
      directives: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoPageDefaultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoWidgetComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoButtonComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoTreeViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoComboComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewContentTemplateDirective"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoSwitchComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoInputComponent"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_6__["PoCodeEditorComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_7__["ComponentLayoutComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoNotificationService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @po-ui/ng-components */
    "./node_modules/@po-ui/ng-components/__ivy_ngcc__/fesm2015/po-ui-ng-components.js");
    /* harmony import */


    var _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component-layout/component-layout.component */
    "./src/app/component-layout/component-layout.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _porow_porow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./porow/porow.component */
    "./src/app/porow/porow.component.ts");
    /* harmony import */


    var _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @po-ui/ng-code-editor */
    "./node_modules/@po-ui/ng-code-editor/__ivy_ngcc__/fesm2015/po-ui-ng-code-editor.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_9__["PoCodeEditorModule"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_5__["PoModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_6__["ComponentLayoutComponent"], _porow_porow_component__WEBPACK_IMPORTED_MODULE_8__["PoRowComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_9__["PoCodeEditorModule"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_5__["PoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_6__["ComponentLayoutComponent"], _porow_porow_component__WEBPACK_IMPORTED_MODULE_8__["PoRowComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_9__["PoCodeEditorModule"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_5__["PoModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component-layout/component-layout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/component-layout/component-layout.component.ts ***!
    \****************************************************************/

  /*! exports provided: ComponentLayoutComponent */

  /***/
  function srcAppComponentLayoutComponentLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLayoutComponent", function () {
      return ComponentLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @po-ui/ng-components */
    "./node_modules/@po-ui/ng-components/__ivy_ngcc__/fesm2015/po-ui-ng-components.js");

    var ComponentLayoutComponent = /*#__PURE__*/function () {
      function ComponentLayoutComponent(resolver, injector, appRef, viewContainer) {
        _classCallCheck(this, ComponentLayoutComponent);

        this.resolver = resolver;
        this.injector = injector;
        this.appRef = appRef;
        this.viewContainer = viewContainer; //component = PoPageDefaultComponent;
      }

      _createClass(ComponentLayoutComponent, [{
        key: "decoratorOfType",
        value: function decoratorOfType(decoratedType, decoratorType) {
          // get all decorators off of the provided type
          return Reflect.getOwnPropertyDescriptor(decoratedType, '__annotations__').value.find(function (annotation) {
            return (// get the decorator that matches the requested type
              annotation instanceof decoratorType
            );
          });
        }
      }, {
        key: "gerarSubComponents",
        value: function gerarSubComponents(componente) {
          var subComponentesGerados = [];
          var subComponentesNativeElementsGerados = [];

          for (var i = 0; i < componente.subComponent.length; i++) {
            var element = componente.subComponent[i];
            var subComponentFactory = this.resolver.resolveComponentFactory(element.component);
            var segundoNivel = this.gerarSubComponents(element);
            var subcomp = subComponentFactory.create(this.injector, segundoNivel.subComponentesNativeElementsGerados);

            for (var dataKey in element.data) {
              subcomp.instance[dataKey] = element.data[dataKey];
            }

            subcomp.hostView.detectChanges();
            this.configuracoesAdicionais(element, segundoNivel, subcomp);
            subComponentesNativeElementsGerados.push(subcomp.location.nativeElement);
            subComponentesGerados.push(subcomp.instance);
          }

          return {
            subComponentesGerados: [subComponentesGerados],
            subComponentesNativeElementsGerados: [subComponentesNativeElementsGerados]
          }; //return [...subComponentesGerados];
        }
      }, {
        key: "configuracoesAdicionais",
        value: function configuracoesAdicionais(comp, subComponentes, componentRef) {
          //PoTabsComponent não esta gerando os tabs header
          if (comp.component == _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoTabsComponent"]) {
            setTimeout(function () {
              var t = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
              t.reset(_toConsumableArray(subComponentes.subComponentesGerados));
              componentRef.instance.tabs = t;
              componentRef.hostView.detectChanges();
            }, 1000);
          }

          if (comp.component == _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoStepperComponent"]) {
            setTimeout(function () {
              var t = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
              t.reset(_toConsumableArray(subComponentes.subComponentesGerados));
              componentRef.instance.poSteps = t;
              componentRef.hostView.detectChanges();
              componentRef.instance.ngAfterContentInit();
            }, 1000);
          }

          if (comp.component == _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoChartComponent"]) {
            setTimeout(function () {
              componentRef.instance.rebuildComponent();
            }, 1000);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          setTimeout(function () {
            _this3.viewContainer.clear(); // clear all views


            var componentFactory = _this3.resolver.resolveComponentFactory(_this3.componentData.component);

            var subComponentes = _this3.gerarSubComponents(_this3.componentData);

            var componentRef = null;
            componentRef = _this3.viewContainer.createComponent(componentFactory, 0, _this3.injector, subComponentes.subComponentesNativeElementsGerados);

            for (var dataKey in _this3.componentData.data) {
              componentRef.instance[dataKey] = _this3.componentData.data[dataKey];
            }

            _this3.configuracoesAdicionais(_this3.componentData, subComponentes, componentRef);
          }, 500);
        }
      }]);

      return ComponentLayoutComponent;
    }();

    ComponentLayoutComponent.ɵfac = function ComponentLayoutComponent_Factory(t) {
      return new (t || ComponentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    ComponentLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentLayoutComponent,
      selectors: [["app-component-layout"]],
      inputs: {
        componentData: "componentData"
      },
      decls: 0,
      vars: 0,
      template: function ComponentLayoutComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC1sYXlvdXQvY29tcG9uZW50LWxheW91dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-component-layout',
          templateUrl: './component-layout.component.html',
          styleUrls: ['./component-layout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, {
        componentData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/porow/porow.component.ts":
  /*!******************************************!*\
    !*** ./src/app/porow/porow.component.ts ***!
    \******************************************/

  /*! exports provided: PoRowComponent */

  /***/
  function srcAppPorowPorowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoRowComponent", function () {
      return PoRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var PoRowComponent = /*#__PURE__*/function () {
      function PoRowComponent() {
        _classCallCheck(this, PoRowComponent);
      }

      _createClass(PoRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PoRowComponent;
    }();

    PoRowComponent.ɵfac = function PoRowComponent_Factory(t) {
      return new (t || PoRowComponent)();
    };

    PoRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PoRowComponent,
      selectors: [["app-porow"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "po-row"]],
      template: function PoRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvcm93L3Bvcm93LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-porow',
          templateUrl: './porow.component.html',
          styleUrls: ['./porow.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projetos\Pessoal\po-ui-layout-builder\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map