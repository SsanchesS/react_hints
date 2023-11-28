import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.tsx'

const Layout:FC = () => {
return (
<>
    <Header/>
    <div className="content">
        <Outlet/>
    </div>
</>
)
}

export default Layout