import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import profileImg from "../assets/img/profile.png";
import ThreeBackground from "../component/ThreeBackground";
import cvFile from "../../public/cv/Yara-Eldidi.pdf";

function HeroLayout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const descriptions = [
    "Crafting beautiful, responsive web experiences with clean code and elegant design ",
    "Specialized in React.js and modern front-end technologies ",
    "Turning creative ideas into pixel-perfect websites ✨"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-[#222637]"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <ThreeBackground />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Profile Image */}
          <div 
            className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              <div className="relative p-2">
                <img
                  src={profileImg}
                  alt="Yara Eldidi - Front-End Developer"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#3e4a70] rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div 
            className={`text-center lg:text-left space-y-6 order-2 lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            
            {/* Name with Motion */}
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold text-[#3e4a70] dark:text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Yara <span className="text-amber-400">Eldidi</span>
            </motion.h1>

            {/* Static Role Title */}
            <motion.h2
              className="text-xl md:text-2xl text-[#3e4a70] dark:text-gray-300 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              React Front-End Developer
            </motion.h2>
            
            {/* Animated Description with Typewriter */}
            <motion.div
              className="min-h-[60px] md:min-h-[70px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-base md:text-lg text-gray-600 dark:text-white max-w-xl mx-auto lg:mx-0 leading-relaxed">
                <Typewriter
                  options={{
                    strings: descriptions,
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-[#3e4a70] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#4a5987] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="View my projects"
              >
                View My Work
              </button>
              
              <a 
                href={cvFile}
                download="Yara-Eldidi.pdf"
                className="group px-8 py-3 border-2 border-amber-400 text-amber-500 font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-amber-400 hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="Download my CV"
              >
                Download CV
              </a>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-3 border-2 border-[#3e4a70] text-[#3e4a70] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#3e4a70] hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 dark:text-white"
                aria-label="Contact me"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-6">
              <a 
                href="https://github.com/yara-eldidi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#3e4a70] hover:bg-[#3e4a70] hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/yara-eldidi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#3e4a70] hover:bg-[#0077b5] hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a 
                href="mailto:yaraessameldindd@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#3e4a70] hover:bg-red-500 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="Email"
              >
                <i className="far fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLayout;