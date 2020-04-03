import styled from 'styled-components'
import { ALTO, DUSTY_GRAY, MINE_SHAFT, SILVER } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: .5rem;
  min-width: 30rem;
  margin: 1.5rem;
  overflow: hidden;
  background-color: ${ALTO};
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18pt;
  align-items: center;
  margin-bottom: .5rem;
  padding: .5rem 0;
  color: ${MINE_SHAFT};
  background-color: ${DUSTY_GRAY};
`
