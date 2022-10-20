export default function oparationsControler(user) {
  let inputRecharge = document.querySelector(".carteira__input-recarga");
  inputRecharge.addEventListener("keypress", (e) => {
    e.key === "Enter" ? user.carteira.recharge() : null;
  });

  let buttonRecharge = document.querySelector(".carteira__button-recarga");
  buttonRecharge.addEventListener("click", (e) => {
    e.preventDefault();
    user.carteira.recharge();
  });

  let buttonComprar = document.querySelector(".current-stock__button-comprar");
  setTransactionEventListner(buttonComprar);

  let buttonVender = document.querySelector(".current-stock__button-vender");
  setTransactionEventListner(buttonVender);

  function setTransactionEventListner(element) {
    element.addEventListener("click", (e) => {
      e.preventDefault;
      let transactionOrder = element.innerText;
      user.executeOrder(transactionOrder);
    });
  }
}
