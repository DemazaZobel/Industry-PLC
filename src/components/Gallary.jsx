import React, { useEffect, useState } from "react";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/c.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4];

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full px-8 py-24 bg-gradient-to-br from-primary/50 to-accent/50 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-28">
      
      {/* Text Side */}
      <div className="w-full lg:w-1/2 z-10 space-y-8">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          A Visual Journey Through Our Work
        </h1>
        <p className="text-xl text-gray-600 max-w-xl">
          From groundbreaking infrastructure to world-class manufacturing, our gallery reveals the milestones, moments, and missions that drive us forward.
        </p>
        <Link to="/projects" className="text-blue-800 hover:underline">
        <button className="bg-primaryText text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300">
          Explore Full Projects
        </button>
        </Link>
      </div>

      {/* Image Side */}
      <div className="relative w-full lg:w-1/2 h-[600px] lg:h-[700px] flex items-center justify-center z-10">
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full blur-xl opacity-20 pointer-events-none scale-105">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`bg-${i}`}
              className="absolute w-[200px] h-[280px] object-cover rounded-xl shadow-xl"
              style={{
                top: `${(i % 3) * 70 + 60}px`,
                left: `${i * 90}px`,
                rotate: `${i % 2 === 0 ? "-" : ""}10deg`,
              }}
            />
          ))}
        </div>

        {/* Main Slideshow Image */}
        <div className="relative w-[400px] h-[560px] lg:w-[460px] lg:h-[640px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Previews */}
        <div className="absolute bottom-8 right-8 z-20 flex space-x-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-16 h-24 rounded-xl overflow-hidden shadow-lg border-4 transition-all duration-300 ${
                currentIndex === i
                  ? "border-blue-800 scale-110"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
