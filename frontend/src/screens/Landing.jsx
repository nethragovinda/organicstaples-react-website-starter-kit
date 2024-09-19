import React from "react";
import TopNavbar from "../components/TopNavbar";
import HeroSection from "../components/Sections/HeroSection";
import AnnouncementBar from "../components/Sections/AnnouncementBar";
import WhyUs from "../components/Sections/WhyUs";
import ProductMenu from "../components/Sections/ProductMenu";
import BestSellers from "../components/Sections/BestSellers";
import NewsLetter from "../components/Sections/NewsLetter";
import SampleBlogs from "../components/Sections/SampleBlogs";
import Footer from "../components/Sections/Footer";
//import BestSellerSlider from "../components/Elements/BestSellerSlider";

const Landing = ({ isLoggedIn, username }) => {
  return (
    <>
      <AnnouncementBar />
      <TopNavbar />
      <HeroSection />
      <WhyUs />
      <ProductMenu />
      <BestSellers />
      <SampleBlogs />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Landing;
