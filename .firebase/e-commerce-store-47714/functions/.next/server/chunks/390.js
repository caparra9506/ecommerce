exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 7070:
/***/ ((module) => {

// Exports
module.exports = {
	"basket": "Basket_basket__p_c_z",
	"block": "Basket_block__lWMfW",
	"product": "Basket_product__xZcgz",
	"info": "Basket_info__ijp7a",
	"quantity": "Basket_quantity__yb_0l"
};


/***/ }),

/***/ 3281:
/***/ ((module) => {

// Exports
module.exports = {
	"resume": "Resume_resume__dkAo1",
	"block": "Resume_block__iRUsF",
	"prices": "Resume_prices__GaX5q"
};


/***/ }),

/***/ 2186:
/***/ ((module) => {

// Exports
module.exports = {
	"stepOne": "StepOne_stepOne__0VJef",
	"center": "StepOne_center__pcRDG",
	"right": "StepOne_right__nwz02"
};


/***/ }),

/***/ 9606:
/***/ ((module) => {

// Exports
module.exports = {
	"stepThree": "StepThree_stepThree__SRm_q"
};


/***/ }),

/***/ 4450:
/***/ ((module) => {

// Exports
module.exports = {
	"addresses": "Addresses_addresses__g_aHS",
	"address": "Addresses_address__MOj06",
	"active": "Addresses_active__2Sx5q"
};


/***/ }),

/***/ 4439:
/***/ ((module) => {

// Exports
module.exports = {
	"payment": "Payment_payment__zp1FT",
	"block": "Payment_block__FOegM"
};


/***/ }),

/***/ 1714:
/***/ ((module) => {

// Exports
module.exports = {
	"resume": "Resume_resume__h1_HW",
	"block": "Resume_block__TCwcQ",
	"blockTotal": "Resume_blockTotal__5VOH6",
	"products": "Resume_products__2uXrd",
	"product": "Resume_product__SE335"
};


/***/ }),

/***/ 2660:
/***/ ((module) => {

// Exports
module.exports = {
	"stepTwo": "StepTwo_stepTwo__TRBJq",
	"center": "StepTwo_center__VQD9Y",
	"right": "StepTwo_right__cwLas"
};


/***/ }),

/***/ 5209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CartPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/layouts/index.js + 17 modules
var layouts = __webpack_require__(9668);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./src/utils/index.js + 4 modules
var utils = __webpack_require__(8040);
// EXTERNAL MODULE: ./src/components/Cart/StepOne/Basket/Basket.module.scss
var Basket_module = __webpack_require__(7070);
var Basket_module_default = /*#__PURE__*/__webpack_require__.n(Basket_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepOne/Basket/Basket.js






function Basket(props) {
    const { games  } = props;
    const { changeQuantityItem , deleteItem  } = (0,hooks/* useCart */.j)();
    const options = Array.from({
        length: 50
    }, (_, index)=>{
        const number = index + 1;
        return {
            key: number,
            text: String(number),
            value: number
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Basket_module_default()).basket,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Cesta"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Basket_module_default()).block,
                children: (0,external_lodash_.map)(games, (game)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Basket_module_default()).product,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                src: game.attributes.cover
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Basket_module_default()).info,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: game.attributes.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: game.attributes.platform.data.attributes.title
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                name: "trash alternate online",
                                                link: true,
                                                onClick: ()=>deleteItem(game.id)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Basket_module_default()).quantity,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown, {
                                                className: "number",
                                                options: options,
                                                selection: true,
                                                value: game.quantity,
                                                compact: true,
                                                onChange: (_, data)=>changeQuantityItem(game.id, data.value)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    utils.fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount),
                                                    "€"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, game.id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepOne/Basket/index.js


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Cart/StepOne/Resume/Resume.module.scss
var Resume_module = __webpack_require__(3281);
var Resume_module_default = /*#__PURE__*/__webpack_require__.n(Resume_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepOne/Resume/Resume.js








function Resume(props) {
    const { games  } = props;
    const router = (0,router_.useRouter)();
    const [totals, setTotals] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        let totals = {
            original: 0,
            discount: 0,
            price: 0
        };
        (0,external_lodash_.forEach)(games, (game)=>{
            const price = utils.fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount);
            totals = {
                original: totals.original + game.attributes.price * game.quantity,
                discount: totals.discount + (game.attributes.price - price) * game.quantity,
                price: totals.price + price * game.quantity
            };
        });
        setTotals(totals);
    }, [
        games
    ]);
    const goToStepTwo = ()=>{
        router.replace({
            query: {
                ...router.query,
                step: 2
            }
        });
    };
    if (!totals) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Resume_module_default()).resume,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Resumen"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Resume_module_default()).block,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Resume_module_default()).prices,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Precio oficial"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            totals.original.toFixed(2),
                                            "€"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Descuento"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            totals.discount.toFixed(2),
                                            "€"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Subtotal"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            totals.price.toFixed(2),
                                            "€"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        primary: true,
                        fluid: true,
                        onClick: goToStepTwo,
                        children: "Proceder con el pago"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Continuar comprando"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepOne/Resume/index.js


