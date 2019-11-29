var usuarios = [
  {
    nome: "Marcus",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Sâmela",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function habilidades(usuarios) {
  for (usuario of usuarios) {
    console.log("O "+usuario.nome+" possui as habiliades: "+usuario.habilidades.join(", ")+".")
  }
}

habilidades(usuarios);