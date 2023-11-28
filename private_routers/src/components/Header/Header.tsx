import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Header:FC = () => {
return (
  <div className='header'>
    <ul>
      <li><NavLink to="/" className='nav-link'>На главную</NavLink></li>
      <li><NavLink to="/posts" className='nav-link'>Посты</NavLink></li>
      <li><NavLink to="/about" className='nav-link'>О нас</NavLink></li>
      <li><NavLink to="/about-us" className='nav-link'>О Нас старая</NavLink></li>
      <li><NavLink to={`/post/${101}`} className='nav-link'>101 пост</NavLink></li>
      <li><NavLink to='/auth' className='nav-link'>Auth</NavLink></li>
    </ul>
  </div>
)
}

export default Header