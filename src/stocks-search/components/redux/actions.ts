import { StockPrice } from "./../../../businessLogic/stockPrice";
import { Action } from "redux";

export const ADD_STOCK = "ADD_STOCK";

export interface AddStockAction extends Action {
  stock: StockPrice;
}
