export default class SelectedStock {
  constructor() {
    let htmlSymbol = document.querySelector(".current-stock__symbol");
    this.symbol = htmlSymbol.textContent.toUpperCase();

    let htmlVolume = document.querySelector(".current-stock__input-volume");
    this.volume = htmlVolume.value;

    let htmlValue = document.querySelector(".current-stock__value");
    this.stockValue = htmlValue.innerText;

    this.value = this.stockValue * this.volume;

    this.isReal = this.symbol != "codigo da ação" && this.volume > 0;
  }
}
