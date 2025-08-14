import { Link } from 'react-router-dom';
import '../CustomCss/Footer.css'; // Importing custom CSS for the footer

const Footer = () => {
  return (
    <footer className="py-10 sm:px-16 bg-slate-200 dark:bg-zinc-950 transition duration-300">
      <div id="Foot" className="flex items-center justify-between">
        
        <div><Link to="/"><strong><h2 className="text-3xl dark:text-white transition duration-300 hover:cursor-pointer">Jatin.dev</h2></strong></Link></div>
        
        <div>
          <ul className="hover:cursor-pointer flex gap-3 sm:gap-4 md:gap-6 text-gray-700 dark:text-gray-400 text-sm sm:text-[1rem] transition duration-300">
            <li className="transition-colors duration-300 ease-in-out dark:md:hover:text-gray-200"><Link to="/showcase">Showcase</Link></li>
            <li className="transition-colors duration-300 ease-in-out dark:md:hover:text-gray-200"><Link to="/about">About</Link></li>
            <li className="transition-colors duration-300 ease-in-out dark:md:hover:text-gray-200"><Link to="/skills">Skills</Link></li>
            <li className="transition-colors duration-300 ease-in-out dark:md:hover:text-gray-200"><Link to="/projects">Projects</Link></li>
            <li className="transition-colors duration-300 ease-in-out dark:md:hover:text-gray-200"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="flex gap-4 dark:text-gray-400 transition duration-300">
          <Link to="/"><i className="fa-brands fa-github text-md"></i></Link>
          <Link to="/"><i className="fa-brands fa-linkedin"></i></Link>
          <Link to="/"><i className="fa-brands fa-x-twitter"></i></Link>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm text-center mt-5">@2025 gJatin Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer;