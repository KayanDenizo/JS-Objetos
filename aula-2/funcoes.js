const cliente = {
  nome: "Joao",
  idade: 24,
  email: "Joao@firma.com",
  telefone: ["11 929293923", "11 777888888"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if(valor > this.saldo) {
      console.log("Saldo Insuficiente");
    }
    else{
      this.saldo -= valor;
      console.log(`Pagamento Realizado. Novo saldo: ${this.saldo}`);
    }
  }
};

cliente.efetuaPagamento(25);