// EXTERNAL MODULE: ./src/components/Cart/StepOne/StepOne.module.scss
var StepOne_module = __webpack_require__(2186);
var StepOne_module_default = /*#__PURE__*/__webpack_require__.n(StepOne_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepOne/StepOne.js




function StepOne(props) {
    const { games  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (StepOne_module_default()).stepOne,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (StepOne_module_default()).center,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Basket, {
                    games: games
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (StepOne_module_default()).right,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Resume, {
                    games: games
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepOne/index.js


// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(943);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(4515);
// EXTERNAL MODULE: ./src/components/Shared/index.js + 26 modules
var Shared = __webpack_require__(1861);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Cart/StepTwo/Addresses/Addresses.module.scss
var Addresses_module = __webpack_require__(4450);
var Addresses_module_default = /*#__PURE__*/__webpack_require__.n(Addresses_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/Addresses/Addresses.js







const addressCtrl = new api/* Address */.kL();
function Addresses(props) {
    const { addressSelected , setAddressSelected  } = props;
    const [addresses, setAddresses] = (0,external_react_.useState)(null);
    const { user  } = (0,hooks/* useAuth */.a)();
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await addressCtrl.getAll(user.id);
                setAddresses(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Addresses_module_default()).addresses,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Direcci\xf3n"
            }),
            (0,external_lodash_.map)(addresses, (address)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>setAddressSelected(address),
                    className: external_classnames_default()((Addresses_module_default()).address, {
                        [(Addresses_module_default()).active]: address.id === addressSelected?.id
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                address.attributes.name,
                                " (",
                                address.attributes.title,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                address.attributes.address,
                                ", ",
                                address.attributes.postal_code,
                                ",",
                                " ",
                                address.attributes.state,
                                ", ",
                                address.attributes.city
                            ]
                        })
                    ]
                }, address.id))
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/Addresses/index.js


// EXTERNAL MODULE: ./src/components/Cart/StepTwo/Payment/Payment.module.scss
var Payment_module = __webpack_require__(4439);
var Payment_module_default = /*#__PURE__*/__webpack_require__.n(Payment_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/Payment/Payment.js



function Payment() {
    const cardStyle = {
        style: {
            base: {
                color: "#fff",
                fontSize: "16px",
                "::placeholder": {
                    color: "#909090"
                }
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Payment_module_default()).payment,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "M\xe9todos de pago"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Payment_module_default()).block,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.CardElement, {
                    options: cardStyle
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/Payment/index.js


// EXTERNAL MODULE: ./src/components/Cart/StepTwo/Resume/Resume.module.scss
var Resume_Resume_module = __webpack_require__(1714);
var Resume_Resume_module_default = /*#__PURE__*/__webpack_require__.n(Resume_Resume_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/Resume/Resume.js










const cartCtrl = new api/* Cart */.AP();
function Resume_Resume(props) {
    const { games , addressSelected  } = props;
    const [total, setTotal] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const stripe = (0,react_stripe_js_.useStripe)();
    const elements = (0,react_stripe_js_.useElements)();
    const { user  } = (0,hooks/* useAuth */.a)();
    const { deleteAllItems  } = (0,hooks/* useCart */.j)();
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        let totalTemp = 0;
        (0,external_lodash_.forEach)(games, (game)=>{
            const price = utils.fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount);
            totalTemp += price * game.quantity;
        });
        setTotal(totalTemp.toFixed(2));
    }, [
        games
    ]);
    const onPay = async ()=>{
        setLoading(true);
        if (!stripe || !elements) {
            setLoading(false);
            return;
        }
        const cardElement = elements.getElement(react_stripe_js_.CardElement);
        const result = await stripe.createToken(cardElement);
        if (result.error) {
            console.error(result.error.message);
        } else {
            const response = await cartCtrl.paymentCart(result.token, games, user.id, addressSelected);
            if (response.status === 200) {
                deleteAllItems();
                goToStepEnd();
            } else {
                console.error("Error al realizar el pedido");
            }
        }
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    };
    const goToStepEnd = ()=>{
        router.replace({
            query: {
                ...router.query,
                step: 3
            }
        });
    };
    if (!total) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Resume_Resume_module_default()).resume,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Resumen"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Resume_Resume_module_default()).block,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Resume_Resume_module_default()).products,
                    children: (0,external_lodash_.map)(games, (game)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Resume_Resume_module_default()).product,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: game.attributes.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: game.attributes.platform.data.attributes.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        game.quantity > 0 && `${game.quantity}x`,
                                        utils.fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount),
                                        "€"
                                    ]
                                })
                            ]
                        }, game.id))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Resume_Resume_module_default()).blockTotal,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Total"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    total,
                                    "€"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        primary: true,
                        fluid: true,
                        disabled: !addressSelected,
                        onClick: onPay,
                        loading: loading,
                        children: "Pagar"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/Resume/index.js


