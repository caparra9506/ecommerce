exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 4693:
/***/ ((module) => {

// Exports
module.exports = {
	"headerWallpaper": "HeaderWallpaper_headerWallpaper__gIT9G"
};


/***/ }),

/***/ 1050:
/***/ ((module) => {

// Exports
module.exports = {
	"info": "Info_info__VzHbQ",
	"summary": "Info_summary__dKdVp",
	"more": "Info_more__FONQa"
};


/***/ }),

/***/ 4666:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "Gallery_gallery__ielQc",
	"principal": "Gallery_principal__mU5EO",
	"grid": "Gallery_grid__n9Y_4",
	"carouselContainer": "Gallery_carouselContainer__UzCPD",
	"dots": "Gallery_dots__GxBNr"
};


/***/ }),

/***/ 7885:
/***/ ((module) => {

// Exports
module.exports = {
	"video": "Video_video__zBeZJ"
};


/***/ }),

/***/ 7013:
/***/ ((module) => {

// Exports
module.exports = {
	"panel": "Panel_panel__fvEdL",
	"imgContiner": "Panel_imgContiner__Wx_0a",
	"actionsContainer": "Panel_actionsContainer__0B8vw",
	"moreInfo": "Panel_moreInfo__zYU0t",
	"price": "Panel_price__t1zup",
	"originalPrice": "Panel_originalPrice__FSjEn",
	"discount": "Panel_discount__9ppgC",
	"heart": "Panel_heart__9jpGT"
};


/***/ }),

/***/ 7256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GamePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/layouts/index.js + 17 modules
var layouts = __webpack_require__(9668);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/components/Game/HeaderWallpaper/HeaderWallpaper.module.scss
var HeaderWallpaper_module = __webpack_require__(4693);
var HeaderWallpaper_module_default = /*#__PURE__*/__webpack_require__.n(HeaderWallpaper_module);
;// CONCATENATED MODULE: ./src/components/Game/HeaderWallpaper/HeaderWallpaper.js



function HeaderWallpaper(props) {
    const { image  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (HeaderWallpaper_module_default()).headerWallpaper,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
            src: image
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Game/HeaderWallpaper/index.js


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/index.js + 4 modules
var utils = __webpack_require__(8040);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: ./src/components/Shared/index.js + 26 modules
var Shared = __webpack_require__(1861);
// EXTERNAL MODULE: ./src/components/Game/Panel/Panel.module.scss
var Panel_module = __webpack_require__(7013);
var Panel_module_default = /*#__PURE__*/__webpack_require__.n(Panel_module);
;// CONCATENATED MODULE: ./src/components/Game/Panel/Panel.js







function Panel(props) {
    const { gameId , game  } = props;
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const { addCart  } = (0,hooks/* useCart */.j)();
    const platform = game.platform.data;
    const buyPrice = utils.fn.calcDiscountedPrice(game.price, game.discount);
    const addCartWrapper = ()=>{
        setLoading(true);
        addCart(gameId);
        setTimeout(()=>{
            setLoading(false);
        }, 500);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        className: (Panel_module_default()).panel,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Panel_module_default()).imgContiner,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                    src: game.cover
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Panel_module_default()).actionsContainer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: game.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Panel_module_default()).moreInfo,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                            src: platform.attributes.icon
                                        }),
                                        platform.attributes.title
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                            name: "check"
                                        }),
                                        "En stock"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Panel_module_default()).price,
                            children: [
                                game.discount > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (Panel_module_default()).originalPrice,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                    name: "tag"
                                                }),
                                                game.price,
                                                "€"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (Panel_module_default()).discount,
                                            children: [
                                                "-",
                                                game.discount,
                                                "%"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (Panel_module_default()).price,
                                    children: [
                                        buyPrice,
                                        "€"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            primary: true,
                            fluid: true,
                            onClick: addCartWrapper,
                            loading: loading,
                            children: "Comprar ahora"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Shared/* WishlistIcon */.X$, {
                            gameId: gameId,
                            className: (Panel_module_default()).heart
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Game/Panel/index.js


// EXTERNAL MODULE: ./src/components/Game/Info/Info.module.scss
var Info_module = __webpack_require__(1050);
var Info_module_default = /*#__PURE__*/__webpack_require__.n(Info_module);
;// CONCATENATED MODULE: ./src/components/Game/Info/Info.js



function Info(props) {
    const { game  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        className: (Info_module_default()).info,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Info_module_default()).summary,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: game.summary
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Info_module_default()).more,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Fecha de lanzamiento:"
                            }),
                            " ",
                            game.releaseDate
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Game/Info/index.js


// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(8924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
// EXTERNAL MODULE: ./src/components/Game/Media/Video/Video.module.scss
var Video_module = __webpack_require__(7885);
var Video_module_default = /*#__PURE__*/__webpack_require__.n(Video_module);
;// CONCATENATED MODULE: ./src/components/Game/Media/Video/Video.js



function Video(props) {
    const { video  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
        url: video,
        className: (Video_module_default()).video,
        width: "100%",
        height: 634
    });
}

;// CONCATENATED MODULE: ./src/components/Game/Media/Video/index.js


// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/Game/Media/Gallery/Gallery.module.scss
var Gallery_module = __webpack_require__(4666);
var Gallery_module_default = /*#__PURE__*/__webpack_require__.n(Gallery_module);
;// CONCATENATED MODULE: ./src/components/Game/Media/Gallery/Gallery.js







function Gallery(props) {
    const { screenshots  } = props;
    const [show, setShow] = (0,external_react_.useState)(false);
    const onOpenClose = ()=>setShow((prevState)=>!prevState);
    // Split screenshots string into an array
    const screenshotsArray = screenshots.split("|");
    const principalImage = screenshotsArray.shift();
    const settings = {
        dots: true,
        dotsClass: (Gallery_module_default()).dots,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function(index) {
            return /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                src: screenshotsArray[index]
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Gallery_module_default()).gallery,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Gallery_module_default()).principal,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                            src: principalImage,
                            onClick: onOpenClose
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Gallery_module_default()).grid,
                        children: screenshotsArray.map((screenshot, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                    src: screenshot,
                                    onClick: onOpenClose
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* FullModal */.oU, {
                show: show,
                onClose: onOpenClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Gallery_module_default()).carouselContainer,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        ...settings,
                        children: screenshotsArray.map((screenshot, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                    src: screenshot
                                })
                            }, index))
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Game/Media/Gallery/index.js


;// CONCATENATED MODULE: ./src/components/Game/Media/Media.js





function Media(props) {
    const { video , screenshots  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Visuales"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                height: 30
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Video, {
                video: video
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                height: 30
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Gallery, {
                screenshots: screenshots
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Game/Media/index.js


;// CONCATENATED MODULE: ./src/components/Game/index.js




const Game = {
    HeaderWallpaper: HeaderWallpaper,
    Panel: Panel,
    Info: Info,
    Media: Media
};

;// CONCATENATED MODULE: ./src/pages/[game]/game.js




function GamePage(props) {
    const { game  } = props;
    const wallpaper = game.attributes.wallpaper;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Seo */.pQ, {
                title: game.attributes.title,
                description: game.attributes.summary
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts/* BasicLayout */.iO, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Game.HeaderWallpaper, {
                        image: wallpaper
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Game.Panel, {
                        gameId: game.id,
                        game: game.attributes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                        height: 50
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Game.Info, {
                        game: game.attributes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                        height: 30
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Game.Media, {
                        video: game.attributes.video,
                        screenshots: game.attributes.screenshots
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                        height: 50
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;