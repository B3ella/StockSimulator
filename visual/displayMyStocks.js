import selectStocks from "./selectStocks.js";

export default function displayMyStocks(myStocks) {
  let stockDisplay = document.querySelector(".my-stocks__body");
  stockDisplay.innerHTML = "";

  myStocks.forEach((stock) => {
    let stockElement = createHTMLElementForStock(stock);
    stockDisplay.appendChild(stockElement);
  });

  selectStocks();
}

function createHTMLElementForStock(stock) {
  let stockElement = document.createElement("tr");
  stockElement.id = stock.symbol;
  stockElement.className = "my-stock";
  stockElement.innerHTML = `<td>${stock.symbol}</td><td>${stock.volume}</td>`;
  return stockElement;
}
