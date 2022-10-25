import allStocks from "../src/codigos.json" assert { type: "json" };
import selectStocks from "./selectStocks.js";

export default function displayAllStocks() {
  displayStocks(allStocks);

  document.getElementById("valor-da-pesquisa").addEventListener("input", () => {
    pesquisa();
  });

  document.getElementById("pesquisar-ação").addEventListener("click", (e) => {
    e.preventDefault();
    pesquisa();
  });
}

function pesquisa() {
  let inputPesquisa = document.getElementById("valor-da-pesquisa");
  let key = inputPesquisa.value.toUpperCase();
  let match = allStocks.filter((stock) => stock.Symbol.includes(key));
  displayStocks(match);
  selectStocks();
}

function displayStocks(array) {
  let ul = document.getElementById("available-stocks");
  ul.innerText = "";

  array.forEach((stock) => {
    let buttonSelectStock = document.createElement("button");
    buttonSelectStock.textContent = stock.Symbol;
    buttonSelectStock.id = stock.Symbol;
    buttonSelectStock.classList.add("available-stocks__button");
    buttonSelectStock.dataset.selectStock = true;

    ul.appendChild(buttonSelectStock);
  });
}
