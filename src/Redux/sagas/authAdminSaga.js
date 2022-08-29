import { call, fork, put, takeLeading, all, takeEvery } from "@redux-saga/core/effects";
import { getUserAdmin } from "../../apis/authAdminApi";
import { actGetProfileFail, actGetProfileSuccess, actLoginFail, actLoginSuccess, actSetLoadingSuccess } from "../actions/actionAuthAdmin";
import * as types from '../actions/actionTypes';


function* login({ payload }) {
    yield put(actSetLoadingSuccess());

    try {
        const userAll = yield call(getUserAdmin);
        const email = payload.email;
        const password = payload.password;
        const account = userAll.filter(
            item => item.email === email && item.password === password
        )
        if (account.length > 0) {
            yield put(actLoginSuccess(...account))
        } else {
            yield put(actLoginFail(...account))
        }

    } catch (error) {
        yield put(actLoginFail());
    }
}

function* watchLoin() {
    yield takeLeading(types.LOGIN, login)
}

function* getProfile({ payload }) {
    try {
        const userAll = yield call(getUserAdmin);
        const email = payload.email;
        const password = payload.password;

        const profile = userAll.filter(
            item => item.email === email && item.password === password
        )
        yield put(actGetProfileSuccess(...profile))
    } catch (error) {
        yield put(actGetProfileFail());
    }
}

function* watchGetProfile() {
    yield takeEvery(types.GET_PROFILE, getProfile)
}

const authAdminSaga = [
    fork(watchLoin),
    fork(watchGetProfile),

];

export default function* rootAuthAdminSaga() {
    yield all([...authAdminSaga]);
}