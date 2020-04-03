import styled from 'styled-components'
import { DUSTY_GRAY, SILVER } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  border-top: 1px solid ${SILVER};
  color: ${props => props.color || DUSTY_GRAY}
`

export const Value = styled.div`
  margin: 0 0 0 auto;
`
