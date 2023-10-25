import { profilpic } from '@/public/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, Dispatch, SetStateAction } from 'react';

interface AboutProps {
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
  }

  const About: React.FC<AboutProps> = ({ toggle, setToggle }) => {

  return (
    <section className="max-w-containerSmall mx-auto py-2 lgl:pb-1 pt-1 flex flex-col gap-8">
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ display: toggle ? 'none' : '' }}
        className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          En 2020, j&apos;ai débuté en créant des sites web, principalement Shopify, à la demande de proches. Après une intense auto-formation, j&apos;ai suivi une formation au <span className="text-textGreen">GRETA</span> pour devenir développeur web. J&apos;ai ensuite élargi mes compétences en front-end avec JavaScript, Bootstrap et Tailwind CSS. Plus tard, j&apos;ai formé des adultes sur l&apos;utilisation de WordPress. </p>
          <p> 
          Pour approfondir mon savoir en gestion de projets, j&apos;ai suivi une formation en chef de projet digital avec <span className="text-textGreen">DORANCO</span>. J&apos;y ai acquis des compétences en React et en back-end avec Node.js, Express.js, PHP et Symfony. </p>
          <p>    
          J&apos;ai renforcé mes compétences en m&apos;immergeant dans un POEC à <span className="text-textGreen">La Passerelle </span>axé sur le PHP, avec Symfony, MySQL et MongoDB. J&apos;ai réussi des projets en PHP, collaboré avec des designers en équipe en fin de formation, élargissant ainsi ma polyvalence de développeur.
          </p>          
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full "
                src={profilpic}
                alt="profileImg"
                quality={100}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;