export default async function getStockBySymbol(symbol) {
  const response = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=926922f13edb46ee9de17ccadecf3678&source=docs`
  );

  let stock = await response.json();
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
  return stock;
}
