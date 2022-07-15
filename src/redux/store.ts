import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { NEWS_FETCHED } from "./actions";
import { newsReducer } from "./reducer/news";
import { rootSaga, sagaMiddleware } from "./sagas";

export type State = {
  news: any[];
};

const initialState: State = {
  news: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case NEWS_FETCHED:
      return { ...state, news: action.payload };
  }
};

// export const reducer = combineReducers({
//   news: newsReducer,
// });

// export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);
