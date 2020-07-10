import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchStockPrice } from "../../businessLogic/stocksService";
import { useEffect, useState } from "react";
import { StockPrice } from "../../businessLogic/stockPrice";
import { useFormik } from "formik";

interface IBuySellPageProps {}

interface BuyAndSellModel {
  name: string;
  currentPrice: number;
  limitOrder: number;
  amount: number;
}

const BuySellPage: React.FunctionComponent<IBuySellPageProps> = (props) => {
  const { symbol } = useParams();
  const [stock, setStock] = useState<StockPrice>();

  const formik = useFormik({
    initialValues: {
      amount: 1,
      currentPrice: 0,
      limitOrder: 0,
      name: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    fetchStockPrice(symbol).then((stock) => {
      setStock(stock);
      formik.setFieldValue("currentPrice", stock?.price);
      formik.setFieldValue("limitOrder", stock?.price * 1.02);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h2>Buy Sell Page - Activated for {stock?.name}</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="currentPrice">Current Price</label>
        <input
          id="currentPrice"
          name="currentPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.currentPrice}
          disabled
        />

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.amount}
        />
        <label htmlFor="limitOrder">Limit</label>
        <input
          id="limitOrder"
          name="limitOrder"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.limitOrder}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuySellPage;
