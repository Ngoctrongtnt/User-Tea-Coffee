import * as types from "../actions/actionCartType";

const data = JSON.parse(localStorage.getItem('cartProducts'));

const initialState = {
    cartProducts: data ? data : [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUY_PRODUCT_CART:
            const productInCart = state.cartProducts.find(
                (item) => item.id === action.payload.id && item.size === action.payload.size
            );

            if (!productInCart) {
                const cartProducts = [...state.cartProducts, { ...action.payload, quantity: 1 }];
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
                return {
                    ...state,
                    cartProducts
                }
            }
            else {
                let newcart = state.cartProducts;
                const objIndex = newcart.findIndex(
                    (ojb) => ojb.id === action.payload.id && ojb.size === action.payload.size
                );

                newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
                const cartProducts = [...newcart]
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
                return {
                    ...state,
                    cartProducts
                };
            }

        case types.DELETE_PRODUCT_CART:
            const listProducts = state.cartProducts.find(item =>
                (item.id === action.payload.id) && (item.size === action.payload.size))
            const cartProducts = state.cartProducts.filter((item) => item !== listProducts);
            localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
            return {
                ...state,
                cartProducts
            }

        case types.DECREASE_PRODUCT_CART:
            const productInCart1 = state.cartProducts.find(
                (item) => item.id === action.payload.id && item.size === action.payload.size
            );

            if ((productInCart1.quantity === 1)) {
                let newcart = state.cartProducts;
                const objIndex = newcart.findIndex(
                    (obj) => obj.id === action.payload.id && obj.size === action.payload.size
                );
                newcart[objIndex].quantity = newcart[objIndex].quantity - 1;
                newcart = newcart.filter(item => item.quantity !== 0)
                const cartProducts = [...newcart]
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts))

                return {
                    ...state,
                    cartProducts
                }
            } else {
                let newcart1 = state.cartProducts;
                const objIndex = newcart1.findIndex(
                    (obj) => obj.id === action.payload.id && obj.size === action.payload.size
                );
                newcart1[objIndex].quantity = newcart1[objIndex].quantity - 1;
                const cartProducts = [...newcart1]
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts))

                return {
                    ...state,
                    cartProducts
                };
            }

        case types.DELETE_CART:
            localStorage.removeItem('cartProducts');
            return { ...state, cartProducts: [] }

        default:
            return state;
    }
}

export default cartReducer;