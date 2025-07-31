import React from 'react';
import { Link } from 'react-router-dom';
import construction from "../assets/services/construction.png";
import machine from "../assets/services/machine.png";
import globalTrade from "../assets/services/globalTrade.png";
import industrial from "../assets/services/industrial.png";

const services = [
  {
    title: 'Industrial Solutions',
    description: 'State-of-the-art industrial machinery and process automation for maximum efficiency and productivity.',
    icon: industrial,
    path: '/services/industrial-solutions',
    stats: 'industry'
  },
  {
    title: 'Construction Management',
    description: 'Comprehensive project lifecycle management from planning to execution with precision engineering.',
    icon: construction,
    path: '/services/construction-management',
    stats: 'construction'
  },
  {
    title: 'Global Trade',
    description: 'Seamless import/export solutions with optimized logistics and customs clearance.',
    icon: globalTrade,
    path: '/services/global-trade',
    stats: 'Import/Export'
  },
  {
    title: 'Manufacturing',
    description: 'ISO-certified production facilities delivering premium quality with sustainable practices.',
    icon: machine,
    path: '/services/manufacturing',
    stats: 'Manufacturing'
  },
];

const Services = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 text-lg font-semibold text-primary rounded-full mb-6 tracking-wider uppercase">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-primaryText tracking-tight">
          Industry-Leading Solutions
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-text leading-relaxed">
          Dankal Industrial PLC delivers comprehensive solutions with uncompromising quality standards and innovative approaches tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, icon, stats, path }) => (
          <Link
            key={title}
            to={path}
            className="group relative bg-white rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-accent overflow-hidden"
            aria-label={`Learn more about ${title}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-lg bg-accent/10 p-2">
                <img src={icon} alt={`${title} icon`} className="w-10 h-10 object-contain" />
              </div>

              <h3 className="text-lg font-semibold text-secondary mb-2">{title}</h3>
              <p className="text-sm text-primaryText flex-grow mb-4">{description}</p>

              <div className="text-sm font-medium text-primaryText group-hover:text-primary group-hover:bg-secondary/50 transition-all duration-300 flex items-center border border-primary/30 p-2 rounded-lg w-fit bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-glow group-hover:border-primary/50">
                {stats}
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
