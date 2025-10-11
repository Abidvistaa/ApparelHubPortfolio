import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import "./App.css";
import Home from "./pages/Home";
import Clothes from "./pages//Clothes";
import Shoe from "./pages/Shoe";
import Toy from "./pages/Toy";
import Incoming from "./pages/Incoming";
import Outgoing from "./pages/Outgoing";
import Distributors from "./pages/Distributors";
import Contact from "./pages/Contacts";

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <section id="home" className="section"><Home/></section>
      <section id="clothes" className="section"> <Clothes/> </section>
      <section id="shoe" className="section"><Shoe/> </section>
      <section id="toy" className="section"><Toy/> </section>
      <section id="incoming" className="section"><Incoming/> </section>
      <section id="outgoing" className="section"><Outgoing/> </section>
      <section id="distributors" className="section"><Distributors/> </section>
      <section id="contact" className="section"><Contact/> </section>

      <ScrollUpButton/>
      <Footer/>

    </>
  );
};

export default App;
