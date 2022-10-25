import displayAllStocks from "./displayAllStocks.js";
import selectStocks from "./selectStocks.js";
import displayMyStocks from "./displayMyStocks.js";
export default function visualControler(user) {
  displayAllStocks();
  selectStocks();
  displayMyStocks(user.portifolio.stockList);
}
