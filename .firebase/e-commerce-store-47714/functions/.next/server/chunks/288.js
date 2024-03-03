exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 9071:
/***/ ((module) => {

// Exports
module.exports = {
	"addBtn": "AddAddress_addBtn__4aGMP"
};


/***/ }),

/***/ 7992:
/***/ ((module) => {

// Exports
module.exports = {
	"address": "Address_address__HJCjf",
	"title": "Address_title__eAVjG",
	"addressInfo": "Address_addressInfo__uhDK7",
	"actions": "Address_actions__wV7iU"
};


/***/ }),

/***/ 7661:
/***/ ((module) => {

// Exports
module.exports = {
	"addresses": "ListAddresses_addresses__q54jt"
};


/***/ }),

/***/ 2021:
/***/ ((module) => {

// Exports
module.exports = {
	"info": "Info_info__YPRNw",
	"user": "Info_user__AG_Tu",
	"username": "Info_username__jCV2a",
	"email": "Info_email__86jmO",
	"createdAt": "Info_createdAt__ATLKK"
};


/***/ }),

/***/ 4514:
/***/ ((module) => {

// Exports
module.exports = {
	"order": "Order_order__ofvlw",
	"product": "Order_product__ezRJN",
	"info": "Order_info__kRMDh",
	"quantity": "Order_quantity__YGZz1",
	"address": "Order_address__ZbVq4",
	"title": "Order_title__p3m8s",
	"addressInfo": "Order_addressInfo__DkEm5",
	"total": "Order_total__vaeRO"
};


/***/ }),

/***/ 1862:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "ChangeEmailForm_form__zEArZ"
};


/***/ }),

/***/ 7038:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "ChangeNameForm_content__mIlGy"
};


/***/ }),

/***/ 9934:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "ChangePasswordForm_form__DbHhu"
};


/***/ }),

/***/ 2340:
/***/ ((module) => {

// Exports
module.exports = {
	"gridGames": "GridGames_gridGames__6XSM4",
	"game": "GridGames_game__CEaZ4",
	"discount": "GridGames_discount__1pDfr",
	"price": "GridGames_price__VHwbN",
	"whislistIcon": "GridGames_whislistIcon__3Uraj"
};


/***/ }),

/***/ 2468:
/***/ ((module) => {

// Exports
module.exports = {
	"tabs": "account_tabs__0YvVj",
	"containerForms": "account_containerForms__9MZIr"
};


/***/ }),

/***/ 1602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ Address_Address)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/components/Shared/index.js + 26 modules
var Shared = __webpack_require__(1861);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./src/components/Account/Address/AddressForm/AddressForm.form.js

