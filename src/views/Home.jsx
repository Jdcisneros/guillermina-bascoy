import Nav from "../components/Nav";
import Socials from "../components/Socials";
import "../index.css"
import image1 from "/image1.jpg"
import image2 from "/image2.jpg"
import image3 from "/image3.jpg"

function Home() {
  return (
    <div className="flex justify-center flex-col items-center bg-stone-100">
      <Nav />
      <div className="gbBackground flex justify-center text-end animate-slide-in-left-Bg top-0 ">
        <h2 >GUILLERMINA BASCOY</h2>
        </div>
      <section
        className="w-[340px] lg:w-[740px]  md:w-[440px] flex justify-center items-center z-30"
        id="top"
      >
        <img
          src="/imagenF.png"
          alt="imagenPerfil"
          className="w-3/4 object-cover mt-20 animate-slide-in-left"
        />
       
        
        <div className="text-nowrap flex flex-col mt-28">
          <h2 className=" text-3xl font-semibold text-stone-700 animate-slide-in-right ">
            ESTUDIANTE DE DISEÑO DE INDUMENTARIA
          </h2>
          <h1 className=" text-9xl font-font text-lime-500 animate-slide-in-right ">
            GUILLERMINA BASCOY
          </h1>
          <p className="text-pretty animate-slide-in-right transform duration-3000 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            metus tellus. Etiam blandit aliquet lorem nec varius. Nulla
            tincidunt enim ac sem ornare bibendum. Mauris iaculis hendrerit
            varius. Maecenas suscipit tincidunt turpis, in porta justo eleifend
            id. Donec placerat, nisl vel scelerisque iaculis, augue urna
            sagittis arcu, id ultrices purus metus id nibh. Sed fringilla ante
            euismod massa volutpat, ut molestie erat ultrices. Proin id erat
            quam. Aenean non odio a ipsum mollis venenatis eget tincidunt dolor.
            Nunc vel nunc rutrum, rutrum orci at, commodo nibh. 
          </p>
        </div>
      </section>
      <section id="portfolio" className="w-[340px] lg:w-full md:w-[440px] flex justify-center flex-col items-center lg:mt-32 z-30 bg-stone-950">
  <h2 className="animate-slide-in-left font-bold text-7xl text-lime-500 mt-20">PORTFOLIO</h2>
  <div className="flex justify-center space-x-4 mx-36 my-20">
    <div className="relative w-1/3 overflow-hidden group">
      <img src={image1} alt="image1" className="object-cover h-[500px] w-full transition-transform duration-300 ease-in-out transform scale-110 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"/>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center">Información sobre la imagen 1</p>
      </div>
    </div>
    <div className="relative w-1/3 overflow-hidden group">
      <img src={image2} alt="image2" className="object-cover h-[500px]  w-full transition-transform duration-300 ease-in-out transform scale-110 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"/>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center">Información sobre la imagen 2</p>
      </div>
    </div>
    <div className="relative w-1/3 overflow-hidden group">
      <img src={image3} alt="image3" className="object-cover h-[500px]  w-full transition-transform duration-300 ease-in-out transform scale-110 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"/>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center">Información sobre la imagen 3</p>
      </div>
    </div>
  </div>
  <a href="/portolio">
    <p>VER MÁS</p>
  </a>
</section>
      <section id="about-me" className="w-[340px] lg:w-[740px]  md:w-[440px] flex justify-center flex-col items-center  z-30">
      <h2 className="animate-slide-in-left">SOBRE MÍ</h2>
        <p className="text-pretty animate-slide-in-right transform duration-3000 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            metus tellus. Etiam blandit aliquet lorem nec varius. Nulla
            tincidunt enim ac sem ornare bibendum. Mauris iaculis hendrerit
            varius. Maecenas suscipit tincidunt turpis, in porta justo eleifend
            id. Donec placerat, nisl vel scelerisque iaculis, augue urna
            sagittis arcu, id ultrices purus metus id nibh. Sed fringilla ante
            euismod massa volutpat, ut molestie erat ultrices. Proin id erat
            quam. Aenean non odio a ipsum mollis venenatis eget tincidunt dolor.
            Nunc vel nunc rutrum, rutrum orci at, commodo nibh. 
          </p>
      </section>
      <section id="blogs" className="w-[340px] lg:w-[740px]  md:w-[440px] flex justify-center flex-col items-center z-30 m-30">
      <h2 className="animate-slide-in-left">BLOGS</h2>
        <p className="text-pretty animate-slide-in-right transform duration-3000 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            metus tellus. Etiam blandit aliquet lorem nec varius. Nulla
            tincidunt enim ac sem ornare bibendum. Mauris iaculis hendrerit
            varius. Maecenas suscipit tincidunt turpis, in porta justo eleifend
            id. Donec placerat, nisl vel scelerisque iaculis, augue urna
            sagittis arcu, id ultrices purus metus id nibh. Sed fringilla ante
            euismod massa volutpat, ut molestie erat ultrices. Proin id erat
            quam. Aenean non odio a ipsum mollis venenatis eget tincidunt dolor.
            Nunc vel nunc rutrum, rutrum orci at, commodo nibh. 
          </p>
      </section>
      <Socials/>
    </div>
  );
}

export default Home;
