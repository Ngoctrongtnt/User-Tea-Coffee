import * as types from "../actions/actionCartType";

export const buyProduct = (product) => ({
    type: types.BUY_PRODUCT_CART,
    payload: product,
})
export const deleteProduct = (product) => ({
    type: types.DELETE_PRODUCT_CART,
    payload: product,
})

export const deCrease = (product) => ({
    type: types.DECREASE_PRODUCT_CART,
    payload: product,
})

export const deleteCart = () => ({
    type: types.DELETE_CART,
})

