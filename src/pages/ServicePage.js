import React, { useEffect } from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
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
