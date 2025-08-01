import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ship from '../assets/ship.mp4';

const HeroCargo = () => (
  <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden -mt-16">
    {/* Fullscreen video background */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      aria-label="Cargo ship video background"
      src={ship}
    />

    {/* Dark overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/10 z-10" />

    {/* Text at the top center */}
    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-20 px-4 text-center">
      <h1 className="text-text whitespace-nowrap text-4xl sm:text-3xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg px-4">
        Import and Export
      </h1>
    </div>

    {/* Logo fixed at bottom center */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px]">
      <img
        src={logo}
        alt="Dankil Industries Logo"
        className="w-[400px] sm:w-[500px] md:w-[800px] lg:w-[800px] drop-shadow-2xl"
      />
    </div>

    {/* Button positioned just above the logo */}
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
      <Link
        to="/contact"
        className="bg-button/10 hover:bg-secondary/80 transition px-6 py-3 rounded-full text-white font-semibold shadow-md"
      >
        Connect With Us
      </Link>
    </div>
  </div>
);

export default HeroCargo;
