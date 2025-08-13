import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import  { Layout }  from './Layout';
import { Hero } from '../Components/Hero';
import { Showcase } from '../Components/Showcase';
import { About } from '../Components/About';
import { Skills } from '../Components/Skills';
import { Projects } from '../Components/Projects';
import { Contact } from '../Components/Contact';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path='showcase' element={<Showcase />} />
      <Route path='about' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='Contact' element={<Contact />} />

      {/* <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} /> */}
    </Route>
  )
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
