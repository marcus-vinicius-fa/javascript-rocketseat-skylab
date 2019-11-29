const usuario = {
  nome: 'Marcus',
  idade: 25,
  profissao: 'Software Development - FullStack JavaScript',
  endereco: {
    cidade: 'Jacaraú',
    rua: 'Manoel Aureliano Pessoa',
    estado: 'PB',
  },
}

// const nome = usuario.nome
// const idade = usuario.idade

// const cidade = usuario.endereco.cidade

const { nome, idade, endereco: { cidade } } = usuario

console.log(nome + ',', idade + ' anos', '\n' + cidade)

//

// const mostraNome = (usuario) => console.log(usuario.nome)

// mostraNome(usuario)

const mostraUsuario = ({ nome, idade } /*= usuario*/) => console.log(nome, idade)