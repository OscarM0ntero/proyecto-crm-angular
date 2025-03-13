(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unidades-centro-unidades-centro-module"], {
    /***/
    "CVFa":
    /*!*******************************************************************!*\
      !*** ./src/app/unidades-centro/unidades-centro-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: UnidadesCentroRoutingModule */

    /***/
    function CVFa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesCentroRoutingModule", function () {
        return UnidadesCentroRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _unidades_centro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./unidades-centro.component */
      "NhQ1");

      var routes = [{
        path: '',
        component: _unidades_centro_component__WEBPACK_IMPORTED_MODULE_2__["UnidadesCentroComponent"]
      }];

      var UnidadesCentroRoutingModule = function UnidadesCentroRoutingModule() {
        _classCallCheck(this, UnidadesCentroRoutingModule);
      };

      UnidadesCentroRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UnidadesCentroRoutingModule
      });
      UnidadesCentroRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UnidadesCentroRoutingModule_Factory(t) {
          return new (t || UnidadesCentroRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesCentroRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesCentroRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "FXhd":
    /*!****************************************************************************************!*\
      !*** ./src/app/unidades-centro/delete-unidad-centro/delete-unidad-centro.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: DeleteUnidadCentroComponent */

    /***/
    function FXhd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteUnidadCentroComponent", function () {
        return DeleteUnidadCentroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/messages */
      "Xksa");
      /* harmony import */


      var src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/unidades-centro.service */
      "S+72");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DeleteUnidadCentroComponent = /*#__PURE__*/function () {
        function DeleteUnidadCentroComponent(dialogRef, unidadCentro, servicioUnidadesCentro, snackBar) {
          _classCallCheck(this, DeleteUnidadCentroComponent);

          this.dialogRef = dialogRef;
          this.unidadCentro = unidadCentro;
          this.servicioUnidadesCentro = servicioUnidadesCentro;
          this.snackBar = snackBar;
        }

        _createClass(DeleteUnidadCentroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__["ENTIDAD_UNIDAD_CENTRO"];
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close({
              ok: false
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.servicioUnidadesCentro.deleteUnidadCentro(this.unidadCentro.id_unidad_centro).toPromise();

                    case 2:
                      RESPONSE = _context.sent;

                      if (RESPONSE.ok) {
                        this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                          duration: 5000
                        });
                        this.dialogRef.close({
                          ok: RESPONSE.ok,
                          data: RESPONSE.data
                        });
                      } else {
                        this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                          duration: 5000
                        });
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DeleteUnidadCentroComponent;
      }();

      DeleteUnidadCentroComponent.ɵfac = function DeleteUnidadCentroComponent_Factory(t) {
        return new (t || DeleteUnidadCentroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_4__["UnidadesCentroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      DeleteUnidadCentroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeleteUnidadCentroComponent,
        selectors: [["app-delete-unidad-centro"]],
        decls: 13,
        vars: 5,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "id", "deleteEntidad", 3, "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"]],
        template: function DeleteUnidadCentroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteUnidadCentroComponent_Template_button_click_9_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteUnidadCentroComponent_Template_button_click_11_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\xBFSeguro que deseas eliminar este ", ctx.ENTIDAD, "?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Id: ", ctx.unidadCentro.id_unidad_centro, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.ENTIDAD, ": ", ctx.unidadCentro.unidad_centro, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Eliminar ", ctx.ENTIDAD, "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGVzLWNlbnRyby9kZWxldGUtdW5pZGFkLWNlbnRyby9kZWxldGUtdW5pZGFkLWNlbnRyby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteUnidadCentroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delete-unidad-centro',
            templateUrl: './delete-unidad-centro.component.html',
            styleUrls: ['./delete-unidad-centro.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_4__["UnidadesCentroService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NhQ1":
    /*!**************************************************************!*\
      !*** ./src/app/unidades-centro/unidades-centro.component.ts ***!
      \**************************************************************/

    /*! exports provided: UnidadesCentroComponent */

    /***/
    function NhQ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesCentroComponent", function () {
        return UnidadesCentroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _add_unidad_centro_add_unidad_centro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-unidad-centro/add-unidad-centro.component */
      "cYrO");
      /* harmony import */


      var _edit_unidad_centro_edit_unidad_centro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-unidad-centro/edit-unidad-centro.component */
      "ZdHM");
      /* harmony import */


      var _delete_unidad_centro_delete_unidad_centro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./delete-unidad-centro/delete-unidad-centro.component */
      "FXhd");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/unidades-centro.service */
      "S+72");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function UnidadesCentroComponent_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.unidadCentroFilter);
        }
      }

      function UnidadesCentroComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidadCentro_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidadCentro_r11.unidad_centro, " ");
        }
      }

      function UnidadesCentroComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.idCicloFilter);
        }
      }

      function UnidadesCentroComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidadCentro_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidadCentro_r12.id_ciclo, "");
        }
      }

      function UnidadesCentroComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r4.observacionesFilter);
        }
      }

      function UnidadesCentroComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidadCentro_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidadCentro_r13.observaciones, "");
        }
      }

      function UnidadesCentroComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesCentroComponent_th_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.addUnidadCentro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " add_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function UnidadesCentroComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesCentroComponent_td_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var unidadCentro_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.editUnidadCentro(unidadCentro_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " mode_edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesCentroComponent_td_14_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var unidadCentro_r16 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.deleteUnidadCentro(unidadCentro_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function UnidadesCentroComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
        }
      }

      function UnidadesCentroComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25];
      };

      var UnidadesCentroComponent = /*#__PURE__*/function () {
        function UnidadesCentroComponent(dialog, unidadesCentroService, overlay, snackBar) {
          _classCallCheck(this, UnidadesCentroComponent);

          this.dialog = dialog;
          this.unidadesCentroService = unidadesCentroService;
          this.overlay = overlay;
          this.snackBar = snackBar;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
          this.unidadCentroFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.idCicloFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.observacionesFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.displayedColumns = ['unidad_centro', 'id_ciclo', 'observaciones', 'actions'];
        }

        _createClass(UnidadesCentroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUnidadesCentros();
          }
        }, {
          key: "getUnidadesCentros",
          value: function getUnidadesCentros() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.unidadesCentroService.getAllUnidadesCentro().toPromise();

                    case 3:
                      RESPONSE = _context2.sent;

                      if (RESPONSE.status && ((_a = RESPONSE.data) === null || _a === void 0 ? void 0 : _a.data)) {
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](RESPONSE.data.data);
                        this.dataSource.sort = this.sort;
                        this.dataSource.paginator = this.paginator;
                      } else {
                        this.snackBar.open('Error: Datos inválidos recibidos', 'Cerrar', {
                          duration: 5000
                        });
                      }

                      _context2.next = 10;
                      break;

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](0);
                      this.snackBar.open('Error al obtener unidades centro', 'Cerrar', {
                        duration: 5000
                      });

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 7]]);
            }));
          }
        }, {
          key: "addUnidadCentro",
          value: function addUnidadCentro() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      dialogRef = this.dialog.open(_add_unidad_centro_add_unidad_centro_component__WEBPACK_IMPORTED_MODULE_6__["AddUnidadCentroComponent"], {
                        scrollStrategy: this.overlay.scrollStrategies.noop(),
                        disableClose: true
                      });
                      _context3.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context3.sent;

                      if (RESULT === null || RESULT === void 0 ? void 0 : RESULT.ok) {
                        this.getUnidadesCentros();
                      }

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "editUnidadCentro",
          value: function editUnidadCentro(unidadCentro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      dialogRef = this.dialog.open(_edit_unidad_centro_edit_unidad_centro_component__WEBPACK_IMPORTED_MODULE_7__["EditUnidadCentroComponent"], {
                        data: unidadCentro,
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context4.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context4.sent;

                      if (RESULT === null || RESULT === void 0 ? void 0 : RESULT.ok) {
                        this.getUnidadesCentros();
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteUnidadCentro",
          value: function deleteUnidadCentro(unidadCentro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      dialogRef = this.dialog.open(_delete_unidad_centro_delete_unidad_centro_component__WEBPACK_IMPORTED_MODULE_8__["DeleteUnidadCentroComponent"], {
                        data: unidadCentro,
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context5.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context5.sent;

                      if (RESULT === null || RESULT === void 0 ? void 0 : RESULT.ok) {
                        this.getUnidadesCentros();
                      }

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return UnidadesCentroComponent;
      }();

      UnidadesCentroComponent.ɵfac = function UnidadesCentroComponent_Factory(t) {
        return new (t || UnidadesCentroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_10__["UnidadesCentroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]));
      };

      UnidadesCentroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UnidadesCentroComponent,
        selectors: [["app-unidades-centro"]],
        viewQuery: function UnidadesCentroComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 19,
        vars: 6,
        consts: [[1, "example-container", "mat-elevation-z8"], [1, "example-table-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "unidad_centro"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id_ciclo"], ["matColumnDef", "observaciones"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", ""], ["matInput", "", "placeholder", "Unidad Centro", 3, "formControl"], ["mat-sort-header", ""], ["mat-cell", ""], ["matInput", "", "placeholder", "Ciclo", 3, "formControl"], ["matInput", "", "placeholder", "Observaciones", 3, "formControl"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function UnidadesCentroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UnidadesCentroComponent_th_4_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UnidadesCentroComponent_td_5_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UnidadesCentroComponent_th_7_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UnidadesCentroComponent_td_8_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UnidadesCentroComponent_th_10_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UnidadesCentroComponent_td_11_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UnidadesCentroComponent_th_13_Template, 4, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UnidadesCentroComponent_td_14_Template, 7, 0, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UnidadesCentroComponent_tr_15_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UnidadesCentroComponent_tr_16_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-paginator", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 10em;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.mat-dialog-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.mat-column-id_ciclo[_ngcontent-%COMP%] {\n  width: 35% !important;\n  padding-right: 1em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-unidad[_ngcontent-%COMP%] {\n  width: 10% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-plazas[_ngcontent-%COMP%] {\n  width: 10% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-id_unidad_dual[_ngcontent-%COMP%] {\n  width: 5% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-id_motivo_nodual[_ngcontent-%COMP%] {\n  width: 25% !important;\n  padding-right: 1em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 2em !important;\n  padding-right: 0em !important;\n  word-wrap: break-word !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pZGFkZXMtY2VudHJvL3VuaWRhZGVzLWNlbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC91bmlkYWRlcy1jZW50cm8vdW5pZGFkZXMtY2VudHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgLy93aWR0aDogNTVlbTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwZW07XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1pZF9jaWNsbyB7XG4gICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLXVuaWRhZCB7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLXBsYXphcyB7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWlkX3VuaWRhZF9kdWFsIHtcbiAgICB3aWR0aDogNSUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0ZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1pZF9tb3Rpdm9fbm9kdWFsIHtcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gICAgd2lkdGg6IDJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnidadesCentroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-unidades-centro',
            templateUrl: './unidades-centro.component.html',
            styleUrls: ['./unidades-centro.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_10__["UnidadesCentroService"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZdHM":
    /*!************************************************************************************!*\
      !*** ./src/app/unidades-centro/edit-unidad-centro/edit-unidad-centro.component.ts ***!
      \************************************************************************************/

    /*! exports provided: EditUnidadCentroComponent */

    /***/
    function ZdHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUnidadCentroComponent", function () {
        return EditUnidadCentroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/messages */
      "Xksa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/unidades-centro.service */
      "S+72");
      /* harmony import */


      var src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/ciclos.service */
      "KafX");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function EditUnidadCentroComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idC_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idC_r1.id_ciclo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idC_r1.ciclo, " ");
        }
      }

      var EditUnidadCentroComponent = /*#__PURE__*/function () {
        function EditUnidadCentroComponent(dialogRef, snackBar, servicioUnidadesCentro, unidadCentro, servicioCiclos) {
          _classCallCheck(this, EditUnidadCentroComponent);

          this.dialogRef = dialogRef;
          this.snackBar = snackBar;
          this.servicioUnidadesCentro = servicioUnidadesCentro;
          this.unidadCentro = unidadCentro;
          this.servicioCiclos = servicioCiclos;
        }

        _createClass(EditUnidadCentroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setForm(); //this.setFilter();
          }
        }, {
          key: "setForm",
          value: function setForm() {
            this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["ENTIDAD_UNIDAD_CENTRO"];
            this.unidadCentroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              id_unidad_centro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidadCentro.id_unidad_centro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              id_ciclo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidadCentro.id_ciclo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              unidad_centro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidadCentro.unidad_centro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
            });
            this.getCiclos();
          }
        }, {
          key: "confirmEdit",
          value: function confirmEdit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var unidadCentroForm, RESPONSE;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(this.unidadCentro);

                      if (!this.unidadCentroForm.valid) {
                        _context6.next = 9;
                        break;
                      }

                      unidadCentroForm = this.unidadCentroForm.value;
                      _context6.next = 5;
                      return this.servicioUnidadesCentro.editUnidadCentro(unidadCentroForm).toPromise();

                    case 5:
                      RESPONSE = _context6.sent;

                      if (RESPONSE.ok) {
                        this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                          duration: 5000
                        });
                        this.dialogRef.close({
                          ok: RESPONSE.ok,
                          data: RESPONSE.data
                        });
                      } else {
                        this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                          duration: 5000
                        });
                      }

                      _context6.next = 10;
                      break;

                    case 9:
                      this.snackBar.open(src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["ERROR"], src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                        duration: 5000
                      });

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getCiclos",
          value: function getCiclos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.servicioCiclos.getAllCiclos().toPromise();

                    case 2:
                      RESPONSE = _context7.sent;

                      if (RESPONSE.ok) {
                        this.ciclos = RESPONSE.data;
                      }

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close({
              ok: false
            });
          }
        }]);

        return EditUnidadCentroComponent;
      }();

      EditUnidadCentroComponent.ɵfac = function EditUnidadCentroComponent_Factory(t) {
        return new (t || EditUnidadCentroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesCentroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"]));
      };

      EditUnidadCentroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditUnidadCentroComponent,
        selectors: [["app-edit-unidad-centro"]],
        decls: 23,
        vars: 5,
        consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["color", "accent"], ["matInput", "", "formControlName", "unidad_centro", "name", "unidadCentro", "maxlength", "100", "required", "", 3, "placeholder"], ["formControlName", "id_ciclo", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "Observaciones"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "onSubmit", "type", "submit", 3, "disabled", "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"], [3, "value"]],
        template: function EditUnidadCentroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ciclo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sin ciclo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditUnidadCentroComponent_mat_option_14_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUnidadCentroComponent_Template_button_click_19_listener() {
              return ctx.confirmEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Guardar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUnidadCentroComponent_Template_button_click_21_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Editar ", ctx.ENTIDAD, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.unidadCentroForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.ENTIDAD);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ciclos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.unidadCentroForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]],
        styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  min-width: 30em;\n  text-align: center;\n  padding-top: 10px;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 12em;\n  margin: auto;\n}\n\n.radioButton[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1em;\n  padding-left: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pZGFkZXMtY2VudHJvL2VkaXQtdW5pZGFkLWNlbnRyby9lZGl0LXVuaWRhZC1jZW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGVzLWNlbnRyby9lZGl0LXVuaWRhZC1jZW50cm8vZWRpdC11bmlkYWQtY2VudHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLXdpZHRoOiAzMGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuZGl2Lm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEyZW07XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmFkaW9CdXR0b257XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditUnidadCentroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-edit-unidad-centro',
            templateUrl: './edit-unidad-centro.component.html',
            styleUrls: ['./edit-unidad-centro.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesCentroService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cYrO":
    /*!**********************************************************************************!*\
      !*** ./src/app/unidades-centro/add-unidad-centro/add-unidad-centro.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddUnidadCentroComponent */

    /***/
    function cYrO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUnidadCentroComponent", function () {
        return AddUnidadCentroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/messages */
      "Xksa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/unidades-centro.service */
      "S+72");
      /* harmony import */


      var src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/ciclos.service */
      "KafX");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AddUnidadCentroComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idC_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idC_r1.id_ciclo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idC_r1.ciclo, " ");
        }
      }

      var AddUnidadCentroComponent = /*#__PURE__*/function () {
        function AddUnidadCentroComponent(dialogRef, snackBar, servicioUnidadesCentro, servicioCiclos, idEntidad) {
          _classCallCheck(this, AddUnidadCentroComponent);

          this.dialogRef = dialogRef;
          this.snackBar = snackBar;
          this.servicioUnidadesCentro = servicioUnidadesCentro;
          this.servicioCiclos = servicioCiclos;
          this.idEntidad = idEntidad;
        }

        _createClass(AddUnidadCentroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.unidadCentroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              id_ciclo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              unidad_centro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
            });
            this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["ENTIDAD_UNIDAD_CENTRO"];
            this.getCiclos();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var unidadCentro, RESPONSE;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!this.unidadCentroForm.valid) {
                        _context8.next = 10;
                        break;
                      }

                      unidadCentro = this.unidadCentroForm.value;
                      console.log("Enviando al backend:", unidadCentro);
                      _context8.next = 5;
                      return this.servicioUnidadesCentro.addUnidadCentro(unidadCentro).toPromise();

                    case 5:
                      RESPONSE = _context8.sent;
                      console.log("Respuesta del backend:", RESPONSE);

                      if (RESPONSE.ok) {
                        this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                          duration: 5000
                        });
                        this.dialogRef.close({
                          ok: RESPONSE.ok,
                          data: RESPONSE.data
                        });
                      } else {
                        this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                          duration: 5000
                        });
                      }

                      _context8.next = 11;
                      break;

                    case 10:
                      this.snackBar.open(src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["INVALID_FORM"], src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                        duration: 5000
                      });

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getCiclos",
          value: function getCiclos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.servicioCiclos.getAllCiclos().toPromise();

                    case 2:
                      RESPONSE = _context9.sent;

                      if (RESPONSE.ok) {
                        this.ciclos = RESPONSE.data;
                      }

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close({
              ok: false
            });
          }
        }]);

        return AddUnidadCentroComponent;
      }();

      AddUnidadCentroComponent.ɵfac = function AddUnidadCentroComponent_Factory(t) {
        return new (t || AddUnidadCentroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesCentroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      AddUnidadCentroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddUnidadCentroComponent,
        selectors: [["app-add-unidad-centro"]],
        decls: 23,
        vars: 4,
        consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["color", "accent"], ["matInput", "", "placeholder", "Unidad Centro", "formControlName", "unidad_centro", "name", "unidadCentro", "maxlength", "100", "required", ""], ["formControlName", "id_ciclo", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "Observaciones"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "onSubmit", "type", "submit", 3, "disabled", "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"], [3, "value"]],
        template: function AddUnidadCentroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ciclo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sin ciclo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddUnidadCentroComponent_mat_option_14_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUnidadCentroComponent_Template_button_click_19_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Guardar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUnidadCentroComponent_Template_button_click_21_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nuevo ", ctx.ENTIDAD, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.unidadCentroForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ciclos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.unidadCentroForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]],
        styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  min-width: 30em;\n  text-align: center;\n  padding-top: 10px;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 12em;\n  margin: auto;\n}\n\n.radioButton[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1em;\n  padding-left: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pZGFkZXMtY2VudHJvL2FkZC11bmlkYWQtY2VudHJvL2FkZC11bmlkYWQtY2VudHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91bmlkYWRlcy1jZW50cm8vYWRkLXVuaWRhZC1jZW50cm8vYWRkLXVuaWRhZC1jZW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4td2lkdGg6IDMwZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5kaXYubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTJlbTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5yYWRpb0J1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddUnidadCentroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-unidad-centro',
            templateUrl: './add-unidad-centro.component.html',
            styleUrls: ['./add-unidad-centro.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: src_app_services_unidades_centro_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesCentroService"]
          }, {
            type: src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kTDH":
    /*!***********************************************************!*\
      !*** ./src/app/unidades-centro/unidades-centro.module.ts ***!
      \***********************************************************/

    /*! exports provided: UnidadesCentroModule */

    /***/
    function kTDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesCentroModule", function () {
        return UnidadesCentroModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _unidades_centro_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./unidades-centro-routing.module */
      "CVFa");
      /* harmony import */


      var _unidades_centro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./unidades-centro.component */
      "NhQ1");
      /* harmony import */


      var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modules/crud-material/crud-material.module */
      "ah4G");
      /* harmony import */


      var _add_unidad_centro_add_unidad_centro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-unidad-centro/add-unidad-centro.component */
      "cYrO");
      /* harmony import */


      var _delete_unidad_centro_delete_unidad_centro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete-unidad-centro/delete-unidad-centro.component */
      "FXhd");
      /* harmony import */


      var _edit_unidad_centro_edit_unidad_centro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-unidad-centro/edit-unidad-centro.component */
      "ZdHM");

      var UnidadesCentroModule = function UnidadesCentroModule() {
        _classCallCheck(this, UnidadesCentroModule);
      };

      UnidadesCentroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UnidadesCentroModule
      });
      UnidadesCentroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UnidadesCentroModule_Factory(t) {
          return new (t || UnidadesCentroModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _unidades_centro_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesCentroRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesCentroModule, {
          declarations: [_unidades_centro_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesCentroComponent"], _add_unidad_centro_add_unidad_centro_component__WEBPACK_IMPORTED_MODULE_5__["AddUnidadCentroComponent"], _delete_unidad_centro_delete_unidad_centro_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUnidadCentroComponent"], _edit_unidad_centro_edit_unidad_centro_component__WEBPACK_IMPORTED_MODULE_7__["EditUnidadCentroComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _unidades_centro_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesCentroRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesCentroModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_unidades_centro_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesCentroComponent"], _add_unidad_centro_add_unidad_centro_component__WEBPACK_IMPORTED_MODULE_5__["AddUnidadCentroComponent"], _delete_unidad_centro_delete_unidad_centro_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUnidadCentroComponent"], _edit_unidad_centro_edit_unidad_centro_component__WEBPACK_IMPORTED_MODULE_7__["EditUnidadCentroComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _unidades_centro_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesCentroRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=unidades-centro-unidades-centro-module-es5.js.map