(function () {
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @po-ui/ng-code-editor */
      "./node_modules/@po-ui/ng-code-editor/__ivy_ngcc__/fesm2015/po-ui-ng-code-editor.js");
      /* harmony import */


      var _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./component-layout/component-layout.component */
      "./src/app/component-layout/component-layout.component.ts");

      var _c0 = ["jsonFile"];
      var _c1 = ["componentDownloader"];

      function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_2_Template_po_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r7.value = $event;
          })("p-change-model", function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_2_Template_po_input_p_change_model_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r13.confirmarEdicaoComponente(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r7.value);
        }
      }

      function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_3_Template_po_button_p_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            item_r7.showEditor = false;
            return ctx_r15.confirmarEdicaoComponente(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-code-editor", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_3_Template_po_code_editor_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r7.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r7.value);
        }
      }

      function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-switch", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_Template_po_switch_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var item_r7 = ctx.$implicit;
            return item_r7.showEditor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_2_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_div_3_Template, 3, 1, "div", 17);
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r7.showEditor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.showEditor == undefined || item_r7.showEditor == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.showEditor == true);
        }
      }

      function AppComponent_po_widget_5_po_widget_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "po-list-view", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_po_widget_5_po_widget_7_div_3_ng_template_2_Template, 4, 3, "ng-template", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-items", ctx_r5.componentProperties);
        }
      }

      function AppComponent_po_widget_5_po_widget_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-widget", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-primary-action", function AppComponent_po_widget_5_po_widget_7_Template_po_widget_p_primary_action_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.adicionarSubComponentes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-combo", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_po_widget_5_po_widget_7_Template_po_combo_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.componentEdicao.component = $event;
          })("p-change", function AppComponent_po_widget_5_po_widget_7_Template_po_combo_p_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeComponentCombo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_po_widget_5_po_widget_7_div_3_Template, 3, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-height", ctx_r4.windowSize - 190)("p-title", "Edi\xE7\xE3o Componente " + ((ctx_r4.componentEdicao == null ? null : ctx_r4.componentEdicao.component == null ? null : ctx_r4.componentEdicao.component.name) ? ctx_r4.componentEdicao == null ? null : ctx_r4.componentEdicao.component == null ? null : ctx_r4.componentEdicao.component.name : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.componentEdicao.component)("p-options", ctx_r4.componentsOptions)("p-filter-mode", "contains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.componentEdicao != null);
        }
      }

      function AppComponent_po_widget_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-widget", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-primary-action", function AppComponent_po_widget_5_Template_po_widget_p_primary_action_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.confirmarAlteracoes();
          })("p-secondary-action", function AppComponent_po_widget_5_Template_po_widget_p_secondary_action_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.closeModal();
          })("resize", function AppComponent_po_widget_5_Template_po_widget_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_5_Template_po_button_p_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.adicionarComponente();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "po-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-click", function AppComponent_po_widget_5_Template_po_button_p_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.limparTela();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "po-widget", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "po-tree-view", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("p-unselected", function AppComponent_po_widget_5_Template_po_tree_view_p_unselected_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.treeViewItemSelecionado($event);
          })("p-selected", function AppComponent_po_widget_5_Template_po_tree_view_p_selected_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.treeViewItemSelecionado($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_po_widget_5_po_widget_7_Template, 4, 6, "po-widget", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-height", ctx_r2.windowSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-height", ctx_r2.windowSize - 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-selectable", true)("p-items", ctx_r2.treeViewData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.componentEdicao != null);
        }
      }

      function AppComponent_app_component_layout_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-component-layout", 24);
        }

        if (rf & 2) {
          var item_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("componentData", item_r35);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(poNotification, resolver, injector, sanitizer) {
          _classCallCheck(this, AppComponent);

          this.poNotification = poNotification;
          this.resolver = resolver;
          this.injector = injector;
          this.sanitizer = sanitizer;
          this.components = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].componentesIniciais;
          this.listaComponents = [];
          this.nomeFileDownload = 'componente.txt';
          this.actions = [{
            label: "Configuração",
            icon: 'po-icon po-icon-settings',
            action: this.openConfig.bind(this)
          }, {
            label: "Exportar HTML*",
            action: this.exportarComponentes.bind(this)
          }, {
            label: "Exportar JSON*",
            action: this.exportarJson.bind(this)
          }, {
            label: "Importar JSON*",
            action: this.importarJson.bind(this)
          }]; //Edição

          this.componentesEdicao = [];
          this.treeViewData = [];
          this.exibirConfig = false;
          this.componentsOptions = [];
          this._componentEdicao = null;
          this.componentProperties = [];
          this.windowSize = window.innerHeight - 125;
          this.listaComponents = this.obterComponentes(_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoComponentsModule"]);
          this.listaComponents.push(_porow_porow_component__WEBPACK_IMPORTED_MODULE_3__["PoRowComponent"]); //Verificar melhor como fazer
          //this.listaComponents.push(PoListViewFakeComponent); //Verificar melhor como fazer

          this.componentsOptions = this.listaComponents.map(function (item) {
            return {
              label: item.name,
              value: item
            };
          });
        }

        _createClass(AppComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "readFiles",
          value: function readFiles(event) {
            var fileList = event.target.files;
            console.log(fileList);

            if (fileList.length == 1) {
              this.readJsonFile(fileList[0]);
            }
          }
        }, {
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
          key: "exportarJson",
          value: function exportarJson() {
            var _this = this;

            var mapper = function mapper(component) {
              var _temp = {
                component: component.component.name,
                data: component.data,
                id: component.id,
                subComponent: []
              };

              if (component.subComponent && component.subComponent.length > 0) {
                for (var i = 0; i < component.subComponent.length; i++) {
                  var element = mapper(component.subComponent[i]);

                  _temp.subComponent.push(element);
                }
              }

              return _temp;
            };

            try {
              var data = JSON.stringify(this.components.map(function (item) {
                return mapper(item);
              }));
              var blob = new Blob([data], {
                type: 'application/octet-stream'
              });
              this.nomeFileDownload = 'componentes.json';
              this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
              setTimeout(function () {
                _this.componentDownloader.nativeElement.click();
              }, 500);
            } catch (error) {
              this.poNotification.error('Ocorreu um erro ao exportar o Json');
            }
          }
        }, {
          key: "readJsonFile",
          value: function readJsonFile(file) {
            var _this2 = this;

            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
              var jsonData = event.target.result;

              var mapper = function mapper(json) {
                var subComponent = [];

                if (json.subComponent) {
                  for (var i = 0; i < json.subComponent.length; i++) {
                    var element = mapper(json.subComponent[i]);
                    subComponent.push(element);
                  }
                }

                var item = {
                  component: _this2.listaComponents.find(function (a) {
                    return a.name == json.component;
                  }),
                  id: json.id,
                  componentRef: null,
                  data: json.data,
                  subComponent: subComponent
                };
                return item;
              };

              try {
                var _tempListaComponentes = [];
                var jsonObject = JSON.parse(jsonData);

                for (var i = 0; i < jsonObject.length; i++) {
                  _tempListaComponentes.push(mapper(jsonObject[i]));
                }

                _this2.components = [].concat(_tempListaComponentes);
              } catch (error) {
                _this2.poNotification.error('Ocorreu um erro ao importar o Json');
              }
            });
            reader.readAsText(file, 'UTF-8');
          }
        }, {
          key: "importarJson",
          value: function importarJson() {
            this.jsonFile.nativeElement.click();
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
            var _this3 = this;

            try {
              var finalStr = '';

              for (var i = 0; i < this.components.length; i++) {
                var element = this.components[i];
                finalStr = finalStr + this.gerarArquivoComponente(element);
              }

              var blob = new Blob([finalStr], {
                type: 'application/octet-stream'
              });
              this.nomeFileDownload = 'componentes.txt';
              this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
              setTimeout(function () {
                _this3.componentDownloader.nativeElement.click();
              }, 500);
            } catch (error) {
              this.poNotification.error('Ocorreu um erro ao exportar o HTML');
            }
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
                    } else if (!isNaN(componente.data[key.substr(2)])) {
                      tempValue = '"' + (componente.data[key.substr(2)] ? componente.data[key.substr(2)] : '').toString() + '"';
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

            if (componente.data["class"]) {
              strInputs = strInputs + ' class="' + componente.data["class"] + '" ';
            }

            var strSubComponentes = '';

            for (var i = 0; i < componente.subComponent.length; i++) {
              var _element = componente.subComponent[i];
              strSubComponentes = strSubComponentes + this.gerarArquivoComponente(_element);
            }

            if (componente.component == _porow_porow_component__WEBPACK_IMPORTED_MODULE_3__["PoRowComponent"]) {
              str = '<div class="po-row">' + strSubComponentes + ' </div>';
            } else {
              str = '<' + selector + strInputs + '> ' + strSubComponentes + ' </' + selector + '>';
            }

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
            var _this4 = this;

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
              _this4.components = _toConsumableArray(_this4.componentesEdicao);
            }, 500);
          }
        }, {
          key: "atualizarTreeView",
          value: function atualizarTreeView() {
            var _this5 = this;

            this.treeViewData = [];

            var mapper = function mapper(item) {
              var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              var _a;

              var poTreeViewModel = {
                label: item.component != null ? item.component.name : "Novo Componente",
                value: item.id
              };

              if (poTreeViewModel.value == ((_a = _this5.componentEdicao) === null || _a === void 0 ? void 0 : _a.id)) {
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
              value: value.data["class"]
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
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.jsonFile = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentDownloader = _t.first);
          }
        },
        decls: 7,
        vars: 5,
        consts: [[2, "display", "none", 3, "href", "download"], ["componentDownloader", ""], ["p-title", "PO Layout Builder - Alpha", 3, "p-actions"], ["type", "file", "accept", ".json", 2, "display", "none", 3, "change"], ["jsonFile", ""], ["p-title", "Configura\xE7\xE3o", "p-primary-label", "Confirmar", "p-secondary-label", "Cancelar", 3, "p-height", "p-primary-action", "p-secondary-action", "resize", 4, "ngIf"], [3, "componentData", 4, "ngFor", "ngForOf"], ["p-title", "Configura\xE7\xE3o", "p-primary-label", "Confirmar", "p-secondary-label", "Cancelar", 3, "p-height", "p-primary-action", "p-secondary-action", "resize"], [1, "po-row", "po-mb-1"], ["p-type", "primary", "p-label", "Componente", "p-icon", "po-icon po-icon-plus-circle", 3, "p-click"], ["p-type", "danger", "p-icon", "po-icon po-icon-delete", "p-label", "Limpar", 1, "po-ml-1", 3, "p-click"], [1, "po-row"], ["p-title", "Componentes", 1, "po-lg-6", "po-mb-1", 3, "p-height"], [3, "p-selectable", "p-items", "p-unselected", "p-selected"], ["class", "po-lg-6 po-mb-1", "p-primary-label", "Adicionar Subcomponente", 3, "p-height", "p-title", "p-primary-action", 4, "ngIf"], ["p-primary-label", "Adicionar Subcomponente", 1, "po-lg-6", "po-mb-1", 3, "p-height", "p-title", "p-primary-action"], ["name", "ComponentCombo", "p-label", "Componente:", 1, "po-md-12", 3, "ngModel", "p-options", "p-filter-mode", "ngModelChange", "p-change"], ["class", "po-row", 4, "ngIf"], ["p-property-title", "name", 1, "po-md-12", 3, "p-items"], ["p-list-view-content-template", ""], ["p-label", "Exibir editor avan\xE7ado?", "p-label-off", " ", "p-label-on", " ", 1, "po-md-6", 3, "ngModel", "ngModelChange"], ["name", "input", "p-clean", "true", "p-no-autocomplete", "true", 1, "po-md-12", 3, "ngModel", "ngModelChange", "p-change-model"], ["p-type", "primary", "p-label", "Salvar", 1, "po-md-12", "po-mb-1", 3, "p-click"], ["p-height", "300", "p-language", "json", 1, "po-md-12", 3, "ngModel", "ngModelChange"], [3, "componentData"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "po-page-default", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_3_listener($event) {
              return ctx.readFiles($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_po_widget_5_Template, 8, 5, "po-widget", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_component_layout_6_Template, 1, 1, "app-component-layout", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("download", ctx.nomeFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-actions", ctx.actions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exibirConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.components);
          }
        },
        directives: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoPageDefaultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoWidgetComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoButtonComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoTreeViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoComboComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewContentTemplateDirective"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoSwitchComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoInputComponent"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_8__["PoCodeEditorComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_9__["ComponentLayoutComponent"]],
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
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }];
        }, {
          jsonFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["jsonFile"]
          }],
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
      /* harmony import */


      var _po_list_view_fake_po_list_view_fake_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./po-list-view-fake/po-list-view-fake.component */
      "./src/app/po-list-view-fake/po-list-view-fake.component.ts");

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
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_6__["ComponentLayoutComponent"], _porow_porow_component__WEBPACK_IMPORTED_MODULE_8__["PoRowComponent"], _po_list_view_fake_po_list_view_fake_component__WEBPACK_IMPORTED_MODULE_10__["PoListViewFakeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _po_ui_ng_code_editor__WEBPACK_IMPORTED_MODULE_9__["PoCodeEditorModule"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_5__["PoModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_layout_component_layout_component__WEBPACK_IMPORTED_MODULE_6__["ComponentLayoutComponent"], _porow_porow_component__WEBPACK_IMPORTED_MODULE_8__["PoRowComponent"], _po_list_view_fake_po_list_view_fake_component__WEBPACK_IMPORTED_MODULE_10__["PoListViewFakeComponent"]],
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
            var _this6 = this;

            setTimeout(function () {
              _this6.viewContainer.clear(); // clear all views


              var componentFactory = _this6.resolver.resolveComponentFactory(_this6.componentData.component);

              var subComponentes = _this6.gerarSubComponentes(_this6.componentData);

              var componentRef = null;
              componentRef = _this6.viewContainer.createComponent(componentFactory, 0, _this6.injector, subComponentes.subComponentesNativeElementsGerados);

              for (var dataKey in _this6.componentData.data) {
                componentRef.instance[dataKey] = _this6.componentData.data[dataKey];
              }

              _this6.configuracoesAdicionais(_this6.componentData, subComponentes, componentRef);
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
    "./src/app/po-list-view-fake/po-list-view-fake.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/po-list-view-fake/po-list-view-fake.component.ts ***!
      \******************************************************************/

    /*! exports provided: PoListViewFakeComponent */

    /***/
    function srcAppPoListViewFakePoListViewFakeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PoListViewFakeComponent", function () {
        return PoListViewFakeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @po-ui/ng-components */
      "./node_modules/@po-ui/ng-components/__ivy_ngcc__/fesm2015/po-ui-ng-components.js");

      function PoListViewFakeComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      var PoListViewFakeComponent = /*#__PURE__*/function () {
        function PoListViewFakeComponent() {
          _classCallCheck(this, PoListViewFakeComponent);

          this.items = [];
          this.propertyTitle = "email";
          this.height = 500;
        }

        _createClass(PoListViewFakeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PoListViewFakeComponent;
      }();

      PoListViewFakeComponent.ɵfac = function PoListViewFakeComponent_Factory(t) {
        return new (t || PoListViewFakeComponent)();
      };

      PoListViewFakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PoListViewFakeComponent,
        selectors: [["app-po-list-view-fake"]],
        inputs: {
          items: ["p-items", "items"],
          propertyTitle: ["p-property-title", "propertyTitle"],
          height: ["p-height", "height"]
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 3,
        consts: [[3, "p-property-title", "p-items", "p-height"], ["p-list-view-content-template", ""]],
        template: function PoListViewFakeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-list-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PoListViewFakeComponent_ng_template_1_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-property-title", ctx.propertyTitle)("p-items", ctx.items)("p-height", ctx.height);
          }
        },
        directives: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewComponent"], _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__["PoListViewContentTemplateDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvLWxpc3Qtdmlldy1mYWtlL3BvLWxpc3Qtdmlldy1mYWtlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoListViewFakeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-po-list-view-fake',
            templateUrl: './po-list-view-fake.component.html',
            styleUrls: ['./po-list-view-fake.component.css']
          }]
        }], function () {
          return [];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['p-items']
          }],
          propertyTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['p-property-title']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['p-height']
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
})();
//# sourceMappingURL=main-es5.js.map