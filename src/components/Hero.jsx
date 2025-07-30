import { useEffect, useRef } from 'react';
import iconPortal from '../images/iconPortal.svg';
import { IoIosArrowForward } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Hero() {
  const vantaRef = useRef(null);
  const effect = useRef(null);

  useEffect(() => {
    if (!effect.current && window.VANTA && window.THREE) {
      effect.current = window.VANTA.WAVES({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#0e0e0e",
        // shininess: 50.00,
      });
    }

    return () => {
      if (effect.current) effect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative w-full h-screen text-white">
      <div className="flex flex-col md:flex-row w-full h-full justify-center md:justify-between items-center px-4 md:px-50 py-10 md:py-0 bg-transparent">
        <div className='flex flex-col gap-3 w-full max-w-md md:max-w-lg'>
          <span className='hidden md:flex items-center gap-2 text-[16px] md:text-[18px]'>
            <IoIosArrowForward /> Hello
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left leading-tight">
            I'm <span className='text-[#F50057]'>William</span> Kunzler
          </h1>

          <span className='hidden md:flex items-center gap-3 text-[18px] text-left leading-6'>
            <BsBagCheck className='size-10' />
            Full-stack developer and data analyst focused on building applications and analyzing data to help solve problems.
          </span>
        </div>

        <img 
          src={iconPortal} 
          alt="Ícone Portal" 
          className="w-36 h-36 md:w-100 md:h-100 mt-10 md:mt-0 object-contain"
        />

        <MdKeyboardDoubleArrowDown className="text-gray-400 absolute bottom-10 left-1/2 -translate-x-1/2 size-10 animate-bounce" />
      </div>
    </div>
  );
}

export default Hero;
