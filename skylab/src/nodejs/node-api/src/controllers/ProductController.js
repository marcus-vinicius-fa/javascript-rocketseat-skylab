const mongoose = require('mongoose')

const Product = mongoose.model('Product')

// exportando algumas funções
module.exports = {
    async index(req, res) { // faz a listagem dos dados (registros) dos produtos
        const products = await Product.find() // .find() -> vazio ele busca todos
        // await -> logo só executa a linha a baixo quando tiver os registros do db
        return res.json(products)
    },

    async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    },
}