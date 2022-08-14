import { Reducer } from "redux";
import { AnyAction } from "redux";
import { News } from "../../models/news";
import { HEADLINES_FETCHED } from "../actions";

type HeadlinesState = {
  headlines?: News[];
};

const initialState: HeadlinesState = {
  headlines: [],
};

export const headlinesReducer: Reducer<HeadlinesState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case HEADLINES_FETCHED:
      const headlines = action.payload;
      return { ...state, headlines };
    default:
      return state;
  }
};
{
  headlines: {
  }
}
