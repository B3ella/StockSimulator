import canvas from "./displayGraph.js";
import getStockBySymbol from "../api/getStockBySymbol.js";

export default function selectStocks() {
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

  canvas(stock.history);
  scrollTop();
}

function scrollTop() {
  window.scrollTo(0, 0);
}
