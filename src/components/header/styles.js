import styled from 'styled-components'
import { ALTO, DOVE_GRAY, MINE_SHAFT } from '../../styles/colors'

export const Container = styled.div`
	display: flex;
	padding: 2rem;
	background-color: ${ALTO};
	color: ${MINE_SHAFT}; 
  align-items: center;		
`

export const Title = styled.div`
  margin: 0 3rem;
  font-size: 18pt;
`

export const UserIcon = styled.div`
  margin: 0 0 0 auto;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${DOVE_GRAY};
`

export const User = styled.div`
  font-size: 14pt;
  margin: 0 1rem;
`
