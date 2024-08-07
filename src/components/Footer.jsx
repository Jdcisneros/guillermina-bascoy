import { FaInstagram, FaLinkedin, FaPinterestSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiFillTikTok } from "react-icons/ai";
import { useEffect, useState } from "react";

function Footer() {
  const [activeItem, setActiveItem] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setActiveItem(scrollTop > 0 ? "scrolled" : "top");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full m-8 bg-stone-100">
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
        <nav className="justify-center item text-stone-900 text-xl">
          <a
            href="#top"
            className={`nav-item font-bold hover:text-lime-400 px-3 mx-1 transition ${
              activeItem === "top" ? "text-lime-400" : ""
            }`}
            onClick={() => handleItemClick("top")}
          >
            INICIO
          </a>
          <a
            href="#portfolio"
            className={`nav-item font-bold hover:text-lime-400 px-3 mx-1 transition ${
              activeItem === "portfolio" ? "text-lime-400" : ""
            }`}
            onClick={() => handleItemClick("portfolio")}
          >
            PORTFOLIO
          </a>
          <a
            href="#blogs"
            className={`nav-item font-bold hover:text-lime-400 px-3 mx-1 transition ${
              activeItem === "blogs" ? "text-lime-400" : ""
            }`}
            onClick={() => handleItemClick("blogs")}
          >
            BLOGS
          </a>
          <a
            href="#about-me"
            className={`nav-item font-bold hover:text-lime-400 px-3 mx-1 transition ${
              activeItem === "about-me" ? "text-lime-400" : ""
            }`}
            onClick={() => handleItemClick("about-me")}
          >
            SOBRE MÍ
          </a>

          <div
            className={`indicator absolute bottom-0 h-1 bg-lime-400 transition-all ${
              activeItem === "top"
                ? "left-0"
                : activeItem === "portfolio"
                ? "left-1/4"
                : activeItem === "about-me"
                ? "left-2/4"
                : activeItem === "blogs"
                ? "left-3/4"
                : "left-3/4"
            }`}
          ></div>
        </nav>
      </div>
      <p className="text-center mt-10 -mb-10">
        &copy;2024 Guillermina Bascoy | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
