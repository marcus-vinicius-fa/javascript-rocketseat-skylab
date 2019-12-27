// FIXME: ln 29

const vetor = [1, 2, 3, 4, 5, 6]

const [x, ...y] = vetor

console.log(x)
console.log(y)

function soma(...params) {
    soma = params.reduce((total, proximo) => total + proximo)
    return soma
}

console.log(soma(1, 2, 3, 4, 5, 6))
// console.log(soma(1, 2))

const usuario = {
    nome: 'Marcus',
    idade: 25,
    endereco: {
        cidade: 'Jacaraú',
        uf: 'PB',
        pais: 'Brasil',
    }
}

const usuario2 = { ...usuario, nome: 'Vinicius' }
// const usuario3 = { ...usuario, endereco: { cidade: 'João Pessoa', ...usuario.endereco } }
// Como?

console.log(usuario2)
// console.log(usuario3)