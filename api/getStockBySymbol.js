export default async function getStockBySymbol(symbol) {
  const response = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=30min&apikey=926922f13edb46ee9de17ccadecf3678&source=docs`
  );

  let stock = await response.json();
  try {
    let stockSymbol = stock.meta.symbol;
    let stockCloseValue = parseFloat(stock.values[0].close).toFixed(2);
    let stockCurrency = stock.meta.currency;
    let stockValues = stock.values;

    stock = {
      symbol: stockSymbol,
      closeValue: stockCloseValue,
      currency: stockCurrency,
      history: stockValues,
    };
  } catch {
    stock = {
      symbol: `Ação '${symbol}' não disponivel no momento`,
      closeValue: "0",
      currency: "USD",
      history: [],
    };
  }
  return stock;
}
