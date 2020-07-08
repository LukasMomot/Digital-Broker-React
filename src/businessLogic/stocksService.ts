import { StockPrice } from "./stockPrice";

export async function fetchMostTraded(): Promise<StockPrice[]> {
  const mostTraded: StockPrice[] = [
    { symbol: "AAPL", name: "Apple", price: 100 },
    { symbol: "MSFT", name: "Microsoft", price: 65.56 },
    { symbol: "FB", name: "Facebook", price: 200.25 },
  ];
  return Promise.resolve(mostTraded);
}
