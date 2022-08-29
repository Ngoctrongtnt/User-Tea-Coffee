import * as types from "./actionTypes";

export const actLogin = (profile) => {
    return {
        type: types.LOGIN,
        payload: profile,
    };
};

export const actLoginFail = () => {
    return {
        type: types.LOGIN_FAIL,
    };
};

export const actSetLoadingSuccess = () => {
    return {
        type: types.SET_IS_LOADING,
    };
};

export const actLoginSuccess = (profile) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: profile,
    };
};

export const actGetProfile = (profile) => {
    return {
        type: types.GET_PROFILE,
        payload: profile,
    };
};

export const actGetProfileSuccess = (profile) => {
    return {
        type: types.GET_PROFILE_SUCCESS,
        payload: profile,
    };
};

export const actGetProfileFail = () => {
    return {
        type: types.GET_PROFILE_FAIL,
    };
};

export const actLogout = () => {
    return {
        type: types.LOGOUT,
    };
};
