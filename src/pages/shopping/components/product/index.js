import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../store/actions/cart'
import {removeProduct} from '../../../../store/actions/product'
import { Container, Body, Description, Image, Name, Button } from './styles'

export const Product = ({ id, name = 'Product Name', price = 123, available = 2 }) => {
  const dispatch = useDispatch()
  const buy = () => {
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

  return available ? <Container>
    <Image />
    <Body>
      <Name>{name}</Name>
      <Description>
        {`$ ${price.toFixed(2)}`} • {available} left
      </Description>
    </Body>
    <Button onClick={buy}>buy</Button>
  </Container> : null
}
