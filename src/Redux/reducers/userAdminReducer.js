import * as types from "../actions/actionTypes";

const initialState = {
    usersAdmin: [],
    loading: false,
    error: null
}

const userAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_ADMIN_START:
        case types.CREATE_USER_ADMIN_START:
        case types.DELETE_USER_ADMIN_START:
        case types.UPDATE_USER_ADMIN_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USERS_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                usersAdmin: action.payload,
            };
        case types.CREATE_USER_ADMIN_SUCCESS:
            return {
                ...state,
                usersAdmin: [action.payload, ...state?.usersAdmin],
                loading: false,
            };
        case types.UPDATE_USER_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.DELETE_USER_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                usersAdmin: state.usersAdmin.filter((item) =>
                    item.id !== action.payload)
            };
        case types.LOAD_USERS_ADMIN_ERROR:
        case types.CREATE_USER_ADMIN_ERROR:
        case types.DELETE_USER_ADMIN_ERROR:
        case types.UPDATE_USER_ADMIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default userAdminReducer;