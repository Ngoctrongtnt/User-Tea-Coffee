import * as types from "../actions/actionTypes";
import {
    all,
    fork,
    takeEvery,
    call,
    delay,
    put,
    takeLatest,
    take
} from "@redux-saga/core/effects";
import { loadSliderApi, createSliderApi, deleteSliderApi, updateSliderApi } from "../../apis/SliderBotApi";
import {
    loadSliderSuccess,
    loadSliderError,
    createSliderSuccess,
    createSliderError,
    deleteSliderSuccess,
    deleteSliderError,
    updateSliderSuccess,
    updateSliderError
} from "../actions/sliderBotAction";

//load data users admin
export function* onLoadSliderStartAsync() {
    try {
        const res = yield call(loadSliderApi);
        if (res.status === 200) {
            yield delay(500);
            yield put(loadSliderSuccess(res.data));
        }
    } catch (error) {
        yield put(loadSliderError(error.res.data));
    }
}

function* onLoadSlider() {
    yield takeEvery(types.LOAD_SLIDER_START, onLoadSliderStartAsync);
}

//create user admin
function* onCreateSliderStartAsync({ payload }) {
    try {
        const res = yield call(createSliderApi, payload);
        if (res.status === 200) {
            yield put(createSliderSuccess(res.data));
        }
    } catch (error) {
        yield put(createSliderError(error.res.data));
    }
}

export function* onCreateSlider() {
    yield takeLatest(types.CREATE_SLIDER_START, onCreateSliderStartAsync);
}

//delete user admin
function* onDeleteSliderStartAsync(id) {
    try {
        const res = yield call(deleteSliderApi, id);
        if (res.status === 200) {
            yield delay(500);
            yield put(deleteSliderSuccess(id));
        }
    } catch (error) {
        yield put(deleteSliderError(error.id));
    }
}

function* onDeleteSlider() {
    while (true) {
        const { payload: id } = yield take(types.DELETE_SLIDER_START);
        yield call(onDeleteSliderStartAsync, id)
    }
}

//update user admin

function* onUpdateSliderStartAsync({ payload: { id, dataValue } }) {
    try {
        const res = yield call(updateSliderApi, id, dataValue);
        if (res.status === 200) {
            yield put(updateSliderSuccess());
        }
    } catch (error) {
        yield put(updateSliderError(error.res.data))
    }
}

function* onUpdateSlider() {
    yield takeLatest(types.UPDATE_SLIDER_START, onUpdateSliderStartAsync);
}

const slidersSaga = [
    fork(onLoadSlider),
    fork(onCreateSlider),
    fork(onDeleteSlider),
    fork(onUpdateSlider),
];

export default function* rootSliderSaga() {
    yield all([...slidersSaga]);
}
