import * as types from "./actionTypes";

//load COmment
export const loadCommentStart = () => ({
    type: types.LOAD_COMMENT_START,
})
export const loadCommentSuccess = (comment) => ({
    type: types.LOAD_COMMENT_SUCCESS,
    payload: comment,
})
export const loadCommentError = (error) => ({
    type: types.LOAD_COMMENT_ERROR,
    payload: error,
})

//CREATE COmment
export const createCommentStart = (comment) => ({
    type: types.CREATE_COMMENT_START,
    payload: comment,
})
export const createCommentSuccess = (payload) => ({
    type: types.CREATE_COMMENT_SUCCESS,
    payload
})
export const createCommentError = (error) => ({
    type: types.CREATE_COMMENT_ERROR,
    payload: error,
})

//DELETE COmment
export const deleteCommentStart = (id) => ({
    type: types.DELETE_COMMENT_START,
    payload: id,
})
export const deleteCommentSuccess = (id) => ({
    type: types.DELETE_COMMENT_SUCCESS,
    payload: id,
})
export const deleteCommentError = (error) => ({
    type: types.DELETE_COMMENT_ERROR,
    payload: error,
})
