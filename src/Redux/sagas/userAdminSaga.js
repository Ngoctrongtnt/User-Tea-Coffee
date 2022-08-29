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
import { loadUsersAdminApi, createUserAdminApi, deleteUserAdminApi, updateUserAdminApi } from "../../apis/userAdminApi";
import {
    loadUsersAdminSuccess,
    loadUsersAdminError,
    createUserAdminSuccess,
    createUserAdminError,
    deleteUserAdminSuccess,
    deleteUserAdminError,
    updateUserAdminSuccess,
    updateUserAdminError
} from "../actions/userAdminAction";

//load data users admin
export function* onLoadUsersStartAsync() {
    try {
        const res = yield call(loadUsersAdminApi);
        if (res.status === 200) {
            yield delay(500);
            yield put(loadUsersAdminSuccess(res.data));
        }
    } catch (error) {
        yield put(loadUsersAdminError(error.res.data));
    }
}

function* onLoadUsersAdmin() {
    yield takeEvery(types.LOAD_USERS_ADMIN_START, onLoadUsersStartAsync);
}

//create user admin
function* onCreateUserStartAsync({ payload }) {
    try {
        const res = yield call(createUserAdminApi, payload);
        if (res.status === 200) {
            yield put(createUserAdminSuccess(res.data));
        }
    } catch (error) {
        yield put(createUserAdminError(error.res.data));
    }
}

export function* onCreateUserAdmin() {
    yield takeLatest(types.CREATE_USER_ADMIN_START, onCreateUserStartAsync);
}

//delete user admin
function* onDeleteUserStartAsync(userId) {
    try {
        const res = yield call(deleteUserAdminApi, userId);
        if (res.status === 200) {
            yield delay(500);
            yield put(deleteUserAdminSuccess(userId));
        }
    } catch (error) {
        yield put(deleteUserAdminError(error.userId));
    }
}

function* onDeleteUserAdmin() {
    while (true) {
        const { payload: userId } = yield take(types.DELETE_USER_ADMIN_START);
        yield call(onDeleteUserStartAsync, userId)
    }
}

//update user admin

function* onUpdateUserStartAsync({ payload: { id, dataValue } }) {
    try {
        const res = yield call(updateUserAdminApi, id, dataValue);
        if (res.status === 200) {
            yield put(updateUserAdminSuccess());
        }
    } catch (error) {
        yield put(updateUserAdminError(error.res.data))
    }
}

function* onUpdateUserAdmin() {
    yield takeLatest(types.UPDATE_USER_ADMIN_START, onUpdateUserStartAsync);
}

const usersAdminSaga = [
    fork(onLoadUsersAdmin),
    fork(onCreateUserAdmin),
    fork(onDeleteUserAdmin),
    fork(onUpdateUserAdmin),
];

export default function* rootUsersAdminSaga() {
    yield all([...usersAdminSaga]);
}
