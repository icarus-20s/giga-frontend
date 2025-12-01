import React, { useEffect, useState } from "react";
import api from "../Components/Api";
import FadeUp from "../Components/Fadeup";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <FadeUp>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-bold tracking-tighter">
                <span className="text-white">Latest </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Notices
                </span>
              </h1>
            </FadeUp>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium tracking-wider py-2">
              Stay updated • Informed • Connected
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="animate-spin rounded-full h-14 w-14 border-4 border-cyan-500 border-t-transparent"></div>
              <p className="mt-6 text-gray-300 text-lg">Loading notices...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="max-w-2xl mx-auto bg-red-900/30 backdrop-blur-sm border border-red-500/50 text-red-300 px-8 py-8 rounded-2xl text-center">
              <p className="text-xl font-medium">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && notices.length === 0 && (
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 px-8 py-16 rounded-3xl text-center">
              <p className="text-2xl font-semibold">No notices available</p>
              <p className="mt-3 text-lg opacity-80">Please check back later for updates.</p>
            </div>
          )}

          {/* Notices List – 4 per row, clean & scalable */}
          {!loading && !error && notices.length > 0 && (
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {notices.map((notice, index) => (
                  <div
                    key={notice.id}
                    className={`
                      group relative p-6 sm:p-8 border-b border-r border-white/10
                      hover:bg-white/10 transition-all duration-300
                      ${index >= notices.length - (notices.length % 4 || 4) ? "border-b-0" : ""}
                      ${index % 4 === 3 ? "border-r-0" : ""}
                      ${index % 4 === 0 ? "sm:border-l-0" : ""}
                    `}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full">
                        {new Date(notice.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      {notice.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {notice.description}
                    </p>

                    {/* View PDF Button */}
                    {notice.pdf && (
                      <a
                        href={`${api.defaults.baseURL}${notice.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm group"
                      >
                        View PDF
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Notices;