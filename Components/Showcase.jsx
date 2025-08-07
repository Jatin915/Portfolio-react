import React from 'react'

export const Showcase = () => {
  return (
    <section id="showcase" className="min-h-[calc(100vh)] bg-gray-100 flex flex-col items-center dark:bg-zinc-900 transition duration-300">
      
      <div className="max-h-full min-w-fit mt-32 text-center mb-28">
        <h3 className="text-4xl font-bold mb-5 dark:text-white transition duration-300">What's in my Toolkit</h3>
        <p className="text-gray-500 text-xl dark:text-gray-400 transition duration-300">Everything needed to build great products on the web</p>
      </div>

      <div id="features-boxes" className="min-h-full max-w-72 sm:min-w-full pt-10 sm:pb-10 flex gap-10 justify-between overflow-x-scroll sm:overflow-hidden sm:flex sm:flex-grow sm:flex-wrap sm:justify-center sm:gap-8 cursor-default">

        <div className="h-72 min-w-64 sm:w-64 ml-4 sm:ml-0 shadow-xl border-x-1 rounded-lg p-7 bg-slate-50 dark:bg-zinc-950 dark:shadow-lg dark:shadow-zinc-800 sm:hover:scale-105 sm:hover:rounded-lg transition-all duration-300 ease-in-out">
          <span className="p-3 inline bg-blue-100 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-solid fa-paintbrush text-blue-500 text-lg"></i></span>
          <div className="mt-10">
            <h3 className="mb-3 text-md font-semibold dark:text-white transition duration-300">Modern UI Design</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition duration-300">Creating beautiful, responsive interfaces that look great on any device using the latest design trends</p>
          </div>
        </div>

        <div className="h-72 min-w-64 sm:w-64 shadow-xl border-x-1 rounded-lg p-7 bg-slate-50 dark:bg-zinc-950 dark:shadow-lg dark:shadow-zinc-800 sm:hover:scale-105 sm:hover:rounded-lg transition-all duration-300 ease-in-out">
          <span className="p-3 inline bg-blue-100 dark:bg-transparent rounded-full transition duration-300"><i className="fa-solid fa-code text-blue-500 text-lg"></i></span>
          <div className="mt-10">
            <h3 className="mb-3 text-md font-semibold dark:text-white transition duration-300">Clean Code</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition duration-300">Writing maintainable, efficient code following best practices and modern development standards.</p>
          </div>
        </div>

        <div className="h-72 min-w-64 sm:w-64 shadow-xl border-x-1 rounded-lg p-7 bg-slate-50 dark:bg-zinc-950 dark:shadow-lg dark:shadow-zinc-800 sm:hover:scale-105 sm:hover:rounded-lg transition-all duration-300 ease-in-out">
          <span className="p-3 inline bg-blue-100 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-solid fa-bolt text-blue-500 text-lg"></i></span>
          <div className="mt-10">
            <h3 className="mb-3 text-md font-semibold dark:text-white transition duration-300">Peformance Optimization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition duration-300">Ensuring fast load times and smooth experiences through efficient code and asset optimization.</p>
          </div>
        </div>

        <div className="h-72 min-w-64 sm:w-64 shadow-xl border-x-1 rounded-lg p-7 bg-slate-50 mr-4 sm:mr-0 dark:bg-zinc-950 dark:shadow-lg dark:shadow-zinc-800 sm:hover:scale-105 sm:hover:rounded-lg transition-all duration-300 ease-in-out">
          <span className="p-3 inline bg-blue-100 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-solid fa-mobile-screen text-blue-500 text-lg"></i></span>
          <div className="mt-10">
            <h3 className="mb-3 text-md font-semibold dark:text-white transition duration-300">Responsive Development</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition duration-300">Building websites that work flawlessly across all screen sizes, from phones to large displays</p>
          </div>
        </div>
      </div>
    </section>
  )
}
