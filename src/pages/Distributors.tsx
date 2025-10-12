import React from "react";
import "./distributors.css";

const Distributros: React.FC = () => {
  return (
    <div className="distributors-container">
  <h1>Distributors</h1>
    <div className="cardContainer">
    <div className="card">
      <h3>Guatemala</h3>
      <p>Capital: Guatemala City</p>
    </div>

    <div className="card">
      <h3>Panama</h3>
      <p>Capital: Panama City</p>
    </div>

    <div className="card">
      <h3>Honduras</h3>
      <p>Capital: Tegucigalpa</p>
    </div>

    <div className="card">
      <h3>El Salvador</h3>
      <p>Capital: San Salvador</p>
    </div>

    <div className="card">
      <h3>Costa Rica</h3>
      <p>Capital: San José</p>
    </div>
  </div>
</div>
  );
};

export default Distributros;