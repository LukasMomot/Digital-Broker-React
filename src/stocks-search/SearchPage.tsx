import * as React from "react";
import styles from "./SearchPage.module.scss";
import SearchBar from "./search-bar/SearchBar";
import StockList from "./stock-list/StockList";
import { StockPrice } from "../businessLogic/stockPrice";
import { useEffect, useState } from "react";
import { fetchMostTraded } from "../businessLogic/stocksService";

const SearchPage: React.FC = () => {
  const [stocks, setStocks] = useState<StockPrice[]>([]);

  const search = (symbol: string) => {
    console.log("Search will be executed for: " + symbol);
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
