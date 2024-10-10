"use client";

import { FaLocationArrow } from "react-icons/fa6";


import { PinContainer } from "./ui/Pin";


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Sorting Visualizer",
      des: "A web app that visually demonstrates sorting algorithms like Quick Sort, Merge Sort,and Bubble Sort.",
      img: "/sortingv.png",
      iconLists: ["/ht.svg", "/cs.svg", "/js.svg"],
      link: "https://ayushkumar535.github.io/Sorting_Visualizer/",
    },
    {
      id: 2,
      title: "File Sharing",
      des: "A secure platform for uploading,sharing, and downloading files with authentication, encryption, and MongoDB for efficient and scalable storage.",
      img: "/fileshare.png",
      iconLists: ["/re.svg", "/mg.svg", "/ex.svg", "/nd.svg"],
    },
    {
      id: 3,
      title: "AI ChatBot",
      des: "A chatbot built using GPT-2 API, integrated with HTML, CSS, JavaScript, and React for efficient user interaction automation.",
      img: "Ai-chatbot.png",
      iconLists: ["/ht.svg", "/cs.svg", "/js.svg","/re.svg"],
    },
  ];
  return (
    <div className="py-20">
      <h1 className="md:text-5xl text-3xl lg:text-7xl pt-12 pb-8 text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20">
        My Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="Link"
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  style={{
                    transform: "scale(1.4) rotate(5deg)",
                  }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-lg text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

