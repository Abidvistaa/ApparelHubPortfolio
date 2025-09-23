import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import WebDev from "./pages/WevDev";
import Windows from "./pages/WindowsBasedDev";
import Linux from "./pages/LinuxBasedDev";
import MobileApp from "./pages/MobileApp";
import DesktopApp from "./pages/DesktopApp";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import ClientPortal from "./pages/ClientPortal";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <section id="home" className="section"><Home/></section>

      <section id="web" className="section"> <WebDev/> </section>
      <section id="windows" className="section"><Windows/> </section>
      <section id="linux" className="section"><Linux/> </section>
      <section id="mobile" className="section"><MobileApp/> </section>
      <section id="desktop" className="section"><DesktopApp/> </section>

      <section id="aboutus" className="section"><AboutUs/> </section>
      <section id="career" className="section"><Career/></section>
      <section id="blog" className="section"><Blog/></section>

      <section id="clientportal" className="section"><ClientPortal/> </section>
      <section id="contact" className="section"><Contact/> </section>
    </>
  );
};

export default App;
