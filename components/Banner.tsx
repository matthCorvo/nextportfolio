import { motion } from 'framer-motion';
import About from './About';
import React, { useState } from 'react'

const Banner = () => {
const [toggle, setToggle] = useState(true);
const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <section
      id="Accueil"
      className="max-w-contentContainer mx-auto pt-10 mdl:py-14 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl mt-[4.5rem] text-black lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Matthieu CORVO
        <span className="mt-2 lgl:mt-4">
        Développeur Full-Stack
        </span>
      </motion.h1>
      
      <div className="flex flex-col sm:flex-row items-center  gap-4  text-lg font-medium" >

        {/* <motion.button
          onClick={handleClick} 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="group bg-gray-900 font-semibold  text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none "
        >
          qui suis-je ?
        </motion.button> */}

      <a href="/assets/CV.pdf" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="group border-solid border-2 border-dark-900 bg-white-900 font-semibold  text-black px-7 py-3 flex items-center gap-2 rounded-lg"
        >
           mon CV
        </motion.button>
      </a>
      </div>
      <About toggle={toggle} setToggle={setToggle} />

    </section>
  );
};

export default Banner;