import React from 'react';
import warehouse from "../assets/Manufacture/hall.jpg"

const WarehouseOverview = () => (
  <section className=" mx-auto px-60 py-60 space-y-12 bg-background text-text min-h-screen">
    <h2 className="text-3xl font-bold text-primaryText mb-6 text-center">
      Our Warehouse Capabilities
    </h2>
    <div className="grid md:grid-cols-3 gap-12 text-center">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
        <p>
          Our warehouses are equipped with climate control, CCTV, and advanced security systems to ensure your goods are protected 24/7.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
        <p>
          Real-time inventory tracking with modern warehouse management software lets you monitor your stock anytime, anywhere.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Fast & Reliable Distribution</h3>
        <p>
          We coordinate efficient order picking, packing, and distribution services to meet your deadlines and reduce downtime.
        </p>
      </div>
      <img src={warehouse} alt="Warehouse" className="w-full h-64 object-cover rounded-lg shadow-lg mt-8 md:col-span-3" />
    </div>
  </section>
);

export default WarehouseOverview;
