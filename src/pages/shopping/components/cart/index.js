import React, { useEffect, useState } from 'react'
import { CartItem } from '../cart-item'
import { useSelector } from 'react-redux'
import { Container, Title } from './styles'
import { Info } from '../info'
import { Discount } from '../discount'
import { MINE_SHAFT } from '../../../../styles/colors'

const vouchers = [
  {
    'id': 1,
    'code': '#30OFF',
    'type': 'percentual',
    'amount': 30.0
  },
  {
    'id': 2,
    'code': '#100DOLLARS',
    'type': 'fixed',
    'amount': 100.0
  },
  {
    'id': 3,
    'code': '#SHIPIT',
    'type': 'shipping',
    'amount': 0,
    'minValue': 300.50
  }
]

export const Cart = () => {
  const [discount, setDiscount] = useState(0)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    setDiscount(0)
  }, [cart])

  const subtotal = cart.reduce((r, { price, quantity }) => r + quantity * price, 0)
  const weight = cart.reduce((r, { quantity }) => r + quantity, 0)

  const getShipping = () => subtotal > 400
    ? 0
    : weight <= 10
      ? 30
      : 30 + (((weight - 10) % 5) * 7)

  const applyDiscount = code => {
    const voucher = vouchers
      .find(v => code.toLowerCase() === v.code.toLowerCase())
    if (!voucher) return;
    const { type, amount, minValue } = voucher
    switch (type) {
      case 'percentual':
        setDiscount(amount / 100 * subtotal)
        return true
      case 'fixed':
        setDiscount(amount)
        return true
      case 'shipping':
        if (subtotal >= minValue) {
          setDiscount(getShipping())
          return true
        }
    }
    return false
  }
  const shipping = getShipping()
  return <Container>
    <Title>
      Shopping Cart
    </Title>
    {cart.map(c => <CartItem key={c.id} {...c} />)}
    <Discount onApply={applyDiscount} />
    <Info label='Subtotal' value={`$ ${subtotal}`} />
    <Info label='Shipping' value={`$ ${shipping}`} />
    <Info label='Discount' value={`$ ${discount}`} />
    <Info color={MINE_SHAFT} label={<strong>Total</strong>} value={<strong>{`$ ${subtotal +
    shipping - discount}`}</strong>} />
  </Container>
}
