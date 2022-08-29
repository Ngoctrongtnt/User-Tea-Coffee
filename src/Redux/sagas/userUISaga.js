import * as types from "../actions/actionTypes";
import { all, fork, takeEvery, call, delay, put, takeLatest, take } from "@redux-saga/core/effects";
import { loadUsersUIApi, createUserUIApi, deleteUserUIApi, updateUserUIApi } from "../../apis/userUIApi";
import {
    loadUsersUISuccess,
    loadUsersUIError,
    createUserUIError,
    createUserUISuccess,
    deleteUserUIError,
    deleteUserUISuccess,
    updateUserUIError,
    updateUserUISuccess
} from "../actions/userUIAction";


//load data usersUI
export function* onLoadUsersStartAsync() {
    try {
        const res = yield call(loadUsersUIApi);
        if (res.status === 200) {
            yield delay(500);
            yield put(loadUsersUISuccess(res.data));
        }
    } catch (error) {
        yield put(loadUsersUIError(error.res.data));
    }
}

function* onLoadUsersUI() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

//create user admin
function* onCreateUserUIStartAsync({ payload }) {
    try {
        const res = yield call(createUserUIApi, payload);
        if (res.status === 200) {
            yield put(createUserUISuccess(res.data));
        }
    } catch (error) {
        yield put(createUserUIError(error.res.data));
    }
}

export function* onCreateUserUI() {
    yield takeLatest(types.CREATE_USERUI_START, onCreateUserUIStartAsync);
}

//delete user admin
function* onDeleteUserUIStartAsync(id) {
    try {
        const res = yield call(deleteUserUIApi, id);
        if (res.status === 200) {
            yield delay(500);
            yield put(deleteUserUISuccess(id));
        }
    } catch (error) {
        yield put(deleteUserUIError(error.id));
    }
}

function* onDeleteUserUI() {
    while (true) {
        const { payload: id } = yield take(types.DELETE_USERUI_START);
        yield call(onDeleteUserUIStartAsync, id)
    }
}

//update user admin

function* onUpdateUserUIStartAsync({ payload: { id, dataValue } }) {
    try {
        const res = yield call(updateUserUIApi, id, dataValue);
        if (res.status === 200) {
            yield put(updateUserUISuccess());
        }
    } catch (error) {
        yield put(updateUserUIError(error.res.data))
    }
}

function* onUpdateUserUI() {
    yield takeLatest(types.UPDATE_USERUI_START, onUpdateUserUIStartAsync);
}

const usersUISaga = [
    fork(onLoadUsersUI),
    fork(onCreateUserUI),
    fork(onDeleteUserUI),
    fork(onUpdateUserUI),
];

export default function* rootUsersUISaga() {
    yield all([...usersUISaga]);
}