import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Home from "./components/Home";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamsSection";
import WebsiteFooter from "./components/WebsiteFooter";
import Navbar from "./components/Navbar";
import ServicesPage from "./pages/ServicesPage";

import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

import "./App.css";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
     
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <SecondPage />
              <ThirdPage />
              <TeamSection />
              <FourthPage />
              <FifthPage />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

      <Footer />
      <WebsiteFooter />    </Router>
    </HelmetProvider>
  );
}
