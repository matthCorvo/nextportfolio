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
        <div className=" text-justify w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Cela fait déjà près de 3 ans maintenant que je me suis plongé dans le monde passionnant de la programmation, en développant des sites web et des applications qui sont devenus le cœur de mes activités. 
          </p>
          <p>
          Après des mois d&apos;auto-apprentissage intensif, j&apos;ai décidé de rejoindre le <span className="text-textGreen">GRETA</span> pour une formation de développeur web. Cette expérience a été déterminante pour mon développement professionnel. J&apos;ai eu l&apos;opportunité d&apos;acquérir une solide expertise en JavaScript, ainsi que de maîtriser des frameworks front-end tels que Bootstrap et TailwindCSS.<br />
          En outre, j&apos;ai également partagé mon savoir en animant des formations sur la création de thèmes WordPress en tant que formateur pour le <span className="text-textGreen">GRETA</span>. À l&apos;issue de cette formation, ma détermination à élever mes compétences à un niveau supérieur s&apos;est encore renforcée.
           </p>
          <p> 
          Pour perfectionner ma compréhension de la gestion de projets, j&apos;ai suivi avec <span className="text-textGreen">DORANCO</span> une formation de chef de projet digital. Là, J&apos;ai acquis des compétences en React et en back-end avec Node.js, Express.js ainsi qu&apos;une initiation a PHP et Symfony. </p>
          <p>    
          J&apos;ai choisi de poursuivre mon parcours en m&apos;immergeant dans un bootcamp dédié au PHP au sein de <span className="text-textGreen">La Passerelle</span>. Ce parcours intensif m&apos;a non seulement permis d&apos;élargir mes compétences sur PHP, Symfony, MySQL et MongoDB. 
          </p>          
             <p>
             Ainsi, après ces années d&apos;exploration et de formation intense, je suis prêt à mettre en pratique mes compétences et à continuer de me développer en tant que développeur web. Mon voyage dans le monde de la programmation ne fait que commencer, et je suis impatient de relever de nouveaux défis et de contribuer à des projets passionnants.
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