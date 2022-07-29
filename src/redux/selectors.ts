import { createSelector } from "reselect";
import { State } from "./store";

export const newsSelector = (n: State) => n.news;

export const newsHeadlinesSelector = (n: State) => n.headlines;

// export const newsEntitiesSelector = createSelector(
//   newsSelector,
//   (newsState) => newsState.
// );