// EXTERNAL MODULE: ./src/components/Cart/StepTwo/StepTwo.module.scss
var StepTwo_module = __webpack_require__(2660);
var StepTwo_module_default = /*#__PURE__*/__webpack_require__.n(StepTwo_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/StepTwo.js










const stripeInit = (0,stripe_js_.loadStripe)(utils/* ENV.STRIPE_TOKEN */.V.STRIPE_TOKEN);
function StepTwo(props) {
    const { games  } = props;
    const [addressSelected, setAddressSelected] = (0,external_react_.useState)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.Elements, {
        stripe: stripeInit,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (StepTwo_module_default()).stepTwo,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (StepTwo_module_default()).center,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Addresses, {
                            addressSelected: addressSelected,
                            setAddressSelected: setAddressSelected
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Separator */.Z0, {
                            height: 50
                        }),
                        addressSelected && /*#__PURE__*/ jsx_runtime_.jsx(Payment, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (StepTwo_module_default()).right,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Resume_Resume, {
                        games: games,
                        addressSelected: addressSelected
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepTwo/index.js


// EXTERNAL MODULE: ./src/components/Cart/StepThree/StepThree.module.scss
var StepThree_module = __webpack_require__(9606);
var StepThree_module_default = /*#__PURE__*/__webpack_require__.n(StepThree_module);
;// CONCATENATED MODULE: ./src/components/Cart/StepThree/StepThree.js




function StepThree() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (StepThree_module_default()).stepThree,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                name: "check circle outline"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "\xa1Compra exitosa!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                as: (link_default()),
                href: "/account",
                primary: true,
                children: "Ver pedido"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cart/StepThree/index.js


;// CONCATENATED MODULE: ./src/components/Cart/index.js



const Cart = {
    StepOne: StepOne,
    StepTwo: StepTwo,
    StepThree: StepThree
};

;// CONCATENATED MODULE: ./src/pages/cart/cart.js








const gameCtrl = new api/* Game */.lA();
function CartPage() {
    const { query: { step =1  }  } = (0,router_.useRouter)();
    const currentStep = Number(step);
    const [games, setGames] = (0,external_react_.useState)(null);
    const { cart  } = (0,hooks/* useCart */.j)();
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const data = [];
                for await (const item of cart){
                    const response = await gameCtrl.getGameById(item.id);
                    data.push({
                        ...response.data,
                        quantity: item.quantity
                    });
                }
                setGames(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Seo */.pQ, {
                title: "Carrito"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts/* CartLayout */.Yf, {
                children: [
                    currentStep === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Cart.StepOne, {
                        games: games
                    }),
                    currentStep === 2 && /*#__PURE__*/ jsx_runtime_.jsx(Cart.StepTwo, {
                        games: games
                    }),
                    currentStep === 3 && /*#__PURE__*/ jsx_runtime_.jsx(Cart.StepThree, {})
                ]
            })
        ]
    });
}


/***/ })

};
;