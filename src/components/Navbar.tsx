import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/logo192.png" alt="ApparelHub Logo" />
      </div>

      {/* Menu */}
      <ul className="nav-menu">
        <li onClick={() => scrollToSection("home")}>Home</li>

        <li className="dropdown-parent">
          <span>Products ▾</span>
          <ul className="dropdown">
            <li onClick={() => scrollToSection("clothes")}>Clothes</li>
            <li onClick={() => scrollToSection("shoe")}>Shoe</li>
            <li onClick={() => scrollToSection("toy")}>Toy</li>
          </ul>
        </li>

        <li className="dropdown-parent">
          <span>Category ▾</span>
          <ul className="dropdown">
            <li onClick={() => scrollToSection("incoming")}>Incoming</li>
            <li onClick={() => scrollToSection("outgoing")}>Outgoing</li>
          </ul>
        </li>

        <li onClick={() => scrollToSection("distributors")}>Distributors</li>
        <li onClick={() => scrollToSection("contact")} style={{ marginRight: "50px", }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;


