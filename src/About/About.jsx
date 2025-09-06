import React, { useState, useEffect } from 'react';
import { Users, Shield, Mail, Globe, Code, BookOpen, Award, ArrowRight, CheckCircle, Star, Building2, Target, Eye } from 'lucide-react';
import Clients from '../Components/Clients';
import sandip from "../assets/Team/sandip.jpg";
import saurav from "../assets/Team/saurav.jpg";
import yogesh from "../assets/Team/yogesh.jpg";
import suman from "../assets/Team/suman.jpg";
import santosh from "../assets/Team/santosh.jpg";
import logo from '../assets/logo.jpg';


const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
const teamMembers = [
  {
    name: "Saurav Bhattarai",
    position: "Co-Founder",
    image: saurav,
    description: "Visionary leader with 10+ years in educational technology"
  },
  {
    name: "Yogesh Sapkota",
    position: "Senior Developer",
    image: yogesh,
    description: "Full-stack expert specializing in scalable solutions"
  },
  {
    name: "Suman Paudyal",
    position: "Senior Developer",
    image: suman,
    description: "Backend architect with expertise in system optimization"
  },
  {
    name: "Santosh Pandey",
    position: "Software Implementation Specialist",
    image: santosh,
    description: "Expert in seamless software deployment and training"
  },
  {
    name: "Sandip Sharma",
    position: "Developer",
    image: sandip,
    description: "Frontend and backend developer focusing on clean, efficient code"
  }
];



  const stats = [
    { number: "50+", label: "Educational Institutions", icon: Building2 },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "100k+", label: "Students Served", icon: Users },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  const features = [
    {
      icon: Code,
      title: "Advanced Technology",
      description: "Cutting-edge solutions built with modern frameworks and best practices",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for seamless user experience across all devices",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Cloud-native architecture supporting institutions of all sizes worldwide",
      gradient: "from-orange-500 to-red-500"
    }
  ];



  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 opacity-40">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

{/* Hero Section */}
<section
  id="hero"
  className="relative z-10 h-[500px] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
>
  <div className="max-w-7xl mx-auto text-center">
    {/* Fade-up container */}
    <div
      className={`transform transition-all duration-1000 ${
        isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Logo with professional bounce */}
      <div className="inline-flex items-center justify-center mb-8 relative">
        <img
          src={logo}
          alt="Company Logo"
          className="w-24 h-24 lg:w-32 lg:h-32 object-contain drop-shadow-2xl animate-smooth-bounce"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold bg-white bg-clip-text text-transparent mb-6 leading-tight">
        Giga <span className="text-blue-300">Infosoft</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-amber-50 max-w-4xl mx-auto mb-8 leading-relaxed">
        Transforming education through innovative technology solutions that
        empower institutions worldwide
      </p>
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
    <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
  </div>
     <div className="absolute top-[-100px] left-[-100px] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>


</section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                  isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-700 ${isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center mb-8">
                <Target className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To revolutionize educational management through innovative technology solutions that streamline operations, 
                enhance learning experiences, and foster better communication between all stakeholders in the education ecosystem.
              </p>
              <div className="space-y-4">
                {[
                  "Deliver cutting-edge educational software",
                  "Ensure seamless user experiences",
                  "Provide exceptional customer support",
                  "Foster innovation in education technology"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transform transition-all duration-700 delay-300 ${isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 mr-4" />
                    <h3 className="text-3xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-8">
                    To become the global leader in educational technology, empowering institutions worldwide 
                    with intelligent, scalable, and user-friendly solutions that transform the way education is delivered and managed.
                  </p>
                  <div className="bg-white/20 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold mb-4">Global Impact by 2030</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">1M+</div>
                        <div className="text-sm opacity-90">Students</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-sm opacity-90">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with deep understanding of educational needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-700 delay-${index * 100} ${
                  isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 shadow-lg`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giga ERP Showcase */}
      <section id="erp" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Giga ERP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The comprehensive educational management system that transforms how institutions operate
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-700 ${isVisible.erp ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-8">
                {[
                  { title: "Student Management", desc: "Complete student lifecycle management from admission to graduation" },
                  { title: "Academic Excellence", desc: "Advanced examination system with intelligent analytics and reporting" },
                  { title: "Financial Control", desc: "Integrated accounting and fee management with automated workflows" },
                  { title: "Communication Hub", desc: "Seamless interaction platform connecting parents, teachers, and students" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transform transition-all duration-700 delay-300 ${isVisible.erp ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold text-gray-900">Dashboard Preview</h4>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Students Enrolled</span>
                          <span className="font-bold text-blue-600">2,456</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Active Courses</span>
                          <span className="font-bold text-green-600">128</span>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Faculty Members</span>
                          <span className="font-bold text-purple-600">89</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg animate-float">
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Team Section */}
<section
  id="team"
  className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Meet Our Experts
      </h2>
      <p className="text-xl text-gray-600">
        The brilliant minds behind our innovative solutions
      </p>
    </div>

    {/* Custom 3x3 Centered Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {teamMembers.map((member, index) => (
        <div
          key={index}
          style={{
            transform: isVisible.team ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible.team ? 1 : 0,
            transition: `all 0.7s ease ${index * 0.15}s`,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "1.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: "all 0.5s ease",
            }}
            className="hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Avatar */}
            <div className="relative mb-6">
              <div
                style={{
                  width: "8rem",
                  height: "8rem",
                  margin: "0 auto",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Text */}
            <div style={{ textAlign: "center" }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    <Clients />

            
   

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;