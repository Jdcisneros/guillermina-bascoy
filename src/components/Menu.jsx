import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import {  IoIosClose   } from 'react-icons/io';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden ">
      {/* Botón hamburguesa */}
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
          className="absolute  top-8 right-2 text-gray-900 text-2xl"
        >
          < IoIosClose  size={32} />
        </button>
        <ul className="flex flex-col h-full">
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200 border-b border-gray-300"
              href="#top"
              onClick={() => setIsOpen(false)}
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200 border-b border-gray-300"
              href="#portfolio"
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200 border-b border-gray-300"
              href="#blogs"
              onClick={() => setIsOpen(false)}
            >
              BLOGS
            </a>
          </li>
          <li>
            <a
              className="block p-6 text-gray-700 hover:bg-gray-200"
              href="#about-me"
              onClick={() => setIsOpen(false)}
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