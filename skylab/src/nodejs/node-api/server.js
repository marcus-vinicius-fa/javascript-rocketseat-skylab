const express = require('express'); // importar o express // retora uma função

const app = express(); // executando a função express

app.get('/', (req, res) =>{
  res.send("Hello Rocketseat"); // send = enviar

}) // Toda vez que o usuário acessar essa rota // O segundo 
// parametro é uma função.
// '/' essa é a rota raiz.
// (req, res)
// req -> a requisição que estamos fazendo ao servidor // posso pegar diversos 
// tipos de informaçao da requisição.
// res -> a resposta que damos para a requisição

app.listen(3001); // Tô falando pra apicação ouvir a porta /3001 do navegador"