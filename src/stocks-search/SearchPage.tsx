import * as React from "react";
import styles from "./SearchPage.module.scss";
import SearchBar from "./search-bar/SearchBar";
import StockList from "./stock-list/StockList";
import { StockPrice } from "../businessLogic/stockPrice";
import { useEffect, useState } from "react";
import {
  fetchMostTraded,
  fetchStockPrice,
} from "../businessLogic/stocksService";

const SearchPage: React.FC = () => {
  const [stocks, setStocks] = useState<StockPrice[]>([]);

  const search = async (symbol: string) => {
    console.log("Search will be executed for: " + symbol);
    const stock = await fetchStockPrice(symbol);
    setStocks([...stocks, stock]);
  };

  useEffect(() => {
    (async () => {
      let mostTraded = await fetchMostTraded();
      setStocks(mostTraded);
    })();
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Digital Broker React</h1>
      <SearchBar onTermChanged={(term) => search(term)}></SearchBar>
      <StockList items={stocks}></StockList>
    </div>
  );
};

export default SearchPage;
