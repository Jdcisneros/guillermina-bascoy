import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import {  IoIosClose   } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import "./styles.css"
import { RiInstagramFill } from 'react-icons/ri';
import { FaLinkedin, FaPinterestSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillTikTok } from 'react-icons/ai';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      if (sectionId) {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // Ajusta el tiempo si es necesario
  }

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="p-2 text-2xl transform hover:scale-125 duration-300"
      >
        <CgMenuRightAlt />
      </button>
      
      <div
        className={`fixed inset-0 bg-zinc-950 py-16 transition-transform transform duration-500 ${isOpen ? 'lg:translate-x-3/4 sm:translate-x-full' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute  top-3 left-3 text-zinc-50 text-2xl transform hover:scale-150 duration-300"
        >
          < IoIosClose  size={40} />
        </button>
        <ul className="flex flex-col h-full cursor-pointer menu ">
          <li  className='mt-5'>
            <a
              className="px-6 text-zinc-50 font-bold text-6xl lg:text-7xl menuHover hover:text-zinc-950 "
              
              onClick={() => setIsOpen(false) || handleNavigate("/", "top")}
            >
              INICIO
            </a>
          </li>
          <li className='mt-5'>
            <a
              className="px-6 text-zinc-50 font-bold text-6xl lg:text-7xlmenuHover hover:text-zinc-950 "
              
              onClick={() => setIsOpen(false) || handleNavigate("/portfolio", "")}
            >
              PORTFOLIO
            </a>
          </li>
          <li  className='mt-5'>
            <a
              className="px-6 text-zinc-50 font-bold text-6xl lg:text-7xl menuHover hover:text-zinc-950 "
              onClick={() => setIsOpen(false) || handleNavigate("/blogs", "")}
            >
              BLOGS
            </a>
          </li >
          <li  className='mt-5'>
            <a
              className="px-6 text-zinc-50 font-bold text-6xl lg:text-7xl menuHover hover:text-zinc-950 "
              href="#about-me"
              onClick={() => setIsOpen(false)  || handleNavigate("/", "about-me")}
            >
              SOBRE MÍ
            </a>
          </li>
        </ul>
      {/* socials */}
      <div className=" absolute bottom-32">
      <div className="flex flex-row items-center text-zinc-50 p-6 ">
      <a
          href="#linkedin"
          className="font-bold m-2 transition hover:text-zinc-950 hover:bg-zinc-50 rounded-sm p-1 duration-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#mail"
          className="font-bold m-1 transition hover:text-zinc-950 hover:bg-zinc-50 rounded-sm p-1 duration-500"
        >
          <MdEmail  size={27} />
        </a>
        <a
          href="#instagram"
          className=" font-bold m-1 transition hover:text-zinc-950 hover:bg-zinc-50 rounded-sm p-1 duration-500"
        >
          <RiInstagramFill size={26} />
        </a>
      
        <a
          href="#pinterest"
          className="font-bold m-2 transition hover:text-zinc-950 hover:bg-zinc-50 rounded-sm p-1 duration-500"
        >
          <FaPinterestSquare size={24} />
        </a>
       
        <a
          href="#tiktok"
          className="font-bold  m-2 transition hover:text-zinc-950 hover:bg-zinc-50 rounded-sm p-1 duration-500"
        >
          <AiFillTikTok  size={26} />
        </a>
      </div>
    </div>
      </div>

    </div>
  );
};

export default Menu;