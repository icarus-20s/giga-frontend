import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import api from "../Components/Api";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await api.get("/faqs/");
        setFaqs(response.data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 tracking-tight">
            Got Questions? We've Got Answers!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our frequently asked questions to find quick and clear answers to common queries.
          </p>
        </div>

      {/* FAQ List */}
<div className="space-y-6 sm:space-y-8">
  {faqs.length > 0 ? (
    faqs.map((faq, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
      >
        <button
          className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
          onClick={() => toggleFAQ(index)}
          aria-expanded={openIndex === index}
          aria-controls={`faq-answer-${index}`}
        >
          <span className="text-base sm:text-lg font-medium text-gray-800">
            {faq.question}
          </span>
          <span className="flex-shrink-0 text-blue-500 ml-4">
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </span>
        </button>
        <div
          id={`faq-answer-${index}`}
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openIndex === index ? "max-h-screen opacity-100 py-4 sm:py-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 pb-4 sm:pb-5">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center py-12 sm:py-16">
      <p className="text-base sm:text-lg text-gray-500 italic">
        No FAQs available right now. Check back later.
      </p>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default FAQPage;