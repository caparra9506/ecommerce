exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 427:
/***/ ((module) => {

// Exports
module.exports = {
	"account": "Account_account__03AxE",
	"cart": "Account_cart__CKBOy",
	"user": "Account_user__H4enu"
};


/***/ }),

/***/ 4304:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__aIVZH",
	"columns": "Footer_columns__7A1_y",
	"social": "Footer_social__1hXoP",
	"copyright": "Footer_copyright__ygL71"
};


/***/ }),

/***/ 6341:
/***/ ((module) => {

// Exports
module.exports = {
	"headerCart": "HeaderCart_headerCart__P2TCG",
	"left": "HeaderCart_left__39WUi",
	"center": "HeaderCart_center___DbAV",
	"active": "HeaderCart_active__G5LE3",
	"number": "HeaderCart_number__e9RHP",
	"success": "HeaderCart_success__ron1_",
	"space": "HeaderCart_space__xmZtI",
	"right": "HeaderCart_right__FtDP_"
};


/***/ }),

/***/ 8563:
/***/ ((module) => {

// Exports
module.exports = {
	"platforms": "Menu_platforms__pdkKz",
	"search": "Menu_search__OzGqI",
	"inputContainer": "Menu_inputContainer__EX3Pc",
	"active": "Menu_active__QSW4V",
	"input": "Menu_input__gjzDq",
	"closeInput": "Menu_closeInput__Pg29C"
};


/***/ }),

/***/ 3121:
/***/ ((module) => {

// Exports
module.exports = {
	"topBar": "TopBar_topBar__KyYYW",
	"left": "TopBar_left__puhQM",
	"center": "TopBar_center__l8LBY",
	"right": "TopBar_right__vXUZj"
};


/***/ }),

/***/ 2107:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "BannerAd_container__Z1RDW",
	"containerImage": "BannerAd_containerImage__ZuwQ7",
	"infoContainer": "BannerAd_infoContainer__Td3v0"
};


/***/ }),

/***/ 9330:
/***/ ((module) => {

// Exports
module.exports = {
	"barTrust": "BarTrust_barTrust__CG1IT",
	"content": "BarTrust_content__Pi7at",
	"block": "BarTrust_block__ekb_6"
};


/***/ }),

/***/ 9868:
/***/ ((module) => {

// Exports
module.exports = {
	"fullModal": "FullModal_fullModal__k3S8k",
	"close": "FullModal_close__MncEH"
};


/***/ }),

/***/ 8832:
/***/ ((module) => {

// Exports
module.exports = {
	"gridGames": "GridGames_gridGames__6KPMn",
	"game": "GridGames_game__UOVmx",
	"discount": "GridGames_discount__h3jQ7",
	"price": "GridGames_price__dOMnz"
};


/***/ }),

/***/ 3091:
/***/ ((module) => {

// Exports
module.exports = {
	"labelDiscount": "Discount_labelDiscount__KhhJ6"
};


/***/ }),

/***/ 5174:
/***/ ((module) => {

// Exports
module.exports = {
	"noResult": "NoResult_noResult__W7CKt"
};


/***/ }),

/***/ 9203:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Pagination_container__VkTV4"
};


/***/ }),

/***/ 3632:
/***/ ((module) => {

// Exports
module.exports = {
	"wishlistIcon": "WishlistIcon_wishlistIcon__N5tsC"
};


/***/ }),

/***/ 1746:
/***/ ((module) => {

// Exports
module.exports = {
	"relative": "BasicLayout_relative__6Pfua"
};


/***/ }),

/***/ 9339:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "JoinLayout_container__CWDIJ",
	"topBar": "JoinLayout_topBar__XQ7WR",
	"blockLeft": "JoinLayout_blockLeft__PG6ZJ",
	"blockRight": "JoinLayout_blockRight__wEA6R"
};


/***/ }),

