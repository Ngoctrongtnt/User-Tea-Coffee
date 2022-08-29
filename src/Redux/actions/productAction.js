import * as types from "./actionTypes";

//load PRODUCT
export const loadProductStart = () => ({
    type: types.LOAD_PRODUCT_START,
})
export const loadProductSuccess = (product) => ({
    type: types.LOAD_PRODUCT_SUCCESS,
    payload: product,
})
export const loadProductError = (error) => ({
    type: types.LOAD_PRODUCT_ERROR,
    payload: error,
})

//CREATE PRODUCT
export const createProductStart = (product) => ({
    type: types.CREATE_PRODUCT_START,
    payload: product,
})
export const createProductSuccess = () => ({
    type: types.CREATE_PRODUCT_SUCCESS,
})
export const createProductError = (error) => ({
    type: types.CREATE_PRODUCT_ERROR,
    payload: error,
})

//DELETE PRODUCT
export const deleteProductStart = (id) => ({
    type: types.DELETE_PRODUCT_START,
    payload: id,
})
export const deleteProductSuccess = (id) => ({
    type: types.DELETE_PRODUCT_SUCCESS,
    payload: id,
})
export const deleteProductError = (error) => ({
    type: types.DELETE_PRODUCT_ERROR,
    payload: error,
})

//UDATE PRODUCT
export const updateProductStart = (productInfo) => ({
    type: types.UPDATE_PRODUCT_START,
    payload: productInfo,
})
export const updateProductSuccess = () => ({
    type: types.UPDATE_PRODUCT_SUCCESS,
})
export const updateProductError = (error) => ({
    type: types.UPDATE_PRODUCT_ERROR,
    payload: error,
})
