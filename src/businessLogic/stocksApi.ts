import { StockPrice } from "./stockPrice";
import { http } from "./http";

export async function fetchMostTradedApi(): Promise<StockPrice[]> {
  const mostTradedMocked: StockPrice[] = [
    { symbol: "AAPL", name: "Apple", price: 100 },
    { symbol: "MSFT", name: "Microsoft", price: 65.56 },
    { symbol: "FB", name: "Facebook", price: 200.25 },
  ];

  let stocks = mostTradedMocked;

  try {
    stocks = await http<StockPrice[]>(
      "http://localhost:3001/stocks/mosttraded"
    );
  } catch (error) {
    console.error("Cannot fetch most traded stocks", error);
  }

  return stocks;
}
export async function fetchStockPriceApi(symbol: string): Promise<StockPrice> {
  return http<StockPrice>(`http://localhost:3001/stocks/${symbol}/price`);
}
