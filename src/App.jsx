import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutLayout from "./layout/About";
import HeroLayout from "./layout/HeroSec";
import Navbar from "./layout/Navbar";
import { useEffect } from "react";
import ProjectsLayout from "./layout/Projects";
import ContactLayout from "./layout/Contact";

function App() {
  // Initialize dark mode on mount
  useEffect(() => {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // المدة بالمللي ثانية
      // once: true // تعمل مرة واحدة فقط
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroLayout />
      <AboutLayout />
      <ProjectsLayout/>
      <ContactLayout/>
    </>
  );
}

export default App;
