//nivel 1

// 1 Copiando um Array
function copiarArray(array) {
  return [...array];
}

const numeros1 = [1, 2, 3];
const copiaNumeros = copiarArray(numeros1);
console.log("1 Copiar Array:", copiaNumeros);


// 2 Adicionando um Item sem Alterar o Original
function adicionarItem(array, novoItem) {
  return [...array, novoItem];
}

const frutas = ["Maçã", "Banana"];
const frutasAtualizadas = adicionarItem(frutas, "Uva");
console.log("2 Adicionar Item:", frutasAtualizadas);


// 3 Combinando Dois Arrays
function combinarArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log("3 Combinar Arrays:", combinarArrays([1, 2, 3], [4, 5, 6]));


// 4 Copia Segura
const lista = [10, 20, 30];
const copia = [...lista];
copia.push(40);

console.log("4 Lista original:", lista); // NÃO foi alterada
console.log("4 Copia alterada:", copia);

//nivel 2

// 5 Atualizando Dados de um Objeto
function atualizarIdade(usuario, novaIdade) {
  return {
    ...usuario,
    idade: novaIdade
  };
}

const usuario1 = { nome: "Ana", idade: 25 };
console.log("5 Atualizar Idade:", atualizarIdade(usuario1, 30));


// 6 Adicionando Propriedade Dinamica
function adicionarPropriedade(objeto, chave, valor) {
  return {
    ...objeto,
    [chave]: valor
  };
}

console.log(
  "6 Adicionar Propriedade:",
  adicionarPropriedade({ nome: "Carlos" }, "idade", 40)
);


// 7 Carrinho de Compras
function adicionarAoCarrinho(produtos, novoProduto) {
  return [...produtos, novoProduto];
}

const carrinho = [];
const produto = { nome: "Mouse", preco: 150 };

const novoCarrinho = adicionarAoCarrinho(carrinho, produto);
console.log("7 Carrinho:", novoCarrinho);


// 8 Mesclando Listas
const carnes = ["Carne"];
const massas = ["Massa"];
const sobremesas = ["Sobremesa"];

const menuCompleto = [...carnes, ...massas, ...sobremesas];
console.log("8 Menu Completo:", menuCompleto);


//nivel 3

// 9 Spread em Funcoes
function somarTresNumeros(a, b, c) {
  return a + b + c;
}

const numeros2 = [10, 20, 30];
console.log("9 Soma com Spread:", somarTresNumeros(...numeros2));


// 10 Erro Controlado
console.log("10 Menos de 3 valores:", somarTresNumeros(...[10, 20]));
// Resultado: NaN (porque undefined participa da soma)


//avancado

// 11 Atualizacao de Perfil
function atualizarPerfil(usuario, novosDados) {
  return {
    ...usuario,
    ...novosDados
  };
}

const user = { nome: "Ana", idade: 25 };
const atualizacao = { idade: 30 };
console.log("11 Atualizar Perfil:", atualizarPerfil(user, atualizacao));


// 12 Configuracoes do Sistema
function configurarSistema(padrao, usuario) {
  return {
    ...padrao,
    ...usuario
  };
}

const padrao = { tema: "claro", idioma: "pt" };
const preferencias = { tema: "escuro" };
console.log("12 Configuracao Final:", configurarSistema(padrao, preferencias));


// 13 Jogo da Velha
function fazerJogada(tabuleiro, posicao, simbolo) {
  return tabuleiro.map((item, index) =>
    index === posicao ? simbolo : item
  );
}

const tabuleiro = ["", "", "", "", "", "", "", "", ""];
const novoTabuleiro = fazerJogada(tabuleiro, 0, "X");

console.log("13 Novo Tabuleiro:", novoTabuleiro);
console.log("13 Tabuleiro Original:", tabuleiro);


/*
14 Por que o Spread Operator é fundamental no React?

Porque o React trabalha com imutabilidade.
Ao atualizar estado (state), precisamos criar
novos objetos/arrays ao invés de modificar os
originais.

O React detecta mudanças comparando referencias.
Se alterarmos diretamente o objeto original,
ele pode não perceber a mudanca e nao renderizar
a interface corretamente.

O Spread Operator ajuda a:
- Criar copias
- Manter previsibilidade
- Evitar efeitos colaterais
- Garantir re-renderizacoes corretas
*/