import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutLayout from "./layout/About";
import HeroLayout from "./layout/HeroSec";
import Navbar from "./layout/Navbar";
import { useEffect, useState } from "react";
import ProjectsLayout from "./layout/Projects";
import ContactLayout from "./layout/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    // Check system preference on mount
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
  useEffect(() => {
    AOS.init({
      duration: 1000, // المدة بالمللي ثانية
      // once: true, // تعمل مرة واحدة فقط
    });
  }, []);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HeroLayout />
      <AboutLayout />
      <ProjectsLayout/>
      <ContactLayout/>
    </>
  );
}

export default App;

