import { StocksState, initialState } from "./stocksState";
import { Reducer } from "redux";
import { ADD_STOCK, AddStockAction } from "./actions";

export const stocskReducer: Reducer<StocksState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_STOCK:
      const currentAction: AddStockAction = action as any;
      console.log(currentAction);
      return {
        ...state,
        userAddedStocks: [...state.userAddedStocks, currentAction.stock],
      };

    default:
      return state;
  }
};