function initialValues(address) {
    return {
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        city: address?.city || "",
        state: address?.state || "",
        postal_code: address?.postal_code || "",
        phone: address?.phone || ""
    };
}
function validationSchema() {
    return external_yup_.object({
        title: external_yup_.string().required(true),
        name: external_yup_.string().required(true),
        address: external_yup_.string().required(true),
        city: external_yup_.string().required(true),
        state: external_yup_.string().required(true),
        postal_code: external_yup_.string().required(true),
        phone: external_yup_.number().required(true)
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Address/AddressForm/AddressForm.js






const addressCtrl = new api/* Address */.kL();
function AddressForm(props) {
    const { onClose , onReload , addressId , address  } = props;
    const { user  } = (0,hooks/* useAuth */.a)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: initialValues(address),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                if (addressId) {
                    await addressCtrl.update(formValue, addressId);
                } else {
                    await addressCtrl.create(formValue, user.id);
                }
                formik.handleReset();
                onReload();
                onClose();
            } catch (error) {
                console.error(error);
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                name: "title",
                placeholder: "Titulo de la direcci\xf3n",
                value: formik.values.title,
                onChange: formik.handleChange,
                error: formik.errors.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
                widths: "equal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "name",
                        placeholder: "Nombre y apellidos",
                        value: formik.values.name,
                        onChange: formik.handleChange,
                        error: formik.errors.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "address",
                        placeholder: "Direcci\xf3n",
                        value: formik.values.address,
                        onChange: formik.handleChange,
                        error: formik.errors.address
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
                widths: "equal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "state",
                        placeholder: "Provincia",
                        value: formik.values.state,
                        onChange: formik.handleChange,
                        error: formik.errors.state
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "city",
                        placeholder: "Ciudad",
                        value: formik.values.city,
                        onChange: formik.handleChange,
                        error: formik.errors.city
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
                widths: "equal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "postal_code",
                        placeholder: "Codigo postal",
                        value: formik.values.postal_code,
                        onChange: formik.handleChange,
                        error: formik.errors.postal_code
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "phone",
                        placeholder: "Telefono",
                        value: formik.values.phone,
                        onChange: formik.handleChange,
                        error: formik.errors.phone
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Button, {
                type: "submit",
                fluid: true,
                loading: formik.isSubmitting,
                children: "Enviar"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Address/AddressForm/index.js


// EXTERNAL MODULE: ./src/components/Account/Address/AddAddress/AddAddress.module.scss
var AddAddress_module = __webpack_require__(9071);
var AddAddress_module_default = /*#__PURE__*/__webpack_require__.n(AddAddress_module);
;// CONCATENATED MODULE: ./src/components/Account/Address/AddAddress/AddAddress.js






function AddAddress(props) {
    const { onReload  } = props;
    const [show, setShow] = (0,external_react_.useState)(false);
    const onOpenClose = ()=>setShow((prevState)=>!prevState);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                primary: true,
                className: (AddAddress_module_default()).addBtn,
                onClick: onOpenClose,
                children: "Crear"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* BasicModal */.PA, {
                show: show,
                onClose: onOpenClose,
                title: "Nueva direcci\xf3n",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AddressForm, {
                    onClose: onOpenClose,
                    onReload: onReload
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Address/AddAddress/index.js


// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./src/components/Account/Address/ListAddresses/Address/Address.module.scss
var Address_module = __webpack_require__(7992);
var Address_module_default = /*#__PURE__*/__webpack_require__.n(Address_module);
;// CONCATENATED MODULE: ./src/components/Account/Address/ListAddresses/Address/Address.js







const Address_addressCtrl = new api/* Address */.kL();
function Address(props) {
    const { addressId , address , onReload  } = props;
    const [showEdit, setShowEdit] = (0,external_react_.useState)(false);
    const [showConfirm, setShowConfirm] = (0,external_react_.useState)(false);
    const openCloseEdit = ()=>setShowEdit((prevState)=>!prevState);
    const openCloseConfirm = ()=>setShowConfirm((prevState)=>!prevState);
    const onDelete = async ()=>{
        try {
            await Address_addressCtrl.delete(addressId);
            onReload();
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Address_module_default()).address,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Address_module_default()).title,
                                children: [
                                    address.title,
                                    ": "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Address_module_default()).addressInfo,
                                children: [
                                    address.name,
                                    ", ",
                                    address.address,
                                    ", ",
                                    address.state,
                                    ", ",
                                    address.city,
                                    ",",
                                    " ",
                                    address.postal_code
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Address_module_default()).actions,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                primary: true,
                                icon: true,
                                onClick: openCloseEdit,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                    name: "pencil"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                primary: true,
                                icon: true,
                                onClick: openCloseConfirm,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                    name: "delete"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Confirm */.I4, {
                open: showConfirm,
                onCancel: openCloseConfirm,
                onConfirm: onDelete,
                content: "\xbfEstas seguro de que quieres eliminar la direcci\xf3n?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Shared/* BasicModal */.PA, {
                show: showEdit,
                onClose: openCloseEdit,
                title: "Editar direcci\xf3n",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AddressForm, {
                    onClose: openCloseEdit,
                    onReload: onReload,
                    addressId: addressId,
                    address: address
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Address/ListAddresses/Address/index.js


// EXTERNAL MODULE: ./src/components/Account/Address/ListAddresses/ListAddresses.module.scss
var ListAddresses_module = __webpack_require__(7661);
var ListAddresses_module_default = /*#__PURE__*/__webpack_require__.n(ListAddresses_module);
;// CONCATENATED MODULE: ./src/components/Account/Address/ListAddresses/ListAddresses.js







const ListAddresses_addressCtrl = new api/* Address */.kL();
function ListAddresses(props) {
    const { reload , onReload  } = props;
    const [addresses, setAddresses] = (0,external_react_.useState)(null);
    const { user  } = (0,hooks/* useAuth */.a)();
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await ListAddresses_addressCtrl.getAll(user.id);
                setAddresses(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [
        reload
    ]);
    if (!addresses) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ListAddresses_module_default()).addresses,
        children: (0,external_lodash_.map)(addresses, (address)=>/*#__PURE__*/ jsx_runtime_.jsx(Address, {
                addressId: address.id,
                address: address.attributes,
                onReload: onReload
            }, address.id))
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Address/ListAddresses/index.js


;// CONCATENATED MODULE: ./src/components/Account/Address/index.js



const Address_Address = {
    AddAddress: AddAddress,
    AddressForm: AddressForm,
    ListAddresses: ListAddresses
};


/***/ }),

/***/ 7231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2353);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5409);
/* harmony import */ var _Info_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2021);
/* harmony import */ var _Info_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Info_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([luxon__WEBPACK_IMPORTED_MODULE_2__]);
luxon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Info() {
    const { user  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Info_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                icon: true,
                className: (_Info_module_scss__WEBPACK_IMPORTED_MODULE_4___default().user),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    name: "user outline"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_Info_module_scss__WEBPACK_IMPORTED_MODULE_4___default().username),
                children: user.username
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_Info_module_scss__WEBPACK_IMPORTED_MODULE_4___default().email),
                children: user.email
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_Info_module_scss__WEBPACK_IMPORTED_MODULE_4___default().createdAt),
                children: [
                    "Miembro desde:",
                    " ",
                    luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime.fromISO(user.createdAt, {
                        locale: "es"
                    }).toFormat("DDD")
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _Info__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Info__WEBPACK_IMPORTED_MODULE_0__]);
_Info__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ Order)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2353);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1861);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8040);
/* harmony import */ var _Order_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4514);
/* harmony import */ var _Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Order_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([luxon__WEBPACK_IMPORTED_MODULE_3__]);
luxon__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Order(props) {
    const { order  } = props;
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const createdAt = new Date(order.attributes.createdAt).toISOString();
    const products = order.attributes.products;
    const address = order.attributes.addressShipping;
    const openCloseModal = ()=>setShowModal((prevState)=>!prevState);
    const getTotalProducts = ()=>{
        let total = 0;
        (0,lodash__WEBPACK_IMPORTED_MODULE_4__.forEach)(products, (product)=>{
            total += product.quantity;
        });
        return total;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().order),
                onClick: openCloseModal,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromISO(createdAt, {
                                    locale: "es"
                                }).toFormat("dd/MM/yyyy")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    getTotalProducts(),
                                    " productos"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            order.attributes.totalPayment.toFixed(2),
                            "€"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Shared__WEBPACK_IMPORTED_MODULE_5__/* .BasicModal */ .PA, {
                show: showModal,
                onClose: openCloseModal,
                title: "Informaci\xf3n del pedido",
                children: [
                    (0,lodash__WEBPACK_IMPORTED_MODULE_4__.map)(products, (product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().product),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    src: product.attributes.cover
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().info),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: product.attributes.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: product.attributes.platform.data.attributes.title
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().quantity),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "x",
                                                        product.quantity
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        _utils__WEBPACK_IMPORTED_MODULE_6__.fn.calcDiscountedPrice(product.attributes.price, product.attributes.discount),
                                                        "€"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().address),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                                    children: address.attributes.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().addressInfo),
                                    children: [
                                        address.attributes.name,
                                        ", ",
                                        address.attributes.address,
                                        ",",
                                        " ",
                                        address.attributes.state,
                                        ", ",
                                        address.attributes.city,
                                        ",",
                                        " ",
                                        address.attributes.postal_code
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Order_module_scss__WEBPACK_IMPORTED_MODULE_7___default().total),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "TOTAL: ",
                                order.attributes.totalPayment.toFixed(2),
                                "€"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _Order__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Order__WEBPACK_IMPORTED_MODULE_0__]);
