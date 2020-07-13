import { StockPrice } from "./../../../businessLogic/stockPrice";

export interface StocksState {
  mostTradedStock: StockPrice[];
  userAddedStocks: StockPrice[];
  allStocks: StockPrice[];
}

export const initialState: StocksState = {
  mostTradedStock: [],
  userAddedStocks: [],
  allStocks: [],
};
