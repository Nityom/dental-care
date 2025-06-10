import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebsiteFooter from "./components/WebsiteFooter";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

// Lazy-loaded pages and sections
const Home = lazy(() => import("./components/Home"));
const SecondPage = lazy(() => import("./components/SecondPage"));
const ThirdPage = lazy(() => import("./components/ThirdPage"));
const FourthPage = lazy(() => import("./components/FourthPage"));
const FifthPage = lazy(() => import("./components/FifthPage"));
const TeamSection = lazy(() => import("./components/TeamsSection"));

const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton /> {/* ⬅️ Scroll to top button added */}
        <Footer />
        <WebsiteFooter />
      </Router>
    </HelmetProvider>
  );
}
