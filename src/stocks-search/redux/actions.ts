import { RootState } from "./../../shared/rootState";
import { Action, ActionCreator } from "redux";
import { StockPrice } from "../../businessLogic/stockPrice";
import { ThunkAction } from "redux-thunk";
import { fetchMostTradedApi } from "../../businessLogic/stocksService";
export const ADD_STOCK = "ADD_STOCK";
export const MOSTTRADED_FETCHED = "MOSTTRADED_FETCHED";

export interface AddStockAction extends Action {
  payload: { stock: StockPrice };
}

export interface MostTradedFetchedAction extends Action {
  payload: { mostTradedStocks: StockPrice[] };
}

export function addStock(stock: StockPrice): AddStockAction {
  return {
    type: ADD_STOCK,
    payload: { stock },
  };
}

export function mostTradedFetched(
  mostTraded: StockPrice[]
): MostTradedFetchedAction {
  return {
    type: MOSTTRADED_FETCHED,
    payload: { mostTradedStocks: mostTraded },
  };
}

// TODO: Need to be used
// https://redux.js.org/recipes/usage-with-typescript
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const fetchMostraded: ActionCreator<ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>> = (symbol: string) => {
  return async (dispatch, getState) => {
    const mostTraded = await fetchMostTradedApi();
    console.log("FETCHING FROM API MOST TRADED");

    return dispatch(mostTradedFetched(mostTraded));
  };
};
