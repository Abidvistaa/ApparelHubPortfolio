import React, { useState, useEffect, useRef } from "react";
import "./clothes.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import clothe1 from "../images/clothe1.jpg"; 
import clothe2 from "../images/clothe2.jpg"; 
import clothe3 from "../images/clothe3.jpg"; 
import clothe4 from "../images/clothe4.jpg"; 

const Clothes: React.FC = () => {
  const images = [clothe1, clothe2, clothe3, clothe4];

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
    <div className="clothes-container" style={{ padding: "5px" }}>
      <h1>Clothes</h1>
      <div className="text-section slide-top">
        <p style={{ textAlign: "justify" }}>
          We are dedicated to protecting the planet by recycling clothes and giving them a second chance to be used.
          Instead of being wasted, these clothes are carefully collected, sorted, and prepared for reuse.
          This process reduces textile waste and minimizes the environmental impact of fashion. 
          At the same time, it allows us to contribute positively to society by creating a circular economy.
          The recycled clothes are made available to families in other countries at much lower prices.
          This helps thousands of households access quality clothing they might not otherwise afford.
          It also reduces the demand for new production, which saves water, energy, and other valuable resources.
          By doing so, we promote responsible consumption and sustainable living.
          Every piece of clothing that gets reused extends its life and lessens its footprint on the earth.
          Through these efforts, we combine environmental care with social responsibility, ensuring that both people and the planet benefit.
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

export default Clothes;
