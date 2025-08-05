import React, { useState } from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar'
import { MenuToggle } from '../Components/MenuToggle';


const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* <Outlet />
      <footer /> */}
    </>
  )
}

export default Layout