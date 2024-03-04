"use strict";
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 4117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kL": () => (/* reexport */ Address),
  "gx": () => (/* reexport */ Auth),
  "AP": () => (/* reexport */ Cart),
  "lA": () => (/* reexport */ Game),
  "KM": () => (/* reexport */ Order),
  "t4": () => (/* reexport */ Platform),
  "WU": () => (/* reexport */ Token),
  "n5": () => (/* reexport */ User),
  "sq": () => (/* reexport */ Wishlist)
});

// EXTERNAL MODULE: ./src/utils/index.js + 4 modules
var utils = __webpack_require__(8040);
;// CONCATENATED MODULE: ./src/api/auth.js

class Auth {
    async register(data) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.AUTH.REGISTER */.V.ENDPOINTS.AUTH.REGISTER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            const response = await fetch(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async login(data) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.AUTH.LOGIN */.V.ENDPOINTS.AUTH.LOGIN}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            const response = await fetch(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5567);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);
;// CONCATENATED MODULE: ./src/api/token.js


class Token {
    setToken(token) {
        localStorage.setItem(utils/* ENV.TOKEN */.V.TOKEN, token);
    }
    getToken() {
        return localStorage.getItem(utils/* ENV.TOKEN */.V.TOKEN);
    }
    removeToken() {
        localStorage.removeItem(utils/* ENV.TOKEN */.V.TOKEN);
    }
    hasExpired(token) {
        const tokenDecode = external_jwt_decode_default()(token);
        const expireDate = tokenDecode.exp * 1000;
        const currentDate = new Date().getTime();
        if (currentDate > expireDate) {
            return true;
        }
        return false;
    }
}

;// CONCATENATED MODULE: ./src/api/user.js

