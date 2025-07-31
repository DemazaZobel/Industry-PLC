import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import machine from "../assets/projects/machine.jpg";
import construction from "../assets/projects/construction.jpg";
import importexport from "../assets/projects/importexport.jpg";
import factory from "../assets/projects/factory.jpg";

const projectsData = [
  {
    id: 1,
    title: 'Textile Manufacturing Plant',
    industry: 'Manufacturing',
    image: machine,
    location: 'Hawassa Industrial Park',
    year: 2023,
    status: 'Completed',
    description:
      'We established a cutting-edge textile manufacturing line utilizing automated spinning and weaving technologies. The project involved procurement, installation, training, and supply chain coordination across five regional vendors. Our approach prioritized sustainability and operational efficiency, making the plant one of the most cost-effective textile units in East Africa.',
  },
  {
    id: 2,
    title: 'Export of Coffee & Sesame',
    industry: 'Export',
    image: importexport,
    location: 'Addis Ababa & Djibouti Port',
    year: 2024,
    status: 'Ongoing',
    description:
      'Dankil Industries manages the end-to-end export logistics for coffee and sesame sourced from over 1,000 Ethiopian farmers. We ensure international compliance, cold chain optimization, and efficient port handling. Our strategic partnerships have boosted exports by 30% year-on-year.',
  },
  {
    id: 3,
    title: 'Dankal Tower Construction',
    industry: 'Construction',
    image: construction,
    location: 'Addis Ababa, Bole',
    year: 2025,
    status: 'Under Construction',
    description:
      'This 14-story commercial tower is designed with modern glass curtain walls and reinforced concrete technology. Dankil is overseeing the architectural design, project financing, and execution. The building includes green terraces, rooftop solar, and 3-level basement parking.',
  },
  {
    id: 4,
    title: 'Machinery Import Deal',
    industry: 'Import',
    image: machine,
    location: 'Germany – Addis Ababa',
    year: 2023,
    status: 'Delivered',
    description:
      'We successfully negotiated, procured, and imported 30 units of industrial-grade manufacturing equipment from German OEMs. Customs clearance, transportation, and installation were all handled by our logistics team with zero delays or damage claims.',
  },
  {
    id: 5,
    title: 'Modular Housing Development',
    industry: 'Construction',
    image: factory,
    location: 'Amhara Region',
    year: 2022,
    status: 'Completed',
    description:
      'In partnership with regional housing authorities, we delivered 500 modular homes within 6 months. Dankil oversaw site preparation, modular fabrication, and service integration (plumbing, electrical). The homes provide affordable, safe housing for low-income communities.',
  },
];


const industries = ['All', 'Manufacturing', 'Import', 'Export', 'Construction'];

const statusColor = {
  Completed: 'text-green-600',
  Ongoing: 'text-yellow-600',
  'Under Construction': 'text-orange-500',
  Delivered: 'text-blue-600',
};

const Projects = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects =
    selectedIndustry === 'All'
      ? projectsData
      : projectsData.filter((project) => project.industry === selectedIndustry);

  return (
    <section className="min-h-screen bg-background py-20 px-6 top-[100px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Our Landmark Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A closer look at the industrial, construction, and trade initiatives that define Dankil Industries.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-5 py-2 rounded-full text-sm border font-medium ${
                selectedIndustry === industry
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              } transition duration-300`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            const shortDesc = project.description.slice(0, 140) + "...";
            return (
              <motion.div
                layout
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <div className="text-sm text-gray-500 my-2">
                    📍 {project.location} | 📅 {project.year} | <span className={`${statusColor[project.status]} font-medium`}>{project.status}</span>
                  </div>
                  <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    {project.industry}
                  </span>
                  <p className="text-sm text-gray-600">
                    {isExpanded ? project.description : shortDesc}
                  </p>
                  <button
                    onClick={() => toggleReadMore(project.id)}
                    className="mt-4 block text-sm text-blue-600 hover:underline focus:outline-none"
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
