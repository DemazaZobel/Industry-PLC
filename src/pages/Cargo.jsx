import React from 'react';
import HeroCargo from "../components/HeroCargo.jsx";
import Globe from '../components/Globe.jsx';
import CargoService from '../components/CargoService.jsx';
import CallToAction from '../components/CargoCallToAction.jsx';
import Certifications from '../components/CargoCertification.jsx';
import ShippingMap from '../components/ShippingMap.jsx';

const Cargo = () => (
  <div className="mt-[-74px] bg-background">
    <title>About Us | Dankil</title>
    <meta name="description" content="Learn more about Dankil, our mission, vision, and leadership." />
    <HeroCargo />
    <Globe />
    <CargoService />
    <Certifications />
    <ShippingMap />
    <CallToAction />
  </div>
);

export default Cargo;
