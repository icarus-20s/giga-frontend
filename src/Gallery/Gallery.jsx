import React, { useState, useEffect, useCallback } from "react";
import FadeUp from "../Components/Fadeup";
import Loader from "../Components/Loader";
import api from "../Components/Api";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get("gallery/");
        const photoUrls = response.data.map((img) => img.image);
        setPhotos(photoUrls.sort(() => Math.random() - 0.5));
      } catch (error) {
        console.error("Error fetching gallery photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const openModal = useCallback((index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const prevPhoto = useCallback(
    () => setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1)),
    [photos.length]
  );

  const nextPhoto = useCallback(
    () => setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1)),
    [photos.length]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "Escape") closeModal();
    },
    [modalOpen, prevPhoto, nextPhoto, closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-[-100px] left-[-100px] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>

        {/* Header */}
        <h1 className="py-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white">
          Me<span className="text-blue-300">Mories</span>
        </h1>
      </div>

      {/* Masonry Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <Loader size={48} />
        </div>
      ) : (
        <div className="mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <FadeUp key={photo} delay={index * 80}>
              <button
                onClick={() => openModal(index)}
                className="w-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-500 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={photo}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </button>
            </FadeUp>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl sm:text-3xl font-semibold hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            &times;
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 text-white text-2xl sm:text-3xl font-semibold hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            &#8592;
          </button>

          <img
            src={photos[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] sm:max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            loading="lazy"
          />

          <button
            onClick={nextPhoto}
            className="absolute right-4 text-white text-2xl sm:text-3xl font-semibold hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            &#8594;
          </button>

          <div className="absolute bottom-4 text-white text-sm sm:text-base">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
