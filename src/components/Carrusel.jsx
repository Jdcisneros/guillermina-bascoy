import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"
import proyectos1 from "/Proyectos1.jpg";
import proyectos2 from "/Proyectos2.jpg";
import blog2 from "/Blog2.jpg";
import blog1 from "/Blog1.jpg";
import sobremi1 from "/sobremi1.png"
import sobremi2 from "/sobremi2.jpg"

import { useEffect, useState } from "react";
import Socials from "./Socials";

function Carrusel() {
  const images = [
    { image: proyectos1, image2:proyectos2, title: "PORTFOLIO",href:"/portfolio" },
    { image: blog1, image2:blog2, title: "MI BLOG",href:"/blogs" },
    { image: sobremi1, image2:sobremi2, title: "SOBRE MI",href:"#about-me" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9500,
    arrows: false,
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  useEffect(() => {
    const timer = setTimeout(() => setCurrentSlide(currentSlide), 1);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full mt-28">
      <Socials />
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <div className="relative w-full h-full flex items-center justify-center ">
                <h2
                  className={`lg:text-8xl text-5xl font-bold absolute left-5 lg:left-72 text-zinc-950 rounded-l-sm py-1 px-4 z-40 ${
                    currentSlide === index ? "animate-slide-in-left" : ""
                  }`}
                >
                  {image.title}
                </h2>
                <a
                  href={image.href}
                  className={`lg:text-xl font-bold absolute left-14 lg:left-80 lg:bottom-32 bottom-48 bg-zinc-950 text-zinc-50 hover:border-stone-950 hover:border-2 hover:text-zinc-950 hover:bg-zinc-50 rounded-sm lg:py-1  px-2 lg:px-4 z-30 ${
                    currentSlide === index ? "animate-slide-in-left" : ""
                  }`}
                >
                  VER MÁS
                </a>
                <img
                  src={image.image}
                  alt={`image${index + 1}`}
                  className={`object-contain h-[400px] lg:w-1/8 w-1/2 md:w-1/4 relative left-32 lg:left-80 rounded-sm z-30  ${
                    currentSlide === index ? "" : ""
                  }`}
                />
                <img
                  src={image.image2}
                  alt={`image${index + 1}`}
                  className={`object-cover h-[500px] w-1/3 lg:w-1/4 relative left-7 lg:left-60 rounded-sm  ${
                    currentSlide === index ? "animate-slide-in-right" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrusel;