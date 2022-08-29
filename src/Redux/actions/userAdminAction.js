import * as types from "./actionTypes";

//load user
export const loadUsersAdminStart = () => ({
    type: types.LOAD_USERS_ADMIN_START,
})
export const loadUsersAdminSuccess = (usersAdmin) => ({
    type: types.LOAD_USERS_ADMIN_SUCCESS,
    payload: usersAdmin,
})
export const loadUsersAdminError = (error) => ({
    type: types.LOAD_USERS_ADMIN_ERROR,
    payload: error,
})

//CREATE USER
export const createUserAdminStart = (user) => ({
    type: types.CREATE_USER_ADMIN_START,
    payload: user,
})
export const createUserAdminSuccess = () => ({
    type: types.CREATE_USER_ADMIN_SUCCESS,
})
export const createUserAdminError = (error) => ({
    type: types.CREATE_USER_ADMIN_ERROR,
    payload: error,
})

//DELETE USER
export const deleteUserAdminStart = (userId) => ({
    type: types.DELETE_USER_ADMIN_START,
    payload: userId,
})
export const deleteUserAdminSuccess = (userId) => ({
    type: types.DELETE_USER_ADMIN_SUCCESS,
    payload: userId,
})
export const deleteUserAdminError = (error) => ({
    type: types.DELETE_USER_ADMIN_ERROR,
    payload: error,
})

//UDATE USER
export const updateUserAdminStart = (userInfo) => ({
    type: types.UPDATE_USER_ADMIN_START,
    payload: userInfo,
})
export const updateUserAdminSuccess = () => ({
    type: types.UPDATE_USER_ADMIN_SUCCESS,
})
export const updateUserAdminError = (error) => ({
    type: types.UPDATE_USER_ADMIN_ERROR,
    payload: error,
})
