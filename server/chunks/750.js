"use strict";
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 5750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ LoginForm),
  "B": () => (/* reexport */ RegisterForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./src/components/Auth/RegisterForm/RegisterForm.form.js

function initialValues() {
    return {
        email: "",
        username: "",
        name: "",
        password: ""
    };
}
function validationSchema() {
    return external_yup_.object({
        email: external_yup_.string().email(true).required(true),
        username: external_yup_.string().required(true),
        name: external_yup_.string().required(true),
        password: external_yup_.string().required(true)
    });
}

;// CONCATENATED MODULE: ./src/components/Auth/RegisterForm/RegisterForm.js






const authCtrl = new api/* Auth */.gx();
function RegisterForm() {
    const router = (0,router_.useRouter)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                await authCtrl.register(formValue);
                router.push("/join/sign-in");
            } catch (error) {
                console.error(error);
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
                widths: "equal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "email",
                        type: "text",
                        placeholder: "Correo electronico",
                        value: formik.values.email,
                        onChange: formik.handleChange,
                        error: formik.errors.email
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "username",
                        type: "text",
                        placeholder: "Nombre de usuario",
                        value: formik.values.username,
                        onChange: formik.handleChange,
                        error: formik.errors.username
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Group, {
                widths: "equal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "name",
                        type: "text",
                        placeholder: "Nombre y apellidos",
                        value: formik.values.name,
                        onChange: formik.handleChange,
                        error: formik.errors.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "password",
                        type: "password",
                        placeholder: "Contrase\xf1a",
                        value: formik.values.password,
                        onChange: formik.handleChange,
                        error: formik.errors.password
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Button, {
                type: "submit",
                fluid: true,
                loading: formik.isSubmitting,
                children: "Registrarse"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Auth/RegisterForm/index.js


// EXTERNAL MODULE: ./src/hooks/index.js + 2 modules
var hooks = __webpack_require__(5409);
;// CONCATENATED MODULE: ./src/components/Auth/LoginForm/LoginForm.form.js

function LoginForm_form_initialValues() {
    return {
        identifier: "",
        password: ""
    };
}
function LoginForm_form_validationSchema() {
    return external_yup_.object({
        identifier: external_yup_.string().required(true),
        password: external_yup_.string().required(true)
    });
}

;// CONCATENATED MODULE: ./src/components/Auth/LoginForm/LoginForm.js







const LoginForm_authCtrl = new api/* Auth */.gx();
function LoginForm() {
    const router = (0,router_.useRouter)();
    const { login  } = (0,hooks/* useAuth */.a)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: LoginForm_form_initialValues(),
        validationSchema: LoginForm_form_validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                const response = await LoginForm_authCtrl.login(formValue);
                login(response.jwt);
            // router.push("/");
            } catch (error) {
                console.error(error);
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                name: "identifier",
                type: "text",
                placeholder: "Correo electronico o nombre de usuario",
                value: formik.values.identifier,
                onChange: formik.handleChange,
                error: formik.errors.identifier
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                name: "password",
                type: "password",
                placeholder: "Contrase\xf1a",
                value: formik.values.password,
                onChange: formik.handleChange,
                error: formik.errors.password
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Button, {
                type: "submit",
                fluid: true,
                loading: formik.isSubmitting,
                children: "Entrar"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Auth/LoginForm/index.js


;// CONCATENATED MODULE: ./src/components/Auth/index.js




/***/ })

};
;