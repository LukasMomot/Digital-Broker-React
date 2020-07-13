import { stocskReducer } from "./../stocks-search/components/redux/stocksReducer";
import { RootState } from "./rootState";
import { combineReducers } from "redux";

const rootReducer = combineReducers<RootState>({
  stocksState: stocskReducer,
});

export default rootReducer;
