export default function getSelectedStock() {

  let htmlSymbol = document.getElementById("stock-symbol");
  const symbol = htmlSymbol.textContent.toUpperCase();

  let htmlVolume = document.getElementById("stock-input-volume");
  const volume = htmlVolume.value;

  let htmlValue = document.getElementById("stock-value");
  const stockValue = htmlValue.innerText;

  const value = stockValue * volume;

  let unavailableStock = symbol.includes("NÃO DISPONIVEL");
  const isReal =
    symbol != "codigo da ação" && Fvolume > 0 && !unavailableStock;

  return {symbol, volume, stockValue, value, isReal}
}
