import {Outlet, Link} from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <div>
      <nav>
        <li><Link to="" >Home</Link></li>
        <li><Link to="/blogs" >Blogs</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
