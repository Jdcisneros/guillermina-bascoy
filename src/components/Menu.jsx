import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import {  IoIosClose   } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

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
        className="p-2 text-2xl text-gray-900"
      >
        <CgMenuRightAlt />
      </button>
      
      <div
        className={`fixed inset-0 bg-white border py-16 border-gray-200 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute  top-3 right-6 text-gray-900 text-2xl"
        >
          < IoIosClose  size={32} />
        </button>
        <ul className="flex flex-col h-full">
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200 border-b border-gray-300"
              href="#Inicio"
              onClick={() => setIsOpen(false) || handleNavigate("/", "top")}
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200 border-b border-gray-300"
              
              onClick={() => setIsOpen(false) || handleNavigate("/portfolio", "")}
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200 border-b border-gray-300"
              onClick={() => setIsOpen(false) || handleNavigate("/blogs", "")}
            >
              BLOGS
            </a>
          </li>
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200"
              href="#about-me"
              onClick={() => setIsOpen(false)  || handleNavigate("/", "about-me")}
            >
              SOBRE MÍ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;