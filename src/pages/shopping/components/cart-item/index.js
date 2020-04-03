import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {Container, Description, Image, Body, Button, Actions, Price} from './style'
import { addToCart, removeFromCart } from '../../../../store/actions/cart'
import { addProduct, removeProduct } from '../../../../store/actions/product'

export const CartItem = ({ id, name = 'Product Item', price = 123, quantity = 4 }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const add = () => {
    const {available} = products.find(p => p.id === id)
    if (available) {
      dispatch(addToCart({
        id,
        name,
        price,
        available
      }))
      dispatch(removeProduct(id))
    }
  }

  const remove = () => {
    dispatch(removeFromCart({
      id,
      name,
      price
    }))

    dispatch(addProduct(id))
  }

  return <Container>
    <Image />
    <Body>
      <div>{name}</div>
      <Description>
        <div>Quantity: {quantity}</div>
        <Price>{`$ ${price.toFixed(2)}`}</Price>
      </Description>
    </Body>
    <Actions>
      <Button onClick={add}>+</Button>
      <Button onClick={remove}>-</Button>
    </Actions>
  </Container>
}
