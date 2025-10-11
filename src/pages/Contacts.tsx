import React from "react";
import "./contacts.css";

const Contacts: React.FC = () => {
  return (
    <div className="contact-section">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h1>
          Get in touch with<br />
          <span>Apparel Hub</span><br />
        </h1>
      </div>

      {/* CENTER LINE */}
      <div className="contact-divider"></div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>123 Green Road, Dhaka, Bangladesh</p>
          <p>Email: support@example.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;