/***/ 1861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ut": () => (/* reexport */ BannerAd),
  "PC": () => (/* reexport */ BarTrust),
  "PA": () => (/* reexport */ BasicModal),
  "I4": () => (/* reexport */ Confirm),
  "oU": () => (/* reexport */ FullModal),
  "yS": () => (/* reexport */ GridGames),
  "__": () => (/* reexport */ Label),
  "xM": () => (/* reexport */ NoResult),
  "tl": () => (/* reexport */ Pagination),
  "pQ": () => (/* reexport */ Seo),
  "Z0": () => (/* reexport */ Separator),
  "X$": () => (/* reexport */ WishlistIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Shared/Separator/Separator.js

function Separator(props) {
    const { height  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height
        }
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/Separator/index.js


// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
;// CONCATENATED MODULE: ./src/components/Shared/BasicModal/BasicModal.js


function BasicModal(props) {
    const { children , show , onClose , title  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Modal, {
        open: show,
        onClose: onClose,
        size: "small",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Header, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Content, {
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/BasicModal/index.js


;// CONCATENATED MODULE: ./src/components/Shared/Confirm/Confirm.js


function Confirm(props) {
    const { ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Confirm, {
        className: "confirm",
        size: "mini",
        ...rest
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/Confirm/index.js


// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Shared/Label/Discount/Discount.module.scss
var Discount_module = __webpack_require__(3091);
var Discount_module_default = /*#__PURE__*/__webpack_require__.n(Discount_module);
;// CONCATENATED MODULE: ./src/components/Shared/Label/Discount/Discount.js



function Discount(props) {
    const { children , className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: external_classnames_default()((Discount_module_default()).labelDiscount, {
            [className]: className
        }),
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/Label/Discount/index.js


;// CONCATENATED MODULE: ./src/components/Shared/Label/index.js

const Label = {
    Discount: Discount
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./src/utils/index.js + 4 modules
var utils = __webpack_require__(8040);
// EXTERNAL MODULE: ./src/components/Shared/GridGames/GridGames.module.scss
var GridGames_module = __webpack_require__(8832);
var GridGames_module_default = /*#__PURE__*/__webpack_require__.n(GridGames_module);
;// CONCATENATED MODULE: ./src/components/Shared/GridGames/GridGames.js






function GridGames(props) {
    const { games  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (GridGames_module_default()).gridGames,
        children: (0,external_lodash_.map)(games, (game)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: `/${game.attributes.slug}`,
                className: (GridGames_module_default()).game,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: game.attributes.cover
                            }),
                            game.attributes.discount > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Label.Discount, {
                                className: (GridGames_module_default()).discount,
                                children: `-${game.attributes.discount}%`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: game.attributes.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (GridGames_module_default()).price,
                                children: [
                                    utils.fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount),
                                    "€"
                                ]
                            })
                        ]
                    })
                ]
            }, game.id))
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/GridGames/index.js


;// CONCATENATED MODULE: ./src/components/Shared/BarTrust/BarTrust.data.js
const data = [
    {
        icon: "truck",
        title: "S\xfaper r\xe1pido",
        description: "Entrega en 24/48 horas"
    },
    {
        icon: "shield",
        title: "Fiable y seguro",
        description: "M\xe1s de 10,000 juegos"
    },
    {
        icon: "wechat",
        title: "Atenci\xf3n al cliente",
        description: "Agente disponible 24/7"
    }
];

// EXTERNAL MODULE: ./src/components/Shared/BarTrust/BarTrust.module.scss
var BarTrust_module = __webpack_require__(9330);
var BarTrust_module_default = /*#__PURE__*/__webpack_require__.n(BarTrust_module);
;// CONCATENATED MODULE: ./src/components/Shared/BarTrust/BarTrust.js





function BarTrust() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (BarTrust_module_default()).barTrust,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
            className: (BarTrust_module_default()).content,
            children: (0,external_lodash_.map)(data, (item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (BarTrust_module_default()).block,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                            name: item.icon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: item.description
                                })
                            ]
                        })
                    ]
                }))
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/BarTrust/index.js


// EXTERNAL MODULE: ./src/components/Shared/BannerAd/BannerAd.module.scss
var BannerAd_module = __webpack_require__(2107);
var BannerAd_module_default = /*#__PURE__*/__webpack_require__.n(BannerAd_module);
;// CONCATENATED MODULE: ./src/components/Shared/BannerAd/BannerAd.js




