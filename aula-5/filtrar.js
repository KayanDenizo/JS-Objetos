const clientes = require("./clientes.json")

function filtrarApartamentosSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento"))
      // | Leitura do Codigo: Linha 6: Quero que ele tenha um apartamento 
      // | Linha 7: Não quero que ele tenha complemento
  });
}

const filtrados = filtrarApartamentosSemComplemento(clientes);
console.log(filtrados);