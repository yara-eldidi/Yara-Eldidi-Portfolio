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
  useEffect(() => {
    AOS.init({
      duration: 1000, // المدة بالمللي ثانية
      // once: true, // تعمل مرة واحدة فقط
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
