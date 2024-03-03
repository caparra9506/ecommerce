"use strict";
exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 5629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlatformPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9668);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1861);





function PlatformPage(props) {
    const { games , platform , pagination  } = props;
    const hasProducts = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.size)(games) > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .pQ, {
                title: `Juegos de ${platform.attributes.title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__/* .BasicLayout */ .iO, {
                relative: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                            height: 50
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: platform.attributes.title
                        }),
                        hasProducts ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .GridGames */ .yS, {
                                    games: games
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                                    height: 30
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Pagination */ .tl, {
                                    currentPage: pagination.page,
                                    totalPages: pagination.pageCount
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .NoResult */ .xM, {
                            text: `La categoria ${platform.attributes.title} aun no tiene productos`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                            height: 100
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