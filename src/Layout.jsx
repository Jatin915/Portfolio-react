import React, { useState } from 'react'
import { Outlet } from 'react-router';
import  Navbar from '../Components/Navbar'
import  MenuToggle from '../Components/MenuToggle';
import Footer from '../Components/Footer';



export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Outlet />
      <Footer />
    </>
  )
}

