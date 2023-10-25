import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ArrowUp = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300  mdl:hidden"        
        onClick={handleScrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ArrowUp;