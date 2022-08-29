import * as types from "./actionTypes";

//load user UI
export const loadUsersUIStart = () => ({
    type: types.LOAD_USERS_START,
})
export const loadUsersUISuccess = (usersUI) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: usersUI,
})
export const loadUsersUIError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
})

//CREATE USER
export const createUserUIStart = (user) => ({
    type: types.CREATE_USERUI_START,
    payload: user,
})
export const createUserUISuccess = () => ({
    type: types.CREATE_USERUI_SUCCESS,
})
export const createUserUIError = (error) => ({
    type: types.CREATE_USERUI_ERROR,
    payload: error,
})

//DELETE USER
export const deleteUserUIStart = (id) => ({
    type: types.DELETE_USERUI_START,
    payload: id,
})
export const deleteUserUISuccess = (id) => ({
    type: types.DELETE_USERUI_SUCCESS,
    payload: id,
})
export const deleteUserUIError = (error) => ({
    type: types.DELETE_USERUI_ERROR,
    payload: error,
})

//UDATE USER
export const updateUserUIStart = (userInfo) => ({
    type: types.UPDATE_USERUI_START,
    payload: userInfo,
})
export const updateUserUISuccess = () => ({
    type: types.UPDATE_USERUI_SUCCESS,
})
export const updateUserUIError = (error) => ({
    type: types.UPDATE_USERUI_ERROR,
    payload: error,
})