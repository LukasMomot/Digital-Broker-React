import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchStockPrice } from "../../businessLogic/stocksService";
import { useEffect, useState } from "react";
import { StockPrice } from "../../businessLogic/stockPrice";
import { useFormik } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "./BuySellPage.module.scss";
import * as Yup from 'yup';
import { toast } from "react-toastify";

interface IBuySellPageProps { }

interface BuyAndSellModel {
  name: string;
  currentPrice: number;
  limitOrder: number;
  amountOfStocks: number;
}

const BuySellPage: React.FunctionComponent<IBuySellPageProps> = (props) => {
  const { symbol } = useParams<{symbol: string}>();
  const [stock, setStock] = useState<StockPrice>();
  const router = useHistory();
  const validationSchema = Yup.object().shape<Partial<BuyAndSellModel>>({
    amountOfStocks: Yup.number()
      .min(1, 'You need to buy and least one stock')
      .required('Field is required'),
    limitOrder: Yup.number()
      .moreThan(0, 'Your limit should be greater than 0')
      .required('Field is required')
  });

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
      toast.success('🚀 Wow you bought a stock. Congratulations!!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      router.push("/");
    },
    validationSchema: validationSchema,
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
              onBlur={formik.handleBlur}
              value={formik.values.amountOfStocks}
            ></Form.Control>
            {formik.errors.amountOfStocks && formik.touched.amountOfStocks && <div className={styles.error}>{formik.errors.amountOfStocks}</div>}
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
              onBlur={formik.handleBlur}
              value={formik.values.limitOrder}
            ></Form.Control>
            {formik.errors.limitOrder && formik.touched.limitOrder && <div className={styles.error} >{formik.errors.limitOrder}</div>}
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button disabled={!formik.isValid} variant="success" type="submit">
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
