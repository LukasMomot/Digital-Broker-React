import * as React from "react";
import styles from "./SearchPage.module.scss";
import { StockPrice } from "../../businessLogic/stockPrice";
import { useEffect, useState } from "react";
import {
  fetchMostTraded,
  fetchStockPrice,
} from "../../businessLogic/stocksService";
import SearchBar from "../components/search-bar/SearchBar";
import StockList from "../components/stock-list/StockList";
import { useDispatch } from "react-redux";
import { addStock, mostTradedFetched } from "../redux/actions";

const SearchPage: React.FC = () => {
  const [stocks, setStocks] = useState<StockPrice[]>([]);
  const dispatch = useDispatch();

  const search = async (symbol: string) => {
    console.log("Search will be executed for: " + symbol);
    const stock = await fetchStockPrice(symbol);
    setStocks([...stocks, stock]);

    dispatch(addStock(stock));
  };

  useEffect(() => {
    (async () => {
      let mostTraded = await fetchMostTraded();
      dispatch(mostTradedFetched(mostTraded));
      setStocks(mostTraded);
    })();
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Digital Broker React</h1>
      <SearchBar onTermChanged={(term) => search(term)}></SearchBar>
      <StockList></StockList>
    </div>
  );
};

export default SearchPage;
