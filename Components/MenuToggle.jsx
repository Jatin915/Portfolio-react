import React from 'react'
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import '../CustomCss/MenuToggle.css'; // Adjust the path as necessary

const MenuToggle = ({menuOpen, setMenuOpen}) => {

  return (
  <>

    <div id="menu-container" className={`min-h-full w-full fixed top-0 z-50 p-5 flex flex-col justify-between transition-all duration-300 ${(menuOpen) ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
      <div className="flex justify-between items-center">
        <Link onClick={() => setMenuOpen(false)} to="/hero"><strong><h2 className="text-2xl dark:text-white transition duration-300">Jatin.dev</h2></strong></Link>
        <button onClick={() => setMenuOpen(false)} className="text-black dark:text-white transition duration-300 h-fit "><h1 className="text-2xl">X</h1></button>
      </div>

      <div id="links" onClick={() => setMenuOpen(false)} className="w-full flex justify-center items-center">
        <ul className=" flex flex-col gap-10 items-center text-xl">
          <li className="transition-all duration-300 ease-in-out hover:scale-110"><Link to="/showcase" className="cursor-pointer font-semibold dark:text-gray-50">Showcase</Link></li>
          <li className="transition-all duration-300 ease-in-out hover:scale-110"><Link to="/about" className="cursor-pointer font-semibold dark:text-gray-50">About</Link></li>
          <li className="transition-all duration-300 ease-in-out hover:scale-110"><Link to="/skills" className="cursor-pointer font-semibold dark:text-gray-50">Skills</Link></li>
          <li className="transition-all duration-300 ease-in-out hover:scale-110"><Link to="/projects" className="cursor-pointer font-semibold dark:text-gray-50">Projects</Link></li>
          <li className="transition-all duration-300 ease-in-out hover:scale-110"><Link to="/contact" className="cursor-pointer font-semibold dark:text-gray-50">Contact</Link></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default MenuToggle;