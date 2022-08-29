import * as types from "./actionTypes";

//load category
export const loadCategoryStart = () => ({
    type: types.LOAD_CATEGORY_START,
})
export const loadCategorySuccess = (category) => ({
    type: types.LOAD_CATEGORY_SUCCESS,
    payload: category,
})
export const loadCategoryError = (error) => ({
    type: types.LOAD_CATEGORY_ERROR,
    payload: error,
})

//CREATE CATEGORY
export const createCategoryStart = (category) => ({
    type: types.CREATE_CATEGORY_START,
    payload: category,
})
export const createCategorySuccess = () => ({
    type: types.CREATE_CATEGORY_SUCCESS,
})
export const createCategoryError = (error) => ({
    type: types.CREATE_CATEGORY_ERROR,
    payload: error,
})

//DELETE CATEGORY
export const deleteCategoryStart = (id) => ({
    type: types.DELETE_CATEGORY_START,
    payload: id,
})
export const deleteCategorySuccess = (id) => ({
    type: types.DELETE_CATEGORY_SUCCESS,
    payload: id,
})
export const deleteCategoryError = (error) => ({
    type: types.DELETE_CATEGORY_ERROR,
    payload: error,
})

//UDATE CATEGORY
export const updateCategoryStart = (categoryInfo) => ({
    type: types.UPDATE_CATEGORY_START,
    payload: categoryInfo,
})
export const updateCategorySuccess = () => ({
    type: types.UPDATE_CATEGORY_SUCCESS,
})
export const updateCategoryError = (error) => ({
    type: types.UPDATE_CATEGORY_ERROR,
    payload: error,
})