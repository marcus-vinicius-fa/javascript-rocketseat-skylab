// Schema = Campos e valores que vão salvar

const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { // Campo da tabela
        type: String, // Um String
        required: true, // Obrigatório
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: { // Salva datas automaticamente
        type: Date,
        default: Date.now, // Cria automaticamente // Data atual de criação
    },
})

mongoose.model('Product', ProductSchema)
// Registrando um model com o nome Product