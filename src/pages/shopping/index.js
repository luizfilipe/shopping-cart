import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from '../../components/layout'
import { Product } from './components/product'
import { Cart } from './components/cart'
import { Products, Button, CartSection } from './styles'
import { getProducts } from '../../services/products'

export const ShoppingCart = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts(dispatch).catch(console.error)
  }, [])

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
