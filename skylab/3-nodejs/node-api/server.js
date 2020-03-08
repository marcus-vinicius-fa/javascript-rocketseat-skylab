const express = require('express'); // importar o express // retora uma função
// const cors = require('cors') // npm install cors // Não instalado ainda
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express(); // executando a função express
app.use(express.json()) // Para permitir o envio de dados no formato JSON
// app.use(cors())

// Iniciando o DB
// Caso tenha usuario e senha usar -> mongoose://user@password
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) // , { useNewUrlParser: true }
// nodeapi -> schema (coleção de objetos dentro de um db)
// entre {} estão os parâmetros

// logo a baixo da conecção com o banco de dados
// require('./src/models/Product')
requireDir('./src/models')

// const product = mongoose.model('Product')

// Rotas
app.use('/api', require('./src/routes')) // use é um "coringa" (serve como get, post...)

app.listen(3000); // Tô falando pra apicação ouvir a porta /3001 do navegador"
