export default class SelectedStock {
  constructor() {
    let htmlSymbol = document.getElementById("stock-symbol");
    this.symbol = htmlSymbol.textContent.toUpperCase();

    let htmlVolume = document.getElementById("stock-input-volume");
    this.volume = htmlVolume.value;

    let htmlValue = document.getElementById("stock-value");
    this.stockValue = htmlValue.innerText;

    this.value = this.stockValue * this.volume;

    let unavailableStock = this.symbol.includes("NÃO DISPONIVEL");
    this.isReal =
      this.symbol != "codigo da ação" && this.volume > 0 && !unavailableStock;
  }
}
