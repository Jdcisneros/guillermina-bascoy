import { useState } from "react";
import imageFeatured from "/collage4.jpg";
import collage1 from "/collage1.jpg";
import collage2 from "/collage2.jpg";
import collage3 from "/collage3.jpg";
import collage4 from "/collage4.jpg";
import collage5 from "/collage5.jpg";
import collage6 from "/collage6.jpg";
import collage7 from "/collage7.jpg";
import "../components/styles.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const PROJECTOS = [
  {
    id: "1",
    title: "PROYECTO 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
    imageFeatured: imageFeatured,
    collage: [
      {
        image: collage1,
        title: "Título de la imagen 1",
        className:
          "top-[5%] left-[8%] w-[25%] lg:top-[5%] lg:left-[8%] lg:w-[20%] z-20 h-auto",
        style: {
          animationDelay: "1s",
        },
      },
      {
        image: collage2,
        title: "Título de la imagen 2",
        className:
          "top-[0%] left-[30%] w-[30%] lg:top-[0%] lg:left-[30%] lg:w-[25%] z-10 h-auto",
        style: {
          animationDelay: "3",
        },
      },
      {
        image: collage3,
        title: "Título de la imagen 3",
        className:
          "top-[15%] left-[60%] w-[25%] lg:top-[5%] lg:left-[60%] lg:w-[15%] z-30 h-auto",
        style: {
          animationDelay: "2.5s",
        },
      },
      {
        image: collage4,
        title: "Título de la imagen 4",
        className:
          "top-[40%] left-[30%] w-[20%] lg:top-[38%] lg:left-[20%] lg:w-[20%] z-40 h-auto",
        style: {
          animationDelay: "1.5s",
        },
      },
      {
        image: collage5,
        title: "Título de la imagen 5",
        className:
          "top-[30%] left-[45%] w-[25%] lg:top-[30%] lg:left-[45%] lg:w-[25%] z-40 h-auto",
        style: {
          animationDelay: "2s",
        },
      },
      {
        image: collage6,
        title: "Título de la imagen 6",
        className:
          "top-[2%] left-[75%] w-[30%] lg:top-[0%] lg:left-[65%] lg:w-[25%] z-20 h-auto",
        style: {
          animationDelay: "3.5s",
        },
      },
      {
        image: collage7,
        title: "Título de la imagen 7",
        className:
          "top-[50%] left-[10%] w-[20%] lg:top-[40%] lg:left-[10%] lg:w-[20%] z-20 h-auto",
        style: {
          animationDelay: "4s",
        },
      },
    ],
  },
  {
    id: "2",
    title: "PROYECTO 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
    imageFeatured: imageFeatured,
    collage: [
      {
        image: collage1,
        title: "Título de la imagen 1",
        className:
          "top-[5%] left-[8%] w-[25%] lg:top-[5%] lg:left-[8%] lg:w-[20%] z-20 h-auto",
        style: {
          animationDelay: "1s",
        },
      },
      {
        image: collage2,
        title: "Título de la imagen 2",
        className:
          "top-[0%] left-[30%] w-[30%] lg:top-[0%] lg:left-[30%] lg:w-[25%] z-10 h-auto",
        style: {
          animationDelay: "3",
        },
      },
      {
        image: collage3,
        title: "Título de la imagen 3",
        className:
          "top-[15%] left-[60%] w-[25%] lg:top-[5%] lg:left-[60%] lg:w-[15%] z-30 h-auto",
        style: {
          animationDelay: "2.5s",
        },
      },
      {
        image: collage4,
        title: "Título de la imagen 4",
        className:
          "top-[40%] left-[30%] w-[20%] lg:top-[38%] lg:left-[20%] lg:w-[20%] z-40 h-auto",
        style: {
          animationDelay: "1.5s",
        },
      },
      {
        image: collage5,
        title: "Título de la imagen 5",
        className:
          "top-[30%] left-[45%] w-[25%] lg:top-[30%] lg:left-[45%] lg:w-[25%] z-40 h-auto",
        style: {
          animationDelay: "2s",
        },
      },
      {
        image: collage6,
        title: "Título de la imagen 6",
        className:
          "top-[2%] left-[75%] w-[30%] lg:top-[0%] lg:left-[65%] lg:w-[25%] z-20 h-auto",
        style: {
          animationDelay: "3.5s",
        },
      },
      {
        image: collage7,
        title: "Título de la imagen 7",
        className:
          "top-[50%] left-[10%] w-[20%] lg:top-[40%] lg:left-[10%] lg:w-[20%] z-20 h-auto",
        style: {
          animationDelay: "4s",
        },
      },
    ],
  },
];

function Portfolio() {
  const [showCollage, setShowCollage] = useState(null);

  const handleShowCollage = (id) => {
    setShowCollage(showCollage === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center mt-10 p-8 bg z-">
      <h1 className="text-5xl font-extrabold text-zinc-950 ">PORTFOLIO</h1>
      <div className="w-full">
        <ul className="space-y-16">
          {PROJECTOS.map(
            ({ id, title, description, imageFeatured, collage }) => (
              <li
                key={id}
                className="relative bg-white p-8 mt-10 rounded-sm shadow-lg"
              >
                <div className="flex flex-row items-center justify-center ">
                  <div className="absolute flex justify-between w-full  text-project items-center ">
                    <h2 className="lg:ml-20 font-bold lg:text-2xl text-sm">
                      {title}
                    </h2>
                    <h2 className="lg:mr-20 font-bold lg:text-2xl text-sm">
                      REFERENCIA DEL PROYECTO
                    </h2>
                  </div>
                  <div className="md:w-1/3 mb-10 ">
                    <img
                      src={imageFeatured}
                      alt={`Featured image for ${title}`}
                      className="w-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="lg:w-[640px] w-[640px] lg:h-[540px] h-full flex flex-col justify-center lg:p-10 p-3 -ml-10 text-pretty bg-zinc-950 rounded-sm">
                    <h2 className="lg:text-7xl text-3xl font-bold text-zinc-50">
                      {title}
                    </h2>
                    <p className="text-zinc-50 mt-10 text-xs">{description}</p>
                  </div>
                </div>

                <div className="relative ">
                  <div className="flex justify-center p-3">
                    <button
                      onClick={() => handleShowCollage(id)}
                      className="px-2 text-2xl items-center font-extrabold text-zinc-950 rounded-lg hover:text-zinc-50 hover:bg-zinc-950"
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
                  <div
                    className={`collage-container lg:h-[900px] h-[300px] ${
                      showCollage === id ? "" : "hidden"
                    }`}
                  >
                    {collage.map((item, index) => (
                      <img
                        key={index}
                        src={item.image}
                        alt={item.title}
                        className={`absolute object-cover collage-image ${item.className}`}
                        style={{
                          ...item.style,
                          animationDelay: item.style.animationDelay,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
