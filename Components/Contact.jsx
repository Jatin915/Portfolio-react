import React, { useRef } from 'react';
import '../CustomCss/Contact.css'; // Importing custom CSS for the contact section

export const Contact = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if(emailRef.current.value.trim() === '') emailRef.current.focus();
    if(messageRef.current.value.trim() === '') messageRef.current.focus();
    if(nameRef.current.value.trim() === '') nameRef.current.focus();
  }

  return (
    <section id="contact" className="min-h-[calc(100vh)] pt-26 min-w-full bg-zinc-100 px-5 dark:bg-zinc-900 md:px-15 py-10 transition duration-300">
      <h1 className="text-3xl sm:text-4xl font-bold mb-5 dark:text-white text-center transition duration-300">Get In Touch</h1>
      <p className="text-gray-500 text-md sm:text-xl dark:text-gray-400 mb-10 sm:mb-10 md:mb-4 text-center transition duration-300">Instead of working together? Lets connect</p>

      <div id="contact-Form" className="min-w-full min-h-96 sm:flex gap-10 p-10">
        
        <div id="socials" className="h-full md:min-w-[30%] transition duration-300">
          <div className="min-h-[30%] min-w-[33%] sm:min-w-full shadow-lg dark:shadow-zinc-700 p-8 mb-4 rounded-md text-center transition duration-300">
            <span className="p-3 inline bg-blue-100 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-solid fa-envelope text-blue-500 text-lg"></i></span>
            <h3 className="font-semibold mt-4 mb-2 dark:text-white transition duration-300">Email</h3>
            <p className="text-gray-500 text-[0.8rem] sm:text dark:text-gray-400 transition duration-300">Example@Test.com</p>
          </div>
          
          <div className="min-h-[30%] min-w-[33%] sm:min-w-full shadow-lg dark:shadow-zinc-700 p-8 mb-[1.1rem] rounded-md text-center transition duration-300">
            <span className="p-3 inline bg-blue-100 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-solid fa-envelope text-blue-500 text-lg"></i></span>
            <h3 className="font-semibold mt-4 mb-2 dark:text-white transition duration-300">Location</h3>
            <p className="text-gray-400">Your Loc</p>
          </div>
          <div id="social" className="min-h-[30%] min-w-[33%] sm:min-w-full shadow-lg dark:shadow-zinc-700 p-6 pt-8 sm:p-8 rounded-md text-center transition duration-300">
            <span className="p-3 inline bg-blue-100 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-solid fa-envelope text-blue-500 text-lg"></i></span>
            <h3 className="font-semibold mt-4 sm:mb-2 mb-3 dark:text-white transition duration-300">Social</h3>
            <span className="p-1 lg:p-2 mr-2 inline bg-gray-200 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-brands fa-github text-md text-gray-600 dark:text-gray-400 transition duration-300"></i></span>
            <span className="p-1 lg:p-2 inline mr-2 bg-gray-200 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-brands fa-linkedin text-gray-600 mb-5 dark:text-gray-400 transition duration-300"></i></span>
            <span className="p-1 lg:p-2 inline bg-gray-200 dark:bg-transparent shadow-md rounded-full transition duration-300"><i className="fa-brands fa-x-twitter dark:text-gray-400 transition duration-300"></i></span>
          </div>
        </div>


        <div id="Form" className="h-full w-full shadow-lg dark:shadow-zinc-700 p-5 rounded-md transition duration-300">
          <form action>
            <h1 className="text-xl font-semibold mb-5 dark:text-gray-200 transition duration-300">Send me a Message</h1>
            <h5 className="text-gray-500 dark:text-gray-400 mb-1 transition duration-300">Name</h5>
            <input ref={nameRef} className="w-full min-h-10 pl-2 bg-transparent border-[0.5px] border-gray-300 rounded-md dark:text-white" type="text" />

            <h5 className="text-gray-500 dark:text-gray-400 mb-1 mt-6 transition duration-300">Email</h5>
            <input ref={emailRef} className="w-full min-h-10 pl-2 bg-transparent border-[0.5px] border-gray-300 rounded-md dark:text-white" type="text" />

            <h5 className="text-gray-500 dark:text-gray-400 mb-1 mt-6 transition duration-300">Message</h5>
            <textarea ref={messageRef}
  className="w-full min-h-32 pl-2 pt-2 bg-transparent border-[0.5px] border-gray-300 rounded-md dark:text-white overflow-auto resize-none" 
/>

            <button onClick={handleSubmit} className="h-12 min-w-full mt-10 bg-blue-500 px-6 rounded-md text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 cursor-pointer">Submit</button>
          </form>
            
        </div>
    </div>
    </section>
  )
}
