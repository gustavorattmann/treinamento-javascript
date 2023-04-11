/**
 * Nullish Coalescing Operator
 */
// const idade = null;
// const idade = 0;
// const idade = 27;

// ?? ignora apenas o null, || ignora null e 0
// document.getElementById('nullish-coalescing').innerText = 'Sua idade é: ' + (idade ?? 'Não informado');


/**
 * Objetos
 */
// const usuario = {
//   nome: 'Gustavo',
//   nickname: 'Ratt',
//   idade: 27,
//   endereco: {
//     rua: 'Rua teste',
//     numero: 176
//   }
// };

// Expressão in
// document.getElementById('objeto').innerText = ('nome' in usuario);
// document.getElementById('objeto').innerText = ('nickname' in usuario);

// Retornar chaves
// document.getElementById('objeto').innerText = Object.keys(usuario);

// Retornar valores
// document.getElementById('objeto').innerText = JSON.stringify(Object.values(usuario));

// Retorna vetor com diversos vetores e cada um deles contendo uma chave e valor
// document.getElementById('objeto').innerText = JSON.stringify(Object.entries(usuario));

// Desestruturação
// const { endereco, idade: idade_usuario, nickname = 'Gu' } = usuario; // Renomeando variável idade para idade_usuario

// document.getElementById('objeto').innerText = JSON.stringify({ endereco, idade_usuario, nickname });


/**
 * Rest operator
 */
// Separa o nome do resto das chaves
// const { nome, ...rest } = usuario;

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [primeiro, segundo, ...resto] = array;
// const [primeiro, , terceiro, ...resto] = array; // Se deixar apenas a virgula, pula o índice

// document.getElementById('rest-operator').innerText = JSON.stringify({primeiro, segundo, resto});
// document.getElementById('rest-operator').innerText = JSON.stringify({primeiro, terceiro, resto});


/**
 * Short Syntax
 */
// const nome = 'Gustavo';
// const idade = 27;

// const usuario = {
//   nome,
//   idade
// };

// document.getElementById('short-syntax').innerText = JSON.stringify(usuario);


/**
 * Optional Chaining
 */
const usuario = {
  nome: 'Gustavo',
  nickname: 'Ratt',
  idade: 27,
  endereco: {
    rua: 'Rua teste',
    numero: 176,
    cep: {
      codigo: '80530000',
      cidade: 'Curitiba'
    },
    // exibirEnderecoCompleto() {
    //   return 'ok';
    // }
  }
};

// Interrogação em cada propriedade que pode não existir e
// faz um nullish coalescing caso não exista alguma propriedade para exibir um valor padrão
// document.getElementById('optional-chaining').innerText = usuario?.endereco?.cep?.codigo ?? 'Não informado';

// Optional Chaining em função
document.getElementById('optional-chaining').innerText = usuario?.endereco?.exibirEnderecoCompleto?.() ?? 'Não existe função';
