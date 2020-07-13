import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchStockPrice } from "../../businessLogic/stocksService";
import { useEffect, useState } from "react";
import { StockPrice } from "../../businessLogic/stockPrice";
import { useFormik } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "./BuySellPage.module.scss";

interface IBuySellPageProps {}

interface BuyAndSellModel {
  name: string;
  currentPrice: number;
  limitOrder: number;
  amountOfStocks: number;
}

const BuySellPage: React.FunctionComponent<IBuySellPageProps> = (props) => {
  const { symbol } = useParams();
  const [stock, setStock] = useState<StockPrice>();
  const router = useHistory();

  const formik = useFormik({
    initialValues: {
      amountOfStocks: 1,
      currentPrice: 0,
      limitOrder: 0,
      name: "",
      symbol: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      router.push("/");
    },
  });

  const onCancel = () => router.goBack();

  useEffect(() => {
    fetchStockPrice(symbol).then((stock) => {
      setStock(stock);
      formik.setFieldValue("currentPrice", stock?.price);
      formik.setFieldValue("limitOrder", (stock?.price * 1.02).toFixed(2));
      formik.setFieldValue("name", stock.name);
      formik.setFieldValue("symbol", stock.symbol);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h2 className={styles.heading}> Buy stock - {stock?.name}</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Symbol
          </Form.Label>
          <Col sm="5">
            <Form.Control
              id="symbol"
              plaintext
              readOnly
              value={formik.values.symbol}
              onChange={formik.handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              id="name"
              plaintext
              readOnly
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Current Price
          </Form.Label>
          <Col sm="5">
            <Form.Control
              id="currentPrice"
              plaintext
              readOnly
              onChange={formik.handleChange}
              value={formik.values.currentPrice}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Amount
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              id="amountOfStocks"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.amountOfStocks}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Limit price
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              id="limitOrder"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.limitOrder}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="success" type="submit">
              Buy
            </Button>
            <Button
              className={styles.btn_cancel}
              variant="danger"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default BuySellPage;
