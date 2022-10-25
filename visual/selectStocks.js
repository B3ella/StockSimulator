import { displayGraph, clearCanva } from "./displayGraph.js";
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
  scrollTop();
  clearCanva();

  let currentSymbol = document.getElementById("stock-symbol");
  currentSymbol.textContent = "Baixando dados da Ação...";
  let currentStockValue = document.getElementById("stock-value");
  currentStockValue.textContent = "";
  let currentStockCurrency = document.getElementById("stock-currency");
  currentStockCurrency.textContent = "";

  let stock = await getStockBySymbol(symbol);

  currentSymbol.textContent = stock.symbol;
  currentStockValue.innerText = stock.closeValue;
  currentStockCurrency.innerText = stock.currency;

  displayGraph(stock.history);
}

function scrollTop() {
  document.getElementById("available-stocks").scrollTo(0, 0);
}
