import React, { useState, useEffect, useRef } from "react";
import "./toy.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import toy1 from "../images/toy1.jpg"; 
import toy2 from "../images/toy2.jpg"; 
import toy3 from "../images/toy3.jpg"; 
import toy4 from "../images/toy4.jpg"; 

const Toy: React.FC = () => {
  const images = [toy1, toy2, toy3, toy4];

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
    <div className="toy-container" style={{ padding: "5px" }}>
      <h1>Toys</h1>
      <div className="text-section slide-top">
        <p style={{ textAlign: "justify" }}>
          We are devoted to protecting the planet by recycling toys and giving them a second life for children to enjoy. 
          Instead of being thrown away, used toys are carefully collected, cleaned, and restored so they can bring joy once again.
           This process helps reduce plastic and material waste while lowering the environmental impact of toy production.
By reusing and repurposing toys, we help save valuable resources such as energy, water, and raw materials that would be consumed in manufacturing new ones.
 At the same time, we promote a circular economy where products are reused rather than discarded — creating a more sustainable future for the next generation.
The recycled toys are shared with families in other countries at much lower prices, allowing children everywhere to have access to quality toys that inspire creativity and happiness. 
This not only supports families in need but also teaches the importance of caring for the environment from an early age.
Every toy that gets reused extends its life and reduces its footprint on the planet.
 Through these efforts, we combine environmental care with compassion for communities, ensuring that both the earth and its children benefit — one toy at a time.
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

export default Toy;
