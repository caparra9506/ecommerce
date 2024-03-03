exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 7599:
/***/ ((module) => {

// Exports
module.exports = {
	"signIn": "sign-in_signIn__h5A_V",
	"actions": "sign-in_actions__LJeP5"
};


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9668);
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5750);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1861);
/* harmony import */ var _sign_in_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7599);
/* harmony import */ var _sign_in_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sign_in_module_scss__WEBPACK_IMPORTED_MODULE_5__);






function SignInPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .pQ, {
                title: "Iniciar sesi\xf3n"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts__WEBPACK_IMPORTED_MODULE_2__/* .JoinLayout */ .ew, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_sign_in_module_scss__WEBPACK_IMPORTED_MODULE_5___default().signIn),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Iniciar sesi\xf3n"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Auth__WEBPACK_IMPORTED_MODULE_3__/* .LoginForm */ .U, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_sign_in_module_scss__WEBPACK_IMPORTED_MODULE_5___default().actions),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/join/sign-up",
                                children: "\xbfNo tienes una cuenta?"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;