import styled from 'styled-components'
import { ALTO, DOVE_GRAY, MINE_SHAFT, SILVER } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
`

export const Input = styled.input`
  border-radius: .5rem;
  border: 2px solid ${props => props.valid ? SILVER : 'red'};
  padding: 0 1rem;
  &:focus {
    outline: none;
  }  
`

export const Button = styled.div`
  margin: 0 0 0 auto;
  padding: .5rem 1.5rem;
  border-radius: .5rem;
  background-color: ${MINE_SHAFT};
  color: ${ALTO};
  &:hover {
    background-color: ${DOVE_GRAY};
  } 
`
