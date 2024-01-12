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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  //O "!" serve para negar
  console.error("Erro, é necessário ter um endereço cadastrado.");
}