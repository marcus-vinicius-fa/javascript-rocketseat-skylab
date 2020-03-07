var endereco = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function localizacao() {
  return "O usuário mora em " + endereco.cidade +
    " / " + endereco.uf + ", no bairo " + endereco.bairro +
    ", na rua " + endereco.rua + ", número " + endereco.numero;
}