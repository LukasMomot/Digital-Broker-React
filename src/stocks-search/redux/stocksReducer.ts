import { StocksState, initialState } from "./stocksState";
import { Reducer } from "redux";
import {
  ADD_STOCK,
  AddStockAction,
  MostTradedFetchedAction,
  MOSTTRADED_FETCHED,
} from "./actions";

export const stocskReducer: Reducer<StocksState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_STOCK:
      console.log(action);
      return {
        ...state,
        userAddedStocks: [
          ...state.userAddedStocks,
          (action as AddStockAction).payload.stock,
        ],
        allStocks: [
          ...state.mostTradedStocks,
          ...state.userAddedStocks,
          (action as AddStockAction).payload.stock,
        ],
      };
    case MOSTTRADED_FETCHED:
      console.log("Most Traded fetched");
      return {
        ...state,
        mostTradedStocks: [
          ...(action as MostTradedFetchedAction).payload.mostTradedStocks,
        ],
        allStocks: [
          ...(action as MostTradedFetchedAction).payload.mostTradedStocks,
          ...state.userAddedStocks,
        ],
      };

    default:
      return state;
  }
};
