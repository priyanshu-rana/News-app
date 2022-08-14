import { State } from "./store";

export const newsSelector = (n: any) => {
  if (n.news.news.news) {
    return n.news.news.news;
  } else {
    return [];
  }
};

export const newsHeadlinesSelector = (n: State) => {
  return n.headlines.headlines;
};
