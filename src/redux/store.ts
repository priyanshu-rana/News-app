import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { News } from "../models/news";
import { NEWS_FETCHED, NEWS_HEADLINES_FETCHED } from "./actions";
import { newsReducer } from "./reducer/news";
import { rootSaga, sagaMiddleware } from "./sagas";

export type State = {
  news: News[];
  headlines: News[];
};

const initialState: State = {
  news: [],
  headlines: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case NEWS_FETCHED:
      return { ...state, news: action.payload };

    case NEWS_HEADLINES_FETCHED:
      return { ...state, headlines: action.payload };
    default:
      return state;
  }
};

// export const reducer = combineReducers({
//   news: newsReducer,
// });

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
