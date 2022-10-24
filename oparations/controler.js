export default function oparationsControler(user) {
  let inputRecharge = document.getElementById("carteira-input-recarga");
  inputRecharge.addEventListener("keypress", (e) => {
    e.key === "Enter" ? user.carteira.recharge() : null;
  });

  let buttonRecharge = document.getElementById("carteira-button-recarga");
  buttonRecharge.addEventListener("click", (e) => {
    e.preventDefault();
    user.carteira.recharge();
  });

  let buttonComprar = document.getElementById("sell-stock");
  setTransactionEventListner(buttonComprar);

  let buttonVender = document.getElementById("buy-stock");
  setTransactionEventListner(buttonVender);

  function setTransactionEventListner(element) {
    element.addEventListener("click", (e) => {
      e.preventDefault;
      let transactionOrder = element.innerText;
      user.executeOrder(transactionOrder);
    });
  }
}
