import getStockBySymbol from "../api/getStockBySymbol.js";

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

function selectStocks() {
  let selectButtonsList = document.querySelectorAll(".selecionar-acao");
  let selectButtonsMyStocks = document.querySelectorAll(".my-stock");
  let allSelectStockButtons = [...selectButtonsList, ...selectButtonsMyStocks];

  allSelectStockButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      displaySelectedStock(button.id);
    });
  });
}

async function displaySelectedStock(symbol) {
  let stock = await getStockBySymbol(symbol);

  let currentSymbol = document.querySelector(".current-stock__symbol");
  currentSymbol.textContent = stock.symbol;

  let currentStockValue = document.querySelector(".current-stock__value");
  currentStockValue.innerText = stock.closeValue;

  let currentStockCurrency = document.querySelector(".current-stock__currency");
  currentStockCurrency.innerText = stock.currency;

  scrollTop();
}

function scrollTop() {
  window.scrollTo(0, 0);
}
