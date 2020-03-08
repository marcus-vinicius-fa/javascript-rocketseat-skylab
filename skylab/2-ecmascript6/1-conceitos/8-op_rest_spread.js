// Necessita de novos pacotes. Plugins para o Babel

// Rest and Spread

// REST // Para pegar o resto das propriedades

// Com Objetos

const usuario = {
    nome: 'Marcus',
    idade: 25,
    profissao: 'Software Development'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

/// Com Arrays

const vetor = [1, 2, 3, 4] // destructuring in array

const [a, b, ...c] = vetor

console.log(a)
console.log(b)
console.log(c)

// Com Funções

// const soma = (a, b, c) => a + b + c

// console.log(soma(1, 2, 3))

const soma = (...params) => {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2, 3))

//
// SPREAD // Passar valor de uma estrutura para outra

const vetor1 = [1, 2, 3]
const vetor2 = [4, 5, 6]

const vetorConcat = [...vetor1, ...vetor2]
console.log(vetorConcat)

//

// usuario
const outroUsuario = { ...usuario, nome: 'Vinicius' }
console.log(usuario, outroUsuario)
