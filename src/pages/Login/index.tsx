import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Button } from '../../styles/buttons'
import { Container } from '../../styles/global'
import { Link } from 'react-router-dom'

const PageLogin = () => {
  return (
    <Container small={true}>
        <LoginForm />
        <Link to="/register">
          <Button tag="button" outline={true} style={{ marginTop: '1rem'}}>Cadastre-se</Button>
        </Link>        
    </Container>
  )
}

export default PageLogin