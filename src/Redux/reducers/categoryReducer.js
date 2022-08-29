import * as types from "../actions/actionTypes";

const initialState = {
    categories: [],
    loading: false,
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORY_START:
        case types.CREATE_CATEGORY_START:
        case types.DELETE_CATEGORY_START:
        case types.UPDATE_CATEGORY_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case types.CREATE_CATEGORY_SUCCESS:
        case types.UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: state.categories.filter((category) =>
                    category.id !== action.payload)
            };
        case types.LOAD_CATEGORY_ERROR:
        case types.CREATE_CATEGORY_ERROR:
        case types.DELETE_CATEGORY_ERROR:
        case types.UPDATE_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default categoryReducer;