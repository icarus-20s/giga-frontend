import React, { useEffect, useState } from "react";
import api from "../Components/Api";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get("notices/");
        setNotices(res.data || []);
      } catch (err) {
        console.error("Error fetching notices:", err);
        setError("Failed to load notices. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-4">

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
      </div>
      <div className="absolute top-[-100px] left-[-100px] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-white">
        Official <span className="text-blue-300">notices</span>
      </h1>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent mb-4"></div>
          <p className="text-gray-300 text-base">Loading notices...</p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8 text-center">
          {error}
        </div>
      )}

      {/* No notices */}
      {!loading && !error && notices.length === 0 && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-6 py-4 rounded-lg text-center">
          No notices available at the moment. Please check back later.
        </div>
      )}

      {/* Notices Grid */}
      {!loading && !error && notices.length > 0 && (
       <div className="py-5 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl justify-items-stretch">
  {notices.map((notice) => (
    <div
      key={notice.id}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col overflow-hidden w-full"
    >
      {/* Card Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5 flex flex-col gap-1">
        <h3 className="text-white text-lg sm:text-xl font-bold truncate">
          {notice.title}
        </h3>
        <time className="text-indigo-200 text-xs">
          {new Date(notice.date).toLocaleDateString()}
        </time>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <p className="text-gray-700 text-sm sm:text-base line-clamp-5">
          {notice.description}
        </p>

        {/* PDF Button */}
        {notice.pdf && (
          <a
            href={`${api.defaults.baseURL}${notice.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl text-sm sm:text-base font-medium hover:bg-indigo-700 transition-colors shadow-md"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L11.29.29 4 7.59V22h16V7.59L12 0zm5 20H7v-1h10v1zm0-3H7v-1h10v1zm0-3H7v-1h10v1zm-5-7l5 5H12V7z"/>
            </svg>
            View PDF
          </a>
        )}
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default Notices;
