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
          <span>Software ▾</span>
          <ul className="dropdown">
            <li onClick={() => scrollToSection("web")}>Web Development</li>
            <li onClick={() => scrollToSection("windows")}>Windows Based Development</li>
            <li onClick={() => scrollToSection("linux")}>Linux Based Development</li>
            <li onClick={() => scrollToSection("mobile")}>Mobile App</li>
            <li onClick={() => scrollToSection("desktop")}>Desktop App</li>
          </ul>
        </li>

        <li className="dropdown-parent">
          <span>About ▾</span>
          <ul className="dropdown">
            <li onClick={() => scrollToSection("aboutus")}>About Us</li>
            <li onClick={() => scrollToSection("career")}>Career</li>
            <li onClick={() => scrollToSection("blog")}>Blog</li>
          </ul>
        </li>

        <li onClick={() => scrollToSection("clientportal")}>Client Portal</li>
        <li onClick={() => scrollToSection("contact")} style={{ marginRight: "50px", }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar: React.FC = () => {
//   const [softwareOpen, setSoftwareOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* LEFT: Logo */}
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src="/logo192.png" alt="ApparelHub Logo" /> {/* replace with your logo path */}
//         </Link>
//       </div>

//       {/* RIGHT: Menu */}
//       <ul className="nav-menu">
//         <li><Link to="/">Home</Link></li>

//         <li
//           onMouseEnter={() => setSoftwareOpen(true)}
//           onMouseLeave={() => setSoftwareOpen(false)}
//         >
//           <span>Software ▾</span>
//           {softwareOpen && (
//             <ul className="dropdown">
//               <li><Link to="/software/web">Web Development</Link></li>
//               <li><Link to="/software/windows">Windows Based Development</Link></li>
//               <li><Link to="/software/linux">Linux Based Development</Link></li>
//               <li><Link to="/software/mobile">Mobile App</Link></li>
//               <li><Link to="/software/desktop">Desktop App</Link></li>
//             </ul>
//           )}
//         </li>

//         <li
//           onMouseEnter={() => setAboutOpen(true)}
//           onMouseLeave={() => setAboutOpen(false)}
//         >
//           <span>About ▾</span>
//           {aboutOpen && (
//             <ul className="dropdown">
//               <li><Link to="/about">About Us</Link></li>
//               <li><Link to="/career">Career</Link></li>
//               <li><Link to="/blog">Blog</Link></li>
//             </ul>
//           )}
//         </li>

//         <li><Link to="/clientportal">Client Portal</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
