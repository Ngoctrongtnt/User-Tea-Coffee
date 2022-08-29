import * as types from "../actions/actionTypes";

const initialState = {
    profile: {},
    isLoggIn: false,
    isAuthenticated: false,
    isLoading: false,
    notif: ''
}

export const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_UI_SUCCESS: {
            const profile = action.payload;
            state = {
                profile: profile,
                isLoggIn: true,
                isAuthenticated: true,
                isLoading: false,
                notif: 'Đăng nhập thành công'
            }
            localStorage.setItem('userUI', JSON.stringify(profile))

            return { ...state };
        }
        case types.GET_PROFILE_UI_SUCCESS: {
            const profile = action.payload;
            state = {
                ...state,
                profile: profile,
                isLoggIn: true,
                isAuthenticated: profile.isUser
            }
            return { ...state };
        }
        case types.LOGOUT_UI: {
            localStorage.removeItem('userUI')
            return { ...initialState };

        }
        case types.GET_PROFILE_UI_FAIL: {
            return { ...initialState };
        }
        case types.LOGIN_UI_FAIL: {
            return { ...state, isLoading: false, notif: 'Tài khoản không tồn tại' }
        }
        case types.SET_IS_LOADING_UI: {
            return { ...state, isLoading: true }
        }

        default:
            return { ...state };
    }
}