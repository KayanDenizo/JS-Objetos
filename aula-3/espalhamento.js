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

function ligaParaCliente (telefoneComercial, telefoneResidensial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidensial}`);
}

//chamada de sintaxe de espalhamento "..."
ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
}

console.log(encomenda);