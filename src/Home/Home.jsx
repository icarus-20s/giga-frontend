import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Code,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp Solutions",
      text: "Giga Infosoft transformed our entire business process with their comprehensive ERP solution. The level of professionalism and technical expertise exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      text: "Outstanding development team with exceptional project management. They delivered our mobile app ahead of schedule and within budget.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      text: "The accounting system they developed has streamlined our financial operations significantly. Highly recommended for enterprise solutions.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const services = [
    {
      name: "Custom Development",
      desc: "Tailored software solutions built to your exact specifications",
      icon: <Code size={32} className="text-blue-600" />,
      features: ["Full-stack development", "API integration", "Scalable architecture"],
    },
    {
      name: "Web Applications",
      desc: "Modern, responsive web platforms with cutting-edge technology",
      icon: <Globe size={32} className="text-green-600" />,
      features: ["Progressive Web Apps", "Cloud deployment", "Real-time features"],
    },
    {
      name: "Mobile Solutions",
      desc: "Native and cross-platform mobile applications",
      icon: <Smartphone size={32} className="text-purple-600" />,
      features: ["iOS & Android", "Cross-platform", "App store optimization"],
    },
    {
      name: "Enterprise Security",
      desc: "Comprehensive security solutions and compliance",
      icon: <Shield size={32} className="text-red-600" />,
      features: ["Data encryption", "Access control", "Security audits"],
    },
  ];

  const products = [
    {
      name: "Giga School ERP",
      desc: "Complete educational management system with student tracking, grade management, and parent communication tools",
      icon: <Users size={40} className="text-blue-600" />,
      features: ["Student Management", "Grade Tracking", "Parent Portal", "Attendance System"],
    },
    {
      name: "Giga Accounting",
      desc: "Advanced financial management with real-time analytics and automated reporting",
      icon: <Award size={40} className="text-green-600" />,
      features: ["Financial Reporting", "Tax Management", "Audit Trails", "Multi-currency"],
    },
    {
      name: "Giga HRMS",
      desc: "Complete human resource management with payroll, attendance, and performance tracking",
      icon: <Shield size={40} className="text-purple-600" />,
      features: ["Payroll Management", "Performance Reviews", "Leave Management", "Recruitment"],
    },
    {
      name: "Giga IMS",
      desc: "Smart inventory and procurement system with predictive analytics",
      icon: <Zap size={40} className="text-orange-600" />,
      features: ["Stock Tracking", "Supplier Management", "Order Automation", "Analytics"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-blue-300 border border-blue-500/30">
                  <Zap size={16} className="mr-2" />
                  Trusted by 150+ Companies
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Transform Your Business with{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Smart Technology
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  We deliver enterprise-grade software solutions, web applications, and digital transformation services that drive measurable business growth.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contactus"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
                >
                  Start Your Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <Play size={18} className="mr-2" />
                  Watch Demo
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Services Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {services.slice(0, 4).map((service, i) => (
                <div 
                  key={i}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* About Section */}
<section className="py-16 lg:py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Text Content */}
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
          <Award size={16} className="mr-2" />
          Industry Leader Since 2016
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Your Trusted Technology Partner
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          We provide innovative IT solutions that drive business growth and digital transformation across industries. Our expertise ensures reliability, efficiency, and measurable results.
        </p>

        {/* Features List */}
        <div className="space-y-3">
          {[
            "Enterprise-grade solutions tailored to your needs",
            "Experienced team of certified developers and consultants",
            "Proven track record with 500+ successful implementations",
            "Comprehensive 24/7 support and maintenance services",
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-700 text-base sm:text-lg">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Learn More About Us
            <ChevronRight size={18} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Image Content */}
      <div className="relative w-full lg:w-auto h-80 sm:h-96 lg:h-[28rem]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-3 lg:rotate-6"></div>
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Professional team collaboration"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

    </div>
  </div>
</section>

{/* service section */}

<section className="py-16 lg:py-28 bg-gradient-to-b from-blue-50 via-blue-100 to-gray-100"
  >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Comprehensive Technology Solutions
      </h2>
      <p className="py-10 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center">
        From custom development to enterprise solutions, we provide end-to-end technology services that transform your business operations.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full justify-items-center">
      {services.map((service, i) => (
        <div
          key={i}
          className="group flex flex-col h-full bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2"
        >
          {/* Icon */}
          <div className="mb-6 text-blue-600 text-4xl sm:text-5xl flex justify-center">
            {service.icon}
          </div>

          {/* Service Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-center">
            {service.desc}
          </p>

          {/* Features */}
          <ul className="mt-auto space-y-2">
            {service.features.map((feature, j) => (
              <li key={j} className="flex items-center text-sm sm:text-base text-gray-500">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Products Section */}
<section className="py-20 lg:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

    {/* Header */}
    <div className="text-center mb-20 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Solutions We Offer
      </h2>
      <p className="py-10 text-lg sm:text-xl text-gray-600">
        Accelerate your digital transformation with our proven, industry-specific software products designed to scale with your business.
      </p>
    </div>

    {/* Products Grid */}
    <div className="grid gap-10 w-full justify-center"
         style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      {products.map((product, i) => (
        <div
          key={i}
          className="flex flex-col bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 w-full"
        >
          {/* Icon */}
          <div className="mb-6 flex justify-center text-5xl sm:text-6xl text-blue-600">
            {product.icon}
          </div>

          {/* Product Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 text-center flex-grow leading-relaxed">
            {product.desc}
          </p>

          {/* Price & Features */}
          <div className="mb-6 text-center">
            {product.price && (
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
                {product.price}
              </div>
            )}
            <ul className="space-y-2">
              {product.features.map((feature, j) => (
                <li key={j} className="flex items-center justify-center text-sm sm:text-base text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-20 lg:py-32 text-center relative overflow-hidden">
  {/* Background */}
  <div 
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.85) 0%, rgba(147,51,234,0.85) 100%), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  />

  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

    {/* Header */}
    <div className="mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-4">
        <Star size={16} className="mr-2" />
        Client Success Stories
      </div>
      <h2 className="py-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
        What Our Clients Say
      </h2>
    </div>

    {/* Testimonial Card */}
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-lg flex flex-col items-center text-center max-w-2xl w-full transition-all duration-300 hover:scale-[1.02]">
      
      {/* Rating */}
      <div className="flex justify-center mb-6">
        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 w-6 h-6" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-medium">
        "{testimonials[currentTestimonial].text}"
      </blockquote>

      {/* Client Info */}
      <div className="space-y-1">
        <div className="font-bold text-xl sm:text-2xl text-white">
          {testimonials[currentTestimonial].name}
        </div>
        <div className="text-blue-200 font-medium sm:text-lg">
          {testimonials[currentTestimonial].role}
        </div>
      </div>
    </div>

    {/* Navigation Dots */}
    <div className="py-10 flex justify-center space-x-5 mt-10">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentTestimonial(i)}
          className={`w-4 h-4 rounded-full transition-all duration-200 ${
            i === currentTestimonial 
              ? "bg-white scale-125 shadow-lg" 
              : "bg-white/40 hover:bg-white/60"
          }`}
          aria-label={`View testimonial ${i + 1}`}
        />
      ))}
    </div>
  </div>
</section>

    </main>
  );
};

export default Home;