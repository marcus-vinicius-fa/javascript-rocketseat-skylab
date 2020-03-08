function returnArray(max) {
    let vetor = []

    for (let i = 1; i <= max; i++) {
        vetor.push(i)
    }
    return vetor
}

let vetor = returnArray(10)
console.log(vetor)

// function sem nome // função anonima

// callback = passagem de função pra dentro de outra função

const newVetor = vetor.map(item => item * 2)
// saiu o nome function
// saiu as {}
// saiu o return

console.log(newVetor)

// Arrow function tbm
// Não recomendado // melhor utilizar em callbacks
const returnPhrase = (verbo) => {
    return verbo
}

console.log(returnPhrase('Arrow Function'))

// Funções dentro de objetos não recebem a keyword function

// const returnObjeto = () => { nome: 'Marcus' } // Não funiona

const returnObjeto = () => ({ nome: 'Marcus' })

console.log(returnObjeto())
