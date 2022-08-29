import * as types from "../actions/actionTypes";
import { all, fork, takeEvery, call, delay, put, takeLatest, take } from "@redux-saga/core/effects";
import { createCommentApi, deleteCommentApi, loadCommentApi } from "../../apis/commentApi";
import { createCommentError, createCommentSuccess, deleteCommentError, deleteCommentSuccess, loadCommentError, loadCommentSuccess } from "../actions/commentAction";


//load data order
export function* onLoadCommentStartAsync() {
    try {
        const res = yield call(loadCommentApi);
        if (res.status === 200) {
            yield delay(500);
            yield put(loadCommentSuccess(res.data));
        }
    } catch (error) {
        yield put(loadCommentError(error.res.data));
    }
}

function* onLoadComment() {
    yield takeEvery(types.LOAD_COMMENT_START, onLoadCommentStartAsync);
}

//create Comment

export function* onCreateCommentStartAsync({ payload }) {
    try {
        const res = yield call(createCommentApi, payload);
        if (res.status === 201) {
            yield put(createCommentSuccess(res.data))
        }
    } catch (error) {
        yield put(createCommentError(error.res.data));
    }
}

function* onCreateComment() {
    yield takeLatest(types.CREATE_COMMENT_START, onCreateCommentStartAsync);
}

//delete Comment
function* onDeleteCommentStartAsync(id) {
    try {
        const res = yield call(deleteCommentApi, id);
        if (res.status === 200) {
            yield delay(500);
            yield put(deleteCommentSuccess(id));
        }
    } catch (error) {
        yield put(deleteCommentError(error.id));
    }
}

function* onDeleteComment() {
    while (true) {
        const { payload: id } = yield take(types.DELETE_COMMENT_START);
        yield call(onDeleteCommentStartAsync, id)
    }
}


const commentSaga = [
    fork(onLoadComment),
    fork(onCreateComment),
    fork(onDeleteComment),
];

export default function* rootCommentSaga() {
    yield all([...commentSaga]);
}