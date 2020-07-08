import * as React from "react";
import { StockPrice } from "../../businessLogic/stockPrice";
import { Table } from "react-bootstrap";
import styles from "./StockList.module.scss";

interface IStockListProps {
  items: StockPrice[];
}

const StockList: React.FC<IStockListProps> = (props) => {
  const stockItems = props.items.map((stock) => (
    <tr key={stock.symbol}>
      <td>{stock.symbol}</td>
      <td>{stock.name}</td>
      <td>{stock.price}</td>
    </tr>
  ));
  return (
    <Table className={styles.stockTable} striped bordered hover>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{stockItems}</tbody>
    </Table>
  );
};

export default StockList;
