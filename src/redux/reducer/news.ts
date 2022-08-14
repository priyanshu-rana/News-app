import { Reducer } from "redux";
import { News } from "../../models/news";
import { NEWS_FETCH, NEWS_FETCHED } from "../actions";

type NewsState = {
  news: News[];
};

const initialState: NewsState = {
  news: [],
};

export const newsReducer: Reducer<NewsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NEWS_FETCH:
      return { ...state, query: action.paylod };

    case NEWS_FETCHED:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
