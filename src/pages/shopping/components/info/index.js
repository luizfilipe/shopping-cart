import React from 'react'
import { Container, Value } from './styles'

export const Info = ({label, value, color}) => <Container color={color}>
  {label}
  <Value>{value}</Value>
</Container>
