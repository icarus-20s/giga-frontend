import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ERP from "../assets/Products/ERP.png";
import CallToAction from "../Components/CallToAction";
import FadeUp from "../Components/Fadeup";

const products = [
    { id: 1, name: "GigaAccounting", path: "giga-accounting", image: ERP },
    { id: 2, name: "GigaIMS", path: "giga-ims", image: ERP },
    { id: 3, name: "GigaERP", path: "giga-erp", image: ERP },
    { id: 4, name: "GigaHRMS", path: "giga-hrms", image: ERP },
];

const Products = () => {
    const refs = useRef([]);
    const [visibleIds, setVisibleIds] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.dataset.id;
                        if (!visibleIds.includes(id)) {
                            setVisibleIds((prev) => [...prev, id]);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [visibleIds]);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Header – Left Aligned */}
                <div className="max-w-7xl mx-auto">
                    <FadeUp>
                        <h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-6xl font-bold tracking-tighter">
                            <span className="text-white">Explore </span>
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                products
                            </span>
                        </h1>
                    </FadeUp>

                    <p className="mt-8 text-xl sm:text-2xl text-gray-400 py-2 font-medium tracking-wider uppercase">
                        Built to perform • Designed to impress • Engineered to last
                    </p>
                </div>

                {/* Products Grid */}
                <div className="space-y-16 sm:space-y-20 lg:space-y-24 py-5 ">
                    {products.map((product, index) => (
                        <article
                            key={product.id}
                            data-id={product.id}
                            ref={(el) => (refs.current[index] = el)}
                            className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-700 ease-out transform ${
                                visibleIds.includes(product.id.toString())
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            } ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2 flex-shrink-0">
                                <div className="relative overflow-hidden rounded-2xl shadow-lg transform-gpu transition-transform duration-500 hover:scale-105">
                                    <img
                                        src={product.image}
                                        alt={`${product.name} illustration`}
                                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0 space-y-4 sm:space-y-6 text-white">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                        {product.name}
                                    </span>
                                </h2>
                                <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    Explore the features and capabilities of{" "}
                                    {product.name}.
                                </p>
                                <Link
                                    to={`/products/${product.path}`}
                                    className="inline-flex items-center gap-2 text-blue-400 font-semibold text-base sm:text-lg hover:text-blue-300 transition-colors duration-300"
                                >
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <FadeUp>
                <CallToAction />
            </FadeUp>
        </section>
    );
};

export default Products;
