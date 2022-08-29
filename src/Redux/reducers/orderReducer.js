import * as types from "../actions/actionTypes";

const initialState = {
    orders: [],
    loading: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_ORDER_START:
        case types.CREATE_ORDER_START:
        case types.DELETE_ORDER_START:
        case types.UPDATE_ORDER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            };
        case types.CREATE_ORDER_SUCCESS:
        case types.UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.filter((item) =>
                    item.id !== action.payload)
            };
        case types.LOAD_ORDER_ERROR:
        case types.CREATE_ORDER_ERROR:
        case types.DELETE_ORDER_ERROR:
        case types.UPDATE_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default orderReducer;