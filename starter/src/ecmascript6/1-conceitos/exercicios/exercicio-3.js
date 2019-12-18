// 3.1

const arr = [1, 2, 3, 4, 5]
/*
arr.map(function (item) {
    return item + 10
})
*/

console.log(arr.map((item) => item * 10))

// 3.2
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Marcus', idade: 25 }

// function mostraIdade(usuario) {
//     return usuario.idade;
// }

// mostraIdade(usuario)

const mostraIdade = (usuario) => usuario.idade
console.log(mostraIdade(usuario))

// 3.3
// Dica: Utilize uma constante pra function

const nome = 'Marcus'
const idade = 25

// function mostraUsuario(nome = 'User', idade = 0) {
//     return { nome, idade }
// }

// mostraUsuario(nome, idade)
// mostraUsuario(nome)

const mostraUsuario = (nome = 'User', idade = 0) => ({ nome, idade })
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 3.4

// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve()
//     })
// }

const promise = () => {
    return new Promise((resolve, reject) => resolve())
}
