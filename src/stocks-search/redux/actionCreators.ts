import { ActionCreator } from "redux";
import { AppThunk } from "../../shared/appThunk";
import {
    fetchStockPriceApi,
    fetchMostTradedApi,
} from "../../businessLogic/stocksApi";
import {
    ADD_STOCK,
    AddStockAction,
    MostTradedFetchedAction,
    MOSTTRADED_FETCHED,
} from "./actions";
import { StockPrice } from "../../businessLogic/stockPrice";

export const addStock: ActionCreator<AppThunk> = (symbol: string) => {
    return async (dispatch, getState) => {
        if (getState().stocksState.userAddedStocks.find(s => s.symbol === symbol)) {
            console.log("Stock was already added list");
            return;
        }
        const stock = await fetchStockPriceApi(symbol);

        return dispatch({ type: ADD_STOCK, payload: stock } as AddStockAction);
    };
};

export function mostTradedFetched(mostTraded: StockPrice[]): MostTradedFetchedAction {
    return {
        type: MOSTTRADED_FETCHED,
        payload: { mostTradedStocks: mostTraded },
    };
}

export const fetchMostraded: ActionCreator<AppThunk> = (symbol: string) => {
    return async (dispatch, getState) => {
        const mostTraded = await fetchMostTradedApi();
        return dispatch(mostTradedFetched(mostTraded));
    };
};
