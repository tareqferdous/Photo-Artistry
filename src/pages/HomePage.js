import React from "react";
import Banner from "../components/Home/Banner";
import Navbar from "../components/Home/Navbar";
import Features from "../components/Home/Features";
import Services from "../components/Services/Services";
import Gallery from "../components/Home/Gallery";
import Team from "../components/Team/Team";
import Testimonial from "../components/Home/Testimonial";
import Footer from "../components/Home/Footer";

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
