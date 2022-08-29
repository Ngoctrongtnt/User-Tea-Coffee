import * as types from "../actions/actionTypes";

const initialState = {
    sliders: [],
    loading: false,
    error: null
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SLIDER_START:
        case types.CREATE_SLIDER_START:
        case types.DELETE_SLIDER_START:
        case types.UPDATE_SLIDER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                sliders: action.payload,
            };
        case types.CREATE_SLIDER_SUCCESS:
        case types.UPDATE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.DELETE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                sliders: state.sliders.filter((slider) =>
                    slider.id !== action.payload)
            };
        case types.LOAD_SLIDER_ERROR:
        case types.CREATE_SLIDER_ERROR:
        case types.DELETE_SLIDER_ERROR:
        case types.UPDATE_SLIDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default sliderReducer;