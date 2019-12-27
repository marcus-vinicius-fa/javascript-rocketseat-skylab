const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')


routes.get('/products', ProductController.index)

// feature não está no nodejs.md
routes.get('/products/:id', ProductController.show)

routes.post('/products', ProductController.store)

// feature não está no nodejs.md
routes.put('/products/:id', ProductController.update)

// feature não está no nodejs.md
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes
// exportando routes