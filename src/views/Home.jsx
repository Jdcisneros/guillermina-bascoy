import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import "../components/styles.css";
import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";

function Home() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center flex-col items-center bg-stone-100">
      <Nav />
      <div className="gbBackground justify-center text-end animate-slide-in-left-Bg lg:top-0 top-12 lg:flex hidden">
        <h2>GUILLERMINA BASCOY</h2>
      </div>
      <section
        className=" relative lg:w-[740px] md:w-[440px] w-full flex justify-center items-center z-30"
        id="top"
      >
        <img
          src="/imagenF.png"
          alt="imagenPerfil"
          className="lg:w-3/4 w-full object-cover mt-20 animate-slide-in-left"
        />
        <div className="absolute bottom-36 text-center md:static lg:static text-nowrap flex justify-center flex-col items-center">
          <h2 className="text-xs lg:text-3xl font-semibold text-stone-700 animate-slide-in-right">
            ESTUDIANTE DE DISEÑO DE INDUMENTARIA
          </h2>
          <h1 className="text-[56px] lg:text-9xl font-font text-lime-500 animate-slide-in-right">
            GUILLERMINA BASCOY
          </h1>
          <p className="text-xs lg:text-base w-full max-w-[340px] text-pretty flex-wrap animate-slide-in-right overflow-hidden px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
        metus tellus. Etiam blandit aliquet lorem nec varius. Nulla
        tincidunt enim ac sem ornare bibendum. Mauris iaculis hendrerit
        varius. Maecenas suscipit tincidunt turpis, in porta justo eleifend
        id.
      </p>
        </div>
      </section>

      {/* Carrusel para pantallas pequeñas */}
      <section id="portfolio" className="lg:hidden flex flex-col items-center bg-stone-950 w-full">
        <h2 className="animate-slide-in-left font-bold text-6xl text-lime-500 mt-16 mb-5">
          PORTFOLIO
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="carousel-slide relative w-full flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`image${index + 1}`}
                  className="object-cover h-[500px] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-lime-50/70 to-stone-950/70 bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-10 flex flex-col justify-center items-center">
                    <p className="text-stone-50 font-bold text-center text-xl text-pretty">
                      NOMBRE PROJECTO
                    </p>
                    <a>
                      <button className="py-1 px-5 my-10 border-2 rounded border-stone-50 hover:bg-lime-500 text-stone-50 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
                        VER MÁS
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-stone-50 text-lime-500 p-2 rounded-full z-10"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-stone-50 text-lime-500 p-2 rounded-full z-10"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
        <a>
          <button className="py-1 px-5 my-10 border-2 rounded border-stone-50 hover:bg-lime-500 text-stone-50 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
            VER MÁS
          </button>
        </a>
      </section>

      {/* Carrusel para pantallas grandes */}
      <section
        id="portfolio"
        className="hidden lg:flex lg:w-full md:w-[440px] justify-center flex-col items-center z-30 bg-stone-950"
      >
        <h2 className="animate-slide-in-left font-bold lg:text-7xl text-6xl text-lime-500 mt-16">
          PORTFOLIO
        </h2>
        <div className="flex justify-center space-x-4 mx-36 my-20">
          {images.map((image, index) => (
            <div key={index} className="relative w-1/3 overflow-hidden group">
              <img
                src={image}
                alt={`image${index + 1}`}
                className="object-cover h-[500px] w-full transition-transform duration-300 ease-in-out transform scale-110 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-lime-50/70 to-stone-950/70 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-animate">
                <div className="absolute bottom-10 flex flex-col justify-center items-center">
                  <p className="text-stone-50 font-bold text-center text-xl text-pretty">
                    {image.name}
                  </p>
                  <a>
                    <button className="py-1 px-5 my-10 border-2 rounded border-stone-50 hover:bg-lime-500 text-stone-50 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
                      VER MÁS
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a>
          <button className="py-1 px-5 my-10 border-2 rounded border-stone-50 hover:bg-lime-500 text-stone-50 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
            VER MÁS
          </button>
        </a>
      </section>

      {/* Carrusel para pantallas pequeñas BLOGS */}
      <section id="blogs" className="lg:hidden flex flex-col items-center bg-stone-50 w-full">
      <h2 className="animate-slide-in-left font-bold text-6xl text-lime-500 mt-16 mb-5">
    MI BLOG
  </h2>
  <div className="relative w-full overflow-hidden group">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-slide relative w-full flex-shrink-0 px-2"
        >
          <img
            src={image}
            alt={`image${index + 1}`}
            className="object-cover h-[500px] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 to-lime-50/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-10 flex flex-col justify-center items-center">
              <p className="text-stone-950 font-bold text-center text-xl text-pretty">
                NOMBRE BLOG
              </p>
              <a>
                <button className="py-1 px-5 my-10 border-2 rounded border-stone-950 hover:bg-lime-500 text-stone-950 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
                  VER MÁS
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-stone-50 text-lime-500 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={prevSlide}
    >
      &lt;
    </button>
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-stone-50 text-lime-500 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={nextSlide}
    >
      &gt;
    </button>
  </div>
  <a>
    <button className="py-1 px-5 my-10 border-2 rounded border-stone-950 hover:bg-lime-500 text-stone-950 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
      VER MÁS
    </button>
  </a>
</section>

      {/* Carrusel para pantallas grandes BLOGS */}
      <section
        id="blogs"
        className="hidden lg:flex lg:w-full md:w-[440px] justify-center flex-col items-center z-30 bg-stone-50"
      >
        <h2 className="animate-slide-in-left font-bold lg:text-7xl text-6xl text-lime-500 mt-16">
          MI BLOG
        </h2>
        <div className="flex justify-center space-x-4 mx-36 my-20">
          {images.map((image, index) => (
            <div key={index} className="relative w-1/3 overflow-hidden group">
              <img
                src={image}
                alt={`image${index + 1}`}
                className="object-cover h-[500px] w-full transition-transform duration-300 ease-in-out transform scale-110 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-lime-50/70 to-stone-950/70 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-animate">
                <div className="absolute bottom-10 flex flex-col justify-center items-center">
                  <p className="text-stone-50 font-bold text-center text-xl text-pretty">
                    {image.name}
                  </p>
                  <a>
                    <button className="py-1 px-5 my-10 border-2 rounded border-stone-50 hover:bg-lime-500 text-stone-50 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
                      VER MÁS
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a>
          <button className="py-1 px-5 my-10 border-2 rounded border-stone-950 hover:bg-lime-500 text-stone-950 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
            VER MÁS
          </button>
        </a>
      </section>

      <section
        id="about-me"
        className="flex w-full md:w-[440px] justify-center flex-col items-center z-30 bg-stone-950 "
      >
        <h2 className="animate-slide-in-left font-bold lg:text-7xl text-6xl text-lime-500 my-20">
          SOBRE MÍ
        </h2>
        <p className="text-pretty animate-slide-in-right transform duration-3000 w-[340px] text-center  text-stone-50 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          metus tellus. Etiam blandit aliquet lorem nec varius. Nulla tincidunt
          enim ac sem ornare bibendum. Mauris iaculis hendrerit varius. Maecenas
          suscipit tincidunt turpis, in porta justo eleifend id. Donec placerat,
          nisl vel scelerisque iaculis, augue urna sagittis arcu, id ultrices
          purus metus id nibh. Sed fringilla ante euismod massa volutpat, ut
          molestie erat ultrices. 
        </p>
      
      </section>
      <Footer />
      <Socials />
    </div>
  );
}

export default Home;
