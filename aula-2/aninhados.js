//aninhado: um dentro do outro

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "Joao@firma.com",
  telefone: ["11 929293923", "11 777888888"]
};

cliente.endereco = {
  rua: "Rua Joseph Climber",
  numero: 1332,
  apartamento: true,
  complemento: "ap 934"
};

console.log(cliente.endereco);