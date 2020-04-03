import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { NotFound, ShoppingCart } from './pages'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Reset } from './styles/reset'

const Router = () => {
  return (
    <Provider store={store}>
      <Reset />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <ShoppingCart />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

const App = document.getElementById('client')

ReactDOM.render(<Router />, App)
