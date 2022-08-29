import * as types from "../actions/actionTypes";

const initialState = {
    banners: [],
    loading: false,
    error: null
}

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_BANNER_START:
        case types.CREATE_BANNER_START:
        case types.DELETE_BANNER_START:
        case types.UPDATE_BANNER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                banners: action.payload,
            };
        case types.CREATE_BANNER_SUCCESS:
        case types.UPDATE_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.DELETE_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                banners: state.banners.filter((banner) =>
                    banner.id !== action.payload)
            };
        case types.LOAD_BANNER_ERROR:
        case types.CREATE_BANNER_ERROR:
        case types.DELETE_BANNER_ERROR:
        case types.UPDATE_BANNER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default bannerReducer;