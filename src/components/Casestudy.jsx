import React from 'react';
import coffee from '../assets/ExportImport/dark-coffee-beans-bowl-brown-table.jpg';
import storage from '../assets/Manufacture/hall.jpg';
import livestock from '../assets/ExportImport/black-white-spotty-cows-farm.jpg';

const caseStudies = [
  {
    title: "Streamlining Coffee Export Logistics",
    summary: "Helped a major coffee exporter reduce delivery times by 25% through optimized warehousing and transport coordination.",
    image: coffee,
  },
  {
    title: "Efficient Pharmaceutical Storage",
    summary: "Implemented climate-controlled storage solutions for pharmaceuticals, ensuring compliance and product integrity.",
    image: storage,
  },
  {
    title: "Scaling Livestock Distribution",
    summary: "Supported livestock exporters with rapid inventory turnover and timely shipping during peak seasons.",
    image: livestock,
  },
];

const CaseStudies = () => (
  <section className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 space-y-10 bg-background text-text max-w-7xl md:-mt-16 lg:-mt-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-primaryText mb-6 text-center">
      Success Stories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
      {caseStudies.map(({ title, summary, image }, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 sm:h-56 object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
            <p className="text-text text-sm sm:text-base">{summary}</p>
          </div>
        </div> 
      ))}
    </div>
  </section>
);

export default CaseStudies;
