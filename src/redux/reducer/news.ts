import { Reducer } from "redux";
import { News } from "../../models/news";
import { NEWS_FETCH, NEWS_FETCHED } from "../actions";

type NewsState = {
  news: News[];
  query: string;
};

const initialState: NewsState = {
  news: [],
  query: "",
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
  // switch (action.type) {
  //   case NEWS_FETCH:
  //     return {
  //       ...state,
  //     };
  //   case NEWS_FETCHED:
  //     // const news: News = action.payload;
  //     return { ...state, news: action.payload };

  //   default:
  //     return state;
  // }
};
