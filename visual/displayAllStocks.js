import allStocks from "../src/codigos.json" assert { type: "json" };

export default function displayAllStocks() {
  allStocks.forEach((stock) => {
    let buttonSelectStock = document.createElement("button");
    buttonSelectStock.textContent = stock.Código;
    buttonSelectStock.id = stock.Código;
    buttonSelectStock.classList.add("available-stocks__button");
    buttonSelectStock.dataset.selectStock = true;

    let ul = document.getElementById("available-stocks");
    ul.appendChild(buttonSelectStock);
  });
}
