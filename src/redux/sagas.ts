import createSagaMiddleware from "@redux-saga/core";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { getNews, getNewsHeadlines } from "../api";
import {
  newsFetchedAction,
  newsFetchAction,
  NEWS_FETCH,
  NEWS_FETCHED,
  NEWS_HEADLINES_FETCH,
  newsHeadlinesFetchedAction,
} from "./actions";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchNewsSaga(action: AnyAction): Generator<any, any, any> {
  const newsTitle: string = action.payload;
  const data = yield call(getNews, newsTitle);
  yield put(newsFetchedAction(data));
}

export function* fetchNewsHeadinesSaga(): Generator<any, any, any> {
  const data = yield call(getNewsHeadlines);
  yield put(newsHeadlinesFetchedAction(data));
}

export function* rootSaga() {
  // yield takeEvery(NEWS_FETCH, fetchNewsSaga);
  yield takeEvery(NEWS_HEADLINES_FETCH, fetchNewsHeadinesSaga);
}
