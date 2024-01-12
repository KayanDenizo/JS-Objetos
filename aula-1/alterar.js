const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome)

console.log(pessoa.telefone)

pessoa.telefone = "11 912929113";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";


const novaPessoa = {
  nome: "Pedro",
};

pessoa = novaPessoa;

//A const não pode ser alterada, pois é um valor constante
//Mas o objeto dentro dela pode ser alterado
