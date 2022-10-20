import User from "./classes/user.js";
import SelectedStock from "./classes/selectedStock.js";

export default function teste() {
  localStorage.clear();
  let user = new User();
  testaCarteira(user);
  testaPortifolio(user);
  testeUser(user);
}

function testaCarteira(user) {
  test("carteira Inicia Vazia", user.carteira.saldo === 0);

  user.carteira.adicionarSaldo(50);
  test("saldo adicionado na carteira", user.carteira.saldo === 50);
  test(
    "saldo adicionado no localStorage",
    localStorage.getItem("saldo") === "50"
  );

  user.carteira.subtrairSaldo(30);
  test("saldo subtraido na carteira", user.carteira.saldo === 20);
  test(
    "saldo subtraido no localStorage",
    localStorage.getItem("saldo") === "20"
  );

  let user2 = new User();
  test("carteira referencia upload", user2.carteira.saldo === 20);

  user.carteira.saldo = 0;
  user.carteira.uploadSaldo();
  test("atualiza upload 1", localStorage.getItem("saldo") === "0");

  user.carteira.saldo = 2;
  user.carteira.uploadSaldo();
  test("atualiza upload 2", localStorage.getItem("saldo") === "2");

  user.carteira.saldo = 3;
  user.carteira.uploadSaldo();
  test("atualiza upload 3", localStorage.getItem("saldo") === "3");

  document.querySelector(".carteira__input-recarga").value = 50;
  user.carteira.recharge();
  test("recarregar", user.carteira.saldo === 53);
}

function testaPortifolio(user) {
  test("stockList Inicia Vazia", user.portifolio.stockList.length === 0);
  test(
    "stockList Is In LocalStorage",
    user.portifolio.stockListIsInLocalStorage()
  );
  user.portifolio.addStock({ volume: "1", symbol: "TESTE" });
  test(
    "add stock",
    user.portifolio.stockList[0].symbol === "TESTE" &&
      user.portifolio.stockList.length === 1
  );

  user.portifolio.addStock({ volume: "1", symbol: "TESTE" });
  test(
    "add stock 2",
    user.portifolio.stockList[0].symbol === "TESTE" &&
      user.portifolio.stockList[0].volume === 2 &&
      user.portifolio.stockList.length === 1
  );

  user.portifolio.removeStock({ volume: "1", symbol: "TESTE" });
  test(
    "remove stock",
    user.portifolio.stockList[0].symbol === "TESTE" &&
      user.portifolio.stockList.length === 1
  );
  let user2 = new User();
  test(
    "stockList referencia localStorage",
    user2.portifolio.stockList.length === 1
  );
  user.portifolio.stockList = [];
  user.portifolio.uploadStockList();
  test("stockList upload", localStorage.getItem("stockList") === "[]");
}

function testaselectedStock() {
  document.querySelector(".current-stock__symbol").textContent = "teste";
  document.querySelector(".current-stock__input-volume").value = 2;
  document.querySelector(".current-stock__value").innerText = 10;
  let selectedStock = new SelectedStock();
  test("stock Symbol", selectedStock.symbol === "TESTE");
  test("stock volume", selectedStock.volume === "2");
  test("stock value", selectedStock.stockValue === "10");
  test("stock is real", selectedStock.isReal);
}

function testeUser(user) {
  testaselectedStock();
  let carteiraValor1 = user.carteira.saldo;
  user.executeOrder("buy");
  test("valor Certo Descontado", carteiraValor1 === user.carteira.saldo + 20);
  test(
    "Ações adicionadas",
    localStorage.getItem("stockList") == '[{"symbol":"TESTE","volume":2}]'
  );
  user.executeOrder("sell");
  test("valor Certo adicionado", carteiraValor1 === user.carteira.saldo);
  test("Ações removidas", localStorage.getItem("stockList") === "[]");

  user.executeOrder("sell");
  test(
    "não executa ação de venda impossível carteira",
    carteiraValor1 === user.carteira.saldo
  );
  test(
    "não executa ação de venda impossível stocklist",
    localStorage.getItem("stockList") === "[]"
  );

  user.carteira.saldo = 0;
  user.executeOrder("buy");
  test(
    "não executa ação de venda impossível carteira",
    user.carteira.saldo === 0
  );
  test(
    "não executa ação de venda impossível stocklist",
    localStorage.getItem("stockList") === "[]"
  );
}

function test(nomeDoTeste, resultadoDoTeste) {
  console.log(nomeDoTeste + ": " + resultadoDoTeste);
}
