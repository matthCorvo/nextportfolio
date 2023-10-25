import { TbBrandGithubFilled } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textDark hidden mdl:flex">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/matthCorvo" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithubFilled />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/corvomatthieu/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="mailto:promatthcorvo@gmail.com" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <MdEmail />
          </span>
        </a>
      
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default SocialIcons;