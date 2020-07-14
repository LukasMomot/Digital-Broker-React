import { RootState } from "./rootState";
import { combineReducers } from "redux";
import { stocskReducer } from "../stocks-search/redux/stocksReducer";

const rootReducer = combineReducers<RootState>({
  stocksState: stocskReducer,
});

export default rootReducer;
