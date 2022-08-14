import { Reducer } from "redux";
import { AnyAction } from "redux";
import { News } from "../../models/news";
import { HEADLINES_FETCHED } from "../actions";

type HeadlinesState = {
  headlines: News[];
};

const initialState: HeadlinesState = {
  headlines: [],
};

export const headlinesReducer: Reducer<HeadlinesState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case HEADLINES_FETCHED:
      return { ...state, headlines: action.payload };
    default:
      return state;
  }
};
