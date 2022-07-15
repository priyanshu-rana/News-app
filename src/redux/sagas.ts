import createSagaMiddleware from "@redux-saga/core";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { getNews, getNewsHeadlines } from "../api";
import { newsFetchedAction, NEWS_FETCH } from "./actions";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchNewsSaga(): Generator<any, any, any> {
  const data = yield call(getNewsHeadlines);
  yield put(newsFetchedAction(data));
}

export function* rootSaga() {
  yield takeEvery(NEWS_FETCH, fetchNewsSaga);
}
