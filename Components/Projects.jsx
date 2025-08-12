import React from 'react'

export const Projects = () => {
  return (
    <section id="projects" className="min-h-[calc(100vh)] pt-20 min-w-full bg-slate-100 dark:bg-gray-950 backdrop-blur-3xl shadow-sm transition duration-300">

      <div className="min-w-full max-h-fit text-center p-11 pt-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-5 dark:text-white transition duration-300">Featured Projects</h1>
        <p className="text-gray-500 text-md sm:text-xl dark:text-gray-400 mb-10 sm:mb-10 md:mb-4 transition duration-300">Check out some of my recent work</p>
      </div>
      
      <div id="skilss" className="min-h-full min-w-full flex flex-wrap justify-center pb-24 sm:pb-14 gap-10">

        {/* <!-- First Skill card starts here --> */}
        <div className="h-[28rem] w-80 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-white dark:border-slate-400 dark:border-[0.5px] dark:shadow-gray-900 dark:shadow-md rounded-xl transition duration-300">
        <div className="h-[10rem] w-full bg-red-400/10 dark:bg-transparent text-2xl transition duration-300 overflow-hidden">
          <img src="./assets/How_to_choose_header_abd8decac5.webp" alt="" />
        </div>
        <div className="px-5">
          <h2 className="mt-8 mb-3 font-semibold text-xl">Crypto Platform</h2>
          <p className="text-gray-500 text-sm dark:text-gray-400 mb-5 transition duration-300">A cryptocurrency trading platform with real time price tracking and portfolio management.</p>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">HTML5</span>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">CSS3</span>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">JavaScript</span>
          <button id="btn" className="h-10 w-22 bg-red-500 px-4 rounded-md text-white mt-6 transition-transform duration-300 ease-in-out">Youtube</button>
          <button id="btn" className="h-12 w-20 rounded-md text-gray-600 dark:text-gray-300 mb-8 dark:bg-transparent transition-all duration-300 ease-in-out"><i className="fa-brands fa-github mr-2"></i>Code</button>
        </div>
        </div>
        {/* <!-- First Skill card ends here --> */}

        {/* <!-- Second Skill card starts here --> */}
        <div className="h-[28rem] w-80 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-white dark:border-slate-400 dark:border-[0.5px] dark:shadow-gray-900 dark:shadow-md rounded-xl transition duration-300">
        <div className="h-[10rem] w-full bg-red-400/10 dark:bg-transparent text-2xl transition duration-300 overflow-hidden">
          <img src="./assets/60530322-56fe-43f4-97f3-1e9558e26d07-cover.png" alt="" />
        </div>
        <div className="px-5">
          <h2 className="mt-8 mb-3 font-semibold text-xl">AI Landing Page</h2>
          <p className="text-gray-500 text-sm dark:text-gray-400 mb-5">A stunning landing page showcasing AI services with interactive animations and modern designs.</p>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">HTML5</span>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">CSS3</span>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">JavaScript</span>
          <button id="btn" className="h-10 w-22 bg-red-500 px-4 rounded-md text-white mt-6 transition-transform duration-300 ease-in-out">Youtube</button>
          <button id="btn" className="h-12 w-20 rounded-md text-gray-600 dark:text-gray-300 mb-8 dark:bg-transparent transition-all duration-300 ease-in-out"><i className="fa-brands fa-github mr-2"></i>Code</button>
        </div>
        </div>
        {/* <!-- Second Skill card ends here --> */}

        {/* <!-- Third Skill card starts here --> */}
        <div className="h-[28rem] w-80 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-white dark:border-slate-400 dark:border-[0.5px] dark:shadow-gray-900 dark:shadow-md rounded-xl transition duration-300">
        <div className="h-[10rem] w-full bg-red-400/10 dark:bg-transparent text-2xl overflow-hidden">
          <img src="./assets/ai-generated-content-detection-system-recognize-ai-content.jpg" alt="" />
        </div>
        <div className="px-5">
          <h2 className="mt-8 mb-3 font-semibold text-xl">AI Image Detector</h2>
          <p className="text-gray-500 text-sm dark:text-gray-400 mb-5 transition duration-300">An intelligent image detection system that can identify and classNameify objects in real-time.</p>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">HTML5</span>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">CSS3</span>
          <span className="text-gray-500 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 px-2 rounded-xl transition duration-300">JavaScript</span>
          <button id="btn" className="h-10 w-22 bg-red-500 px-4 rounded-md text-white mt-6 transition-transform duration-300 ease-in-out">Youtube</button>
          <button id="btn" className="h-12 w-20 rounded-md text-gray-600 dark:text-gray-300 mb-8 dark:bg-transparent transition-all duration-300 ease-in-out"><i className="fa-brands fa-github mr-2"></i>Code</button>
        </div>
        </div>
        {/* <!-- Third Skill card ends here --> */}
      </div>
    </section>
  )
}
