import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchStockPrice } from "../../businessLogic/stocksService";
import { useEffect, useState } from "react";
import { StockPrice } from "../../businessLogic/stockPrice";

interface IBuySellPageProps {}

const BuySellPage: React.FunctionComponent<IBuySellPageProps> = (props) => {
  const { symbol } = useParams();
  const [stock, setStock] = useState<StockPrice>();

  useEffect(() => {
    fetchStockPrice(symbol).then((stock) => setStock(stock));
  }, [symbol]);

  return <h2>Buy Sell Page - Activated for {stock?.name}</h2>;
};

export default BuySellPage;
