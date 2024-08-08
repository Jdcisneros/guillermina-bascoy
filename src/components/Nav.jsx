import { useEffect, useState } from "react";
// import { CgMenuRightAlt } from "react-icons/cg";
import Menu from "./Menu";

function Nav() {
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
  }

  return (
    <div className="fixed top-0 z-40 w-full bg-white shadow-lg">
      <div className="flex justify-between items-center py-2 lg:w-[1400px] w-full mx-auto">
        <h2 className="flex flex-row px-2 text-stone-900 text-xl lg:text-3xl font-bold">
          Guillermina Bascoy
        </h2>
        <nav className="hidden lg:flex flex-row px-2 text-stone-900 text-xl relative">
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
              activeItem === "top" ? "left-0" : activeItem === "portfolio"
                ? "left-1/4"
                : activeItem === "about-me"
                ? "left-2/4"
                : activeItem === "blogs"
                ? "left-3/4"
                : "left-3/4"
            }`}
          />
        </nav>
        <Menu />
      </div>
    </div>
  );
}

export default Nav;