_Order__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4117);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5409);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1861);
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Order__WEBPACK_IMPORTED_MODULE_6__]);
_Order__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const orderCtrl = new _api__WEBPACK_IMPORTED_MODULE_3__/* .Order */ .KM();
function Orders() {
    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { user  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await orderCtrl.getAll(user.id);
                setOrders(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    if (!orders) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_5__/* .NoResult */ .xM, {
        text: "No tienes ningun producto comprado"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(orders, (order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Order__WEBPACK_IMPORTED_MODULE_6__/* .Order */ .K, {
                order: order
            }, order.id))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _Orders__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Orders__WEBPACK_IMPORTED_MODULE_0__]);
_Orders__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangeNameForm/ChangeNameForm.form.js

function initialValues(firstname, lastname) {
    return {
        firstname,
        lastname
    };
}
function validationSchema() {
    return external_yup_.object({
        firstname: external_yup_.string().required(true),
        lastname: external_yup_.string().required(true)
    });
}

// EXTERNAL MODULE: ./src/components/Account/Settings/ChangeNameForm/ChangeNameForm.module.scss
var ChangeNameForm_module = __webpack_require__(7038);
var ChangeNameForm_module_default = /*#__PURE__*/__webpack_require__.n(ChangeNameForm_module);
;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangeNameForm/ChangeNameForm.js







const userCtrl = new api/* User */.n5();
function ChangeNameForm() {
    const { user  } = (0,hooks/* useAuth */.a)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: initialValues(user.firstname, user.lastname),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                await userCtrl.updateMe(user.id, formValue);
            } catch (error) {
                console.error(error);
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Nombre y apellidos"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ChangeNameForm_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "firstname",
                        placeholder: "Nombre",
                        value: formik.values.firstname,
                        onChange: formik.handleChange,
                        error: formik.errors.firstname
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "lastname",
                        placeholder: "Apellidos",
                        value: formik.values.lastname,
                        onChange: formik.handleChange,
                        error: formik.errors.lastname
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Button, {
                        type: "submit",
                        loading: formik.isSubmitting,
                        children: "Enviar"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangeNameForm/index.js


;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangeEmailForm/ChangeEmailForm.form.js

function ChangeEmailForm_form_initialValues() {
    return {
        email: "",
        repeatEmail: ""
    };
}
function ChangeEmailForm_form_validationSchema() {
    return external_yup_.object({
        email: external_yup_.string().email(true).required(true),
        repeatEmail: external_yup_.string().email(true).required(true).oneOf([
            external_yup_.ref("email")
        ], true)
    });
}

// EXTERNAL MODULE: ./src/components/Account/Settings/ChangeEmailForm/ChangeEmailForm.module.scss
var ChangeEmailForm_module = __webpack_require__(1862);
var ChangeEmailForm_module_default = /*#__PURE__*/__webpack_require__.n(ChangeEmailForm_module);
;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangeEmailForm/ChangeEmailForm.js







const ChangeEmailForm_userCtrl = new api/* User */.n5();
function ChangeEmailForm() {
    const { user , updateUser  } = (0,hooks/* useAuth */.a)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: ChangeEmailForm_form_initialValues(),
        validationSchema: ChangeEmailForm_form_validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                await ChangeEmailForm_userCtrl.updateMe(user.id, {
                    email: formValue.email
                });
                updateUser("email", formValue.email);
                formik.handleReset();
            } catch (error) {
                console.error(error);
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: formik.handleSubmit,
        className: (ChangeEmailForm_module_default()).form,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Cambiar correo electronico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                name: "email",
                placeholder: "Nuevo correo electronico",
                value: formik.values.email,
                onChange: formik.handleChange,
                error: formik.errors.email
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                name: "repeatEmail",
                placeholder: "Repetir correo electronico",
                value: formik.values.repeatEmail,
                onChange: formik.handleChange,
                error: formik.errors.repeatEmail
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Button, {
                type: "submit",
                loading: formik.isSubmitting,
                children: "Enviar"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangeEmailForm/index.js


;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangePasswordForm/ChangePasswordForm.form.js

function ChangePasswordForm_form_initialValues() {
    return {
        password: "",
        repeatPassword: ""
    };
}
function ChangePasswordForm_form_validationSchema() {
    return external_yup_.object({
        password: external_yup_.string().required(true),
        repeatPassword: external_yup_.string().required(true).oneOf([
            external_yup_.ref("password")
        ], true)
    });
}

// EXTERNAL MODULE: ./src/components/Account/Settings/ChangePasswordForm/ChangePasswordForm.module.scss
var ChangePasswordForm_module = __webpack_require__(9934);
var ChangePasswordForm_module_default = /*#__PURE__*/__webpack_require__.n(ChangePasswordForm_module);
;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangePasswordForm/ChangePasswordForm.js







const ChangePasswordForm_userCtrl = new api/* User */.n5();
function ChangePasswordForm() {
    const { user , logout  } = (0,hooks/* useAuth */.a)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: ChangePasswordForm_form_initialValues(),
        validationSchema: ChangePasswordForm_form_validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                await ChangePasswordForm_userCtrl.updateMe(user.id, {
                    password: formValue.password
                });
                logout();
            } catch (error) {
                throw error;
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: formik.handleSubmit,
        className: (ChangePasswordForm_module_default()).form,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Cambiar contrase\xf1a"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                type: "password",
                name: "password",
                placeholder: "Nueva contrase\xf1a",
                value: formik.values.password,
                onChange: formik.handleChange,
                error: formik.errors.password
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                type: "password",
                name: "repeatPassword",
                placeholder: "Repetir contrase\xf1a",
                value: formik.values.repeatPassword,
                onChange: formik.handleChange,
                error: formik.errors.repeatPassword
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Button, {
                type: "submit",
                loading: formik.isSubmitting,
                children: "Enviar"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Settings/ChangePasswordForm/index.js


;// CONCATENATED MODULE: ./src/components/Account/Settings/index.js



const Settings = {
    ChangeNameForm: ChangeNameForm,
    ChangeEmailForm: ChangeEmailForm,
    ChangePasswordForm: ChangePasswordForm
};


/***/ }),

/***/ 8429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ Wishlist)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
// EXTERNAL MODULE: ./src/components/Shared/index.js + 26 modules
var Shared = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/index.js + 4 modules
var utils = __webpack_require__(8040);
// EXTERNAL MODULE: ./src/components/Account/Wishlist/GridGames/GridGames.module.scss
var GridGames_module = __webpack_require__(2340);
var GridGames_module_default = /*#__PURE__*/__webpack_require__.n(GridGames_module);
;// CONCATENATED MODULE: ./src/components/Account/Wishlist/GridGames/GridGames.js






function GridGames(props) {
    const { wishlist , onReload  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (GridGames_module_default()).gridGames,
        children: (0,external_lodash_.map)(wishlist, (item)=>{
            const game = item.attributes.game.data;
            const cover = game.attributes.cover;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (GridGames_module_default()).game,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: `/${game.attributes.slug}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: cover.attributes.url
                                    }),
                                    game.attributes.discount > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Shared/* Label.Discount */.__.Discount, {
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
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shared/* WishlistIcon */.X$, {
                        gameId: game.id,
                        className: (GridGames_module_default()).whislistIcon,
                        removeCallback: onReload
                    })
                ]
            }, item.id);
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Wishlist/GridGames/index.js


;// CONCATENATED MODULE: ./src/components/Account/Wishlist/Wishlist.js







const wishlistCtrl = new api/* Wishlist */.sq();
function Wishlist() {
    const [wishlist, setWishlist] = (0,external_react_.useState)(null);
    const [reload, setReload] = (0,external_react_.useState)(false);
    const { user  } = (0,hooks/* useAuth */.a)();
    const onReload = ()=>setReload((prevState)=>!prevState);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const response = await wishlistCtrl.getAll(user.id);
                setWishlist(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [
        reload
    ]);
    return (0,external_lodash_.size)(wishlist) === 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Shared/* NoResult */.xM, {
        text: "No tienes ningun juego en la lista de deseos"
    }) : /*#__PURE__*/ jsx_runtime_.jsx(GridGames, {
        wishlist: wishlist,
        onReload: onReload
    });
}

;// CONCATENATED MODULE: ./src/components/Account/Wishlist/index.js



/***/ }),

/***/ 1524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "We": () => (/* reexport safe */ _Orders__WEBPACK_IMPORTED_MODULE_4__.W),
/* harmony export */   "Zr": () => (/* reexport safe */ _Settings__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "kI": () => (/* reexport safe */ _Info__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "kL": () => (/* reexport safe */ _Address__WEBPACK_IMPORTED_MODULE_2__.k),
/* harmony export */   "sq": () => (/* reexport safe */ _Wishlist__WEBPACK_IMPORTED_MODULE_3__.s)
/* harmony export */ });
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4960);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3312);
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1602);
/* harmony import */ var _Wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8429);
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Info__WEBPACK_IMPORTED_MODULE_0__, _Orders__WEBPACK_IMPORTED_MODULE_4__]);
([_Info__WEBPACK_IMPORTED_MODULE_0__, _Orders__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9668);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5409);
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1524);
/* harmony import */ var _components_Shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1861);
/* harmony import */ var _account_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2468);
/* harmony import */ var _account_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_account_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Account__WEBPACK_IMPORTED_MODULE_6__]);
_components_Account__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function AccountPage() {
    const { user , logout  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [reload, setReload] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (!user) {
        router.push("/");
        return null;
    }
    const onReload = ()=>setReload((prevState)=>!prevState);
    const panes = [
        {
            menuItem: "Mis pedidos",
            render: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Pane, {
                    attached: false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Orders */ .We, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_7__/* .Separator */ .Z0, {
                            height: 80
                        })
                    ]
                })
        },
        {
            menuItem: "Lista de deseos",
            render: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Pane, {
                    attached: false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Wishlist */ .sq, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_7__/* .Separator */ .Z0, {
                            height: 80
                        })
                    ]
                })
        },
        {
            menuItem: "Direcciones",
            render: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Pane, {
                    attached: false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Address.AddAddress */ .kL.AddAddress, {
                            onReload: onReload
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Address.ListAddresses */ .kL.ListAddresses, {
                            reload: reload,
                            onReload: onReload
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_7__/* .Separator */ .Z0, {
                            height: 80
                        })
                    ]
                })
        },
        {
            menuItem: {
                key: 20,
                icon: "settings",
                content: "Ajustes"
            },
            render: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Pane, {
                    attached: false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Settings.ChangeNameForm */ .Zr.ChangeNameForm, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_account_module_scss__WEBPACK_IMPORTED_MODULE_8___default().containerForms),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Settings.ChangeEmailForm */ .Zr.ChangeEmailForm, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Settings.ChangePasswordForm */ .Zr.ChangePasswordForm, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_7__/* .Separator */ .Z0, {
                            height: 80
                        })
                    ]
                }, 99)
        },
        {
            menuItem: {
                key: 21,
                icon: "log out",
                content: "",
                onClick: logout
            }
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared__WEBPACK_IMPORTED_MODULE_7__/* .Seo */ .pQ, {
                title: "Mi cuenta"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_4__/* .BasicLayout */ .iO, {
                isContainer: true,
                relative: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Account__WEBPACK_IMPORTED_MODULE_6__/* .Info */ .kI, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        menu: {
                            secondary: true,
                            pointing: true
                        },
                        panes: panes,
                        className: (_account_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs)
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