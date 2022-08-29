import * as types from "./actionTypes";

export const actLoginUI = (profile) => {
    return {
        type: types.LOGIN_UI,
        payload: profile,
    };
};

export const actLoginUIFail = () => {
    return {
        type: types.LOGIN_UI_FAIL,
    };
};

export const actSetLoadingUISuccess = () => {
    return {
        type: types.SET_IS_LOADING_UI,
    };
};

export const actLoginUISuccess = (profile) => {
    return {
        type: types.LOGIN_UI_SUCCESS,
        payload: profile,
    };
};

export const actGetProfileUI = (profile) => {
    return {
        type: types.GET_PROFILE_UI,
        payload: profile,
    };
};

export const actGetProfileUISuccess = (profile) => {
    return {
        type: types.GET_PROFILE_UI_SUCCESS,
        payload: profile,
    };
};

export const actGetProfileUIFail = () => {
    return {
        type: types.GET_PROFILE_UI_FAIL,
    };
};

export const actLogoutUI = () => {
    return {
        type: types.LOGOUT_UI,
    };
};
