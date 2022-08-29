import * as types from "./actionTypes";

//load ORDER
export const loadOrderStart = () => ({
    type: types.LOAD_ORDER_START,
})
export const loadOrderSuccess = (order) => ({
    type: types.LOAD_ORDER_SUCCESS,
    payload: order,
})
export const loadOrderError = (error) => ({
    type: types.LOAD_ORDER_ERROR,
    payload: error,
})

//CREATE ORDER
export const createOrderStart = (order) => ({
    type: types.CREATE_ORDER_START,
    payload: order,
})
export const createOrderSuccess = () => ({
    type: types.CREATE_ORDER_SUCCESS,
})
export const createOrderError = (error) => ({
    type: types.CREATE_ORDER_ERROR,
    payload: error,
})

//DELETE ORDER
export const deleteOrderStart = (id) => ({
    type: types.DELETE_ORDER_START,
    payload: id,
})
export const deleteOrderSuccess = (id) => ({
    type: types.DELETE_ORDER_SUCCESS,
    payload: id,
})
export const deleteOrderError = (error) => ({
    type: types.DELETE_ORDER_ERROR,
    payload: error,
})

//UDATE ORDER
export const updateOrderStart = (orderInfo) => ({
    type: types.UPDATE_ORDER_START,
    payload: orderInfo,
})
export const updateOrderSuccess = () => ({
    type: types.UPDATE_ORDER_SUCCESS,
})
export const updateOrderError = (error) => ({
    type: types.UPDATE_ORDER_ERROR,
    payload: error,
})