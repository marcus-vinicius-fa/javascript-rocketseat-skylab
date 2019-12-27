// Schema = Campos e valores que vão salvar

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
// const mongoosePaginateV2 = requere('mongoose-paginate-v2')

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

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)
// Registrando um model com o nome Product