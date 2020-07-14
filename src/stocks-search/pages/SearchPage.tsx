import * as React from "react";
import styles from "./SearchPage.module.scss";
import { useEffect } from "react";
import { fetchStockPrice } from "../../businessLogic/stocksService";
import SearchBar from "../components/search-bar/SearchBar";
import StockList from "../components/stock-list/StockList";
import { useDispatch } from "react-redux";
import { addStock, fetchMostraded } from "../redux/actions";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();

  const search = async (symbol: string) => {
    console.log("Search will be executed for: " + symbol);
    const stock = await fetchStockPrice(symbol);
    dispatch(addStock(stock));
  };

  useEffect(() => {
    dispatch(fetchMostraded());
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
