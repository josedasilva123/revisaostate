import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import { Button } from '../../styles/buttons'
import { Container } from '../../styles/global'
import { Link } from 'react-router-dom'

const PageRegister = () => {
  return (
    <Container small={true}>
        <RegisterForm />
        <Link to="/">
          <Button tag="button" outline={true} style={{ marginTop: '1rem'}}>Voltar</Button>
        </Link>
    </Container>
  )
}

export default PageRegister