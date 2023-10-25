import React from 'react'
import SectionTitle from '../SectionTitle';
import skillData from './dataSkill.json';
import { FaPhp, FaAngular, FaReact, FaBootstrap } from "react-icons/fa"; 
import { DiSymfonyBadge } from "react-icons/di"; 
import { SiNestjs, SiTailwindcss } from "react-icons/si"; 
import { GiHighGrass } from "react-icons/gi"; 
import { DiJavascript1 } from "react-icons/di"; 
import { GrMysql } from "react-icons/gr"; 
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi"; 
import CustomIcon from "./CustomIcon";
import { IconType } from "react-icons";
import { motion } from 'framer-motion';

const Skill = () => {
  const iconMappings: { [key: string]: IconType } = {
    "PHP": FaPhp,
    "Symfony": DiSymfonyBadge,
    "NestJS": SiNestjs,
    "Twig": GiHighGrass,
    "Javascript": DiJavascript1,
    "Angular": FaAngular,
    "ReactJS": FaReact,
    "Bootstrap": FaBootstrap,
    "TailwindCSS": SiTailwindcss,
    "MySQL": GrMysql,
    "PostgreSQL": BiLogoPostgresql,
    "MongoDB": BiLogoMongodb,
  };

  return (

  <motion.section
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
  id="Skill"
  className="max-w-contentContainer mx-auto py-10 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
  <SectionTitle title="technologies utilisées" />

  <div className="w-full grid gap-8 text-center bloc-skill">
  {skillData.skills.map((skill) => (
    <div key={skill.id}>
      <h4 className="font-semibold mb-2 text-sm mt-4">{skill.title}</h4>

      <div className="flex items-center flex-col rounded-lg bg-textDark py-4 px-0 ">
        <ul>
          {skill.technologies.map((technologie) => (
            <li key={skill.id} className="text-sm text-white mt-2 flex gap-2">
               <CustomIcon icon={iconMappings[technologie]} size={14}/>{technologie}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

    </motion.section>

  )
}

export default Skill