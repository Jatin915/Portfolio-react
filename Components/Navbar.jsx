import React, { useState } from 'react';
import { Link } from 'react-scroll'; // for smooth scrolling to sections
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa'; // Ensure you have react-icons installed
// import { document } from 'postcss';

const Navbar = ({menuOpen, setMenuOpen}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <>
    <nav className='fixed top-0 w-full pt-6 pb-5 z-50 shadow-md bg-white dark:shadow-gray-900 sm:dark:shadow-md flex justify-between items-center px-10 dark:bg-gray-950 transition duration-300'>
      <Link to="/" smooth={"true"} duration={500}>
        <h2 className='text-3xl dark:text-white transition duration-300 font-bold cursor-pointer'>Jatin.dev</h2>
      </Link>

      <ul className='sm:flex sm:text-sm sm:gap-6 md:gap-8 hidden md:text-lg'>
        <li>
          <NavLink to="/showcase" className={({isActive}) => `${(isActive) ? "text-orange-700 dark:text-orange-700" : "text-black dark:text-white"}  transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer font-semibold dark:text-gray-50`}>ShowCase</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"} transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer font-semibold dark:text-gray-50`}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/skills"} className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"} transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer font-semibold dark:text-gray-50`}>Skills</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"} className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"} transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer font-semibold dark:text-gray-50`}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"} transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer font-semibold dark:text-gray-50`}>Contacts</NavLink>
        </li>
      </ul>

      <button id="btn" onClick={toggleTheme} className='min-h-fit min-w-fit mt-1 ml-auto mr-6 sm:ml-0 sm:mr-0 text-2xl transition-transform duration-300 ease-in-out cursor-pointer dark:text-gray-50'>
        {/* <i id="Moon" className="fa-solid fa-moon"></i> */}

        {isDark ? <FaSun size={20} color='white' /> : <FaMoon size={20} color={'black'}/>}
        
      </button>

      {/* <ul className="sm:flex sm:text-sm sm:gap-6 md:gap-8 hidden md:text-lg">
        {['showcase', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item} className="transition-all duration-300 ease-in-out hover:scale-110">
            <Link
              to={}
              smooth
              duration={500}
              className="cursor-pointer font-semibold dark:text-gray-50"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleTheme}
        className="mt-1 ml-auto mr-6 sm:ml-0 sm:mr-0 text-2xl transition-transform duration-300 ease-in-out cursor-pointer dark:text-gray-50"
      >
        <FaMoon />
      </button>
*/}
      <div onClick={() => {setMenuOpen(!menuOpen)}} className="sm:hidden cursor-pointer">
        <span className="block w-6 h-1 bg-black dark:bg-gray-50 mb-1"></span>
        <span className="block w-6 h-1 bg-black dark:bg-gray-50"></span>
        <span className="block w-6 h-1 bg-black dark:bg-gray-50 mt-1"></span>
      </div>
    </nav>
    </>
  );
};

export default Navbar;