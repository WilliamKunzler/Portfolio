import { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io"; 

function NavBar() {
  const [mobile, setMobile] = useState(false)
  const navElements = ['Home', 'About me', 'Skills', 'Projects', 'Contact']

  return (
    <div className="fixed top-0 left-0 w-full bg-[#222222] text-white px-6 py-4 flex justify-between items-center z-50">
      {/* Ícone hambúrguer à esquerda */}
      <div className='md:hidden'>
        <RiMenu2Fill 
          size={28} 
          className='cursor-pointer' 
          onClick={() => setMobile(true)} 
        />
      </div>

      {/* Menu desktop */}
      <div className='hidden md:flex gap-10 mx-auto'>
        {navElements.map((item, idx) => (
          <h1
            key={idx}
            className='relative cursor-pointer after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F50057] after:transition-all after:duration-300 hover:after:w-full'
          >
            {item}
          </h1>
        ))}
      </div>
      
      {/* Menu Mobile Tela Cheia */}
      {mobile && (
        <div className='fixed inset-0 bg-[#222] text-white flex flex-col p-6 z-50'>

          {/* Botão de fechar */}
          <div className='flex justify-end'>
            <button
              className='text-[#F50057] text-3xl'
              onClick={() => setMobile(false)}
              aria-label="Fechar menu"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Links do menu */}
          <div className='flex flex-col justify-center items-center h-full gap-10 mt-10 text-xl'>
            {navElements.map((item) => (
              <h1
                key={item}
                className="
                  cursor-pointer 
                  relative 
                  after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F50057]
                  after:transition-all after:duration-300 
                  hover:after:w-full
                "
              >
                {item}
              </h1>
            ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default NavBar
