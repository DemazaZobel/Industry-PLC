import React from 'react';
import coffee from '../assets/ExportImport/dark-coffee-beans-bowl-brown-table.jpg';
import storage from '../assets/Manufacture/hall.jpg';
import livestock from '../assets/ExportImport/black-white-spotty-cows-farm.jpg';
import wheat from '../assets/ExportImport/field-with-spikelets-close-up-background-with-wheat-spikelets.jpg';
import sugar from '../assets/ExportImport/background-sugar-cubes.jpg';
import fuel from '../assets/ExportImport/petrol-pump-hand-biodiesel-sustainable-environment.jpg';

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
  <section className=" mx-auto px-60 py-20 space-y-12 bg-background text-text ">
    <h2 className="text-3xl font-bold text-primaryText mb-8 text-center">Success Stories</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {caseStudies.map(({ title, summary, image }, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-text">{summary}</p>
          </div>
        </div> 
      ))}
    </div>
  </section>
);

export default CaseStudies;
