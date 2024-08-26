import { FaInstagram, FaLinkedin, FaPinterestSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiFillTikTok } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Footer() {
  

 

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
  };


  return (
    <div className="relative w-full mt-10 z-50">
      <div className="flex flex-row justify-center">
        <a
          href="#instagram"
          className="nav-item font-bold hover:text-lime-400 my-2 mx-4 transition duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="#linkedin"
          className="nav-item font-bold hover:text-lime-400 my-2 mx-4 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="#pinterest"
          className="nav-item font-bold hover:text-lime-400 my-2 mx-4 transition duration-300"
        >
          <FaPinterestSquare size={30} />
        </a>
        <a
          href="#mail"
          className="nav-item font-bold hover:text-lime-400 my-2 mx-4 transition duration-300"
        >
          <HiMail size={32} />
        </a>
        <a
          href="#tiktok"
          className="nav-item font-bold hover:text-lime-400 my-2 mx-4 transition duration-300"
        >
          <AiFillTikTok size={30} />
        </a>
      </div>
      <div className="flex justify-center items-center mt-5">
      <nav className="justify-center items-center text-stone-900 lg:text-xl text-sm">
          <a
            className="nav-item font-bold hover:text-lime-400 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/", "top")}
          >
            INICIO
          </a>
          <a
            className="nav-item font-bold hover:text-lime-400 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/portfolio", "")}
          >
            PORTFOLIO
          </a>
          <a
            className="nav-item font-bold hover:text-lime-400 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/", "blogs-large")}
          >
            BLOGS
          </a>
          <a
            className="nav-item font-bold hover:text-lime-400 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/", "about-me")}
          >
            SOBRE MÍ
          </a>
        </nav>
      </div>
      <p className="text-center mt-10 -mb-10 p-5">
        &copy;2024 Guillermina Bascoy | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
