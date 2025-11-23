import { motion } from "framer-motion";
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
    CheckCircle,
} from "lucide-react";
import soft3 from "../assets/ServicesImg/softdev/soft3.jpg";
import home from "../assets/home.avif";

const Home = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    // Fixed line – removed TypeScript syntax
    const [category, setCategory] = useState("school"); // "school" or "hr"

    const schoolERPTestimonials = [
        {
            school: "Ace Institute of Management",
            text: "Giga School ERP has made our fee and examination management effortless. Students can now pay fees online without any hassle, and the exam form application system has made the entire exam process smoother and more transparent. It’s been a great upgrade for both students and staff.",
            author: "NB Chhetri",
            role: "IT Officer",
            photo: "src/assets/demo.avif",
        },
        {
            school: "Uniglobe College",
            text: "We use Giga ERP for internal and external examinations, LMS, attendance, and even fee management. The system keeps everything connected—teachers upload assignments, students track attendance, and our admin team manages staff attendance and payroll, all in one place.",
            author: "Bishal Bist",
            role: "IT Engineer",
            photo: "src/assets/demo.avif",
        },
        {
            school: "LRI School",
            text: "Our school uses almost every feature of Giga School ERP. From student admission to examination, library, payroll, and attendance—it has unified our operations. It’s reliable, easy to use, and fits perfectly with our daily workflow.",
            author: "Deepak Joshi",
            role: "Chief Admin Officer",
            photo: "src/assets/demo.avif",
        },
        {
            school: "Gorkha School",
            text: "We rely on Giga School ERP for every part of our school operation. It keeps our academic, financial, and HR departments in sync. The support team is excellent, and the system keeps improving every year.",
            author: "K. Lama",
            role: "Principal",
            photo: "src/assets/demo.avif",
        },
        {
            school: "DAV School",
            text: "Giga ERP has simplified our fees and billing process. Parents can view due amounts and make payments on time, while our finance team saves hours of manual work. It’s efficient and very dependable.",
            author: "M. Singh",
            role: "Finance Officer",
            photo: "src/assets/demo.avif",
        },
    ];

    const hrTestimonials = [
        {
            company: "Deluxe Securities",
            text: "Giga HR has made payroll and HR management simple and fast. We can now process salaries, manage leaves, and track employee records without the usual paperwork. It’s accurate and saves a lot of time.",
            author: "Roshan Dahal",
            role: "General Manager",
            photo: "src/assets/demo.avif",
        },
        {
            company: "Birat Secuforce Pvt. Ltd.",
            text: "With Giga ERP, we handle accounting, inventory, HR, payroll, and attendance in one integrated system. It’s helped us maintain better control over our operations and made reporting much easier.",
            author: "Sudarshan Chaulagain",
            role: "Managing Director",
            photo: "src/assets/demo.avif",
        },
        {
            company: "Prabhu Group",
            text: "We use Giga HR for inventory, payroll, attendance, and HR management across multiple branches. The centralized system keeps everything transparent and accessible. It’s a powerful solution for a growing organization like ours.",
            author: "Nirmala Chaulagain",
            role: "HR Head",
            photo: "src/assets/demo.avif",
        },
    ];
        const coreValues = [
        {
            icon: "Lightbulb",
            title: "Innovation",
            description: "We don’t just adapt to change—we lead it. By developing cutting-edge, forward-thinking solutions, we push the boundaries of technology and set new industry benchmarks, ensuring our clients always stay ahead of the curve.",
            gradient: "from-yellow-500 to-orange-500",
        },
        {
            icon: "TrendingUp",
            title: "Sustainability",
            description: "Our solutions are designed with a long-term perspective, ensuring they deliver value not just today but for years to come. We prioritize efficiency, resource optimization, and environmentally conscious practices in everything we create.",
            gradient: "from-green-500 to-teal-500",
        },
        {
            icon: "Heart",
            title: "Customer Centricity",
            description: "Your success is our ultimate goal. Every solution we design is tailored to meet your unique needs and objectives, ensuring that your growth and satisfaction remain our top priorities.",
            gradient: "from-pink-500 to-rose-500",
        },
        {
            icon: "Award",
            title: "Excellence",
            description: "We are committed to delivering nothing but the best. From the smallest detail to the biggest project, we strive for excellence in everything we do, ensuring that our solutions exceed expectations every time.",
            gradient: "from-blue-500 to-indigo-500",
        },
    ];

    const activeList =
        category === "school" ? schoolERPTestimonials : hrTestimonials;

    // Rest of your data (stats, services, products) stays exactly the same...
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
            features: [
                "Full-stack development",
                "API integration",
                "Scalable architecture",
            ],
        },
        {
            name: "Web Applications",
            desc: "Modern, responsive web platforms with cutting-edge technology",
            icon: <Globe size={32} className="text-green-600" />,
            features: [
                "Progressive Web Apps",
                "Cloud deployment",
                "Real-time features",
            ],
        },
        {
            name: "Mobile Solutions",
            desc: "Native and cross-platform mobile applications",
            icon: <Smartphone size={32} className="text-purple-600" />,
            features: [
                "iOS & Android",
                "Cross-platform",
                "App store optimization",
            ],
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
            features: [
                "Student Management",
                "Grade Tracking",
                "Parent Portal",
                "Attendance System",
            ],
        },
        {
            name: "Giga Accounting",
            desc: "Advanced financial management with real-time analytics and automated reporting",
            icon: <Award size={40} className="text-green-600" />,
            features: [
                "Financial Reporting",
                "Tax Management",
                "Audit Trails",
                "Multi-currency",
            ],
        },
        {
            name: "Giga HRMS",
            desc: "Complete human resource management with payroll, attendance, and performance tracking",
            icon: <Shield size={40} className="text-purple-600" />,
            features: [
                "Payroll Management",
                "Performance Reviews",
                "Leave Management",
                "Recruitment",
            ],
        },
        {
            name: "Giga IMS",
            desc: "Smart inventory and procurement system with predictive analytics",
            icon: <Zap size={40} className="text-orange-600" />,
            features: [
                "Stock Tracking",
                "Supplier Management",
                "Order Automation",
                "Analytics",
            ],
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % activeList.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [activeList.length]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(
                135deg,
                rgba(15, 23, 42, 0.9) 0%,
                rgba(30, 58, 138, 0.8) 50%,
                rgba(15, 23, 42, 0.9) 100%
              ),
              url('${soft3}')
            `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="space-y-8 text-white"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30">
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
                                    We deliver enterprise-grade software
                                    solutions, web applications, and digital
                                    transformation services that drive
                                    measurable business growth.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="text-center lg:text-left"
                                    >
                                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-400 font-medium mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            {services.slice(0, 4).map((service, i) => (
                                <div
                                    key={i}
                                    className="group bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="font-bold text-white text-lg mb-2">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="py-16 lg:py-28 bg-gray-50"
            >
                <div className="relative w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
                                <Award size={16} className="mr-2" />
                                Industry Leader Since 2022
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Your Trusted Technology Partner
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                At Giga Infosoft, we don’t just provide
                                technology solutions; we create lasting
                                partnerships that empower organizations to
                                thrive in the long term. Our experienced team is
                                driven to deliver the best. We create custom
                                solutions that solve your biggest problems. Our
                                mission is simple: to use technology to help
                                businesses succeed and stand out in their
                                industries.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Enterprise-grade solutions tailored to your needs",
                                    "Experienced team of certified developers and consultants",
                                    "Proven track record with 500+ successful implementations",
                                    "Comprehensive 24/7 support and maintenance services",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start space-x-3"
                                    >
                                        <CheckCircle
                                            className="text-green-500 mt-1 flex-shrink-0"
                                            size={20}
                                        />
                                        <span className="text-gray-700 text-base sm:text-lg">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
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
                        <div className="relative w-full lg:w-auto h-80 sm:h-96 lg:h-[28rem]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-3 lg:rotate-6"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                                <img
                                    src={home}
                                    alt="Professional team collaboration"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="py-16 lg:py-28 bg-gradient-to-b from-blue-50 via-blue-100 to-gray-100 relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Comprehensive Technology Solutions
                        </h2>
                        <p className="py-10 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center">
                            From custom development to enterprise solutions, we
                            provide end-to-end technology services that
                            transform your business operations.
                        </p>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px]">
                            {services.map((service, i) => (
                                <div
                                    key={i}
                                    className="group flex flex-col h-full bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2"
                                >
                                    <div className="mb-6 text-blue-600 text-4xl sm:text-5xl flex justify-center">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-center">
                                        {service.desc}
                                    </p>
                                    <ul className="mt-auto space-y-2">
                                        {service.features.map((feature, j) => (
                                            <li
                                                key={j}
                                                className="flex items-center text-sm sm:text-base text-gray-500"
                                            >
                                                <CheckCircle
                                                    size={16}
                                                    className="text-green-500 mr-2 flex-shrink-0"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Products Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="py-20 lg:py-28 bg-white relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="text-center mb-20 max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Products We Offer
                        </h2>
                        <p className="py-10 text-lg sm:text-xl text-gray-600">
                            Accelerate your digital transformation with our
                            proven, industry-specific software products designed
                            to scale with your business.
                        </p>
                    </div>
                    <div className="grid gap-10 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                        {products.map((product, i) => (
                            <div
                                key={i}
                                className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-gray-200 transition-transform duration-300 hover:-translate-y-1 w-full max-w-sm"
                            >
                                <div className="mb-6 flex justify-center text-5xl sm:text-6xl text-blue-600">
                                    {product.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-6 text-center flex-grow leading-relaxed">
                                    {product.desc}
                                </p>
                                <ul className="space-y-2 text-center">
                                    {product.features.map((feature, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center justify-center text-sm sm:text-base text-gray-600"
                                        >
                                            <CheckCircle
                                                size={16}
                                                className="text-green-500 mr-2 flex-shrink-0"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

{/* TESTIMONIALS */}
<section className="relative py-32 text-white w-full overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.9), rgba(147,51,234,0.9)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <div className="relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    <h2 className="text-5xl font-extrabold text-center mb-10">
      Client Testimonials
    </h2>

    {/* Category Buttons */}
    <div className="flex justify-center gap-6 flex-wrap mb-16 py-10">
      <button
        onClick={() => { setCategory("school"); setCurrentTestimonial(0); }}
        className={`px-8 py-3 rounded-full font-medium transition ${
          category === "school"
            ? "bg-white text-gray-900"
            : "bg-white/20 hover:bg-white/30"
        }`}
      >
        School ERP
      </button>
      <button
        onClick={() => { setCategory("hr"); setCurrentTestimonial(0); }}
        className={`px-8 py-3 rounded-full font-medium transition ${
          category === "hr"
            ? "bg-white text-gray-900"
            : "bg-white/20 hover:bg-white/30"
        }`}
      >
        HR & Corporate
      </button>
    </div>

    {/* TESTIMONIAL CARDS – BIGGER GAP HERE */}
    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 mt-32 lg:mt-44">
      {/* ← THIS WAS mt-20 → NOW mt-32 (mobile) + mt-44 (desktop) = HUGE breathing room */}
      {[
        activeList[currentTestimonial],
        activeList[(currentTestimonial + 1) % activeList.length],
      ].map((testimonial, idx) => (
        <div
          key={idx}
          className="
            bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20
            p-10 max-w-md w-full
            h-96
            flex flex-col justify-between
            hover:scale-105 transition-transform
            overflow-hidden
          "
        >
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src={
                testimonial.photo ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=fff&color=6366f1`
              }
              alt={testimonial.author}
              className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-xl"
            />
          </div>

          {/* Quote */}
          <blockquote className="text-xl text-center italic flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-white/30">
            "{testimonial.text}"
          </blockquote>

          {/* Author Info */}
          <div className="text-center mt-6 space-y-1">
            <h4 className="font-bold text-lg">{testimonial.author}</h4>
            <p className="text-sm text-blue-200">{testimonial.role}</p>
            <p className="text-white/80 italic">
              {testimonial.school || testimonial.company}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Arrows */}
    <button
      onClick={() => setCurrentTestimonial((prev) => (prev - 1 + activeList.length) % activeList.length)}
      className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full text-4xl transition backdrop-blur-sm"
      aria-label="Previous testimonial"
    >
      ←
    </button>
    <button
      onClick={() => setCurrentTestimonial((prev) => (prev + 1) % activeList.length)}
      className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full text-4xl transition backdrop-blur-sm"
      aria-label="Next testimonial"
    >
      →
    </button>
  </div>
</section>
        </main>
    );
};

export default Home;
