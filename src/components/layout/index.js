import React from 'react'
import {
  Container,
  Content
} from './styles'
import { Header } from '../header'

export const Layout = ({ children }) => {
  return <Container>
    <Header />
    <Content>
      {children}
    </Content>
  </Container>
}
