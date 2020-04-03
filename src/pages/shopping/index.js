import React from 'react'
import {useSelector} from 'react-redux'
import { Layout } from '../../components/layout'
import { Product } from './components/product'
import { Cart } from './components/cart'
import { Products, Button, CartSection } from './styles'

export const ShoppingCart = () => {
  const products = useSelector(state => state.products)

  return <Layout>
    <Products>
      {products.map(p => <Product key={p.id} {...p} />)}
    </Products>
    <CartSection>
      <Cart />
      <Button>Checkout</Button>
    </CartSection>
  </Layout>
}
