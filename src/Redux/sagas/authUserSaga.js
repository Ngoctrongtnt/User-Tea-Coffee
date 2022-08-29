import { call, fork, put, takeLeading, all, takeEvery } from "@redux-saga/core/effects";
import { getUserUI } from "../../apis/authAdminApi";
import { actGetProfileUIFail, actGetProfileUISuccess, actLoginUIFail, actLoginUISuccess, actSetLoadingUISuccess } from "../actions/actionAuthUser";
import * as types from '../actions/actionTypes';


function* loginUI({ payload }) {
    yield put(actSetLoadingUISuccess());

    try {
        const userAll = yield call(getUserUI);
        const email = payload.email;
        const password = payload.password;
        const account = userAll.filter(
            item => item.email === email && item.password === password
        )
        if (account.length > 0) {
            yield put(actLoginUISuccess(...account))
        } else {
            yield put(actLoginUIFail(...account))
        }

    } catch (error) {
        yield put(actLoginUIFail());
    }
}

function* watchLoginUI() {
    yield takeLeading(types.LOGIN_UI, loginUI)
}

function* getProfileUI({ payload }) {
    try {
        const userAll = yield call(getUserUI);
        const email = payload.email;
        const password = payload.password;

        const profile = userAll.filter(
            item => item.email === email && item.password === password
        )
        yield put(actGetProfileUISuccess(...profile))
    } catch (error) {
        yield put(actGetProfileUIFail());
    }
}

function* watchGetProfileUI() {
    yield takeEvery(types.GET_PROFILE_UI, getProfileUI)
}

const authUserSaga = [
    fork(watchLoginUI),
    fork(watchGetProfileUI),

];

export default function* rootAuthUserSaga() {
    yield all([...authUserSaga]);
}