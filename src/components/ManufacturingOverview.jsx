import React from "react";

const ManufacturingOverview = () => (
  <section className="bg-background py-24 px-4 sm:px-6 lg:px-16 border-t border-gray-100">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
          Precision Manufacturing.<br className="hidden md:block"/> 
          <span className="font-medium">Seamless Global Trade.</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At Dankil Industries, we orchestrate the perfect symphony between global markets and precision manufacturing. 
          Our hands caress every stage - from ethically sourcing raw materials to delivering finished products 
          with surgical precision. We don't just move goods; we craft supply chain experiences that excite your bottom line.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {icon: "🌐", title: "Global Network", desc: "200+ vetted partners across 35 countries"},
          {icon: "⚡", title: "Agile Solutions", desc: "Just-in-time manufacturing with 98.7% on-time delivery"},
          {icon: "🔒", title: "Risk Managed", desc: "Full compliance and quality assurance protocols"}
        ].map((item, index) => (
          <div key={index} className="p-6 hover:bg-gray-50 rounded-xl transition-all duration-300">
            <span className="text-3xl block mb-4">{item.icon}</span>
            <h3 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ManufacturingOverview;