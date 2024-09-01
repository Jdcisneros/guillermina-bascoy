import { FaLinkedin, FaPinterestSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

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
    <div className="relative w-full">
      <div className="flex flex-row justify-center">
        <a
          href="#instagram"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 my-10 mx-4 transition"
        >
          <RiInstagramFill size={30} />
        </a>
        <a
          href="#linkedin"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 my-10 mx-4 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="#pinterest"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 my-10 mx-4 transition"
        >
          <FaPinterestSquare size={30} />
        </a>
        <a
          href="#mail"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 my-10 mx-4 transition"
        >
          <MdEmail size={32}  />
        </a>
        <a
          href="#tiktok"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 my-10 mx-4 transition"
        >
          <AiFillTikTok size={30}  />
        </a>
      </div>
      <div className="flex justify-center items-center mt-5">
      <nav className="justify-center items-center text-stone-900 lg:text-xl text-sm">
          <a
            className="nav-item font-bold hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/", "top")}
          >
            INICIO
          </a>
          <a
            className="nav-item font-bold hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/portfolio", "")}
          >
            PORTFOLIO
          </a>
          <a
className="nav-item font-bold hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 px-3 mx-1 transition cursor-pointer"
            onClick={() => handleNavigate("/blogs", "")}
          >
            BLOGS
          </a>
          <a
           className="nav-item font-bold hover:text-zinc-50 hover:bg-zinc-950 rounded-sm duration-500 px-3 mx-1 transition cursor-pointer"
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
