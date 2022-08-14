import createSagaMiddleware from "@redux-saga/core";
import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { getNews, getNewsHeadlines } from "../api";
import {
  NEWS_FETCH,
  HEADLINES_FETCH,
  newsHeadlinesFetchedAction,
  newsFetchedAction,
} from "./actions";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchNewsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(300);

  // if (!action.payload) {
  //   return;
  // }
  const query = action.payload;

  const data = yield call(getNews, query);
  yield put(newsFetchedAction(query, data));
}

export function* fetchNewsHeadinesSaga(): Generator<any, any, any> {
  const data = yield call(getNewsHeadlines);
  yield put(newsHeadlinesFetchedAction(data));
}

export function* rootSaga() {
  yield takeLatest(NEWS_FETCH, fetchNewsSaga);
  yield takeEvery(HEADLINES_FETCH, fetchNewsHeadinesSaga);
}
