const delay = (second) => new Promise(resolve => setTimeout(() => resolve(second), 1000))

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s')

//         delay().then(() => {
//             console.log('2s')

//             delay().then(() => {
//                 console.log('3s')
//             })
//         })
//     })
// }

async function umPorSegundo() {
    console.log(await delay('1s'))
    console.log(await delay('2s'))
    console.log(await delay('3s'))
}

umPorSegundo()