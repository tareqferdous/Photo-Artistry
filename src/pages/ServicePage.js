import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceDetails from "../components/Services/ServiceDetails";
import ServiceFeatures from "../components/Services/ServiceFeatures";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <ServiceDetails />
      <ServiceFeatures />
      <Footer />
    </div>
  );
};

export default ServicePage;
