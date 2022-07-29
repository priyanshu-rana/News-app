import { News } from "../models/news";

export const NEWS_FETCH = "news fetch";
export const NEWS_FETCHED = "news fetched";
export const NEWS_HEADLINES_FETCH = "news headlines fetch";
export const NEWS_HEADLINES_FETCHED = "news headlines fetched";

export const newsFetchAction = () => ({
  type: NEWS_FETCH,
});

export const newsFetchedAction = (news: News) => ({
  type: NEWS_FETCHED,
  payload: news,
});

export const newsHeadlinesFetchAction = () => ({
  type: NEWS_HEADLINES_FETCH,
});

export const newsHeadlinesFetchedAction = (headlines: News) => ({
  type: NEWS_HEADLINES_FETCHED,
  payload: headlines,
});
