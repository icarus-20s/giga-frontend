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
        () =>
            setCurrentIndex((prev) =>
                prev === 0 ? photos.length - 1 : prev - 1
            ),
        [photos.length]
    );

    const nextPhoto = useCallback(
        () =>
            setCurrentIndex((prev) =>
                prev === photos.length - 1 ? 0 : prev + 1
            ),
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
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>
            </div>
            <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Header */}
                <FadeUp>
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-6xl font-bold tracking-tighter">
                        <span className="text-white">Reviving </span>
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                            memories
                        </span>
                    </h1>
                </FadeUp>
                <p className="mt-6 py-2 text-xl text-gray-400 font-medium tracking-wider uppercase">
                    Moments • Memories • Forever
                </p>
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
