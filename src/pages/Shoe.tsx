import React, { useState, useEffect, useRef } from "react";
import "./shoe.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import shoe1 from "../images/shoe1.jpg"; 
import shoe2 from "../images/shoe2.jpg"; 
import shoe3 from "../images/shoe3.jpg"; 
import shoe4 from "../images/shoe4.jpg"; 

const Shoe: React.FC = () => {
  const images = [shoe1, shoe2, shoe3, shoe4];

    useScrollAnimation("slide-top");

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    pauseAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    pauseAutoSlide();
  };

  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const pauseAutoSlide = () => {
    // Stop the auto-slide immediately
    stopAutoSlide();

    // Clear any existing resume timer
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    // Resume auto-slide after 5 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 9000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, );

  const goToSlide = (index: number) => {
    setCurrent(index);
    pauseAutoSlide();
  };

  return (
    <div className="shoe-container" style={{ padding: "5px" }}>
      <h1>Shoes</h1>
      <div className="text-section slide-top">
        <p style={{ textAlign: "justify" }}>
          We are committed to protecting the environment by giving shoes a second life through recycling and reuse.
           Instead of ending up in landfills, used shoes are carefully collected, sorted, and refurbished to ensure they can be worn again. 
          This process helps reduce footwear waste and lowers the environmental footprint caused by constant new production.
By extending the lifespan of shoes, we conserve valuable resources like water, energy, and raw materials that would otherwise be used to manufacture new pairs. 
At the same time, our efforts support a circular economy — one that values reuse over waste.
The recycled shoes are made available to families in other countries at affordable prices, making quality footwear accessible to those who might not otherwise be able to afford it. 
This not only benefits communities in need but also encourages responsible consumption around the world.
Every pair of shoes that gets reused represents one less item discarded and one more step toward sustainability.
 Through these actions, we unite environmental protection with social good — ensuring that both people and the planet walk forward together toward a better future.
        </p>
      </div>

      <div 
        className="slider-container"
        onClick={pauseAutoSlide} // pause when user clicks anywhere
      >
        <img height={300} width={450}  src={images[current]} alt={`Slide ${current + 1}`} />
        <div className="slider-buttons">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>

        {/* 🔵 Bullet points */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shoe;
