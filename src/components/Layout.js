import React from 'react'
import Header from './Header';
import {Outlet} from 'react-router-dom';
const Layout = () => {
  return (
    <div className="container max-w-sm  border-2 m-1">
    <Header/>
    <Outlet/>
    </div>
  )
}

export default Layout
