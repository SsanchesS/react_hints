import React, { FC, useState, useRef, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {AuthContext} from '../../hoc/AuthProvider.tsx'

const Auth:FC = () => {

// const {signin} = useContext(AuthContext)!  Обратите внимание на ! после useContext(AuthContext), который утверждает, что значение не равно null.
const {signin} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.pathname

const username = useRef<HTMLInputElement>(null)
const userpass = useRef<HTMLInputElement>(null)

const login=(e:React.FormEvent)=>{
  e.preventDefault()
  const name = username.current?.value
  const pass = userpass.current?.value
  if(name && pass){
    signin(name,pass)
    if(from){
      console.log('from : ',from)
      navigate(`${from}`)
    }else{
      navigate('/home', {replace:true})
    }
  }else{
    console.log("Ошибка")
  }

}
return (
<div className='form'> 

  <div className='login'>
    <div><h1>Вы пришли из:{from}</h1></div>
    <form method='GET'>          {/* action="/submit" указывает, что данные формы будут отправлены на путь "/submit".
                                  Это может быть путь на сервере, который обрабатывает данные формы. */}
    <label htmlFor="username">Имя:</label>
    <input type="text" name='username' required ref={username}/>  {/* required - обязательно для заполнения */}
  
    <label htmlFor="userpass">Пароль:</label>
    <input type="password" name='userpass' required ref={userpass}/>

    <button type='submit' onClick={login}>Войти</button>

    </form>
  </div>

</div>
)
}

export default Auth