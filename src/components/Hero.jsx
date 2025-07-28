import iconPortal from '../images/iconPortal.svg';
import { IoIosArrowForward } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Hero() {
  return (
    <div className=" flex flex-col md:flex-row w-full h-screen justify-center md:justify-between items-center text-white bg-[#161513] px-4 md:px-50 py-10 md:py-0">

      <div className='flex flex-col gap-3 w-full max-w-md md:max-w-lg'>
        <span className='hidden md:flex items-center gap-2 text-[16px] md:text-[18px]'>
          <IoIosArrowForward /> Hello
        </span>
        <h1 className="text-4xl md:text-5xl font-bold  text-center md:text-left leading-tight">
          I'm <span className='text-[#F50057]'>William</span> Kunzler
        </h1>

        {/* Texto escondido no mobile, aparece só em md+ */}
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

      {/* Ícone flutuante com animação */}
      <MdKeyboardDoubleArrowDown className="text-gray-400 absolute bottom-10 left-1/2 -translate-x-1/2 size-10 animate-bounce" />

    </div>
  );
}

export default Hero;
