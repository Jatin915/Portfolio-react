import React, { useCallback, useEffect, useState } from 'react';
import '../CustomCss/BlinkingCursor.css'; // Importing the CSS for the blinking cursor
import '../CustomCss/Hero.css'; // Importing custom CSS for the Hero component

export const Hero = () => {

  const texts = [
    "git clone https://github.com/Jatin915/",
    "https://in.linkedin.com/",
    "https://instagram.com/"
  ];

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [Index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  
  const typingSpeed = isDeleting ? 50 : 100; // Speed of typing and deleting
  const handleTyping = useCallback(() => {
    if(!isDeleting) {
      setIsCursorVisible(false);
      if(charIndex < texts[Index].length) {
        setDisplayText(texts[Index].substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        // document.getElementById('terminal-blinking-cursor').removeAttribute('id'); // Show cursor
      }
      else{
        // document.getElementById('terminal-blinking-cursor').setAttribute('id'); // Blink cursor
        setIsCursorVisible(true);
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait before starting to delete
      }
    }
    else {
      if(charIndex > 0) {
        setIsCursorVisible(false);
        setDisplayText(texts[Index].slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
        if(Index == 2) setIndex(0);
        setDisplayText("");
      }
    }
  }, [charIndex, isDeleting, Index]);
  
  useEffect(() => {
    setTimeout(handleTyping, typingSpeed);
  }, [charIndex, isDeleting, Index, displayText]);

  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] md:px-24 w-auto backdrop-blur-3xl shadow-sm mt-4 bg-slate-100 dark:bg-gray-950 transition duration-300">
      <div className="sm:py-28 sm:px-8 md:px-1 lg:px-38 py-20 text-center  min-h-full w-full">

       <span><h1 className="text-3xl px-4 sm:text-6xl font-bold leading-snug dark:text-white transition duration-300">The <span className="bg-gradient-to-r from-blue-100 via-purple-300 to-teal-200 leading-snug dark:text-gray-800 transition duration-300">FullStack Developer</span> For The Web</h1></span>

        <p className="mt-16 text-md sm:text-2xl px-4 text-gray-600 dark:text-gray-400 transition duration-300">Creating <strong className="dark:text-gray-300 transition duration-300">high-quality web applications</strong> with modern tools and best practices for exceptional user experiences.</p>

        <div className="sm:min-h-28 sm:min-w-full pt-20 sm:pt-10 px-4">
          <a href="#projects"><button id="btn" className="h-12 min-w-full sm:min-w-fit bg-blue-500 px-6 rounded-md text-white mr-4 mb-4 transition-transform duration-300 ease-in-out cursor-pointer">View Projects</button></a>
          <a href="#about"><button id="btn" className="h-12 min-w-full sm:min-w-fit border-slate-400 border-[0.5px] px-6 rounded-md text-gray-600 dark:text-gray-300 dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">Learn More</button></a>
        </div>

        <div className="min-h-fit mx-4 mt-16 text-wrap sm:w-full rounded-md bg-slate-200 text-gray-950 drop-shadow-lg dark:shadow-lg dark:shadow-zinc-800 dark:bg-zinc-900 dark:text-gray-50 transition duration-300">
          <div className="flex space-x-2 h-8 pt-2 px-2 min-w-full rounded-t-md bg-slate-300 dark:bg-zinc-800 transition duration-300">
            <span className="h-4 w-4 rounded-full bg-red-500 block"></span>
            <span className="h-4 w-4 rounded-full bg-yellow-500 block"></span>
            <span className="h-4 w-4 rounded-full bg-green-500 block"></span>
          </div>

          <div className="font-mon px-1 sm:px-3 lg:text-2xl text-lg pb-6 pt-6 tracking-wide">
            <span className="text-green-600 font-mono font-semibold transition-all ease-in-out">$</span>
            <span id='typing-text'>{displayText}</span>
            <span id={isCursorVisible ? 'terminal-blinking-cursor' : undefined} className='ml-2'>|</span>
          </div>
        </div>

      </div>
    </section>
  )
}
