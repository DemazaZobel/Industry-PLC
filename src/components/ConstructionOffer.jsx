import React from "react";
import residential from "../assets/construction/view-modern-construction-site RES.jpg";//
import commercial from "../assets/construction/illustration-construction-site.jpg";//
import infrastructure from "../assets/construction/looking-up-through-metal-structure.jpg";
import renovation from "../assets/construction/view-modern-construction-site renovTION.jpg";//
import sustainable from "../assets/construction/image.png";

const services = [
  {
    title: "Residential & Commercial Construction",
    description:
      "From family homes to high-rise offices, we bring architectural plans to life with craftsmanship, speed, and attention to detail.",
    image: residential,
    reverse: false,
  },
  {
    title: "Infrastructure Projects",
    description:
      "We build the backbone of Ethiopia’s future—roads, bridges, water systems, and public facilities that drive progress.",
    image: infrastructure,
    reverse: true,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Revitalize existing spaces with our full-scale renovation services. We blend modern design with structural integrity.",
    image: renovation,
    reverse: false,
  },
  {
    title: "Sustainable & Green Building",
    description:
      "We incorporate eco-friendly materials and energy-efficient systems to create sustainable environments for tomorrow.",
    image: sustainable,
    reverse: true,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-16 space-y-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primaryText mb-4">
          What We Offer
        </h2>
        <p className="text-lg text-text max-w-3xl mx-auto">
          <span className="text-secondary">DanKal Construction</span> is committed to delivering excellence through a wide range of services tailored to both public and private sectors.
        </p>
      </div>

      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            service.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          <div className="md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {service.title}
            </h3>
            <p className="text-accent text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhatWeOffer;
