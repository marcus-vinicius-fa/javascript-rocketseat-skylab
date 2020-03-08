const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000)
})

// minhaPromise()
//     .then(response => {
//     console.log(response)
// })
// .catch(err =>) {

// }

// Async/await (a partir do es8)

// Têm que ter uma função por volta
async function executaPromise() {
    console.log(await minhaPromise()) // executa com 2s
    console.log(await minhaPromise()) // ..4s // Executa depois da execução da primeira
    console.log(await minhaPromise()) // ..6s

    const response = await minhaPromise()
    // .then(resp => resp)
    console.log(response)
    return response
}

const resp = executaPromise()
console.log('resp:', resp)

executaPromise()
    .then(resp => {
        console.log('then:', resp)
    })

// Não é mais necessária a instalação desses plugins
// yarn add @babel/plugin-transform-async-to-generetor -D
// yarn add @babel/polyfill -D // webpack.config.js -> entry:[]
// adicionar aos plugins

// Tbm com arrow functions

const minhaPromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 6000)
})

const executaPromise2 = async () => {
    console.log(await minhaPromise2()) // executa com 6s
    console.log(await minhaPromise2()) // ..12s // Executa depois da execução da primeira
    console.log(await minhaPromise2()) // ..18s
}

executaPromise2()
