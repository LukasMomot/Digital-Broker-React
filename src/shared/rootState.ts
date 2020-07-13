import {
  StocksState,
  initialState as initialStockState,
} from "./../stocks-search/components/redux/stocksState";

export interface RootState {
  readonly stocksState: StocksState;
}

const initialState: RootState = {
  stocksState: initialStockState,
};

export default initialState;