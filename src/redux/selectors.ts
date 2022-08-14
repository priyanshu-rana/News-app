import { createSelector } from "reselect";
import { State } from "./store";

export const newsSelector = (n: State) => n.news;

export const newsHeadlinesSelector = (n: State) => n.headlines;

// export const newsEntitiesSelector = createSelector(
//   newsSelector,
//   (newsState) => newsState.
// );

export const newsQuerySelector = (n: State) => n.news.query;
// export const newsQuerySelector = createSelector(
//   newsSelector,
//   (newsQuery) => newsQuery.newsQuery
// );
