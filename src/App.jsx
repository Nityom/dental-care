import React, { Suspense, lazy, useEffect } from "react";
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
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  useEffect(() => {
    const mountBlogEmbed = () => {
      const container = document.getElementById('blogforge-recent-posts');
      if (!container) return;
      if (document.getElementById('blogforge-embed-script')) return;
      const script = document.createElement('script');
      script.src = 'https://blog-saas-five.vercel.app/api/embed/titanium-smiles/recent-posts.js';
      script.id = 'blogforge-embed-script';
      script.async = true;
      container.appendChild(script);
    };

    // Try to mount once the app has rendered
    setTimeout(mountBlogEmbed, 300);

    return () => {
      const existing = document.getElementById('blogforge-embed-script');
      if (existing) existing.remove();
    };
  }, []);
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
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton /> {/* ⬅️ Scroll to top button added */}
        {/* Blog Recent Posts Embed (mounted before footer) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4">Latest From Our Blog</h2>
          <div id="blogforge-recent-posts" className="mx-auto"></div>
        </div>
        <Footer />
        <WebsiteFooter />
      </Router>
    </HelmetProvider>
  );
}
