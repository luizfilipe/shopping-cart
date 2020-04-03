import styled from 'styled-components'
import { DOVE_GRAY, DUSTY_GRAY, GALLERY, MERCURY, MINE_SHAFT } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  height: 25rem;
  border-radius: .5rem;
  overflow: hidden;  
`

export const Image = styled.div`
  display: flex;
  flex: 1;
  background-color: ${DUSTY_GRAY};
  min-height: 12rem;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 2rem;
  background-color: ${GALLERY};
`

export const Name = styled.div`
  color: ${MINE_SHAFT}; 
`

export const Description = styled.div`
  font-size: 12pt;
  color: ${DUSTY_GRAY};
`
export const Button = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  user-select: none;
  height: 3rem;
  outline: none;
  color: ${MERCURY};
  text-transform: uppercase;
  background-color: ${MINE_SHAFT};
  &:hover {
    background-color: ${DOVE_GRAY};
  }
`
