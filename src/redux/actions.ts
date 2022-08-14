import { News } from "../models/news";

export const NEWS_FETCH = "news fetch";
export const NEWS_FETCHED = "news fetched";
export const HEADLINES_FETCH = "news headlines fetch";
export const HEADLINES_FETCHED = "news headlines fetched";

export const newsFetchAction = (query: string) => {
  return {
    type: NEWS_FETCH,
    payload: query,
  };
};

export const newsFetchedAction = (news: News) => ({
  type: NEWS_FETCHED,
  payload: { news },
});

export const newsHeadlinesFetchAction = () => {
  return {
    type: HEADLINES_FETCH,
  };
};

export const newsHeadlinesFetchedAction = (headlines: News) => ({
  type: HEADLINES_FETCHED,
  payload: headlines,
});
