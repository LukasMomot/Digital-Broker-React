import { Action } from "redux";
import { StockPrice } from "../../businessLogic/stockPrice";

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
