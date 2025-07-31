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
    <>
    <ManufactureHero />
    <ManufacturingOverview />
    <WhatWeOffer />
    <ManufacturignHowitworks />
    <WarehouseOverview />
    <CaseStudies />
    <RequestQuote />
    </>
  );
}