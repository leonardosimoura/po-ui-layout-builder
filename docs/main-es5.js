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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @po-ui/ng-code-editor */
    "./node_modules/@po-ui/ng-code-editor/__ivy_ngcc__/fesm2015/po-ui-ng-code-editor.js");
    /* harmony import */


    var _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component-layout/component-layout.component */
    "./src/app/component-layout/component-layout.component.ts");

    var _c0 = ["componentDownloader"];

    function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_2_Template_po_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r6.value = $event;
        })("p-change-model", function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_2_Template_po_input_p_change_model_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r12.confirmarEdicaoComponente(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r6.value);
      }
    }

    function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-code-editor", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_3_Template_po_code_editor_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r6.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_3_Template_po_button_p_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          item_r6.showEditor = false;
          return ctx_r17.confirmarEdicaoComponente(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r6.value);
      }
    }

    function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-switch", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_Template_po_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var item_r6 = ctx.$implicit;
          return item_r6.showEditor = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_2_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_div_3_Template, 3, 1, "div", 15);
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r6.showEditor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.showEditor == undefined || item_r6.showEditor == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.showEditor == true);
      }
    }

    function AppComponent_po_widget_3_po_widget_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-list-view", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_po_widget_3_po_widget_7_div_3_ng_template_2_Template, 4, 3, "ng-template", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-items", ctx_r4.componentProperties);
      }
    }

    function AppComponent_po_widget_3_po_widget_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-widget", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-primary-action", function AppComponent_po_widget_3_po_widget_7_Template_po_widget_p_primary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.adicionarSubComponentes();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-combo", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_3_po_widget_7_Template_po_combo_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.componentEdicao.component = $event;
        })("p-change", function AppComponent_po_widget_3_po_widget_7_Template_po_combo_p_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.changeComponentCombo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_3_po_widget_7_div_3_Template, 3, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-height", ctx_r3.windowSize - 190)("p-title", "Edi\xE7\xE3o Componente" + ((ctx_r3.componentEdicao == null ? null : ctx_r3.componentEdicao.component == null ? null : ctx_r3.componentEdicao.component.name) ? ctx_r3.componentEdicao == null ? null : ctx_r3.componentEdicao.component == null ? null : ctx_r3.componentEdicao.component.name : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.componentEdicao.component)("p-options", ctx_r3.componentsOptions)("p-filter-mode", "contains");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.componentEdicao != null);
      }
    }

    function AppComponent_po_widget_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-widget", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-primary-action", function AppComponent_po_widget_3_Template_po_widget_p_primary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.confirmarAlteracoes();
        })("p-secondary-action", function AppComponent_po_widget_3_Template_po_widget_p_secondary_action_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.closeModal();
        })("resize", function AppComponent_po_widget_3_Template_po_widget_resize_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_3_Template_po_button_p_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.adicionarComponente();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "po-button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_3_Template_po_button_p_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.limparTela();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "po-widget", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "po-tree-view", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-unselected", function AppComponent_po_widget_3_Template_po_tree_view_p_unselected_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.treeViewItemSelecionado($event);
        })("p-selected", function AppComponent_po_widget_3_Template_po_tree_view_p_selected_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.treeViewItemSelecionado($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_po_widget_3_po_widget_7_Template, 4, 6, "po-widget", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-height", ctx_r1.windowSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-height", ctx_r1.windowSize - 190);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-selectable", true)("p-items", ctx_r1.treeViewData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.componentEdicao != null);
      }
    }

    function AppComponent_app_component_layout_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-component-layout", 22);
      }

      if (rf & 2) {
        var item_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("componentData", item_r34);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(poNotification, resolver, injector, sanitizer) {
        _classCallCheck(this, AppComponent);

        this.poNotification = poNotification;
        this.resolver = resolver;
        this.injector = injector;
        this.sanitizer = sanitizer;
        this.components = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].componentesIniciais;
        this.listaComponents = [];
        this.actions = [{
          label: "Configuração",
          icon: 'po-icon po-icon-settings',
          action: this.openConfig.bind(this)
        }, {
          label: "Exportar HTML*",
          action: this.exportarComponentes.bind(this)
        }]; //Edição

        this.componentesEdicao = [];
        this.treeViewData = [];
        this.exibirConfig = false;
        this.componentsOptions = [];
        this._componentEdicao = null;
        this.componentProperties = [];
        this.windowSize = window.innerHeight - 125;
        this.listaComponents = this.obterComponentes(_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoComponentsModule"]); //this.listaComponents.push(PoRowComponent); Verificar melhor como fazer

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
        key: "exportarComponentes",
        value: function exportarComponentes() {
          var _this = this;

          var finalStr = '';

          for (var i = 0; i < this.components.length; i++) {
            var element = this.components[i];
            finalStr = finalStr + this.gerarArquivoComponente(element);
          }

          var blob = new Blob([finalStr], {
            type: 'application/octet-stream'
          });
          this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
          setTimeout(function () {
            _this.componentDownloader.nativeElement.click();
          }, 500);
        }
      }, {
        key: "gerarArquivoComponente",
        value: function gerarArquivoComponente(componente) {
          var str = '';
          var strInputs = '';
          var selector = componente.componentRef.componentType['decorators'][0].args[0].selector;

          for (var key in componente.componentRef.componentType["ɵcmp"].declaredInputs) {
            var element = componente.componentRef.componentType["ɵcmp"].declaredInputs[key];
            var tempValue = '';

            if (componente.data[key.substr(2)]) {
              try {
                if (componente.data[key.substr(2)]) {
                  if (componente.data[key.substr(2)] instanceof Object) {
                    tempValue = "'" + JSON.stringify(componente.data[key.substr(2)]) + "'";
                  } else {
                    tempValue = '"' + "'" + (componente.data[key.substr(2)] ? componente.data[key.substr(2)] : '').toString() + "'" + '"';
                  }
                }
              } catch (error) {
                tempValue = '"' + "'" + (componente.data[key.substr(2)] ? componente.data[key.substr(2)] : '').toString() + "'" + '"';
              }

              strInputs = strInputs + ' [' + key + ']=' + tempValue;
            }
          }

          var strSubComponentes = '';

          for (var i = 0; i < componente.subComponent.length; i++) {
            var _element = componente.subComponent[i];
            strSubComponentes = strSubComponentes + this.gerarArquivoComponente(_element);
          }

          str = '<' + selector + strInputs + '> ' + strSubComponentes + ' </' + selector + '>';
          return str;
        }
      }, {
        key: "adicionarComponente",
        value: function adicionarComponente() {
          this.componentesEdicao.push({
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
            component: null,
            data: {},
            subComponent: [],
            componentRef: null
          });
          this.atualizarTreeView();
        }
      }, {
        key: "confirmarAlteracoesComponentes",
        value: function confirmarAlteracoesComponentes() {
          var _this2 = this;

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
            _this2.components = _toConsumableArray(_this2.componentesEdicao);
          }, 500);
        }
      }, {
        key: "atualizarTreeView",
        value: function atualizarTreeView() {
          var _this3 = this;

          this.treeViewData = [];

          var mapper = function mapper(item) {
            var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var _a;

            var poTreeViewModel = {
              label: item.component != null ? item.component.name : "Novo Componente",
              value: item.id
            };

            if (poTreeViewModel.value == ((_a = _this3.componentEdicao) === null || _a === void 0 ? void 0 : _a.id)) {
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
          // const unmark = (dismarkItem: PoTreeViewItem) => {
          //   dismarkItem.selected = true;
          //   dismarkItem.expanded = true;
          //   if (dismarkItem.subItems != undefined || dismarkItem.subItems != null) {
          //     for (let i = 0; i < dismarkItem.subItems.length; i++) {
          //       const element = dismarkItem.subItems[i];
          //       unmark(element);
          //     }
          //   }
          // }
          // unmark(treeViewItem);
          var search = this.buscarComponentPorId(treeViewItem.value); //this.treeViewData = [...this.treeViewData];

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
          this.atualizarTreeView();
        }
      }, {
        key: "changeComponentCombo",
        value: function changeComponentCombo() {
          this.atualizarProriedadesComponente(this.componentEdicao);
          this.confirmarEdicaoComponente(false);
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
        value: function confirmarEdicaoComponente(finalizarEdicao) {
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
          treeViewItem.expanded = true;
          this.treeViewData = _toConsumableArray(this.treeViewData);

          if (finalizarEdicao == true) {
            this.componentEdicao = null;
          }
        }
      }, {
        key: "adicionarSubComponentes",
        value: function adicionarSubComponentes() {
          if (this.componentEdicao) {
            this.componentEdicao.subComponent.push({
              id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
              component: null,
              data: {},
              subComponent: [],
              componentRef: null
            });
            this.confirmarEdicaoComponente(false);
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
          } // const componentRef = this.resolver
          //   .resolveComponentFactory(this.componentEdicao.component)
          //   .create(this.injector);


          var descriptor = {}; // let descriptor = { ...Object.getOwnPropertyDescriptors(componentRef.instance) };
          // descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance.__proto__) };
          // descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance.__proto__.__proto__) };
          // let tempInstance: any = componentRef.instance;
          // while (tempInstance) {
          //   descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance) }
          //   tempInstance = tempInstance.__proto__;
          // }

          for (var key in this.componentEdicao.component["ɵcmp"].declaredInputs) {
            var element = this.componentEdicao.component["ɵcmp"].declaredInputs[key];
            var elementkey = element.startsWith('set') ? element.substr(3) : element;
            elementkey = elementkey.substr(0, 1).toLowerCase() + elementkey.substr(1);
            descriptor[elementkey] = null;
          }

          if (this.componentEdicao.component['__proto__'] && this.componentEdicao.component['__proto__'].ɵdir && this.componentEdicao.component['__proto__'].ɵdir.outputs) {
            for (var _key in this.componentEdicao.component['__proto__'].ɵdir.outputs) {
              var _element2 = this.componentEdicao.component['__proto__'].ɵdir.outputs[_key];

              var _elementkey = _element2.startsWith('set') ? _element2.substr(3) : _element2;

              _elementkey = 'z OutPut - ' + _elementkey.substr(0, 1).toLowerCase() + _elementkey.substr(1); //Descomentar para usar os outputs
              //descriptor[elementkey] = null;
            }
          }

          for (var _key2 in descriptor) {
            var _element3 = descriptor[_key2];

            if (_element3 == null || _element3.set) {
              var propriedade = {
                name: _key2,
                value: ''
              };

              try {
                if (value.data[_key2]) {
                  if (value.data[_key2] instanceof Object) {
                    propriedade.value = JSON.stringify(value.data[_key2]);
                  } else {
                    propriedade.value = value.data[_key2] ? value.data[_key2] : '';
                  }
                }
              } catch (error) {
                propriedade.value = value.data[_key2] ? value.data[_key2] : '';
              }

              this.componentProperties.push(propriedade);
            }
          }

          this.componentProperties.push({
            name: 'class',
            value: null
          });
          this.componentProperties = this.componentProperties.sort(function (a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
              return -1;
            }

            if (a.name.toUpperCase() > b.name.toUpperCase()) {
              return 1;
            }

            return 0;
          });
        }
      }, {
        key: "onResize",
        value: function onResize(evt) {
          this.windowSize = window.innerHeight - 125;
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
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentDownloader = _t.first);
        }
      },
      decls: 5,
      vars: 4,
      consts: [["download", "componente.txt", 2, "display", "none", 3, "href"], ["componentDownloader", ""], ["p-title", "PO Layout Builder - Alpha", 3, "p-actions"], ["p-title", "Configura\xE7\xE3o", "p-primary-label", "Confirmar", "p-secondary-label", "Cancelar", 3, "p-height", "p-primary-action", "p-secondary-action", "resize", 4, "ngIf"], [3, "componentData", 4, "ngFor", "ngForOf"], ["p-title", "Configura\xE7\xE3o", "p-primary-label", "Confirmar", "p-secondary-label", "Cancelar", 3, "p-height", "p-primary-action", "p-secondary-action", "resize"], [1, "po-row", "po-mb-1"], ["p-type", "primary", "p-label", "Componente", "p-icon", "po-icon po-icon-plus-circle", 3, "p-click"], ["p-type", "danger", "p-icon", "po-icon po-icon-delete", "p-label", "Limpar", 1, "po-ml-1", 3, "p-click"], [1, "po-row"], ["p-title", "Componentes", 1, "po-lg-6", "po-mb-1", 3, "p-height"], [3, "p-selectable", "p-items", "p-unselected", "p-selected"], ["class", "po-lg-6 po-mb-1", "p-primary-label", "Adicionar Subcomponente", 3, "p-height", "p-title", "p-primary-action", 4, "ngIf"], ["p-primary-label", "Adicionar Subcomponente", 1, "po-lg-6", "po-mb-1", 3, "p-height", "p-title", "p-primary-action"], ["name", "ComponentCombo", "p-label", "Componente:", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-options", "p-filter-mode", "ngModelChange", "p-change"], ["class", "po-row", 4, "ngIf"], ["p-property-title", "name", 1, "po-md-12", 3, "p-items"], ["p-list-view-content-template", ""], ["p-label", "Exibir editor avan\xE7ado?", "p-label-off", " ", "p-label-on", " ", 3, "ngModel", "ngModelChange"], ["name", "input", "p-clean", "true", "p-no-autocomplete", "true", 1, "po-md-12", 3, "ngModel", "ngModelChange", "p-change-model"], ["p-height", "300", "p-language", "json", 1, "po-md-12", 3, "ngModel", "ngModelChange"], ["p-type", "primary", "p-label", "Salvar", 1, "po-md-12", 3, "p-click"], [3, "componentData"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-page-default", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_3_Template, 8, 5, "po-widget", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_component_layout_4_Template, 1, 1, "app-component-layout", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-actions", ctx.actions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exibirConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.components);
        }
      },
      directives: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoPageDefaultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoWidgetComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoButtonComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoTreeViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoComboComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewContentTemplateDirective"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoSwitchComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoInputComponent"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_7__["PoCodeEditorComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_8__["ComponentLayoutComponent"]],
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
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      }, {
        componentDownloader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["componentDownloader"]
        }]
      });
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

    var _c0 = ["tempViewContainer"];

    var ComponentLayoutComponent = /*#__PURE__*/function () {
      function ComponentLayoutComponent(resolver, injector, appRef, viewContainer) {
        _classCallCheck(this, ComponentLayoutComponent);

        this.resolver = resolver;
        this.injector = injector;
        this.appRef = appRef;
        this.viewContainer = viewContainer;
      }

      _createClass(ComponentLayoutComponent, [{
        key: "gerarSubComponentes",
        value: function gerarSubComponentes(componente) {
          var subComponentesGerados = [];
          var subComponentesNativeElementsGerados = [];

          for (var i = 0; i < componente.subComponent.length; i++) {
            var element = componente.subComponent[i];
            var subComponentFactory = this.resolver.resolveComponentFactory(element.component);
            var segundoNivel = this.gerarSubComponentes(element); //const subcomp =   subComponentFactory.create(this.injector, segundoNivel.subComponentesNativeElementsGerados);

            var subcomp = this.tempViewContainerRef.createComponent(subComponentFactory, null, this.injector, segundoNivel.subComponentesNativeElementsGerados);

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
          comp.componentRef = componentRef;

          if (comp.data["class"]) {
            comp.componentRef.location.nativeElement.className = componentRef.location.nativeElement.className + ' ' + comp.data["class"];
          }

          if (comp.component == _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoTabsComponent"]) {
            setTimeout(function () {
              var t = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
              t.reset(_toConsumableArray(subComponentes.subComponentesGerados));
              componentRef.instance.tabs = t;
              componentRef.hostView.detectChanges();
            }, 250);
          }

          if (comp.component == _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoStepperComponent"]) {
            setTimeout(function () {
              var t = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
              t.reset(_toConsumableArray(subComponentes.subComponentesGerados));
              componentRef.instance.poSteps = t;
              componentRef.hostView.detectChanges();
              componentRef.instance.ngAfterContentInit();
            }, 250);
          }

          if (comp.component == _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoChartComponent"]) {
            setTimeout(function () {
              componentRef.instance.rebuildComponent();
            }, 250);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          setTimeout(function () {
            _this4.viewContainer.clear(); // clear all views


            var componentFactory = _this4.resolver.resolveComponentFactory(_this4.componentData.component);

            var subComponentes = _this4.gerarSubComponentes(_this4.componentData);

            var componentRef = null;
            componentRef = _this4.viewContainer.createComponent(componentFactory, 0, _this4.injector, subComponentes.subComponentesNativeElementsGerados);

            for (var dataKey in _this4.componentData.data) {
              componentRef.instance[dataKey] = _this4.componentData.data[dataKey];
            }

            _this4.configuracoesAdicionais(_this4.componentData, subComponentes, componentRef);
          }, 100);
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
      viewQuery: function ComponentLayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tempViewContainerRef = _t.first);
        }
      },
      inputs: {
        componentData: "componentData"
      },
      decls: 2,
      vars: 0,
      consts: [[2, "opacity", "0", "top", "0", "left", "0"], ["tempViewContainer", ""]],
      template: function ComponentLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        }
      },
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
        }],
        tempViewContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["tempViewContainer", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
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
    });
    /* harmony import */


    var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @po-ui/ng-components */
    "./node_modules/@po-ui/ng-components/__ivy_ngcc__/fesm2015/po-ui-ng-components.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var componentes = [{
      component: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_0__["PoWidgetComponent"],
      componentRef: null,
      data: {
        title: 'Mais informações sobre o projeto'
      },
      id: '1',
      subComponent: [{
        id: "2",
        component: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_0__["PoInfoComponent"],
        data: {
          label: "GitHub",
          url: 'https://github.com/leonardosimoura/po-ui-layout-builder',
          value: 'https://github.com/leonardosimoura/po-ui-layout-builder'
        },
        subComponent: [],
        componentRef: null
      }, {
        id: "3",
        component: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_0__["PoInfoComponent"],
        data: {
          label: "PO-UI",
          url: 'https://po-ui.io/',
          value: 'https://po-ui.io/'
        },
        subComponent: [],
        componentRef: null
      }]
    }];
    var environment = {
      production: false,
      componentesIniciais: componentes
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