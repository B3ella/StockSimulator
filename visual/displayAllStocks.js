import allStocks from "../src/codigos.json" assert { type: "json" };

export default function displayAllStocks() {
  allStocks.forEach((stock) => {
    let buttonSelectStock = document.createElement("button");
    buttonSelectStock.textContent = stock.Código;
    buttonSelectStock.id = stock.Código;
    buttonSelectStock.classList.add("selecionar-acao");

    let ul = document.querySelector(".stocks-disponiveis");
    ul.appendChild(buttonSelectStock);
  });
}
