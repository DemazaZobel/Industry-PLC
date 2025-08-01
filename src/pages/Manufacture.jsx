import React from "react";
import ManufactureHero from "../components/HeroManufacture.jsx";
import WarehouseOverview from "../components/WareHouse.jsx";
import CaseStudies from "../components/Casestudy.jsx";
import RequestQuote from "../components/RequestQuota.jsx";
import ManufacturingOverview from "../components/ManufacturingOverview.jsx";
import WhatWeOffer from "../components/OfferManufacture.jsx";
import ManufacturignHowitworks from "../components/ManufacturingHowitworks.jsx";

export default function Manufacture() {
  return (
    <div className="bg-background">
      <title>Manufacture | Dankil</title>
      <meta name="description" content="Learn about Dankil's manufacturing processes and solutions." />
      <ManufactureHero />
      <ManufacturingOverview />
      <WhatWeOffer />
      <ManufacturignHowitworks />
      <WarehouseOverview />
      <CaseStudies />
      <RequestQuote />
    </div>
  );
}
