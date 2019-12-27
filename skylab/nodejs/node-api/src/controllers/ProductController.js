const mongoose = require('mongoose')

const Product = mongoose.model('Product')

// exportando algumas funções
module.exports = {
    async index(req, res) { // faz a listagem dos dados (registros) dos produtos
        const { page = 1 } = req.query
        const products = await Product.paginate({}, { page, limit: 10 }) // .find() -> vazio ele busca todos
        // page -> página atual // limit -> até quantos objetos por página
        // await -> logo só executa a linha a baixo quando tiver os registros do db
        return res.json(products)
    },

    // feature não está no nodejs.md
    async show(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },

    async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    },

    // feature não está no nodejs.md
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        // {new: true} -> para atualizar o produto antes de devolver para product
        // req.body -> para atualizar com o corpo da requisição
        return res.json(product)
    },

    // feature não está no nodejs.md
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)

        // const product -> não faz sentido salvar porque vamos destruir o objeto e não retornar
        return res.send() // retorna uma resposta de sucesso
    }
}