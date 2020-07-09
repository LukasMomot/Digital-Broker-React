import * as React from "react";
import { StockPrice } from "../../businessLogic/stockPrice";
import { Table, Button } from "react-bootstrap";
import styles from "./StockList.module.scss";

interface IStockListProps {
  items: StockPrice[];
}

const StockList: React.FC<IStockListProps> = (props) => {
  const buy = (symbol: string) => console.log(`Buying stock ${symbol}`);
  const sell = (symbol: string) => console.log(`Selling stock ${symbol}`);

  const stockItems = props.items.map((stock) => (
    <tr key={stock.symbol}>
      <td>{stock.symbol}</td>
      <td>{stock.name}</td>
      <td>{stock.price}</td>
      <td className={styles.bsButtons}>
        <Button variant="success" onClick={() => buy(stock.symbol)}>
          Buy
        </Button>
        <Button variant="danger" onClick={() => sell(stock.symbol)}>
          Sell
        </Button>
      </td>
    </tr>
  ));

  return (
    <Table className={styles.stockTable} striped bordered hover>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company name</th>
          <th>Price ($)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{stockItems}</tbody>
    </Table>
  );
};

export default StockList;
