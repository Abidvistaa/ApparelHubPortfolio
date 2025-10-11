import React from "react";
import "./footer.css";

const Navbar: React.FC = () => {

  return (
    <footer className="simple-footer">
  <p>© {new Date().getFullYear()} Apparel Hub. All Rights Reserved.</p>
</footer>

  );
};

export default Navbar;


