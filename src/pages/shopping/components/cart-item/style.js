import styled from 'styled-components'
import { ALTO, DUSTY_GRAY, SILVER } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  border-radius: .5rem;
  margin: .5rem 1rem;
  height: 5.5rem;
  border: 1px solid ${SILVER};
  background-color: ${ALTO};
  overflow: hidden;
`

export const Image = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  background-color: ${SILVER};
`

export const Body = styled.div`
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;  
`


export const Description = styled.div`
  display: flex;
  color: ${DUSTY_GRAY};
`

export const Price = styled.div`
  margin: 0 0 0 auto;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${SILVER};
  & div:first-child {
    border-bottom: 1px solid ${SILVER};
  }
`

export const Button = styled.div`
  padding: .1rem .9rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;  
  &:hover {
    background-color: ${SILVER};
  }  
`
