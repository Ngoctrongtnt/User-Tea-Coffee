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
import { loadBannerApi, createBannerApi, deleteBannerApi, updateBannerApi } from "../../apis/bannerApi";
import {
    loadBannerSuccess,
    loadBannerError,
    createBannerSuccess,
    createBannerError,
    deleteBannerSuccess,
    deleteBannerError,
    updateBannerSuccess,
    updateBannerError
} from "../actions/bannerAction";

//load data users admin
export function* onLoadBannerStartAsync() {
    try {
        const res = yield call(loadBannerApi);
        if (res.status === 200) {
            yield delay(500);
            yield put(loadBannerSuccess(res.data));
        }
    } catch (error) {
        yield put(loadBannerError(error.res.data));
    }
}

function* onLoadBanner() {
    yield takeEvery(types.LOAD_BANNER_START, onLoadBannerStartAsync);
}

//create user admin
function* onCreateBannerStartAsync({ payload }) {
    try {
        const res = yield call(createBannerApi, payload);
        if (res.status === 201) {
            yield put(createBannerSuccess(res.data));
        }
    } catch (error) {
        yield put(createBannerError(error.res.data));
    }
}

export function* onCreateBanner() {
    yield takeLatest(types.CREATE_BANNER_START, onCreateBannerStartAsync);
}

//delete user admin
function* onDeleteBannerStartAsync(id) {
    try {
        const res = yield call(deleteBannerApi, id);
        if (res.status === 200) {
            yield delay(500);
            yield put(deleteBannerSuccess(id));
        }
    } catch (error) {
        yield put(deleteBannerError(error.id));
    }
}

function* onDeleteBanner() {
    while (true) {
        const { payload: id } = yield take(types.DELETE_BANNER_START);
        yield call(onDeleteBannerStartAsync, id)
    }
}

//update user admin

function* onUpdateBannerStartAsync({ payload: { id, dataValue } }) {
    try {
        const res = yield call(updateBannerApi, id, dataValue);
        if (res.status === 200) {
            yield put(updateBannerSuccess());
        }
    } catch (error) {
        yield put(updateBannerError(error.res.data))
    }
}

function* onUpdateBanner() {
    yield takeLatest(types.UPDATE_BANNER_START, onUpdateBannerStartAsync);
}

const bannersSaga = [
    fork(onLoadBanner),
    fork(onCreateBanner),
    fork(onDeleteBanner),
    fork(onUpdateBanner),
];

export default function* rootBannerSaga() {
    yield all([...bannersSaga]);
}
