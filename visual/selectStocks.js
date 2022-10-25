import canvas from "./displayGraph.js";
import getStockBySymbol from "../api/getStockBySymbol.js";

export default function selectStocks() {
  let allSelectStockButtons = document.querySelectorAll("[data-select-stock]");

  allSelectStockButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      displaySelectedStock(button.id);
    });
  });
}

async function displaySelectedStock(symbol) {
  let currentSymbol = document.getElementById("stock-symbol");
  currentSymbol.textContent = "Baixando dados da Ação...";

  let stock = await getStockBySymbol(symbol);

  currentSymbol.textContent = stock.symbol;

  let currentStockValue = document.getElementById("stock-value");
  currentStockValue.innerText = stock.closeValue;

  let currentStockCurrency = document.getElementById("stock-currency");
  currentStockCurrency.innerText = stock.currency;

  canvas(stock.history);

  scrollTop();
}

function scrollTop() {
  window.scrollTo(0, 0);
}
