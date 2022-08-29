import * as types from "../actions/actionTypes";

const initialState = {
    comments: [],
    loading: false,
    error: null
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_COMMENT_START:
        case types.CREATE_COMMENT_START:
        case types.DELETE_COMMENT_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload
            };
        case types.CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [action.payload, ...state?.comments],
                loading: false,
            };

        case types.DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: state.comments.filter((item) =>
                    item.id !== action.payload)
            };
        case types.LOAD_COMMENT_ERROR:
        case types.CREATE_COMMENT_ERROR:
        case types.DELETE_COMMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default commentReducer;