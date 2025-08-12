import React from 'react';

export const Skills = () => {
  return (
    <section id="skills" className="min-h-[calc(100vh)] pt-16 min-w-full bg-zinc-100 px-5 dark:bg-zinc-900 transition duration-300">
      <div className="min-w-full max-h-fit text-center p-11 pt-16">
        <h1 className="text-4xl font-bold mb-5 dark:text-white transition duration-300">My Skills</h1>
        <p className="text-gray-500 text-xl dark:text-gray-400 mb-10 sm:mb-20 transition duration-300">Technologies and tool I use to bring products to life</p>
      </div>

      <div id="skilss" className="min-h-full min-w-full flex flex-wrap justify-center pb-24 sm:pb-28 gap-10">

         {/* First Skill card starts here */}
        <div className="h-44 w-96 p-5 shadow-lg bg-gray-100 dark:bg-gray-950 dark:text-white dark:shadow-gray-700 dark:shadow-lg rounded-md transition duration-300">
        <div className="h-14 w-14 bg-red-400/10 dark:bg-transparent rounded-full flex items-center justify-center text-2xl transition duration-300"><i className="fa-brands fa-html5 text-red-600"></i></div>
        <h2 className="mt-5 mb-3 font-semibold text-xl">HTML5</h2>
        <div className="h-2 w-full bg-gray-200 rounded-md dark:bg-gray-400 transition duration-300"><div className="h-2 w-[95%] rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700"></div></div>
        </div>
         {/* First Skill card ends here */}

        {/*  Second Skill card starts here */}
        <div className="h-44 w-96 p-5 shadow-lg bg-gray-100 dark:bg-gray-950 dark:text-white dark:shadow-gray-700 dark:shadow-lg rounded-md transition duration-300">
        <div className="h-14 w-14 bg-blue-400/10 dark:bg-transparent rounded-full flex items-center justify-center text-2xl transition duration-300"><i className="fa-brands fa-css3 text-blue-500"></i></div>
        <h2 className="mt-5 mb-3 font-semibold text-xl">CSS3</h2>
        <div className="h-2 w-full bg-gray-200 rounded-md dark:bg-gray-400 transition duration-300"><div className="h-2 w-[90%] rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700"></div></div>
        </div>
        {/*  Second Skill card ends here */}

        {/*  Third Skill card starts here */}
        <div className="h-44 w-96 p-5 shadow-lg bg-gray-100 dark:bg-gray-950 dark:text-white dark:shadow-gray-700 dark:shadow-lg rounded-md transition duration-300">
        <div className="h-14 w-14 bg-yellow-400/10 dark:bg-transparent rounded-full flex items-center justify-center text-2xl transition duration-300"><i className="fa-brands fa-js text-yellow-500"></i></div>
        <h2 className="mt-5 mb-3 font-semibold text-xl">JavaScript</h2>
        <div className="h-2 w-full bg-gray-200 rounded-md dark:bg-gray-400 transition duration-300"><div className="h-2 w-[85%] rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700"></div></div>
        </div>
        {/*  Third Skill card ends here */}

        {/*  Fourth Skill card starts here */}
        <div className="h-44 w-96 p-5 shadow-lg bg-gray-100 dark:bg-gray-950 dark:text-white dark:shadow-gray-700 dark:shadow-lg rounded-md transition duration-300">
        <div className="h-14 w-14 bg-blue-400/10 dark:bg-transparent rounded-full flex items-center justify-center text-2xl transition duration-300"><i className="fa-brands fa-react text-blue-500"></i></div>
        <h2 className="mt-5 mb-3 font-semibold text-xl">React</h2>
        <div className="h-2 w-full bg-gray-200 rounded-md dark:bg-gray-400 transition duration-300"><div className="h-2 w-[10%] rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700"></div></div>
        </div>
        {/*  Fourth Skill card ends here */}

        {/*  Fifth Skill card start here */}
        <div className="h-44 w-96 p-5 shadow-lg bg-gray-100 dark:bg-gray-950 dark:text-white dark:shadow-gray-700 dark:shadow-lg rounded-md transition duration-300">
        <div className="h-14 w-14 bg-yellow-400/10 dark:bg-transparent rounded-full flex items-center justify-center text-2xl transition duration-300"><i className="fa-brands fa-git-alt text-yellow-500"></i></div>
        <h2 className="mt-5 mb-3 font-semibold text-xl">Git</h2>
        <div className="h-2 w-full bg-gray-200 rounded-md dark:bg-gray-400 transition duration-300"><div className="h-2 w-[80%] rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700"></div></div>
        </div>
        {/*  Fifth Skill card ends here */}

        {/*  Sixth Skill card start here */}
        <div className="h-44 w-96 p-5 shadow-lg bg-gray-100 dark:bg-gray-950 dark:text-white dark:shadow-gray-700 dark:shadow-lg rounded-md transition duration-300">
        <div className="h-14 w-14 bg-purple-400/10 dark:bg-transparent rounded-full flex items-center justify-center text-2xl transition duration-300"><i className="fa-solid fa-desktop text-purple-500"></i></div>
        <h2 className="mt-5 mb-3 font-semibold text-xl">Responsive Design</h2>
        <div className="h-2 w-full bg-gray-200 rounded-md dark:bg-gray-400 transition duration-300"><div className="h-2 w-[90%] rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700"></div></div>
        </div>
        {/*  Sixth Skill card ends here */}
      </div>
    </section>
  )
}
