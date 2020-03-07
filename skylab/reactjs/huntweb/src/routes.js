import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    // utilizando as rotas atraves do browser
    <BrowserRouter>
        {/* para que uma unica pagina seja exibida a cada rota */}
        <Switch>
            {/* nada alem da 'barra' */}
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)

export default Routes