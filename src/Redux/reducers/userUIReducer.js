import * as types from "../actions/actionTypes";

const initialState = {
    usersUI: [],
    loading: false,
    error: null
}

const userUIReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.CREATE_USERUI_START:
        case types.DELETE_USERUI_START:
        case types.UPDATE_USERUI_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersUI: action.payload,
            };
        case types.CREATE_USERUI_SUCCESS:
        case types.UPDATE_USERUI_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.DELETE_USERUI_SUCCESS:
            return {
                ...state,
                loading: false,
                usersUI: state.usersUI.filter((item) =>
                    item.id !== action.payload)
            };
        case types.LOAD_USERS_ERROR:
        case types.CREATE_USERUI_ERROR:
        case types.DELETE_USERUI_ERROR:
        case types.UPDATE_USERUI_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default userUIReducer;