import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";
import collage from "/collage.png";
import { useEffect, useState } from "react";

const PROJECTOS = [
  {
    id: "1", // ID único para el proyecto
    title: "Proyecto 1",
    description:
      "Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripcipción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripcipción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripcipción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1",
    imageFeatured: image1,
    collage: collage,
    images: [
      {
        id: "img1", // ID único para la imagen
        src: image2,
        title: "Título de la imagen 1",
      },
      {
        id: "img2",
        src: image3,
        title: "Título de la imagen 2",
      },
      {
        id: "img2",
        src: image3,
        title: "Título de la imagen 2",
      },
      {
        id: "img2",
        src: image3,
        title: "Título de la imagen 2",
      },
      // Puedes agregar más imágenes aquí si es necesario
    ],
  },
  {
    id: "2", // ID único para el proyecto
    title: "Proyecto 2",
    description:
      "Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1",
    imageFeatured: image1,
    collage: collage,
    images: [
      {
        id: "img1", // ID único para la imagen
        src: image2,
        title: "Título de la imagen 1",
      },
      {
        id: "img2",
        src: image3,
        title: "Título de la imagen 2",
      },
      // Puedes agregar más imágenes aquí si es necesario
    ],
  },
  // Agrega más proyectos aquí si es necesario
];

function Portfolio() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col items-center mt-14 p-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12">Portfolio</h1>
      <div className="w-[1500px] mx-auto">
        <ul className="space-y-16">
          {PROJECTOS.map(({ id, title, description, imageFeatured, images, collage }) => (
            <li key={id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-start p-6 space-x-6">
                <div className="md:w-1/2 flex-shrink-0">
                  <img
                    src={imageFeatured}
                    alt={`Featured image for ${title}`}
                    className="w-3/4 h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
              <div className="mt-6">
                <img
                  src={collage}
                  alt="Collage"
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowCarousel((prev) => !prev)}
                  className="py-1 px-5 my-10 border-2 rounded border-stone-950 hover:bg-lime-500 text-stone-950 font-bold hover:border-lime-500 transition-colors duration-300 transform hover:translate-y-[-2px]"
                >
                  {showCarousel ? 'VER MENOS' : 'VER MAS'}
                </button>
              </div>
              {showCarousel && (
                <div className="mt-6 flex flex-wrap gap-6 justify-center">
                  {images.map((image) => (
                    <div key={image.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-gray-800 font-medium mt-2">{image.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;