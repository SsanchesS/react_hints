import React, { ReactNode,FC, useContext,useEffect } from 'react'
import {AuthContext} from './AuthProvider.tsx'
import { useLocation, useNavigate } from 'react-router-dom'

interface IRequiredAuthProops{
    children:ReactNode
}
const RequiredAuth:FC<IRequiredAuthProops> = ({children}) => {      // Проверка авторизации для приватных
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  // надо useEffect потому что эта функция вызывается при первом ренднре
  useEffect(()=>{
    if(user.name){
      console.log('авторизирован')
    }else{
      console.log('не авторизирован')
      navigate('/auth', {state:{"pathname":location.pathname}})
    }
  },[user]) // ,navigate,location

  return (
    <>
    {children}
    </>
  )
}

export default RequiredAuth