function BannerAd(props) {
    const { title , subtitle , btnTitle , btnLink , image  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BannerAd_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
                className: (BannerAd_module_default()).containerImage,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                    src: image
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BannerAd_module_default()).infoContainer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: subtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            as: (link_default()),
                            href: btnLink,
                            primary: true,
                            children: btnTitle
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/BannerAd/index.js


// EXTERNAL MODULE: ./src/components/Shared/NoResult/NoResult.module.scss
var NoResult_module = __webpack_require__(5174);
var NoResult_module_default = /*#__PURE__*/__webpack_require__.n(NoResult_module);
;// CONCATENATED MODULE: ./src/components/Shared/NoResult/NoResult.js


function NoResult(props) {
    const { text  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (NoResult_module_default()).noResult,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: text
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/NoResult/index.js


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Shared/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__(9203);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./src/components/Shared/Pagination/Pagination.js




function Pagination(props) {
    const { currentPage , totalPages  } = props;
    const router = (0,router_.useRouter)();
    const onPageChange = (_, data)=>{
        const { activePage  } = data;
        router.replace({
            query: {
                ...router.query,
                page: activePage
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Pagination_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Pagination, {
            defaultActivePage: currentPage,
            totalPages: totalPages,
            ellipsisItem: null,
            firstItem: null,
            lastItem: null,
            onPageChange: onPageChange
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/Pagination/index.js


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: ./src/components/Shared/WishlistIcon/WishlistIcon.module.scss
var WishlistIcon_module = __webpack_require__(3632);
var WishlistIcon_module_default = /*#__PURE__*/__webpack_require__.n(WishlistIcon_module);
;// CONCATENATED MODULE: ./src/components/Shared/WishlistIcon/WishlistIcon.js







const wishlistCtrl = new api/* Wishlist */.sq();
function WishlistIcon(props) {
    const { gameId , className , removeCallback  } = props;
    const [hasWishlist, setHasWishlist] = (0,external_react_.useState)(null);
    const { user  } = (0,hooks/* useAuth */.a)();
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await wishlistCtrl.check(user.id, gameId);
                setHasWishlist(response);
            } catch (error) {
                setHasWishlist(false);
                console.error(error);
            }
        })();
    }, [
        gameId
    ]);
    const addWishlist = async ()=>{
        const response = await wishlistCtrl.add(user.id, gameId);
        setHasWishlist(response);
    };
    const deleteWishlist = async ()=>{
        try {
            await wishlistCtrl.delete(hasWishlist.id);
            setHasWishlist(false);
            if (removeCallback) {
                removeCallback();
            }
        } catch (error) {
            console.error(error);
        }
    };
    if (hasWishlist === null) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
        name: hasWishlist ? "heart" : "heart outline",
        onClick: hasWishlist ? deleteWishlist : addWishlist,
        className: external_classnames_default()((WishlistIcon_module_default()).wishlistIcon, {
            [className]: className
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/WishlistIcon/index.js


// EXTERNAL MODULE: ./src/components/Shared/FullModal/FullModal.module.scss
var FullModal_module = __webpack_require__(9868);
var FullModal_module_default = /*#__PURE__*/__webpack_require__.n(FullModal_module);
;// CONCATENATED MODULE: ./src/components/Shared/FullModal/FullModal.js



function FullModal(props) {
    const { children , show , onClose  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Modal, {
        open: show,
        className: (FullModal_module_default()).fullModal,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Modal.Content, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                name: "close",
                className: (FullModal_module_default()).close,
                onClick: onClose
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/FullModal/index.js


// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Shared/Seo/Seo.js


function Seo(props) {
    const { title ="Gaming - Tus juegos favoritos" , description ="Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio."  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "description",
                content: description
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Shared/Seo/index.js


;// CONCATENATED MODULE: ./src/components/Shared/index.js














/***/ }),

/***/ 5409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ useAuth),
  "j": () => (/* reexport */ useCart)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/contexts/index.js + 2 modules
var contexts = __webpack_require__(2666);
;// CONCATENATED MODULE: ./src/hooks/useAuth.js


const useAuth = ()=>(0,external_react_.useContext)(contexts/* AuthContext */.Vo);

;// CONCATENATED MODULE: ./src/hooks/useCart.js


const useCart = ()=>(0,external_react_.useContext)(contexts/* CartContext */.A9);

;// CONCATENATED MODULE: ./src/hooks/index.js




/***/ }),

/***/ 9668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iO": () => (/* reexport */ BasicLayout),
  "Yf": () => (/* reexport */ CartLayout),
  "ew": () => (/* reexport */ JoinLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: ./src/layouts/JoinLayout/JoinLayout.module.scss
var JoinLayout_module = __webpack_require__(9339);
var JoinLayout_module_default = /*#__PURE__*/__webpack_require__.n(JoinLayout_module);
;// CONCATENATED MODULE: ./src/layouts/JoinLayout/JoinLayout.js






function JoinLayout(props) {
    const { children  } = props;
    const { user  } = (0,hooks/* useAuth */.a)();
    const router = (0,router_.useRouter)();
    if (user) {
        router.push("/");
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (JoinLayout_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (JoinLayout_module_default()).topBar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                            src: "/images/logo.png",
                            alt: "Gaming"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                            name: "close"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (JoinLayout_module_default()).blockLeft,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (JoinLayout_module_default()).blockRight
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/JoinLayout/index.js


// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Layout/Account/Account.module.scss
var Account_module = __webpack_require__(427);
var Account_module_default = /*#__PURE__*/__webpack_require__.n(Account_module);
;// CONCATENATED MODULE: ./src/components/Layout/Account/Account.js






function Account() {
    const { user  } = (0,hooks/* useAuth */.a)();
    const { total  } = (0,hooks/* useCart */.j)();
    const router = (0,router_.useRouter)();
    const goToLogin = ()=>router.push("/join/sign-in");
    const goToAccount = ()=>router.push("/account");
    const goToCart = ()=>{
        if (!user) goToLogin();
        else router.push("/cart");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Account_module_default()).account,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                icon: true,
                className: (Account_module_default()).cart,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                        name: "cart",
                        onClick: goToCart
                    }),
                    total > 0 && /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Label, {
                        circular: true,
                        children: total
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                icon: true,
                className: external_classnames_default()({
                    [(Account_module_default()).user]: user
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                    name: "user outline",
                    onClick: user ? goToAccount : goToLogin
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout/Account/index.js


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/components/Layout/Menu/Menu.module.scss
var Menu_module = __webpack_require__(8563);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
;// CONCATENATED MODULE: ./src/components/Layout/Menu/Menu.js









const platformCtrl = new api/* Platform */.t4();
function Menu(props) {
    const { isOpenSearch  } = props;
    const [platforms, setPlatforms] = (0,external_react_.useState)(null);
    const [showSearch, setShowSearch] = (0,external_react_.useState)(isOpenSearch);
    const [searchText, setSearchText] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const openCloseSearch = ()=>setShowSearch((prevState)=>!prevState);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await platformCtrl.getAll();
                setPlatforms(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    (0,external_react_.useEffect)(()=>{
        setSearchText(router.query.s || "");
    }, []);
    const onSearch = (text)=>{
        setSearchText(text);
        router.replace(`/search?s=${text}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Menu_module_default()).platforms,
        children: [
            (0,external_lodash_.map)(platforms, (platform)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: `/games/${platform.attributes.slug}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                            src: platform.attributes.icon
                        }),
                        platform.attributes.title
                    ]
                }, platform.id)),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (Menu_module_default()).search,
                onClick: openCloseSearch,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                    name: "search"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((Menu_module_default()).inputContainer, {
                    [(Menu_module_default()).active]: showSearch
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                        id: "search-games",
                        placeholder: "Buscador",
                        className: (Menu_module_default()).input,
                        focus: true,
                        value: searchText,
                        onChange: (_, data)=>onSearch(data.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                        name: "close",
                        className: (Menu_module_default()).closeInput,
                        onClick: openCloseSearch
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout/Menu/index.js


// EXTERNAL MODULE: ./src/components/Layout/TopBar/TopBar.module.scss
var TopBar_module = __webpack_require__(3121);
var TopBar_module_default = /*#__PURE__*/__webpack_require__.n(TopBar_module);
;// CONCATENATED MODULE: ./src/components/Layout/TopBar/TopBar.js






function TopBar(props) {
    const { isOpenSearch  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TopBar_module_default()).topBar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TopBar_module_default()).left,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                        src: "/images/logo.png",
                        alt: "Gaming"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TopBar_module_default()).center,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                    isOpenSearch: isOpenSearch
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TopBar_module_default()).right,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Account, {})
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout/TopBar/index.js


// EXTERNAL MODULE: ./src/components/Layout/Footer/Footer.module.scss
var Footer_module = __webpack_require__(4304);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Layout/Footer/Footer.js




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).columns,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                    src: "/images/logo.png",
                                    alt: "Gaming"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: "T\xe9rminos y condiciones"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: "Pol\xedtica de privacidad"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: "Contacto"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: "FAQs"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).social,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    as: "a",
                                    href: "#",
                                    circular: true,
                                    color: "facebook",
                                    icon: "facebook"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    as: "a",
                                    href: "#",
                                    circular: true,
                                    color: "twitter",
                                    icon: "twitter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    as: "a",
                                    href: "#",
                                    circular: true,
                                    color: "linkedin",
                                    icon: "linkedin"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    as: "a",
                                    href: "#",
                                    circular: true,
                                    color: "youtube",
                                    icon: "youtube"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_module_default()).copyright,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Copyright \xa9 2023 Gaming - All rights reserved"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Layout/Footer/index.js


// EXTERNAL MODULE: ./src/components/Layout/HeaderCart/HeaderCart.module.scss
var HeaderCart_module = __webpack_require__(6341);
var HeaderCart_module_default = /*#__PURE__*/__webpack_require__.n(HeaderCart_module);
;// CONCATENATED MODULE: ./src/components/Layout/HeaderCart/HeaderCart.js







function HeaderCart() {
    const { query: { step =1  }  } = (0,router_.useRouter)();
    const currentStep = step;
    const steps = [
        {
            number: 1,
            title: "Cesta"
        },
        {
            number: 2,
            title: "Pago"
        },
        {
            number: 3,
            title: "Confirmaci\xf3n"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HeaderCart_module_default()).headerCart,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (HeaderCart_module_default()).left,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                        src: "/images/logo.png",
                        alt: "Gaming"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (HeaderCart_module_default()).center,
                children: (0,external_lodash_.map)(steps, (step)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()({
                            [(HeaderCart_module_default()).active]: step.number === Number(currentStep),
                            [(HeaderCart_module_default()).success]: step.number < Number(currentStep)
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (HeaderCart_module_default()).number,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                        name: "check"
                                    }),
                                    step.number
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: step.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (HeaderCart_module_default()).space
                            })
                        ]
                    }, step.number))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeaderCart_module_default()).right,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                        name: "lock"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Pago seguro"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "256-bit SSL Secure"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout/HeaderCart/index.js


;// CONCATENATED MODULE: ./src/components/Layout/index.js






// EXTERNAL MODULE: ./src/layouts/BasicLayout/BasicLayout.module.scss
var BasicLayout_module = __webpack_require__(1746);
var BasicLayout_module_default = /*#__PURE__*/__webpack_require__.n(BasicLayout_module);
;// CONCATENATED MODULE: ./src/layouts/BasicLayout/BasicLayout.js





function BasicLayout(props) {
    const { children , isOpenSearch =false , isContainer =false , relative =false  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar, {
                isOpenSearch: isOpenSearch
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
                fluid: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()({
                        [(BasicLayout_module_default()).relative]: relative
                    }),
                    children: isContainer ? /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
                        children: children
                    }) : children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/BasicLayout/index.js


// EXTERNAL MODULE: ./src/components/Shared/index.js + 26 modules
var Shared = __webpack_require__(1861);
;// CONCATENATED MODULE: ./src/layouts/CartLayout/CartLayout.js




function CartLayout(props) {
    const { children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderCart, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                height: 150
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                height: 70
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/CartLayout/index.js


;// CONCATENATED MODULE: ./src/layouts/index.js





/***/ })

};
;