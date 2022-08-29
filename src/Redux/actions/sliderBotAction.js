import * as types from "./actionTypes";

//load SLIDER
export const loadSliderStart = () => ({
    type: types.LOAD_SLIDER_START,
})
export const loadSliderSuccess = (slider) => ({
    type: types.LOAD_SLIDER_SUCCESS,
    payload: slider,
})
export const loadSliderError = (error) => ({
    type: types.LOAD_SLIDER_ERROR,
    payload: error,
})

//CREATE SLIDER
export const createSliderStart = (slider) => ({
    type: types.CREATE_SLIDER_START,
    payload: slider,
})
export const createSliderSuccess = () => ({
    type: types.CREATE_SLIDER_SUCCESS,
})
export const createSliderError = (error) => ({
    type: types.CREATE_SLIDER_ERROR,
    payload: error,
})

//DELETE SLIDER
export const deleteSliderStart = (id) => ({
    type: types.DELETE_SLIDER_START,
    payload: id,
})
export const deleteSliderSuccess = (id) => ({
    type: types.DELETE_SLIDER_SUCCESS,
    payload: id,
})
export const deleteSliderError = (error) => ({
    type: types.DELETE_SLIDER_ERROR,
    payload: error,
})

//UDATE SLIDER
export const updateSliderStart = (sliderInfo) => ({
    type: types.UPDATE_SLIDER_START,
    payload: sliderInfo,
})
export const updateSliderSuccess = () => ({
    type: types.UPDATE_SLIDER_SUCCESS,
})
export const updateSliderError = (error) => ({
    type: types.UPDATE_SLIDER_ERROR,
    payload: error,
})
