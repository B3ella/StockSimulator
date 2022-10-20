import displayMyStocks from "../visual/displayMyStocks.js";

export default class Portifolio {
  constructor() {
    this.stockList = [];
    this.stockListIsInLocalStorage()
      ? this.downloadStockList()
      : this.uploadStockList();
  }
  stockListIsInLocalStorage() {
    return localStorage.getItem("stockList") != null;
  }

  downloadStockList() {
    this.stockList = JSON.parse(localStorage.getItem("stockList"));
    this.displayMyStocks();
  }
  uploadStockList() {
    localStorage.setItem("stockList", JSON.stringify(this.stockList));
    this.displayMyStocks();
  }
  displayMyStocks() {
    displayMyStocks(this.stockList);
  }

  removeStock(stock) {
    let newStock = new Stock(stock);
    let stockInArray = this.stockList.find((e) => e.symbol === newStock.symbol);
    let index = this.stockList.indexOf(stockInArray);

    let canRemove = index >= 0 && stockInArray.volume >= newStock.volume;

    if (!canRemove) return false;

    let shouldDeleteStock = stockInArray.volume === newStock.volume;

    shouldDeleteStock
      ? this.stockList.splice(index, 1)
      : (stockInArray.volume -= stock.volume);

    this.uploadStockList();
    return true;
  }

  addStock(stock) {
    let newStock = new Stock(stock);
    let stockInArray = this.stockList.find((e) => e.symbol === newStock.symbol);

    stockInArray == undefined
      ? this.stockList.push(newStock)
      : (stockInArray.volume += newStock.volume);

    this.uploadStockList();
  }
}

class Stock {
  constructor(stock) {
    this.symbol = stock.symbol.toUpperCase();
    this.volume = parseInt(stock.volume);
  }
}
