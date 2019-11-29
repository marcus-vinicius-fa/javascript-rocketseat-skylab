// keywords

// var

const a = 1 // readOnly

// a = 2
// console.log(a) // Não funciona

const usuario = { nome: 'Marcus' }
usuario.nome = 'Sâmela' // mutação
console.log(usuario.nome)

function teste(x) {
  let y = 2; // let é a variável de escopo

  if (x > 5) {
    console.log(x, y)
    let y = 4 // reatribuindo
  }
}

(teste(10))

// console.log(y) // Não existe nesse escopo!