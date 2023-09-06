const nome = "Kenny Wilker";
let nome2 = "";
let pessoaDefault = {
  nome: "Kenny Wilker",
  idade: 35,
  trabalho: "Auxiliar de Marceneiro",
};

let nomes = ["Kenny Wilker", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
  {
    nome: "Kenny Wilker",
    idade: "35",
    trabalho: "Auxiliar de Marceneiro",
  },
  {
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer",
  },
];

function alterarNome() {
  nome2: "Maria Silva";
  console.log("Valor alterado");
  console.log(nome2);
}

function recebeEalteraNome(novoNome) {
  nome2 = "Maria Silva";
  console.log("Valor alterado");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

adicionarPessoa({
  nome: "Pedro Silva",
  idade: "28",
  trabalho: "porteiro",
});
console.log("----------------------IMPRIMIR PESSOAS---------------------");
function imprirPessoas() {
  pessoas.forEach((item) => {
    console.log("Nome:");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);
  });
}

imprirPessoas();

console.log(pessoas);

/*
imprimirPessoa(pessoaDefault);

imprimirPessoa({
  nome: "Maria Silva",
  idade: "25",
  trabalho: "UX/UI Designer"
});

function imprimePessoa(pessoa){
    console.log("Nome:");
    console.log(pessoas.nome);
}

console.log(nome);
*/
