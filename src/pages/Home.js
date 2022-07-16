import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Services />
      <Gallery />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
