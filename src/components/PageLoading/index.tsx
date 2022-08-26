import React from 'react'
import { useContext } from 'react'
import { Outlet } from "react-router-dom"
import { UserContext } from '../../contexts/UserContext'

const PageLoading = () => {
  const { userLoading } = useContext(UserContext); 
  return (
    <>
     {userLoading ? (
        <h1>Carregando...</h1>
     ) : (
        <Outlet />
     )}
    </>
  )
}

export default PageLoading