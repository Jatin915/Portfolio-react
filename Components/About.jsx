import React from 'react'
import Photo from '../src/assets/Jatin.png';

export const About = () => {
  return (
    <section id="about" className="min-h-[calc(100vh)] min-w-full backdrop-blur-3xl shadow-sm bg-slate-100 sm:flex sm:flex-row sm:justify-center sm:px-20 pt-20 pb-5 flex flex-col items-center dark:bg-gray-950 transition duration-300">
      <div id="about-left-container" className="max-h-fit w-[80vw] sm:w-[60vw] xl:max-w-[50vw] lg:mr-32 sm:mr-16">
        <h1 className="text-4xl font-bold mb-10 dark:text-white transition duration-300">About Me</h1>
        <p id="about-text" className="mb-10 text-lg text-gray-500 dark:text-gray-400 transition duration-300">I'm a frontend developer focused on crafting clean & user-friendly experiences.</p>
        <p id="about-text" className="mb-10 text-lg text-gray-500 dark:text-gray-400 transition duration-300">I build responsive websites that are fast, easy to use, and follow best coding practices. My expertise includes HTML, CSS, JavaScript, and modern frameworks to create dynamic, engaging interfaces with clean, optimized code.</p>
        <p id="about-text" className="text-lg text-gray-500 mb-10 dark:text-gray-400 transition duration-300">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.</p>
        <button id="btn" className="h-12 min-w-full sm:min-w-fit bg-blue-500 px-6 rounded-md text-white mr-4 mb-4 transition-transform duration-300 ease-in-out">Contact Me</button>
        <button id="btn" className="h-12 min-w-full sm:min-w-fit border-slate-400 border-[0.5px] px-6 rounded-md text-gray-600 dark:text-gray-300 dark:bg-transparent transition-all duration-300 ease-in-out">Download Resume</button>
      </div>
      <div className="max-h-fit w-[60vw] sm:w-[40vw] xl:max-w-fit">
        <img id="picture" className="md:h-80 h-60 w-full mt-5 sm:mt-36 lg:mt-16" src={ Photo } alt="Image Here.." />
      </div>
    </section>
  )
}
