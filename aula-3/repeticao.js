const cliente = {
  nome: "Joao",
  idade: 24,
  email: "Joao@firma.com",
  telefone: ["11 929293923", "11 777888888"]
};

cliente.enderecos = [
  {
    rua: "Rua Joseph Climber",
    numero: 1332,
    apartamento: true,
    complemento: "ap 934"
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave é ${chave} e o valor é ${cliente[chave]}`);
  }
}