import Carteira from "./carteira.js";
import Portifolio from "./portifolio.js";
import getSelectedStock from "./selectedStock.js";
export default class User {
  constructor() {
    this.carteira = new Carteira();
    this.portifolio = new Portifolio();
  }

  executeOrder(transactionOrderType) {
    let selectedStock = getSelectedStock()
    if (!selectedStock.isReal) return;

    this[transactionOrderType.toLowerCase()](selectedStock);
  }

  buy(selectedStock) {
    this.carteira.subtrairSaldo(selectedStock.value)
      ? this.portifolio.addStock(selectedStock)
      : null;
  }

  sell(selectedStock) {
    this.portifolio.removeStock(selectedStock)
      ? this.carteira.adicionarSaldo(selectedStock.value)
      : null;
  }
}
