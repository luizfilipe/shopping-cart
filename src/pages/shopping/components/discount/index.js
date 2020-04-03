import React, { useState } from 'react'
import { Container, Input, Button } from './styles'

export const Discount = ({ onApply }) => {
  const [code, setCode] = useState('')
  const [valid, setValid] = useState(true)


  const onChange = evt => {
    setValid(true)
    setCode(evt.target.value)
  }
  const onClick = () => setValid(onApply(code))

  return <Container>
    <Input value={code} onChange={onChange} type='text' placeholder='Discount code' valid={valid}/>
    <Button onClick={onClick}>Apply</Button>
  </Container>
}
