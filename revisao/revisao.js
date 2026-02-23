//1

const nomes = ["Ana", "Carlos", "Bruna", "Diego"];

nomes.forEach(function(nome) {
  console.log("Nome: " + nome);
});

//2

const numerosDobro = [2, 4, 6, 8];

numerosDobro.forEach(function(numero) {
  console.log("Dobro:", numero * 2);
});


//3

const numerosQuadrado = [1, 2, 3, 4, 5];

const quadrados = numerosQuadrado.map(function(numero) {
  return numero * numero;
});

console.log("Quadrados:", quadrados);


//4

const alunos = ["João", "Maria", "Pedro"];

const alunosFormatados = alunos.map(function(nome) {
  return {
    nome: nome,
    ativo: true
  };
});

console.log("Alunos formatados:", alunosFormatados);

//5

const numerosFiltro = [10, 15, 20, 25, 30];

const maioresQue20 = numerosFiltro.filter(function(numero) {
  return numero > 20;
});

console.log("Maiores que 20:", maioresQue20);

//6

const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: true },
  { id: 2, titulo: "Praticar React", concluida: false },
  { id: 3, titulo: "Fazer exercícios", concluida: true }
];

const tarefasConcluidas = tarefas.filter(function(tarefa) {
  return tarefa.concluida === true;
});

console.log("Tarefas concluídas:", tarefasConcluidas);


//7

const valores = [10, 20, 30, 40];

const total = valores.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);

console.log("Total:", total);


//8

const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];

const contagem = frutas.reduce(function(acumulador, fruta) {
  if (acumulador[fruta]) {
    acumulador[fruta]++;
  } else {
    acumulador[fruta] = 1;
  }
  return acumulador;
}, {});

console.log("Contagem de frutas:", contagem);


//9

const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 }
];

const produtosCaros = produtos
  .filter(function(produto) {
    return produto.preco > 100;
  })
  .map(function(produto) {
    return produto.nome;
  });

console.log("Produtos caros:", produtosCaros);

//10

/*
a) Renderizar lista → map
   Porque transforma cada item em um novo elemento 

b) Somar total do carrinho → reduce
   Porque transforma vários valores em um único resultado

c) Exibir apenas itens ativos → filter
   Porque mantém apenas os que atendem à condição

d) Apenas executar console.log → forEach
   Porque executa uma ação sem criar novo array
*/