import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const imageFiles = [
  "1image.jpeg",
  "2image.jpeg",
  "3image.jpeg",
  "4image.jpeg",
  "5image.jpeg",
  "6image.jpeg",
  "7image.jpeg",
  "Image-13.jpeg",
  "Image-14.jpeg",
  "Patient-1.png",
  "Patient-2.png",
  "Patient-3.png",
  "Patient-4.png",
  "Patient-5.png",
];

const videoFiles = ["8image.mp4", "9image.mp4", "10image.mp4", "11image.mp4", "12image.mp4"];
const photoFiles = imageFiles.filter(
  (file) => !file.startsWith("Patient-") && file !== "Image-13.jpeg" && file !== "Image-14.jpeg"
);

const treatmentCases = [
  {
    file: "Image-13.jpeg",
    category: "Prosthetics",
    title: "Complete Dentures",
    description:
      "Complete denture rehabilitation to restore missing teeth, support facial profile, and improve day-to-day chewing comfort.",
  },
  {
    file: "Image-14.jpeg",
    category: "Prosthetics",
    title: "Complete Dentures",
    description:
      "Complete denture rehabilitation to restore missing teeth, support facial profile, and improve day-to-day chewing comfort.",
  },
  {
    file: "Patient-1.png",
    category: "Prosthetics",
    title: "Anterior Mouth Rehabilitation",
    description:
      "Full removable prosthetic appliances crafted to replace missing teeth and restore oral comfort and function.",
  },
  {
    file: "Patient-2.png",
    category: "Implant Dentistry",
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive restoration planning to improve chewing efficiency, smile balance, and long-term oral stability.",
  },
  {
    file: "Patient-3.png",
    category: "Smile Design",
    title: "Aesthetic Smile Makeover",
    description:
      "Customized aesthetic corrections focused on tooth proportion, alignment, and natural-looking smile enhancement.",
  },
  {
    file: "Patient-4.png",
    category: "Restorative",
    title: "Anterior Teeth Reconstruction",
    description:
      "Targeted front-teeth reconstruction for improved appearance, bite support, and speech clarity.",
  },
  {
    file: "Patient-5.png",
    category: "Fixed Prosthesis",
    title: "Fixed Teeth Restoration",
    description:
      "Precision fixed prosthetic treatment designed for durable function and a confident natural smile.",
  },
];

const GalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [loadedVideos, setLoadedVideos] = useState({});

  const markImageLoaded = (key) => {
    setLoadedImages((current) => ({ ...current, [key]: true }));
  };

  const markVideoLoaded = (key) => {
    setLoadedVideos((current) => ({ ...current, [key]: true }));
  };

  const closeLightbox = () => setSelectedImageIndex(null);
  const showPreviousImage = () => {
    setSelectedImageIndex((current) =>
      current === null ? current : (current - 1 + imageFiles.length) % imageFiles.length
    );
  };
  const showNextImage = () => {
    setSelectedImageIndex((current) =>
      current === null ? current : (current + 1) % imageFiles.length
    );
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (selectedImageIndex !== null && event.key === "ArrowLeft") {
        showPreviousImage();
      }
      if (selectedImageIndex !== null && event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImageIndex]);

  useEffect(() => {
    document.body.style.overflow = selectedImageIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e9f6f6] to-white pt-24 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1b1e] mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A look inside Titanium Smiles, our treatments, and real smile transformations.
          </p>
        </motion.div>

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#1e1b1e] mb-6 text-left"
          >
            Before & After Treatment
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {treatmentCases.map((item, index) => (
              <motion.article
                key={item.file}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-[28px] shadow-lg overflow-hidden border border-black/5"
              >
                <div className="relative h-[300px] md:h-[320px] overflow-hidden">
                  {!loadedImages[item.file] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                  )}
                  <img
                    src={`/Images/${item.file}`}
                    alt={`${item.title} before and after`}
                    loading="lazy"
                    onLoad={() => markImageLoaded(item.file)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      loadedImages[item.file] ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-md bg-black/75 text-white text-xs font-semibold tracking-wide uppercase">
                      Before
                    </span>
                    <span className="px-3 py-1 rounded-md bg-black/75 text-white text-xs font-semibold tracking-wide uppercase">
                      After
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(imageFiles.indexOf(item.file))}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-full bg-white/90 text-[#3a3a3a] font-semibold tracking-wider uppercase text-sm hover:bg-white transition"
                  >
                    View Image
                  </button>
                </div>

                <div className="p-6 text-left">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#e9ddff] text-[#6f23d4] uppercase text-xs tracking-[0.12em] font-semibold mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-bold text-[#111827] mb-3">{item.title}</h3>
                  <p className="text-[#4b5563] text-base leading-8">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#1e1b1e] mb-6 text-left"
          >
            Photos
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {photoFiles.map((file, index) => (
              <motion.button
                key={file}
                type="button"
                onClick={() => setSelectedImageIndex(imageFiles.indexOf(file))}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="relative overflow-hidden rounded-2xl shadow-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
              >
                {!loadedImages[file] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                )}
                <img
                  src={`/Images/${file}`}
                  alt={`Gallery item ${index + 1}`}
                  loading="lazy"
                  onLoad={() => markImageLoaded(file)}
                  className={`w-full h-[360px] object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in ${
                    loadedImages[file] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#1e1b1e] mb-6 text-left"
          >
            Videos
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {videoFiles.map((file, index) => (
              <motion.div
                key={file}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl shadow-md bg-black"
              >
                {!loadedVideos[file] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
                )}
                <video
                  src={`/Images/${file}`}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedData={() => markVideoLoaded(file)}
                  className={`w-full h-[360px] object-cover transition-opacity duration-300 ${
                    loadedVideos[file] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Image preview"
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/20 text-white text-2xl leading-none hover:bg-white/35 transition"
                aria-label="Close image preview"
              >
                ×
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 text-white text-3xl leading-none hover:bg-white/35 transition"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 text-white text-3xl leading-none hover:bg-white/35 transition"
                aria-label="Next image"
              >
                ›
              </button>

              <motion.img
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={`/Images/${imageFiles[selectedImageIndex]}`}
                alt={`Gallery item ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;