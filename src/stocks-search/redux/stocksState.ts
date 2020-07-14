import { StockPrice } from "../../businessLogic/stockPrice";

export interface StocksState {
  mostTradedStocks: StockPrice[];
  userAddedStocks: StockPrice[];
  allStocks: StockPrice[];
}

export const initialState: StocksState = {
  mostTradedStocks: [],
  userAddedStocks: [],
  allStocks: [],
};
