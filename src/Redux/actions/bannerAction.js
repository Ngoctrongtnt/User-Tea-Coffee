import * as types from "./actionTypes";

//load user
export const loadBannerStart = () => ({
    type: types.LOAD_BANNER_START,
})
export const loadBannerSuccess = (banner) => ({
    type: types.LOAD_BANNER_SUCCESS,
    payload: banner,
})
export const loadBannerError = (error) => ({
    type: types.LOAD_BANNER_ERROR,
    payload: error,
})

//CREATE USER
export const createBannerStart = (banner) => ({
    type: types.CREATE_BANNER_START,
    payload: banner,
})
export const createBannerSuccess = () => ({
    type: types.CREATE_BANNER_SUCCESS,
})
export const createBannerError = (error) => ({
    type: types.CREATE_BANNER_ERROR,
    payload: error,
})

//DELETE USER
export const deleteBannerStart = (id) => ({
    type: types.DELETE_BANNER_START,
    payload: id,
})
export const deleteBannerSuccess = (id) => ({
    type: types.DELETE_BANNER_SUCCESS,
    payload: id,
})
export const deleteBannerError = (error) => ({
    type: types.DELETE_BANNER_ERROR,
    payload: error,
})

//UDATE USER
export const updateBannerStart = (bannerInfo) => ({
    type: types.UPDATE_BANNER_START,
    payload: bannerInfo,
})
export const updateBannerSuccess = () => ({
    type: types.UPDATE_BANNER_SUCCESS,
})
export const updateBannerError = (error) => ({
    type: types.UPDATE_BANNER_ERROR,
    payload: error,
})
