class Carteira {
  constructor() {
    this.saldo = 0;
    this.saldoIsInLocalStorage() ? this.downloadSaldo() : this.uploadSaldo();
  }
  saldoIsInLocalStorage() {
    return localStorage.getItem("saldo") != null;
  }

  downloadSaldo() {
    this.saldo = parseFloat(localStorage.getItem("saldo"));
    this.displaySaldo();
  }
  uploadSaldo() {
    localStorage.setItem("saldo", this.saldo);
    this.displaySaldo();
  }
  displaySaldo() {
    let saldoDaCarteira = document.querySelector(".carteira__saldo");
    saldoDaCarteira.innerText = this.saldo.toFixed(2);
  }

  adicionarSaldo(valor) {
    this.saldo += parseFloat(valor);
    this.uploadSaldo();
  }
  subtrairSaldo(valor) {
    if (this.saldo < valor) return false;
    this.saldo -= parseFloat(valor);
    this.uploadSaldo();
    return true;
  }

  recharge() {
    let inputRecharge = document.querySelector(".carteira__input-recarga");
    let valorDaRecarga = inputRecharge.value == "" ? 0 : inputRecharge.value;
    this.adicionarSaldo(valorDaRecarga);
    inputRecharge.value = "";
  }
}
export default Carteira;
