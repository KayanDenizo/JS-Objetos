const guerreiro1 = {
  nome: "Aragon",
  classe: "Mago"
}

const guerreiro2 = {
  espada: "Excalibur",
  capa: "Capa Preta Corvos"
}

const personagens = {...guerreiro1, ...guerreiro2};
console.log(personagens);