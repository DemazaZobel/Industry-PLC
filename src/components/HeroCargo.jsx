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
    <div className="absolute inset-0 bg-black/30 z-10" />

    {/* Text at the top center */}
    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-20 px-4 text-center">
      <h1 className="text-text text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold drop-shadow-lg">
        Import and Export
      </h1>
    </div>

    {/* Logo fixed at bottom center */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <img
        src={logo}
        alt="Dankil Industries Logo"
        className="w-80 sm:w-48 md:w-56 lg:w-[800px] drop-shadow-2xl"
      />
    </div>
  </div>
);

export default HeroCargo;
