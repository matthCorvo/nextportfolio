import { logo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import navLinksData from "./dataNav.json";
import { useRef, useState  } from 'react';
import { MdEmail, MdOutlineClose } from 'react-icons/md';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  // Créer une référence  pour accéder à un élément du DOM.
  const ref = useRef<string | any>("");
  // affichage menu mobile.
  const [show, setShow] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Empêche la page de défiler lors du clic.
    e.preventDefault(); 
    
    // Cache le menu mobile
    setShow(false);

    // Obtient l'URL du lien cliqué.
    const href = e.currentTarget.href;
    // Extrait l'identifiant de la section cible de l'URL en supprimant tout avant le "#" (hash).
    const targetId = href.replace(/.*\#/,"");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });

    // nav-links active
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => { link.classList.remove("active"); });
    e.currentTarget.classList.add("active"); 

  };
  
  // mobile
  function handleClick(e: any)  {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }
 

  return (
    <div 
    className="flex z-40 fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
         
        {/* ============ Logo ============ */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image className="w-14 me-[4rem]" src={logo} alt="logo" />
          </motion.div>
        </Link>

        {/* ============ Links ============== */}
        <div className="hidden mdl:inline-flex items-center gap-7">
        <ul className="flex text-[13px] gap-7">
             {navLinksData.navLinks.map((link, index) => (
             <Link 
             onClick={handleScroll}
             key={index}
             href={link.href}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
               <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {link.label}
                </motion.li>   
             </Link>
             ))}
          </ul>
        </div>
        {/* ============== Mobile =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>     

       { show && (
          <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-20 flex flex-col items-end"
          >
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="w-[80%] h-full overflow-y-scroll scrollbarHide  bg-white bg-opacity-95  flex flex-col items-center px-4 py-10 relative"
          >
          <MdOutlineClose
              onClick={() => setShow(false)}
              className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
            />

            <div className="flex flex-col items-center gap-7 mt-[2.5rem]">
            <ul className="flex flex-col text-base gap-7">

            {navLinksData.navLinks.map((link, index) => (
             <Link 
             onClick={handleScroll}
             key={index}
             href={link.href}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
               <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {link.label}
                </motion.li>   
             </Link>
             ))}
             
            </ul>
            </div>

            <div className="flex gap-4 mt-[1.5rem]">
              <a href="https://github.com/matthCorvo" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor border-solid border-2 border-indigo-900 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <TbBrandGithubFilled />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/corvomatthieu/"
                target="_blank"
              >
                <span className="w-10 h-10 border-solid border-2 border-indigo-900 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <FaLinkedinIn />
                </span>
              </a>
              <a href="mailto:promatthcorvo@gmail.com" target="_blank">
                <span className="border-solid border-2 border-indigo-900 w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <MdEmail />
                </span>
              </a>
            
            </div>
          </motion.div>
          </div>
        )
       }


      </div>
    </div>
  );
};

export default Navbar