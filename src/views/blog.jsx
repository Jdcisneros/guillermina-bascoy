import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Usa 'Carousel' en vez de 'Carousel' por si hay algún problema
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Ejemplo de datos de blogs (puedes reemplazar esto con datos reales o de una API)
const blogPosts = [
  {
    id: 1,
    title: 'Primer Blog',
    date: '2024-08-30',
    summary: 'Este es un resumen del primer blog.',
    content: 'Aquí va el contenido completo del primer blog...',
    images: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
    ],
  },
  {
    id: 2,
    title: 'Segundo Blog',
    date: '2024-08-31',
    summary: 'Este es un resumen del segundo blog.',
    content: 'Aquí va el contenido completo del segundo blog...',
    images: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
    ],
  },
];

const Blogs = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const handleExpand = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center mt-10 p-8 bg ">
      <h1 className="text-5xl font-extrabold text-zinc-950 ">BLOGS</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post.id} className=" mt-10 border p-4 rounded-lg shadow-md bg-white w-[390px] lg:w-[1200px] md:w-[800px]">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="mb-4">{post.summary}</p>
            <button
              onClick={() => handleExpand(post.id)}
              className="px-1 -ml-1 text-1xl items-center font-extrabold text-zinc-950 rounded-lg hover:text-zinc-50 hover:bg-zinc-950"
                    >
        
              {expandedPostId === post.id ? (
                        <div className="flex items-center">
                          <span>VER MENOS</span>
                          <MdKeyboardArrowUp  size={20} />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>VER MÁS</span>
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      )}
            </button>

            {expandedPostId === post.id && (
              <div className="mt-4">
                <p className="mb-4">{post.content}</p>
                <div className="mt-4">
                  <Carousel
                    showArrows={false}
                    showThumbs={false} 
                    infiniteLoop
                    autoPlay
                    interval={15000}
                    emulateTouch
                    className="w-full"
                  >
                    {post.images.map((image, index) => (
                      <div key={index} className="relative w-full h-76 md:h-96 lg:h-full">
                        <img src={image} alt={`Imagen ${index + 1}`} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;