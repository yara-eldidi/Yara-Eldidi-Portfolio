import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gamingImg from "../assets/img/gaming.png"
import furnitureImg from "../assets/img/furniture.png"
import idImg from "../assets/img/id-analyzer.png"
import crudImg from "../assets/img/CRUD.png"
import deskImg from "../assets/img/desk-book.png"

function ProjectsLayout() {
  const projects = [
    {
      id: 1,
      title: "Desk booking",
      description:
        "A user-friendly desk reservation system that allows users to select their preferred country, date, time slot, and desk.",
      image: deskImg,
      technologies: ["React", "CSS", "tailwind", "Js"],
      liveDemo: "https://desk-place.vercel.app/",
      github: "https://github.com/yara-eldidi/Desk-place",
    },
    {
      id: 2,
      title: "Furniture Landing Page",
      description:
        "A modern and minimalistic furniture landing page that highlights products with a clean layout. Built to offer a smooth user experience and encourage users to explore and engage.",
      image: furnitureImg,
      technologies: ["HTML", "CSS", "tailwind", "JavaScript"],
      liveDemo: "https://yara-eldidi.github.io/landing-page/",
      github: "https://github.com/yara-eldidi/landing-page",
    },
    {
      id: 3,
      title: "Gaming Landing Page",
      description:
        "A modern gaming landing page showcasing popular titles with an immersive design. Built for fast, smooth, and engaging user exploration.",
      image: gamingImg,
      technologies: ["React", "Bootstrap"],
      liveDemo: "https://gaming-landing-gytq.vercel.app/",
      github: "https://github.com/yara-eldidi/Gaming-Landing",
    },
    {
      id: 4,
      title: "ID Analyzer",
      description:
        "A simple and fast tool for validating national ID numbers through an easy-to-use interface. Focused on accuracy and quick user input without unnecessary complexity.",
      image: idImg,
      technologies: ["HTML", "CSS", "JS", "Bootstrap"],
      liveDemo: "https://yara-eldidi.github.io/Id-Analyzer/",
      github: "https://github.com/yara-eldidi/Id-Analyzer",
    },
    {
      id: 5,
      title: "CRUD",
      description:
        "A fully functional CRUD application that allows users to create, read, update, and delete data through an intuitive interface.",
      image: crudImg,
      technologies: ["HTML", "CSS", "JS", "Bootstrap"],
      liveDemo: "https://yara-eldidi.github.io/CRUD/",
      github: "https://github.com/yara-eldidi/CRUD",
    },
  ];

  return (
    <section id="projects" className="py-20 dark:bg-[#222637]">
      <div className="container mx-auto px-4 ">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e4a70] mb-4 dark:text-amber-100">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
            Here are some of my recent projects showcasing my skills in
            front-end development, design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 mySwiper"
          
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <article
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 dark:bg-[#373a4d] dark:border-2 dark:border-cyan-900"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300/3e4a70/ffffff?text=Project+Image";
                    }}
                  />

                   <div className="hidden lg:flex absolute inset-0 bg-[#3e4a70] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-[#3e4a70] rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-[#3e4a70] rounded-lg hover:bg-amber-400 hover:text-white transition-colors duration-300"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>

                  {/* Action Buttons for Mobile/Tablet - Always Visible */}
                  <div className="lg:hidden absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3 px-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white text-[#3e4a70] rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-colors duration-300 text-center text-sm shadow-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-[#3e4a70] rounded-lg hover:bg-amber-400 hover:text-white transition-colors duration-300 shadow-lg"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3e4a70] mb-3 group-hover:text-amber-500 transition-colors duration-300 dark:text-amber-100">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 dark:text-white">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold bg-gray-100 text-[#3e4a70] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View More on GitHub */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="https://github.com/yara-eldidi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#3e4a70] text-white font-semibold rounded-lg shadow-lg hover:bg-[#4a5987] transform hover:scale-105 transition-all duration-300"
          >
            <i className="fab fa-github text-xl"></i>
            View More on GitHub
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsLayout;
