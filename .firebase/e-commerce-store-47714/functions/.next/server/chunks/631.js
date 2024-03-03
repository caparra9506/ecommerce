exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 5946:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "BannerLastGamePublished_container__ntgKQ",
	"wallpaper": "BannerLastGamePublished_wallpaper__szLHA",
	"infoContainer": "BannerLastGamePublished_infoContainer__KIj94",
	"date": "BannerLastGamePublished_date__SYy9x",
	"price": "BannerLastGamePublished_price__ZhDwp",
	"finalPrice": "BannerLastGamePublished_finalPrice__cTSkh"
};


/***/ }),

/***/ 5370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ BannerLastGamePublished)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2353);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4117);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1861);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8040);
/* harmony import */ var _BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5946);
/* harmony import */ var _BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([luxon__WEBPACK_IMPORTED_MODULE_3__]);
luxon__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const gameCtrl = new _api__WEBPACK_IMPORTED_MODULE_5__/* .Game */ .lA();
function BannerLastGamePublished() {
    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await gameCtrl.getLastPublished();
                setGame(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    if (!game) return null;
    const wallpaper = game.attributes.wallpaper;
    const releaseDate = new Date(game.attributes.releaseDate).toISOString();
    const price = _utils__WEBPACK_IMPORTED_MODULE_7__.fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: wallpaper,
                className: (_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wallpaper)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: (_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default().infoContainer),
                href: game.attributes.slug,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default().date),
                            children: luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromISO(releaseDate).minus({
                                days: 1
                            }).toRelative()
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: game.attributes.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default().price),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Shared__WEBPACK_IMPORTED_MODULE_6__/* .Label.Discount */ .__.Discount, {
                                    children: [
                                        "-",
                                        game.attributes.discount,
                                        "%"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_BannerLastGamePublished_module_scss__WEBPACK_IMPORTED_MODULE_8___default().finalPrice),
                                    children: [
                                        price,
                                        "€"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5370);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__]);
_BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ LatestGames)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/components/Shared/index.js + 26 modules
var Shared = __webpack_require__(1861);
;// CONCATENATED MODULE: ./src/components/Home/LatestGames/LatestGames.js




const gameCtrl = new api/* Game */.lA();
function LatestGames(props) {
    const { title , limit =9 , platformId =null  } = props;
    const [games, setGames] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await gameCtrl.getLatestPublished({
                    limit,
                    platformId
                });
                setGames(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    if (!games) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* GridGames */.yS, {
                games: games
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Home/LatestGames/index.js



/***/ }),

/***/ 8693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(991);
/* harmony import */ var _LatestGames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__]);
_BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Home = {
    BannerLastGamePublished: _BannerLastGamePublished__WEBPACK_IMPORTED_MODULE_0__/* .BannerLastGamePublished */ .P,
    LatestGames: _LatestGames__WEBPACK_IMPORTED_MODULE_1__/* .LatestGames */ .J
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9668);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8693);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1861);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home__WEBPACK_IMPORTED_MODULE_3__]);
_components_Home__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const platformsId = {
    playstation: 1,
    xbox: 2,
    nintendo: 3,
    pc: 4
};
function HomePage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .pQ, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_2__/* .BasicLayout */ .iO, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__/* .Home.BannerLastGamePublished */ .S.BannerLastGamePublished, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                        height: 100
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__/* .Home.LatestGames */ .S.LatestGames, {
                            title: "Ultimos lanzamientos"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                        height: 100
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .BarTrust */ .PC, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                        height: 100
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__/* .Home.LatestGames */ .S.LatestGames, {
                            title: "PlayStation",
                            limit: 3,
                            platformId: platformsId.playstation
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                        height: 100
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .BannerAd */ .Ut, {
                        title: "Registrate y obten los mejores precios",
                        subtitle: "\xa1Compara con otros juegos y elige el tuyo!",
                        btnTitle: "Entrar ahora",
                        btnLink: "/account",
                        image: "/images/img01.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                        height: 50
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__/* .Home.LatestGames */ .S.LatestGames, {
                            title: "Xbox",
                            limit: 3,
                            platformId: platformsId.xbox
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, {
                        height: 100
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;