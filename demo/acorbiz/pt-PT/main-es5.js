(function () {
  var _templateObject, _templateObject2;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkng_acorbiz"] = self["webpackChunkng_acorbiz"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _libs_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./libs/components/navbar/navbar.component */
      5725);
      /* harmony import */


      var _libs_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./libs/components/home/home.component */
      8924);
      /* harmony import */


      var _libs_components_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./libs/components/what-we-do/what-we-do.component */
      8943);
      /* harmony import */


      var _libs_components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./libs/components/about-us/about-us.component */
      461);
      /* harmony import */


      var _libs_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./libs/components/contacts/contacts.component */
      911);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent() {
          _classCallCheck(this, _AppComponent);
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-home");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-what-we-do");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-about-us");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-contacts");
          }
        },
        directives: [_libs_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _libs_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _libs_components_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_2__.WhatWeDoComponent, _libs_components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__.AboutUsComponent, _libs_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__.ContactsComponent],
        styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: black #daac4e;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #252525;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #daac4e;\n  border-radius: 6px;\n  width: 2px;\n  border: 3px solid var(white);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0FBTkY7O0FBUUU7RUFDRSxtQkFBQTtBQU5KOztBQVFFO0VBQ0UseUJBbEJRO0VBbUJSLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBTko7O0FBUUU7RUFDRSxXQUFBO0FBTkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6IHJnYigwLCAwLCAwKTtcbiRzZWN1bmRhcnk6IHJnYigyMTgsIDE3MiwgNzgpO1xuJHNlY3VuZGFyeUE6IHJnYmEoMjE4LCAxNzIsIDc4LCAwLjc1KTtcbiR0aGlyZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kZm9udEZhbWlseTogQ2VudHVyeSBHb3RoaWMsIENlbnR1cnlHb3RoaWMsIEFwcGxlR290aGljLCBzYW5zLXNlcmlmO1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogJHByaW1hcnkgJHNlY3VuZGFyeTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogIzI1MjUyNTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoJHRoaXJkKTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDExcHg7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/google-maps */
      8834);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-bootstrap-md */
      8881);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _libs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./libs/components */
      6034);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMapsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__.MDBBootstrapModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot([{
          path: "home",
          component: _libs_components__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
        }, {
          path: "about-us",
          component: _libs_components__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent
        }, {
          path: 'what-we-do',
          component: _libs_components__WEBPACK_IMPORTED_MODULE_1__.WhatWeDoComponent
        }, {
          path: "contacts",
          component: _libs_components__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent
        }], {
          useHash: true,
          anchorScrolling: "enabled"
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _libs_components__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _libs_components__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _libs_components__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent, _libs_components__WEBPACK_IMPORTED_MODULE_1__.WhatWeDoComponent, _libs_components__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMapsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__.MDBRootModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    461:
    /*!****************************************************************!*\
      !*** ./src/app/libs/components/about-us/about-us.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutUsComponent": function AboutUsComponent() {
          return (
            /* binding */
            _AboutUsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-bootstrap-md */
      8881);

      var _AboutUsComponent = /*#__PURE__*/function () {
        function _AboutUsComponent() {
          _classCallCheck(this, _AboutUsComponent);
        }

        _createClass(_AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AboutUsComponent;
      }();

      _AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
        return new (t || _AboutUsComponent)();
      };

      _AboutUsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AboutUsComponent,
        selectors: [["app-about-us"]],
        decls: 36,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_about_us_text_description$$__________________USERS_DU_AR_PROJS_CLIENTS_ACORBIZ_ACORBIZ_SRC_APP_LIBS_COMPONENTS_ABOUT_US_ABOUT_US_COMPONENT_TS_1 = goog.getMsg(" Na A\xE7orbiz Representa\xE7\xF5es Unipessoal Lda. temos como miss\xE3o a satisfa\xE7\xE3o dos nossos clientes, por isso estamos atentos \xE0s tend\xEAncias e necessidades do mercado, indo ao encontro das suas expectativas, n\xE3o s\xF3 pela qualidade dos nossos produtos, mas tamb\xE9m pela inova\xE7\xE3o e diversidade de servi\xE7os. Atualmente contamos com v\xE1rias parcerias nas mais variadas \xE1reas que nos garantem uma vasta experi\xEAncia no mercado. ");
            i18n_0 = MSG_EXTERNAL_about_us_text_description$$__________________USERS_DU_AR_PROJS_CLIENTS_ACORBIZ_ACORBIZ_SRC_APP_LIBS_COMPONENTS_ABOUT_US_ABOUT_US_COMPONENT_TS_1;
          } else {
            i18n_0 = " Na A\xE7orbiz Representa\xE7\xF5es Unipessoal Lda. temos como miss\xE3o a satisfa\xE7\xE3o dos nossos clientes, por isso estamos atentos \xE0s tend\xEAncias e necessidades do mercado, indo ao encontro das suas expectativas, n\xE3o s\xF3 pela qualidade dos nossos produtos, mas tamb\xE9m pela inova\xE7\xE3o e diversidade de servi\xE7os. Atualmente contamos com v\xE1rias parcerias nas mais variadas \xE1reas que nos garantem uma vasta experi\xEAncia no mercado. ";
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_about_us_mission_title$$__________________USERS_DU_AR_PROJS_CLIENTS_ACORBIZ_ACORBIZ_SRC_APP_LIBS_COMPONENTS_ABOUT_US_ABOUT_US_COMPONENT_TS_3 = goog.getMsg("Miss\xE3o");
            i18n_2 = MSG_EXTERNAL_about_us_mission_title$$__________________USERS_DU_AR_PROJS_CLIENTS_ACORBIZ_ACORBIZ_SRC_APP_LIBS_COMPONENTS_ABOUT_US_ABOUT_US_COMPONENT_TS_3;
          } else {
            i18n_2 = "Miss\xE3o";
          }

          return [["id", "about-us", 1, "about-us", "w-100", "h-100", "d-flex"], [1, "acorbiz-container", "my-auto", "pt-5"], [1, "generic-container", "about-container", "mx-5", "my-auto", "row", "wow", "bounceIn"], [1, "icon", "d-flex", "mb-3"], ["fas", "", "icon", "bullseye", 1, "main-icon"], [1, "col-sm-12"], [1, "text-about"], i18n_0, [1, "mx-5", "my-5", "row"], [1, "col-md-4", "col-sm-12", "main-container", "wow", "fadeInLeft"], [1, "generic-container", "sub-container"], ["fas", "", "icon", "clipboard-check", "size", "3x"], [1, "title"], i18n_2, [1, "text-mission"], [1, "col-md-4", "col-sm-12", "main-container"], ["data-wow-delay", "1s", 1, "generic-container", "sub-container", "wow", "fadeInLeft"], ["far", "", "icon", "eye", "size", "3x"], [1, "text-vision"], ["data-wow-delay", "2s", 1, "generic-container", "sub-container", "wow", "fadeInLeft"], ["fas", "", "icon", "check", "size", "3x"], [1, "text-values"]];
        },
        template: function AboutUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mdb-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mdb-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Apresentar aos clientes uma solu\xE7\xE3o personalizada e que seja valorizada pela efici\xEAncia, efic\xE1cia e satisfa\xE7\xE3o. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mdb-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vis\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Ser reconhecida como marca de confian\xE7a pelos nossos produtos e servi\xE7os, bem como pelo valor acrescentado. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mdb-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Valores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Para n\xF3s o mais importante \xE9 garantir a satisfa\xE7\xE3o do cliente, para isso trabalhamos com \xE9tica, qualidade, compromisso e rigor. N\xE3o existem clientes iguais. Cada cliente \xE9 \xFAnico. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.MdbIconComponent, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.FasDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.FarDirective],
        styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: black #daac4e;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #252525;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #daac4e;\n  border-radius: 6px;\n  width: 2px;\n  border: 3px solid var(white);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.about-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.about-us[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n}\n\n.about-us[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%] {\n  color: #daac4e;\n}\n\n.about-us[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .main-icon[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n\n.about-us[_ngcontent-%COMP%]   .generic-container[_ngcontent-%COMP%] {\n  text-align: justify;\n  border-radius: 1rem;\n  padding: 1rem;\n  color: black;\n  height: 100%;\n}\n\n.about-us[_ngcontent-%COMP%]   .generic-container.about-container[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.about-us[_ngcontent-%COMP%]   .generic-container.sub-container[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);\n  border: 1px solid black;\n}\n\n@-webkit-keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .about-us[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .about-us[_ngcontent-%COMP%]   .about-container[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsImFib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsdUJBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7QUNORjs7QURRRTtFQUNFLG1CQUFBO0FDTko7O0FEUUU7RUFDRSx5QkFsQlE7RUFtQlIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUNOSjs7QURRRTtFQUNFLFdBQUE7QUNOSjs7QUFqQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW9CRjs7QUFsQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBb0JKOztBQWpCRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQW1CSjs7QUFsQkk7RUFDRSxjRGZNO0FDbUNaOztBQWxCSTtFQUNFLGVBQUE7QUFvQk47O0FBaEJFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZRDNCTTtFQzRCTixZQUFBO0FBa0JKOztBQWhCSTtFQUNFLGVBQUE7QUFrQk47O0FBZkk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0FBaUJOOztBQVhBO0VBQ0U7SUFDRSwyQkFBQTtFQWNGO0VBWkE7SUFDRSw2QkFBQTtFQWNGO0VBWkE7SUFDRSwyQkFBQTtFQWNGO0FBQ0Y7O0FBdkJBO0VBQ0U7SUFDRSwyQkFBQTtFQWNGO0VBWkE7SUFDRSw2QkFBQTtFQWNGO0VBWkE7SUFDRSwyQkFBQTtFQWNGO0FBQ0Y7O0FBWEE7RUFFSTtJQUNFLGdCQUFBO0VBWUo7RUFWRTtJQUNFLDRCQUFBO0VBWUo7QUFDRiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiByZ2IoMCwgMCwgMCk7XG4kc2VjdW5kYXJ5OiByZ2IoMjE4LCAxNzIsIDc4KTtcbiRzZWN1bmRhcnlBOiByZ2JhKDIxOCwgMTcyLCA3OCwgMC43NSk7XG4kdGhpcmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGZvbnRGYW1pbHk6IENlbnR1cnkgR290aGljLCBDZW50dXJ5R290aGljLCBBcHBsZUdvdGhpYywgc2Fucy1zZXJpZjtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICRwcmltYXJ5ICRzZWN1bmRhcnk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKCR0aGlyZCk7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMXB4O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XG5cbi5hYm91dC11cyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmljb24ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5mYXMsIC5mYXIge1xuICAgICAgY29sb3I6ICRzZWN1bmRhcnk7XG4gICAgfVxuICAgIC5tYWluLWljb257XG4gICAgICBmb250LXNpemU6IDdyZW07XG4gICAgfVxuICB9XG5cbiAgLmdlbmVyaWMtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJi5hYm91dC1jb250YWluZXIge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cblxuICAgICYuc3ViLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiKDAgMCAwIC8gNDAlKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIH1cbiAgfVxuICBcbn1cblxuQGtleWZyYW1lcyBncmFkaWVudCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYWJvdXQtdXN7XG4gICAgLm1haW4tY29udGFpbmVye1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    911:
    /*!****************************************************************!*\
      !*** ./src/app/libs/components/contacts/contacts.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsComponent": function ContactsComponent() {
          return (
            /* binding */
            _ContactsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/google-maps */
      8834);

      function ContactsComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1 == null ? null : item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("fab fa-4x " + (item_r1 == null ? null : item_r1.icon));
        }
      }

      var _ContactsComponent = /*#__PURE__*/function () {
        function _ContactsComponent() {
          _classCallCheck(this, _ContactsComponent);

          this.lat = 38.66541470884887;
          this.lng = -27.248640015131546;
        }

        _createClass(_ContactsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.company = {
              companyName: "AÇORBIZ",
              companyNameTag: "Representações Unipessoal Lda.",
              address: "Rua Félix Machado Barcelos, Nº 18",
              postalCode: "9700-202",
              city: "Angra do Heroísmo",
              phoneNumber: 924098356,
              email: "geral@acorbiz.pt"
            };
            this.linkList = [{
              url: "https://www.facebook.com/acorbizrepresentacoes",
              icon: "fa-facebook-square"
            }];
            this.mapOptions = {
              center: {
                lat: this.lat,
                lng: this.lng
              },
              zoom: 17,
              disableDefaultUI: false,
              zoomControl: true,
              mapTypeControl: true,
              streetViewControl: true,
              fullscreenControl: true
            };
            this.marker = {
              position: {
                lat: this.lat,
                lng: this.lng
              }
            };
            this.mailInfo = new Date().toLocaleString();
            this.copyright = this.getCopyright();
          }
        }, {
          key: "getCopyright",
          value: function getCopyright() {
            var date = new Date().getFullYear() > 2010 && new Date().getFullYear();
            return "© " + date.toString() + " AÇORBIZ Representações Unipessoal Lda.";
          }
        }]);

        return _ContactsComponent;
      }();

      _ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
        return new (t || _ContactsComponent)();
      };

      _ContactsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactsComponent,
        selectors: [["app-contacts"]],
        decls: 34,
        vars: 15,
        consts: [["id", "contacts", 1, "contacts", "d-flex", "w-100"], [1, "container", "wow", "fadeIn"], [1, "row", "address"], [1, "col-md-12"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [3, "href"], [1, "row", "socials"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "row", "gmap"], [3, "width", "height", "options"], [3, "position"], [1, "row", "footer"], [1, "ns"]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContactsComponent_div_23_Template, 3, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "google-map", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "map-marker", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Website made by Nameless Softworks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.companyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.companyNameTag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.postalCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + ctx.company.email + "?subject=Info|" + ctx.mailInfo + "&body=Pedido de Informa\xE7\xE3o (" + ctx.mailInfo + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:+351 " + ctx.company.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+351 ", ctx.company.phoneNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linkList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", null)("height", null)("options", ctx.mapOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx.marker.position);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.copyright);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__.MapMarker],
        styles: ["html {\n  scroll-behavior: smooth;\n}\n\nbody {\n  scrollbar-width: thin;\n  scrollbar-color: black #daac4e;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #252525;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #daac4e;\n  border-radius: 6px;\n  width: 2px;\n  border: 3px solid var(white);\n}\n\nbody::-webkit-scrollbar {\n  width: 11px;\n}\n\n#contacts {\n  background-color: black;\n  color: white;\n  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;\n  padding: 2rem 0 1rem 0;\n}\n\n#contacts h4 {\n  font-style: italic;\n  font-weight: lighter;\n}\n\n#contacts hr {\n  margin: 1rem auto;\n  height: 1px;\n  background-image: linear-gradient(to right, black, rgba(218, 172, 78, 0.75), black);\n}\n\n#contacts .row {\n  padding-top: 1rem;\n}\n\n#contacts a {\n  color: white;\n  font-weight: bold;\n}\n\n#contacts a:hover {\n  color: #daac4e;\n}\n\n#contacts .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#contacts .container .address {\n  text-align: center;\n  font-size: larger;\n}\n\n#contacts .gmap .map-container {\n  width: 80vw;\n  height: 80vh;\n}\n\n#contacts .footer {\n  font-style: oblique;\n}\n\n.ns {\n  background-color: #daac4e;\n  color: #5c3d00;\n  font-weight: lighter;\n  font-size: xx-small;\n  float: right;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsImNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsdUJBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7QUNORjs7QURRRTtFQUNFLG1CQUFBO0FDTko7O0FEUUU7RUFDRSx5QkFsQlE7RUFtQlIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUNOSjs7QURRRTtFQUNFLFdBQUE7QUNOSjs7QUFqQkE7RUFDSSx1QkRITTtFQ0lOLFlEREk7RUNFSixtRUFBQTtFQUNBLHNCQUFBO0FBb0JKOztBQWxCSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFvQlI7O0FBakJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUZBQUE7QUFtQlI7O0FBaEJJO0VBQ0ksaUJBQUE7QUFrQlI7O0FBZkk7RUFDSSxZRHJCQTtFQ3NCQSxpQkFBQTtBQWlCUjs7QUFkSTtFQUNJLGNENUJJO0FDNENaOztBQWJJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWVSOztBQWJRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWVaOztBQVZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFZWjs7QUFSSTtFQUNJLG1CQUFBO0FBVVI7O0FBTkE7RUFDSSx5QkR4RFE7RUN5RFIsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVNKIiwiZmlsZSI6ImNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6IHJnYigwLCAwLCAwKTtcbiRzZWN1bmRhcnk6IHJnYigyMTgsIDE3MiwgNzgpO1xuJHNlY3VuZGFyeUE6IHJnYmEoMjE4LCAxNzIsIDc4LCAwLjc1KTtcbiR0aGlyZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kZm9udEZhbWlseTogQ2VudHVyeSBHb3RoaWMsIENlbnR1cnlHb3RoaWMsIEFwcGxlR290aGljLCBzYW5zLXNlcmlmO1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogJHByaW1hcnkgJHNlY3VuZGFyeTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogIzI1MjUyNTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoJHRoaXJkKTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDExcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzcyc7XG5cbiNjb250YWN0cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICR0aGlyZDtcbiAgICBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XG4gICAgcGFkZGluZzogMnJlbSAwIDFyZW0gMDtcblxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB9XG5cbiAgICBociB7XG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeSwgJHNlY3VuZGFyeUEsICRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAucm93IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAkdGhpcmQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHNlY3VuZGFyeTtcbiAgICB9XG5cbiAgICAmIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5nbWFwIHtcbiAgICAgICAgLm1hcC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICB9XG59XG5cbi5ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3VuZGFyeTtcbiAgICBjb2xvcjogcmdiKDkyLCA2MSwgMCk7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    8924:
    /*!********************************************************!*\
      !*** ./src/app/libs/components/home/home.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      7175);
      /* harmony import */


      var angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-animations */
      9641);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-bootstrap-md */
      8881);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(viewportScroller) {
          _classCallCheck(this, _HomeComponent);

          this.viewportScroller = viewportScroller;
          this.anime = false;
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToNextSection",
          value: function goToNextSection() {
            var nextSection = 'what-we-do';
            this.viewportScroller.scrollToAnchor(nextSection);
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 4,
        vars: 2,
        consts: [["id", "home", 1, "home", "d-flex", "w-100", "pb-2"], ["src", "assets/img/logo_without_bg.png", "width", "80%", "alt", "A\xC7ORBIZ"], [1, "btn", "d-block", "next-section", 3, "click"], ["fas", "", "icon", "angle-down"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() {
              return ctx.goToNextSection();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@flash.done", function HomeComponent_Template_mdb_icon_animation_flash_done_3_listener() {
              return ctx.anime = !ctx.anime;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showing", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash", ctx.anime);
          }
        },
        directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__.MdbIconComponent, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__.FasDirective],
        styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: black #daac4e;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #252525;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #daac4e;\n  border-radius: 6px;\n  width: 2px;\n  border: 3px solid var(white);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n\n.home[_ngcontent-%COMP%] {\n  background: black;\n  color: #daac4e;\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n}\n\n.home[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.home[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.home[_ngcontent-%COMP%]   .next-section[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  line-height: 1px;\n}\n\n.home[_ngcontent-%COMP%]   .next-section[_ngcontent-%COMP%]:hover {\n  color: #daac4e;\n}\n\n.home[_ngcontent-%COMP%]   .fas.fa-angle-down[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSx1QkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQ05GOztBRFFFO0VBQ0UsbUJBQUE7QUNOSjs7QURRRTtFQUNFLHlCQWxCUTtFQW1CUixrQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ05KOztBRFFFO0VBQ0UsV0FBQTtBQ05KOztBQWpCQTtFQUNFLGlCREhRO0VDSVIsY0RIVTtFQ0lWLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW9CRjs7QUFsQkU7RUFDRSxZQUFBO0FBb0JKOztBQWpCRTtFQUNFLFlBQUE7QUFtQko7O0FBaEJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUR0Qkk7RUN1QkosZ0JBQUE7QUFrQko7O0FBaEJJO0VBQ0UsY0Q1Qk07QUM4Q1o7O0FBYkk7RUFDRSxlQUFBO0FBZU4iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiByZ2IoMCwgMCwgMCk7XG4kc2VjdW5kYXJ5OiByZ2IoMjE4LCAxNzIsIDc4KTtcbiRzZWN1bmRhcnlBOiByZ2JhKDIxOCwgMTcyLCA3OCwgMC43NSk7XG4kdGhpcmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGZvbnRGYW1pbHk6IENlbnR1cnkgR290aGljLCBDZW50dXJ5R290aGljLCBBcHBsZUdvdGhpYywgc2Fucy1zZXJpZjtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICRwcmltYXJ5ICRzZWN1bmRhcnk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKCR0aGlyZCk7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMXB4O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LnNjc3MnO1xuXG4uaG9tZSB7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICBjb2xvcjogJHNlY3VuZGFyeTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gIH1cblxuICAudGV4dCB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICB9XG5cbiAgLm5leHQtc2VjdGlvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgY29sb3I6ICR0aGlyZDtcbiAgICBsaW5lLWhlaWdodDogMXB4O1xuXG4gICAgJjpob3ZlcntcbiAgICAgIGNvbG9yOiAkc2VjdW5kYXJ5O1xuICAgIH1cbiAgfVxuXG4gIC5mYXMge1xuICAgICYuZmEtYW5nbGUtZG93bntcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('showing', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            opacity: 0
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(3000, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            opacity: 1
          }))])]), (0, angular_animations__WEBPACK_IMPORTED_MODULE_4__.fadeInAnimation)({
            duration: 2000,
            anchor: 'flash',
            delay: 1000
          }), (0, angular_animations__WEBPACK_IMPORTED_MODULE_4__.flashAnimation)({
            anchor: 'flash',
            duration: 4000,
            delay: 0
          })]
        }
      });
      /***/
    },

    /***/
    6034:
    /*!******************************************!*\
      !*** ./src/app/libs/components/index.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* reexport safe */
            _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
          );
        },

        /* harmony export */
        "AboutUsComponent": function AboutUsComponent() {
          return (
            /* reexport safe */
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent
          );
        },

        /* harmony export */
        "ContactsComponent": function ContactsComponent() {
          return (
            /* reexport safe */
            _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent
          );
        },

        /* harmony export */
        "WhatWeDoComponent": function WhatWeDoComponent() {
          return (
            /* reexport safe */
            _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_3__.WhatWeDoComponent
          );
        },

        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* reexport safe */
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      8924);
      /* harmony import */


      var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about-us/about-us.component */
      461);
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      911);
      /* harmony import */


      var _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./what-we-do/what-we-do.component */
      8943);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      5725);
      /***/

    },

    /***/
    5725:
    /*!************************************************************!*\
      !*** ./src/app/libs/components/navbar/navbar.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-bootstrap-md */
      8881);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      4364);

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function NavbarComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_6_Template_a_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var page_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.goTo(page_r1.pageLink);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", page_r1.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, page_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1.pageName, " ");
        }
      }

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent() {
          _classCallCheck(this, _NavbarComponent);

          this.offset = 53;
          this.navbarLinkList = [{
            pageName: 'Serviços',
            pageLink: '#what-we-do',
            id: 'servicesLinkId',
            active: false
          }, {
            pageName: 'Sobre',
            pageLink: '#about-us',
            id: 'aboutLinkId',
            active: false
          }, {
            pageName: 'Contactos',
            pageLink: '#contacts',
            id: 'contactsLinkId',
            active: false
          }];
        }

        _createClass(_NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goTo",
          value: function goTo(section) {
            var sectionElement = document.querySelector(section);
            window.scrollTo({
              top: sectionElement.offsetTop - this.offset
            });
          }
        }, {
          key: "onWindowScroll",
          value: function onWindowScroll() {
            var _this = this;

            var activeSectionY = Math.abs(document.documentElement.getBoundingClientRect().y) + this.offset;
            this.navbarLinkList.forEach(function (link, index) {
              if (activeSectionY >= document.querySelector(link.pageLink).offsetTop && (_this.navbarLinkList.length === index + 1 || activeSectionY < document.querySelector(_this.navbarLinkList[index + 1].pageLink).offsetTop)) {
                link.active = true;
              } else {
                link.active = false;
              }
            });
          }
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)();
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 7,
        vars: 1,
        consts: [["SideClass", "navbar navbar-expand-xl navbar-dark black fixed-top scrolling-navbar"], ["href", "#home", 1, "navbar-brand"], ["src", "assets/img/logo_without_bg.png", "height", "30", "alt", "A\xC7ORBIZ | Representa\xE7\xF5es Unip. Lda"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "id", "ngClass"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_li_6_Template, 3, 5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navbarLinkList);
          }
        },
        directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.LinksComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.WavesDirective],
        styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: black #daac4e;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #252525;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #daac4e;\n  border-radius: 6px;\n  width: 2px;\n  border: 3px solid var(white);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n\n  .navbar {\n  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;\n  border-bottom: 1px solid #daac4e;\n}\n\n  .navbar li.active > a {\n  background-color: rgba(218, 172, 78, 0.75) !important;\n}\n\n  .navbar li > a:hover,   .navbar li.active > a:hover {\n  background-color: #daac4e !important;\n}\n\n  .container {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHVCQUFBO0FDTkY7O0FEU0E7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0FDTkY7O0FEUUU7RUFDRSxtQkFBQTtBQ05KOztBRFFFO0VBQ0UseUJBbEJRO0VBbUJSLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FDTko7O0FEUUU7RUFDRSxXQUFBO0FDTko7O0FBaEJJO0VBQ0ksbUVEQ0s7RUNBTCxnQ0FBQTtBQW1CUjs7QUFqQlE7RUFDSSxxREFBQTtBQW1CWjs7QUFmSTs7RUFFSSxvQ0FBQTtBQWlCUjs7QUFkSTtFQUNJLGVBQUE7QUFnQlIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6IHJnYigwLCAwLCAwKTtcbiRzZWN1bmRhcnk6IHJnYigyMTgsIDE3MiwgNzgpO1xuJHNlY3VuZGFyeUE6IHJnYmEoMjE4LCAxNzIsIDc4LCAwLjc1KTtcbiR0aGlyZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kZm9udEZhbWlseTogQ2VudHVyeSBHb3RoaWMsIENlbnR1cnlHb3RoaWMsIEFwcGxlR290aGljLCBzYW5zLXNlcmlmO1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogJHByaW1hcnkgJHNlY3VuZGFyeTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogIzI1MjUyNTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoJHRoaXJkKTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDExcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzcyc7XG5cbjo6bmctZGVlcCB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRzZWN1bmRhcnk7XG5cbiAgICAgICAgJiBsaS5hY3RpdmUgPiBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN1bmRhcnlBICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2YmFyIGxpID4gYTpob3ZlcixcbiAgICAubmF2YmFyIGxpLmFjdGl2ZSA+IGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdW5kYXJ5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    8943:
    /*!********************************************************************!*\
      !*** ./src/app/libs/components/what-we-do/what-we-do.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhatWeDoComponent": function WhatWeDoComponent() {
          return (
            /* binding */
            _WhatWeDoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-bootstrap-md */
      8881);

      var _WhatWeDoComponent = /*#__PURE__*/function () {
        function _WhatWeDoComponent() {
          _classCallCheck(this, _WhatWeDoComponent);
        }

        _createClass(_WhatWeDoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _WhatWeDoComponent;
      }();

      _WhatWeDoComponent.ɵfac = function WhatWeDoComponent_Factory(t) {
        return new (t || _WhatWeDoComponent)();
      };

      _WhatWeDoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _WhatWeDoComponent,
        selectors: [["app-what-we-do"]],
        decls: 61,
        vars: 2,
        consts: [["id", "what-we-do", 1, "what-we-do", "w-100", "pt-2"], [1, "description", "mb-5"], [1, "mt-5"], [1, "carousel", "slide", "carousel-fade", 3, "animation", "interval"], [1, "view", "w-100"], ["src", "assets/img/obras.jpg", "alt", "consultadoria Obras", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-strong", "waves-light"], [1, "carousel-caption"], [1, "h3-responsive"], ["src", "assets/img/pool.jpg", "alt", "Material Piscinas", 1, "d-block", "w-100"], [1, "view", "w-100", "h-100"], ["src", "assets/img/imobliaria.jpg", "alt", "imobili\xE1ria", 1, "d-block", "w-100"], ["src", "assets/img/limpeza.jpg", "alt", "Produtos de Higiene", 1, "d-block", "w-100"], ["src", "assets/img/desporto.jpg", "alt", "Produtos de Desporto", 1, "d-block", "w-100"], ["src", "assets/img/epis.jpg", "alt", "EPI", 1, "d-block", "w-100"]],
        template: function WhatWeDoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "O QUE \xC9 QUE N\xD3S FAZEMOS?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "N\xF3s apostamos em v\xE1rios produtos e servi\xE7os para servir os nossos clientes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-carousel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-carousel-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Obras");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Consultadoria e acompanhamento de obras, impermeabiliza\xE7\xF5es, canaliza\xE7\xE3o, eletricidade, dom\xF3tica, alvar\xE1 de constru\xE7\xE3o. Confie em n\xF3s, tratamos de tudo! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mdb-carousel-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Piscinas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Temos tudo para a sua piscina, alvenaria, equipamentos e acess\xF3rios, solu\xE7\xF5es \u201Cchave na m\xE3o\u201D.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mdb-carousel-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Solu\xE7\xF5es Imobili\xE1rias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Consultoria imobili\xE1ria, compra e venda de imoveis.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mdb-carousel-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Produtos de Higiene");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Dispomos de produtos, equipamentos e acess\xF3rios de higiene e limpeza industriais ou para uso domicili\xE1rio. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mdb-carousel-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Desporto e Lazer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Disponibilizamos um vasto leque de acess\xF3rios para a pr\xE1tica desportiva indoor e outdoor, balizas, redes, campos de padel, pisos, etc... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mdb-carousel-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Epi\xB4s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Equipamentos de prote\xE7\xE3o individuais");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animation", "fade")("interval", 10000);
          }
        },
        directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.SlideComponent, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__.WavesDirective],
        styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: black #daac4e;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #252525;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #daac4e;\n  border-radius: 6px;\n  width: 2px;\n  border: 3px solid var(white);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n\n.what-we-do[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: black;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: 40em;\n}\n\n@media only screen and (max-width: 500px) {\n  .view[_ngcontent-%COMP%] {\n    max-height: 15em !important;\n  }\n}\n\n@media only screen and (max-width: 700px) and (min-width: 500px) {\n  .view[_ngcontent-%COMP%] {\n    max-height: 25em !important;\n  }\n}\n\n@media only screen and (max-width: 1000px) and (min-width: 700px) {\n  .view[_ngcontent-%COMP%] {\n    max-height: 29em !important;\n  }\n}\n\n@media only screen and (max-width: 1200px) and (min-width: 1000px) {\n  .view[_ngcontent-%COMP%] {\n    max-height: 35em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIndoYXQtd2UtZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSx1QkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQ05GOztBRFFFO0VBQ0UsbUJBQUE7QUNOSjs7QURRRTtFQUNFLHlCQWxCUTtFQW1CUixrQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ05KOztBRFFFO0VBQ0UsV0FBQTtBQ05KOztBQWpCQTtFQUNJLFlBQUE7RUFDQSx1QkRKTTtBQ3dCVjs7QUFsQkk7RUFDSSxrQkFBQTtFQUNBLFlETEE7QUN5QlI7O0FBbkJRO0VBQ0ksaUJBQUE7QUFxQlo7O0FBakJJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBbUJSOztBQWZBO0VBQ0k7SUFDSSwyQkFBQTtFQWtCTjtBQUNGOztBQWZBO0VBQ0k7SUFDSSwyQkFBQTtFQWlCTjtBQUNGOztBQWRBO0VBQ0k7SUFDSSwyQkFBQTtFQWdCTjtBQUNGOztBQWJBO0VBQ0k7SUFDSSwyQkFBQTtFQWVOO0FBQ0YiLCJmaWxlIjoid2hhdC13ZS1kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiByZ2IoMCwgMCwgMCk7XG4kc2VjdW5kYXJ5OiByZ2IoMjE4LCAxNzIsIDc4KTtcbiRzZWN1bmRhcnlBOiByZ2JhKDIxOCwgMTcyLCA3OCwgMC43NSk7XG4kdGhpcmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGZvbnRGYW1pbHk6IENlbnR1cnkgR290aGljLCBDZW50dXJ5R290aGljLCBBcHBsZUdvdGhpYywgc2Fucy1zZXJpZjtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICRwcmltYXJ5ICRzZWN1bmRhcnk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKCR0aGlyZCk7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMXB4O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XG5cbi53aGF0LXdlLWRvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG5cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6JHRoaXJkO1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52aWV3IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWF4LWhlaWdodDogNDBlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAudmlldyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE1ZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgLnZpZXcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNWVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcbiAgICAudmlldyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI5ZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogMTAwMHB4KXtcbiAgICAudmlldyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM1ZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map