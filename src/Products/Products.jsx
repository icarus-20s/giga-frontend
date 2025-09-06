import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ERP from "../assets/Products/ERP.png";

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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
        {/* Header */}
<h1
  className="py-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white"
  
>
  Our <span className="text-blue-300">Products</span>
</h1>

        {/* Products Grid */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
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
                  <span className="text-blue-300">{product.name}</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Explore the features and capabilities of {product.name}.
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

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-10 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-16 sm:left-1/4 w-2 h-2 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce"></div>
      </div>
      <div className="absolute top-[-80px] left-[-80px] sm:top-[-100px] sm:left-[-100px] w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] sm:bottom-[-120px] sm:right-[-120px] w-40 sm:w-56 lg:w-80 h-40 sm:h-56 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>
    </section>
  );
};

export default Products;
