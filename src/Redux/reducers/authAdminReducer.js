import * as types from "../actions/actionTypes";

const initialState = {
    profile: {},
    isLoggIn: false,
    isAuthenticated: false,
    isLoading: false,
    notif: ''
}

export const authAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const profile = action.payload;
            state = {
                profile: profile,
                isLoggIn: true,
                isAuthenticated: profile.isUserAdmin,
                isLoading: false,
                notif: 'Đăng nhập thành công'
            }
            localStorage.setItem("userAdmin", JSON.stringify(profile))
            return { ...state };
        }
        case types.GET_PROFILE_SUCCESS: {
            const profile = action.payload;
            state = {
                ...state,
                profile: profile,
                isLoggIn: true,
                isAuthenticated: profile.isUserAdmin
            }
            return { ...state };
        }
        case types.LOGOUT: {
            localStorage.removeItem('userAdmin')
            return { ...initialState };

        }
        case types.GET_PROFILE_FAIL: {
            return { ...initialState };
        }
        case types.LOGIN_FAIL: {
            return { ...state, isLoading: false, notif: 'Tài khoản không tồn tại' }
        }
        case types.SET_IS_LOADING: {
            return { ...state, isLoading: true }
        }

        default:
            return { ...state };
    }
}