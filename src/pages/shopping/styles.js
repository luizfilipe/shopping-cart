import styled from 'styled-components'
import { ALTO, DOVE_GRAY, MINE_SHAFT } from '../../styles/colors'

export const Products = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`

export const CartSection = styled.div`
  @media screen and (min-width: 480px) and (max-width: 1024px) {
    position: sticky;
    top: 2rem;
    height: 42rem;
  }
`

export const Button = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  user-select: none;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: .5rem;
  background-color: ${MINE_SHAFT};
  color: ${ALTO};
  &:hover {
    background-color: ${DOVE_GRAY};
  } 
`
