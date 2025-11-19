import React, { useState, useEffect, useCallback, useMemo } from "react";
import FadeUp from "../Components/Fadeup";
import api from "../Components/Api";
import Loader from "../Components/Loader";

const Career = () => {
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    job: "",
    resumes: null,
    cover_letter: null,
  });
  const [openRoles, setOpenRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);

  // Static Data with useMemo
  const benefits = useMemo(
    () => [
      {
        title: "Innovation Hub",
        desc: "Lead groundbreaking projects that redefine industry standards.",
        icon: "💡",
      },
      {
        title: "Elite Collaboration",
        desc: "Partner with experts in an inclusive and diverse culture.",
        icon: "🤝",
      },
      {
        title: "Career Growth",
        desc: "Accelerated career advancement with premium resources.",
        icon: "📈",
      },
      {
        title: "Global Impact",
        desc: "Shape change that transforms industries worldwide.",
        icon: "🌍",
      },
    ],
    []
  );

  const traits = useMemo(
    () => [
      {
        name: "Visionary",
        desc: "Drive innovation with strategic thinking.",
        icon: "🔥",
      },
      {
        name: "Excellence-Driven",
        desc: "Commitment to mastery and quality.",
        icon: "💪",
      },
      {
        name: "Innovation Catalyst",
        desc: "Bring fresh ideas and creativity.",
        icon: "🎨",
      },
      {
        name: "Team Leader",
        desc: "Inspire and uplift teams with collaboration.",
        icon: "👥",
      },
    ],
    []
  );

  const hiringSteps = useMemo(
    () => [
      { step: "Application Review", desc: "Evaluation of your professional background." },
      { step: "Strategic Discussion", desc: "Conversation about goals and aspirations." },
      { step: "Technical Round", desc: "Assessment of skills and expertise." },
      { step: "Final Interview", desc: "Discussion with senior leadership." },
    ],
    []
  );

  // Fetch Open Roles
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get("career/");
        setOpenRoles(res.data || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job positions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Handlers
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFileChange = useCallback((e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [".pdf", ".doc", ".docx"];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const fileExtension = "." + file.name.split(".").pop().toLowerCase();

    if (!allowedTypes.includes(fileExtension)) {
      alert("Please upload only PDF, DOC, or DOCX files.");
      return;
    }

    if (file.size > maxSize) {
      alert("File size must be less than 5MB.");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: file }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      full_name: "",
      email: "",
      job: "",
      resumes: null,
      cover_letter: null,
    });
    document.querySelectorAll('input[type="file"]').forEach((input) => {
      input.value = "";
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      const data = new FormData();
      data.append("full_name", formData.full_name);
      data.append("email", formData.email);
      data.append("job", formData.job);
      if (formData.resumes) data.append("resumes", formData.resumes);
      if (formData.cover_letter) data.append("cover_letter", formData.cover_letter);

      await api.post("jobapplications/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Your application has been submitted successfully. We will contact you within 48 hours.");
      setIsModalOpen(false);
      resetForm();
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("Failed to submit application. Please try again.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const openModal = useCallback((jobId = "") => {
    setFormData((prev) => ({ ...prev, job: jobId }));
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    resetForm();
  }, [resetForm]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center text-center py-12 sm:py-20 overflow-hidden">
        <FadeUp>
          <div className="relative z-10 max-w-4xl px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Shape the <span className="text-blue-300">Future</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
              Join a team of visionaries, innovators, and leaders dedicated to transforming technology and creating extraordinary impact.
            </p>
          </div>
        </FadeUp>
      </section>

      <main className="bg-gradient-to-b from-blue-50 via-blue-100 to-gray-100 w-full flex flex-col items-center">
        {/* Vision & Mission */}
        <FadeUp delay={100}>
          <section className="py-12 sm:py-16 w-full flex justify-center">
            <div className="max-w-7xl text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Vision & Mission
              </h2>
              <div className="py-5 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {["Innovation", "Integrity", "Excellence", "Collaboration"].map((title, idx) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl p-4 sm:p-6 shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h3 className="font-bold text-lg sm:text-xl mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {[
                        "Continuously pushing boundaries with cutting-edge solutions.",
                        "Upholding transparency, honesty, and ethics in every project.",
                        "Delivering high-quality solutions that exceed expectations.",
                        "Working closely with clients and teams to achieve shared goals.",
                      ][idx]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Benefits */}
        <FadeUp delay={200}>
          <section className="py-8 sm:py-12 mb-16 sm:mb-20 text-center w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                Why Work With Us
              </h2>
              <div className="py-5 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {benefits.map((item, idx)=> (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center w-full max-w-xs"
                  >
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Traits & Hiring Process */}
        <FadeUp delay={300}>
          <section className="py-8 sm:py-12 mb-16 sm:mb-20 text-center w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                Who We're Looking For
              </h2>

              <div className="py-5 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mb-12">
                {traits.map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-gray-200 text-center flex flex-col items-center w-full max-w-xs shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{trait.icon}</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{trait.name}</h3>
                    <p className="text-gray-700 text-center text-sm sm:text-base">{trait.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl m-10 sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Hiring Process
              </h3>

              <div className="py-5 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {hiringSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg flex flex-col items-center w-full max-w-xs transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 bg-indigo-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-semibold">
                      {idx + 1}
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">{step.step}</h4>
                    <p className="text-gray-600 text-center text-sm sm:text-base">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Open Positions */}
        <FadeUp delay={400}>
          <section className="mb-16 sm:mb-20 text-center w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
                Open Positions
              </h2>

              {loading ? (
                <div className="flex justify-center py-10">
                  <Loader />
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
                  {error}
                </div>
              ) : openRoles.length === 0 ? (
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg">
                  No open positions available at the moment. Please check back later.
                </div>
              ) : (
                <div className="py-5 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                  {openRoles.map((job) => (
                    <div
                      key={job.id}
                      className="p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center w-full max-w-sm"
                    >
                      <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-5">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                          {job.employment_type}
                        </span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm font-medium">
                          Posted: {new Date(job.posted_on).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-center leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-gray-500 mb-3 text-sm sm:text-base text-center">📍 {job.location}</p>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base text-center line-clamp-3">
                        {job.description}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4">
                        Application Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </p>

                      <button
                        onClick={() => openModal(job.id)}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 transform cursor-pointer shadow-lg hover:shadow-2xl text-sm sm:text-base"
                      >
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </FadeUp>
      </main>

      {/* Application Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-10 max-w-4xl w-full shadow-2xl transform transition-all duration-300 my-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 id="modal-title" className="py-5 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Application <span className="text-teal-600">Form</span>
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 sm:p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 sm:p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all text-sm sm:text-base"
                />
                <select
                  name="job"
                  value={formData.job}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 sm:p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all text-sm sm:text-base bg-white"
                >
                  <option value="">Select Position</option>
                  {openRoles.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-3">
                <label className="text-gray-700 text-sm sm:text-base font-medium">Resume</label>
                <div className="relative">
                  <input
                    type="file"
                    name="resumes"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full p-3 sm:p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all text-sm sm:text-base file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                  <small className="text-gray-500 text-xs mt-1 block">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </small>
                </div>

                <label className="text-gray-700 text-sm sm:text-base font-medium mt-2">Cover Letter</label>
                <div className="relative">
                  <input
                    type="file"
                    name="cover_letter"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full p-3 sm:p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all text-sm sm:text-base file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                  <small className="text-gray-500 text-xs mt-1 block">
                    Optional: Upload a cover letter (PDF, DOC, DOCX)
                  </small>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={submitLoading}
                    className="w-full sm:w-auto px-5 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitLoading}
                    className="w-full sm:w-auto px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium text-sm sm:text-base flex items-center justify-center cursor-pointer"
                  >
                    {submitLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;