class User {
    async getMe() {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.USERS_ME */.V.ENDPOINTS.USERS_ME}`;
            const response = await (0,utils/* authFetch */.S)(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateMe(userId, data) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.USERS */.V.ENDPOINTS.USERS}/${userId}`;
            const params = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./src/api/platform.js

class Platform {
    async getAll() {
        try {
            const sort = "sort=order:asc";
            const populate = "populate=icon";
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.PLATFORM */.V.ENDPOINTS.PLATFORM}?${populate}&${sort}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getBySlug(slug) {
        try {
            const filters = `filters[slug][$eq]=${slug}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.PLATFORM */.V.ENDPOINTS.PLATFORM}?${filters}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result.data[0];
        } catch (error) {
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./src/api/address.js

class Address {
    async create(data, userId) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.ADDRESS */.V.ENDPOINTS.ADDRESS}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        ...data,
                        user: userId
                    }
                })
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAll(userId) {
        try {
            const filters = `filters[user][id][$eq]=${userId}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.ADDRESS */.V.ENDPOINTS.ADDRESS}?${filters}`;
            const response = await (0,utils/* authFetch */.S)(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async update(data, addressId) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.ADDRESS */.V.ENDPOINTS.ADDRESS}/${addressId}`;
            const params = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data
                })
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async delete(addressId) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.ADDRESS */.V.ENDPOINTS.ADDRESS}/${addressId}`;
            const params = {
                method: "DELETE"
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./src/api/game.js

class Game {
    async getLastPublished() {
        try {
            const sort = "sort=publishedAt:desc";
            const pagination = "pagination[limit]=1";
            const populate = "populate=*";
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.GAME */.V.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getLatestPublished({ limit =9 , platformId =null  }) {
        try {
            const filterPlatform = platformId && `filters[platform][id][$eq]=${platformId}`;
            const paginationLimit = `pagination[limit]=${limit}`;
            const sort = `sort[0]=publishedAt:desc`;
            const populate = `populate=*`;
            const urlParams = `${sort}&${paginationLimit}&${filterPlatform}&${populate}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.GAME */.V.ENDPOINTS.GAME}?${urlParams}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getGamesByPlatformSlug(slug, page) {
        try {
            const filters = `filters[platform][slug][$eq]=${slug}`;
            const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
            const populate = "populate=*";
            const urlParams = `${filters}&${pagination}&${populate}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.GAME */.V.ENDPOINTS.GAME}?${urlParams}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async searchGames(text, page) {
        try {
            const filters = `filters[title][$contains]=${text}`;
            const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
            const populate = "populate=*";
            const urlParams = `${filters}&${pagination}&${populate}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.GAME */.V.ENDPOINTS.GAME}?${urlParams}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getBySlug(slug) {
        try {
            const filters = `filters[slug][$eq]=${slug}`;
            const populate = `populate[0]=wallpaper&populate[1]=cover&populate&populate[2]=screenshots&populate[3]=platform&populate[4]=platform.icon`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.GAME */.V.ENDPOINTS.GAME}?${filters}&${populate}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result.data[0];
        } catch (error) {
            throw error;
        }
    }
    async getGameById(id) {
        try {
            const populate = `populate[0]=cover&populate[1]=platform`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.GAME */.V.ENDPOINTS.GAME}/${id}?${populate}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./src/api/wishlist.js

class Wishlist {
    async check(userId, gameId) {
        try {
            const filterUser = `filters[user][id][$eq][0]=${userId}`;
            const filterGame = `filters[game][id][$eq][1]=${gameId}`;
            const urlParams = `${filterUser}&${filterGame}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.WISHLIST */.V.ENDPOINTS.WISHLIST}?${urlParams}`;
            const response = await (0,utils/* authFetch */.S)(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            if (result.data.length === 0) {
                return false;
            }
            return result.data[0];
        } catch (error) {
            throw error;
        }
    }
    async add(userId, gameId) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.WISHLIST */.V.ENDPOINTS.WISHLIST}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        user: userId,
                        game: gameId
                    }
                })
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.WISHLIST */.V.ENDPOINTS.WISHLIST}/${id}`;
            const params = {
                method: "DELETE"
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAll(userId) {
        try {
            const filters = `filters[user][id][$eq]=${userId}`;
            const populate = "populate[0]=game&populate[1]=game.cover";
            const urlParams = `${filters}&${populate}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.WISHLIST */.V.ENDPOINTS.WISHLIST}?${urlParams}`;
            const response = await (0,utils/* authFetch */.S)(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./src/api/cart.js


class Cart {
    add(gameId) {
        const games = this.getAll();
        const objIndex = games.findIndex((game)=>game.id === gameId);
        if (objIndex < 0) {
            games.push({
                id: gameId,
                quantity: 1
            });
        } else {
            const game = games[objIndex];
            games[objIndex].quantity = game.quantity + 1;
        }
        localStorage.setItem(utils/* ENV.CART */.V.CART, JSON.stringify(games));
    }
    getAll() {
        const response = localStorage.getItem(utils/* ENV.CART */.V.CART);
        if (!response) {
            return [];
        } else {
            return JSON.parse(response);
        }
    }
    count() {
        const response = this.getAll();
        let count = 0;
        (0,external_lodash_.forEach)(response, (item)=>{
            count += item.quantity;
        });
        return count;
    }
    changeQuantity(gameId, quantity) {
        const games = this.getAll();
        const objIndex = games.findIndex((game)=>game.id === gameId);
        games[objIndex].quantity = quantity;
        localStorage.setItem(utils/* ENV.CART */.V.CART, JSON.stringify(games));
    }
    delete(gameId) {
        const games = this.getAll();
        const updateGames = games.filter((game)=>game.id !== gameId);
        localStorage.setItem(utils/* ENV.CART */.V.CART, JSON.stringify(updateGames));
    }
    deleteAll() {
        localStorage.removeItem(utils/* ENV.CART */.V.CART);
    }
    async paymentCart(token, products, idUser, address) {
        try {
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.PAYMENY_ORDER */.V.ENDPOINTS.PAYMENY_ORDER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token,
                    products,
                    idUser,
                    addressShipping: address
                })
            };
            const response = await (0,utils/* authFetch */.S)(url, params);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./src/api/order.js

class Order {
    async getAll(userId) {
        try {
            const filters = `filters[user][id][$eq]=${userId}`;
            const sort = "sort[0]=createdAt:desc";
            const urlParams = `${filters}&${sort}`;
            const url = `${utils/* ENV.API_URL */.V.API_URL}/${utils/* ENV.ENDPOINTS.ORDER */.V.ENDPOINTS.ORDER}?${urlParams}`;
            const response = await (0,utils/* authFetch */.S)(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./src/api/index.js











/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vo": () => (/* reexport */ AuthContext),
  "Ho": () => (/* reexport */ AuthProvider),
  "A9": () => (/* reexport */ CartContext),
  "Zl": () => (/* reexport */ CartProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
;// CONCATENATED MODULE: ./src/contexts/AuthContext.js



const tokenCtrl = new api/* Token */.WU();
const userCtrl = new api/* User */.n5();
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)();
function AuthProvider(props) {
    const { children  } = props;
    const [user, setUser] = (0,external_react_.useState)(null);
    const [token, setToken] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const token = tokenCtrl.getToken();
            if (!token) {
                logout();
                setLoading(false);
                return;
            }
            if (tokenCtrl.hasExpired(token)) {
                logout();
            } else {
                await login(token);
            }
        })();
    }, []);
    const login = async (token)=>{
        try {
            tokenCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response);
            setToken(token);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    const logout = ()=>{
        tokenCtrl.removeToken();
        setToken(null);
        setUser(null);
    };
    const updateUser = (key, value)=>{
        setUser({
            ...user,
            [key]: value
        });
    };
    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser
    };
    if (loading) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: data,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/contexts/CartContext.js



const cartCtrl = new api/* Cart */.AP();
const CartContext = /*#__PURE__*/ (0,external_react_.createContext)();
function CartProvider(props) {
    const { children  } = props;
    const [cart, setCart] = (0,external_react_.useState)(null);
    const [total, setTotal] = (0,external_react_.useState)(cartCtrl.count());
    (0,external_react_.useEffect)(()=>{
        const response = cartCtrl.getAll();
        setCart(response);
    }, []);
    const addCart = (gameId)=>{
        cartCtrl.add(gameId);
        refreshTotalCart();
    };
    const changeQuantityItem = (gameId, quantity)=>{
        cartCtrl.changeQuantity(gameId, quantity);
        refreshTotalCart();
    };
    const deleteItem = (gameId)=>{
        cartCtrl.delete(gameId);
        refreshTotalCart();
    };
    const deleteAllItems = ()=>{
        cartCtrl.deleteAll();
        refreshTotalCart();
    };
    const refreshTotalCart = ()=>{
        setTotal(cartCtrl.count());
        setCart(cartCtrl.getAll());
    };
    const data = {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems,
        changeQuantityItem
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(CartContext.Provider, {
        value: data,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/contexts/index.js




/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ ENV),
  "S": () => (/* reexport */ authFetch),
  "fn": () => (/* reexport */ fn)
});

;// CONCATENATED MODULE: ./src/utils/constants.js
const ENV = {
    SERVER_HOST: "http://62.72.0.225:1337",
    API_URL: "http://62.72.0.225:1337/api",
    ENDPOINTS: {
        AUTH: {
            REGISTER: "auth/local/register",
            LOGIN: "auth/local"
        },
        USERS_ME: "users/me",
        USERS: "users",
        PLATFORM: "platforms",
        ADDRESS: "addresses",
        GAME: "games",
        WISHLIST: "wishlists",
        PAYMENY_ORDER: "payment-order",
        ORDER: "orders"
    },
    TOKEN: "token",
    CART: "cart",
    //STRIPE_TOKEN:
    // "pk_test_51McFNvGuOrnPfQra2CPEv40T6bwjvke3EmtZELp3685TKzCMDgagCauuO8nOVgL2sI4eiU0s830K3aZj31iOXtoV00zA9gPqMd",
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyCGSwDx14d5ab0aNR_JqLIHP0mV3ff23-s",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "ecommerce-7166a.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "ecommerce-7166a",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "ecommerce-7166a.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "956752124037",
    NEXT_PUBLIC_FIREBASE_APP_ID: "",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "1:956752124037:web:bd86f067650685c9aef1ec"
};

// EXTERNAL MODULE: ./src/api/index.js + 9 modules
var api = __webpack_require__(4117);
;// CONCATENATED MODULE: ./src/utils/authFetch.js

async function authFetch(url, params) {
    const tokenCtrl = new api/* Token */.WU();
    const token = tokenCtrl.getToken();
    const logout = ()=>{
        tokenCtrl.removeToken();
        window.location.replace("/");
    };
    if (!token) {
        logout();
    } else {
        if (tokenCtrl.hasExpired(token)) {
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                return await fetch(url, paramsTemp);
            } catch (error) {
                return error;
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/utils/functions/calcDiscountedPrice.js
function calcDiscountedPrice(price, discount) {
    if (!discount) return price;
    const discountAmount = price * discount / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
}

;// CONCATENATED MODULE: ./src/utils/functions/index.js

const fn = {
    calcDiscountedPrice: calcDiscountedPrice
};

;// CONCATENATED MODULE: ./src/utils/index.js





/***/ })

};
;