
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Link} from 'react-router-dom';
import logo from '../assets/logo_light.png';
import constructionImage from '../assets/coursel/construction_1.png';
import industryImage from '../assets/coursel/industry.png';
import containerTruckImage from '../assets/coursel/container_and_truck.jpg';
import manufacturingImage from '../assets/coursel/manufacturing.png';

const slides = [
  {
    title: "Building Strong Foundations",
    subtitle: "From roads to real estate, we deliver excellence.",
    image: { src: constructionImage, alt: "Construction" },
    link: "/services/construction",
    buttonLabel: "Explore Construction",
  },
  {
    title: "Powering Progress",
    subtitle: "Modern solutions for industrial needs.",
    image: { src: industryImage, alt: "Industry" },
    link: "/services/industy",
    buttonLabel: "Explore Industry"
  },
  {
    title: "Bridging Borders",
    subtitle: "Global trade made seamless.",
    image: { src: containerTruckImage, alt: "Container and Truck" },
    link: "/services/construction",
    buttonLabel: "Explore Import-Export"
  },
  {
    title: "Manufacturing Quality",
    subtitle: "Delivering precision-engineered products.",
    image: { src: manufacturingImage, alt: "Manufacturing" },
    link: "/services/construction",
    buttonLabel: "Explore Manufacturing"
  },
];

const textVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const HeroHome = () => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    const activeSlide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden top-[-74px] ">
      {/* Background image */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(14, 14, 14, 0.8), rgba(28, 26, 26, 0.8)), url(${slide.image.src})`,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center"
          >
           
            <img src={logo} alt="Dankal Logo" className="w-[500px] sm:w-[800px] md:w-[400px] lg:w-[1000px] " />

          
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 mt-[-40px] text-primary tracking-wider">
              {slides[current].title}
            </h1>

            
            <p className="text-lg sm:text-xl mb-6 text-secondary">
              {slides[current].subtitle}
            </p>

            <Link
              to={activeSlide.link}
              className="bg-button/70 hover:bg-accent transition px-6 py-3 rounded-full text-white font-semibold shadow-md"
            >
              {activeSlide.buttonLabel}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
{/* Centered content with logo and text 
<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-20">
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      variants={textVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center"
    >
      <div className="bg-black/20 p-4 md:p-6 rounded-lg max-w-[90vw] md:max-w-[600px]">
        <img
          src={logo}
          alt="Dankal Logo"
          className="w-[400px] sm:w-[550px] md:w-[600px] lg:w-[700px] mb-6 mx-auto"
          style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
        />

        <h1
          className="text-3xl sm:text-5xl font-extrabold mb-4 text-primary tracking-wide"
          style={{ textShadow: '0px 2px 6px rgba(0,0,0,0.6)' }}
        >
          {slides[current].title}
        </h1>

        <p
          className="text-base sm:text-lg mb-6 text-secondary max-w-xl mx-auto"
          style={{ textShadow: '0px 2px 6px rgba(0,0,0,0.6)' }}
        >
          {slides[current].subtitle}
        </p>

        <Link
          to={activeSlide.link}
          className="bg-button/80 hover:bg-accent transition px-8 py-3 rounded-full text-white font-semibold shadow-lg inline-block"
        >
          {activeSlide.buttonLabel}
        </Link>
      </div>
    </motion.div>
  </AnimatePresence>
</div>
*/}



    </div>
  );
};

export default HeroHome;