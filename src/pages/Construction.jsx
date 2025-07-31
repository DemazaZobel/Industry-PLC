import React from 'react';
import { Helmet } from 'react-helmet';
import Constraction from '../components/HeroConstruction.jsx';
import WhatWeOffer from '../components/ConstructionOffer.jsx';
import ConstructionStep from '../components/ConstructionSteps.jsx';
import ConstructionTestimonials from '../components/ConstructionTestimonials.jsx';
import ConstructionCTA from '../components/ConstructionCTA.jsx';
import ConstructionGallery from '../components/ConstructionGallary.jsx';

const ServicesPage = () => (
  <>
    <div className='bg-background min-h-screen'>
    <Helmet>
      <title>Services | Dankil</title>
      <meta name="description" content="Explore the industrial, construction, manufacturing, and import-export services offered by Dankil." />
    </Helmet>
    <Constraction />
    <WhatWeOffer />
    <ConstructionStep />
    <ConstructionGallery />
    <ConstructionTestimonials />
    <ConstructionCTA />
    </div>
  </>
);

export default ServicesPage;
