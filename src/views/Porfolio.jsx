import { useEffect, useState } from "react";
import "../components/styles.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import axios from "axios";

function Portfolio() {
  const [showCollage, setShowCollage] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:1337/api/projects?populate=*');
    setProjects(response.data.data);
  
  };

  const handleShowCollage = (id) => {
    setShowCollage(showCollage === id ? null : id);
  };

  const collageStyles = [
    {
      className: "top-[5%] left-[8%] w-[25%] lg:top-[5%] lg:left-[6%] lg:w-[20%] z-20",
      animationDelay: "1s",
    },
    {
      className: "top-[0%] left-[30%] w-[30%] lg:top-[0%] lg:left-[25%] lg:w-[25%] z-10",
      animationDelay: "3s",
    },
    {
      className: "top-[15%] left-[60%] w-[25%] lg:top-[2%] lg:left-[50%] lg:w-[17%] z-30",
      animationDelay: "2.5s",
    },
    {
      className: "top-[40%] left-[30%] w-[20%] lg:top-[38%] lg:left-[15%] lg:w-[20%] z-40",
      animationDelay: "1.5s",
    },
    {
      className: "top-[30%] left-[45%] w-[25%] lg:top-[40%] lg:left-[65%] lg:w-[25%] z-40",
      animationDelay: "2s",
    },
    {
      className: "top-[2%] left-[75%] w-[30%] lg:top-[0%] lg:left-[70%] lg:w-[25%] z-20",
      animationDelay: "3.5s",
    },
    {
      className: "top-[30%] left-[10%] w-[20%] lg:top-[40%] lg:left-[35%] lg:w-[30%] z-20",
      animationDelay: "4s",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 p-2 bg z-">
      <h1 className="text-5xl font-extrabold text-zinc-950 ">PORTFOLIO</h1>
      <div className="w-full">
        <ul className="space-y-16">
          {projects.map(({ id, title, paragraph, principalImage, reference, collage }) => {
            const collageItems = collage.map((image, index) => {
              const style = collageStyles[index] || collageStyles[0];    
              return {
                image:image.url,
                titulo: `Título de la imagen ${index + 1}`,
                className: style.className,
                style: {
                  animationDelay: style.animationDelay,
                },
              };
            });
           

            return (
              <li key={id} className="relative bg-white p-6 mt-10 rounded-sm shadow-lg">
                <div className="lg:flex lg:flex-row flex flex-col items-center justify-center ">
                  <div className="absolute flex justify-between w-full text-project items-center">
                    <h2 className="lg:ml-20 font-bold lg:text-2xl text-sm">{title}</h2>
                    <h2 className="lg:mr-20 font-bold lg:text-2xl text-sm">{reference
                    }</h2>
                  </div>
                  <div className="md:w-1/3 mb-10 w-full">
                    <img
                      src={`http://localhost:1337${principalImage.url}`}
                      alt={`Featured image for ${title}`}
                      className="w-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="lg:w-[640px] w-[300px] lg:h-[540px] items-center -mt-14 h-full flex flex-col justify-center lg:p-10 p-3 lg:-ml-10 text-pretty bg-zinc-950 rounded-sm">
                    <h2 className="lg:text-7xl text-3xl font-bold text-zinc-50">{title}</h2>
                    <p className="text-zinc-50 mt-10 text-xs text-center">{paragraph}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-center p-3">
                    <button
                      onClick={() => handleShowCollage(id)}
                      className="px-2 text-1xl items-center font-extrabold text-zinc-950 rounded-lg hover:text-zinc-50 hover:bg-zinc-950"
                    >
                      {showCollage === id ? (
                        <div className="flex items-center">
                          <span>VER MENOS</span>
                          <MdKeyboardArrowUp size={30} />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>VER MÁS</span>
                          <MdKeyboardArrowDown size={30} />
                        </div>
                      )}
                    </button>
                  </div>
                  <div className={`collage-container lg:h-[900px] h-[300px] ${showCollage === id ? "" : "hidden"}`}>
                    {collageItems.map((item, index) => (
                      <img
                        key={index}
                        src={`http://localhost:1337${item.image}`}
                        alt={item.title}
                        className={`absolute object-cover collage-image ${item.className}`}
                        style={item.style}
                      />
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
