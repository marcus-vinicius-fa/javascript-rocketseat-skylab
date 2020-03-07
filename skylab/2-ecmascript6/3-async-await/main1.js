const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000)
})

// minhaPromise().then(response => {
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

    // const response = await minhaPromise()
}

executaPromise()

// Não é mais necessária a instalação desses plugins
// yarn add @babel/plugin-transform-async-to-generetor -D
// yarn add @babel/polyfill -D // webpack.config.js -> entry:[]
// adicionar aos plugins

// Tbm com arrow functions

const minhaPromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 6000)
})

const executaPromise2 = async () => {
    console.log(await minhaPromise2()) // executa com 2s
    console.log(await minhaPromise2()) // ..4s // Executa depois da execução da primeira
    console.log(await minhaPromise2()) // ..6s
}

executaPromise2()