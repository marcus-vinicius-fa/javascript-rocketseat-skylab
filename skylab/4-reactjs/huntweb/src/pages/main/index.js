import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
  // variavel de estado
  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  // funcao chamada antes da renderizacao
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)

    const { docs, ...productInfo } = response.data

    this.setState({ products: docs, productInfo, page })
  }

  prevPage = () => {
    const { page } = this.state
    if (page === 1) return

    const pageNumber = page - 1
    this.loadProducts(pageNumber)
  }

  nextPage = () => {
    const { page, productInfo } = this.state
    // .pages = propriedade com o total de paginas
    if (page === productInfo.pages) return

    const pageNumber = page + 1
    this.loadProducts(pageNumber)
  }

  // render fica escutando as alteracos da variavel "state"
  render() {

    const { products, page, productInfo } = this.state

    return (// primeiro item depois do .map deve conter uma key unica
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    )
  }
}