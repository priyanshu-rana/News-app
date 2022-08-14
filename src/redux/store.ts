import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { headlinesReducer } from "./reducer/headlines";
import { newsReducer } from "./reducer/news";
import { rootSaga, sagaMiddleware } from "./sagas";

export const reducer = combineReducers({
  news: newsReducer,
  headlines: headlinesReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
