

import "../components/styles.css";
import aboutme from "/sobremi1.png";
// import image2 from "/image2.jpg";
// import image3 from "/image3.jpg";
import Carrusel from "../components/Carrusel";

function Home() {
  // const images = [image1, image2, image3];
 

  return (
    <div className="flex justify-center flex-col items-center bg-zinc-50">
      <div className="gbBackground  justify-center text-end animate-slide-in-left-Bg lg:top-0 top-12 lg:flex hidden">
        <h2>GUILLERMINA BASCOY</h2>
      </div>
      <Carrusel id="top"/>
      {/* <section
        id="portfolio"
        className="hidden lg:flex lg:w-full md:w-[440px] justify-center flex-col items-center z-30 bg-stone-950 mt-20"
      >
        <div className="flex justify-center space-x-10 mx-36 my-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-1/4 overflow-hidden group rounded"
            >
              <img
                src={image}
                alt={`image${index + 1}`}
                className="object-cover h-[500px] w-full transition-transform duration-300 ease-in-out transform scale-110 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-lime-50/70 to-stone-950/70 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-10 flex flex-col justify-center items-center">
                  <p className="text-stone-50 font-bold text-center text-xl text-pretty">
                    {image.name}
                  </p>
                  <a>
                    <p className="py-1 px-5 my-10  rounded  text-stone-50 font-bold  transition-colors duration-300 transform ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vel metus tellus. Etiam blandit aliquet lorem nec
                      varius. Nulla tincidunt enim ac sem ornare bibendum.
                      Mauris iaculis hendrerit varius. Maecenas suscipit
                      tincidunt turpis, in porta justo eleifend id. Donec
                      placerat, nisl vel scelerisque iaculis, augue urna
                      sagittis arcu, id ultrices purus metus id nibh. Sed
                      fringilla ante euismod massa volutpat, ut molestie erat
                      ultrices.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/portfolio">
          <button className="py-1 px-5 my-10 border-2 rounded border-stone-50 hover:bg-lime-500 text-stone-50 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]">
            VER MÁS
          </button>
        </a>
      </section> */}

    

      <section
        id="about-me"
        className="flex w-full justify-center flex-col items-center z-30 bg-stone-950 mt-36 "
      >
        <h2 className="animate-slide-in-left font-bold lg:text-7xl text-6xl text-zinc-50 my-8">
          SOBRE MÍ
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full ">
        <img src={aboutme} className="object-cover lg:w-2/9 w-1/5 mx-20 imgBottom "  />
        <p className="text-pretty animate-slide-in-right transform duration-3000 w-[340px] lg:w-[740px] text-center m-10 text-stone-50 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          metus tellus. Etiam blandit aliquet lorem nec varius. Nulla tincidunt
          enim ac sem ornare bibendum. Mauris iaculis hendrerit varius. Maecenas
          suscipit tincidunt turpis, in porta justo eleifend id. Donec placerat,
          nisl vel scelerisque iaculis, augue urna sagittis arcu, id ultrices
          purus metus id nibh. Sed fringilla ante euismod massa volutpat, ut
          molestie erat ultrices.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          metus tellus. Etiam blandit aliquet lorem nec varius. Nulla tincidunt
          enim ac sem ornare bibendum. Mauris iaculis hendrerit varius. Maecenas
          suscipit tincidunt turpis, in porta justo eleifend id. Donec placerat,
          nisl vel scelerisque iaculis, augue urna sagittis arcu, id ultrices
          purus metus id nibh. Sed fringilla ante euismod massa volutpat, ut
          molestie erat ultrices.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          metus tellus. Etiam blandit aliquet lorem nec varius. Nulla tincidunt
          enim ac sem ornare bibendum. Mauris iaculis hendrerit varius. Maecenas
          suscipit tincidunt turpis, in porta justo eleifend id. Donec placerat,
          nisl vel scelerisque iaculis, augue urna sagittis arcu, id ultrices
          purus metus id nibh. Sed fringilla ante euismod massa volutpat, ut
          molestie erat ultrices.
        </p>
        </div>
        
      </section>
    </div>
  );
}

export default Home;
