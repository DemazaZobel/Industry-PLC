import React, { useState } from "react";
import img1 from "../assets/construction/a.jpg";
import img2 from "../assets/construction/b.jpg";
import img3 from "../assets/construction/c.jpg";
import img4 from "../assets/construction/d.jpg";
import img5 from "../assets/construction/e.jpg";
import img6 from "../assets/construction/f.jpg";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4, img5, img6];

const ConstructionGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-background py-20 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-primaryText mb-4 drop-shadow-md">
          Our Construction Masterpieces
        </h2>
        <p className="text-lg text-text">
          Explore our portfolio showcasing cutting-edge projects where expertise meets innovation and craftsmanship.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-8 px-8 py-3 bg-primary rounded-full text-white font-semibold shadow hover:bg-accent transition"
        >
          See All Projects
        </Link>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition"
            onClick={() => openLightbox(i)}
            aria-label={`Open project image ${i + 1}`}
          >
            <img
              src={img}
              alt={`Construction project ${i + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-accent"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-accent select-none"
            aria-label="Previous image"
          >
            &#8592;
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`Construction project enlarged ${lightboxIndex + 1}`}
            className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-accent select-none"
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default ConstructionGallery;
