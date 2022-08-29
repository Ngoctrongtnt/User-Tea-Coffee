import * as types from "../actions/actionTypes";
import { all, fork, takeEvery, call, delay, put, takeLatest, take } from "@redux-saga/core/effects";
import { loadProductApi, createProductApi, deleteProductApi, updateProductApi } from "../../apis/productApi";
import {
    loadProductSuccess,
    loadProductError,
    createProductSuccess,
    createProductError,
    deleteProductSuccess,
    deleteProductError,
    updateProductSuccess,
    updateProductError

} from "../actions/productAction";

//load data products
export function* onLoadProductStartAsync() {
    try {
        const res = yield call(loadProductApi);
        if (res.status === 200) {
            yield delay(500);
            yield put(loadProductSuccess(res.data));
        }
    } catch (error) {
        yield put(loadProductError(error.res.data));
    }
}

function* onLoadProduct() {
    yield takeEvery(types.LOAD_PRODUCT_START, onLoadProductStartAsync);
}

//create PRODUCT
function* onCreateProductStartAsync({ payload }) {
    try {
        const res = yield call(createProductApi, payload);
        if (res.status === 201) {
            yield put(createProductSuccess(res.data));
        }
    } catch (error) {
        yield put(createProductError(error.res.data));
    }
}

export function* onCreateProduct() {
    yield takeLatest(types.CREATE_PRODUCT_START, onCreateProductStartAsync);
}

//delete PRODUCT
function* onDeleteProductStartAsync(id) {
    try {
        const res = yield call(deleteProductApi, id);
        if (res.status === 200) {
            yield delay(500);
            yield put(deleteProductSuccess(id));
        }
    } catch (error) {
        yield put(deleteProductError(error.id));
    }
}

function* onDeleteProduct() {
    while (true) {
        const { payload: id } = yield take(types.DELETE_PRODUCT_START);
        yield call(onDeleteProductStartAsync, id)
    }
}

//update PRODUCT

function* onUpdateProductStartAsync({ payload: { id, dataValue } }) {
    try {
        const res = yield call(updateProductApi, id, dataValue);
        if (res.status === 200) {
            yield put(updateProductSuccess());
        }
    } catch (error) {
        yield put(updateProductError(error.res.data))
    }
}

function* onUpdateProduct() {
    yield takeLatest(types.UPDATE_PRODUCT_START, onUpdateProductStartAsync);
}

const productSaga = [
    fork(onLoadProduct),
    fork(onCreateProduct),
    fork(onDeleteProduct),
    fork(onUpdateProduct),
];

export default function* rootProductSaga() {
    yield all([...productSaga]);
}
