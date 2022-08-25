import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Button } from '../../styles/buttons'
import { StyledHeader } from './style'

const Header = () => {
  const { logoutUser } = useContext(UserContext);  
  return (
    <StyledHeader>
        <h1>Notes</h1>
        <Button tag="button" onClick={logoutUser}>Sair</Button>
    </StyledHeader>   
  )
}

export default Header