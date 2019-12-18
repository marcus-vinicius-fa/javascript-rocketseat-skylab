const usuarios = [
    { nome: 'Marcus', idade: 25, empresa: 'Rocketseat' }, // objeto
    { nome: 'Sâmela', idade: 21, empresa: 'Fisio' },
    { nome: 'Ir. do Jorel', idade: 17, empresa: 'Netflix' }
]

// map()

const idades = usuarios.map((objeto) => objeto.idade)

console.log(idades)

// filter()

const selecao = usuarios.filter((objeto) => {
    if (objeto.idade >= 18 && objeto.empresa === 'Rocketseat')
        return objeto
})

// ou

// function seleciona(value) {
//     if (value.idade >= 18 && value.empresa === 'Rocketseat')
//         return value
// }

// const selecao = usuarios.filter(seleciona)

console.log(selecao)

// find()

const workingGoogle1 = usuarios.find(objeto => {
    return objeto.empresa === 'Google'
})

console.log(workingGoogle1)

usuarios[0].empresa = 'Google'

const workingGoogle2 = usuarios.find(objeto => {
    return objeto.empresa === 'Google'
})

console.log(workingGoogle2)

// Unindo operações

function mapAndFilter(usuarios) {

    const multiplicaIdade = usuarios.map((objeto) => {
        // idade = objeto.idade * 2
        // novoObjeto = { ...objeto, idade: objeto.idade * 2 }
        // return novoObjeto
        return { ...objeto, idade: objeto.idade * 2 }
    })

    const filtroIdade = multiplicaIdade.filter((objeto) => {
        if (objeto.idade <= 40) {
            return objeto
        }
    })

    return filtroIdade
}

console.log(mapAndFilter(usuarios))