import { News } from "../models/news";

export const NEWS_FETCH = "news fetch";
export const NEWS_FETCHED = "news fetched";

export const newsFetchAction = () => ({
  type: NEWS_FETCH,
});

export const newsFetchedAction = (news: News) => ({
  type: NEWS_FETCHED,
  payload: news,
});
