import React from 'react'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }} 
    id="Contact" 
    className="max-w-contentContainer mx-auto py-10 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    <SectionTitle title="Contact"  />
    <div>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        N&apos;hésitez pas à me contacter directement par{" "}
        <a target="_blank"className="underline" href="mailto:promatthcorvo@gmail.com">
        e-mail
        </a>
        {" "} ou via {" "}
        <a target="_blank" className="underline" href="https://www.linkedin.com/in/corvomatthieu/">
        LinkedIn
        </a>.
       
      </p>
      </div>

    </motion.section>
  )
}

export default Contact