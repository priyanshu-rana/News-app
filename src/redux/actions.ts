import { News } from "../models/news";
import { newsQuerySelector } from "./selectors";

export const NEWS_FETCH = "news fetch";
export const NEWS_FETCHED = "news fetched";
export const HEADLINES_FETCH = "news headlines fetch";
export const HEADLINES_FETCHED = "news headlines fetched";

export const newsFetchAction = (query: string) => ({
  type: NEWS_FETCH,
  payload: query,
});

export const newsFetchedAction = (query: string, news: News) => ({
  type: NEWS_FETCHED,
  payload: { query, news },
});

export const newsHeadlinesFetchAction = () => ({
  type: HEADLINES_FETCH,
});

export const newsHeadlinesFetchedAction = (headlines: News) => ({
  type: HEADLINES_FETCHED,
  payload: headlines,
});
