import { StocksState, initialState } from "./stocksState";
import { Reducer } from "redux";
import { ADD_STOCK, AddStockAction } from "./actions";

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
      };

    default:
      return state;
  }
};
