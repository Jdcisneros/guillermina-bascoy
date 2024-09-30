import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Blogs = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:3000/blogs');
    setBlogs(response.data);
  };

  const handleExpand = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center mt-10 p-8 bg">
      <h1 className="text-5xl font-extrabold text-zinc-950">BLOGS</h1>
      <div className="space-y-4">
        {blogs.map((post) => (
          <div key={post.id} className="mt-10 border p-4 rounded-lg shadow-md bg-white w-[390px] lg:w-[1200px] md:w-[800px]">
            <h2 className="text-2xl font-semibold mb-2">{post.titulo}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.createdAt.split('T')[0]}</p>
            <p className="mb-4">{post.resumen}</p>
            <button
              onClick={() => handleExpand(post.id)}
              className="px-1 -ml-1 text-1xl items-center font-extrabold text-zinc-950 rounded-lg hover:text-zinc-50 hover:bg-zinc-950"
            >
              {expandedPostId === post.id ? (
                <div className="flex items-center">
                  <span>VER MENOS</span>
                  <MdKeyboardArrowUp size={20} />
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
                <p className="mb-4">{post.parrafo}</p>
                {post.imagenes && post.imagenes.length > 0 && (
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
                      {post.imagenes.map((image, index) => (
                        <div key={index} className="relative w-full h-76 md:h-96 lg:h-full">
                          <img src={image} alt={`Imagen ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;