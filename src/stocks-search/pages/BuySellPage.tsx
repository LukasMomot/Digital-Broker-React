import * as React from "react";
import { useParams } from "react-router-dom";

interface IBuySellPageProps {}

const BuySellPage: React.FunctionComponent<IBuySellPageProps> = (props) => {
  const { symbol } = useParams();
  return <h2>Buy Sell Page - Activated for {symbol}</h2>;
};

export default BuySellPage;
