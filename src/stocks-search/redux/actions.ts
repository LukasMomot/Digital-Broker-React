import { Action } from "redux";
import { StockPrice } from "../../businessLogic/stockPrice";
import PayloadAction from "../../shared/payloadAction";
export const ADD_STOCK = "ADD_STOCK";
export const MOSTTRADED_FETCHED = "MOSTTRADED_FETCHED";

export interface AddStockAction extends PayloadAction<StockPrice> {}

export interface MostTradedFetchedAction extends Action {
  payload: { mostTradedStocks: StockPrice[] };
}
