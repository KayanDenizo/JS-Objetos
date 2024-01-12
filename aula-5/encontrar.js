const clientes = require("./clientes.json");


function encontrar(lista, chave, valor) {
  return lista.find((item)=> item[chave].includes(valor));
  //O includes serve para determinar se tem um valor dentro de um array, retornando "true" ou "false"
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");
console.log(encontrado2);