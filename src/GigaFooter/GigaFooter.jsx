import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronUp } from 'lucide-react';

const ProfessionalFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLinks = [
    { name: 'About Company', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Leadership Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'News & Press', href: '#news' }
  ];

  const solutionsLinks = [
    { name: 'Enterprise Solutions', href: '#enterprise' },
    { name: 'Cloud Services', href: '#cloud' },
    { name: 'Digital Transformation', href: '#digital' },
    { name: 'IT Consulting', href: '#consulting' },
    { name: 'System Integration', href: '#integration' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#help' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Technical Support', href: '#support' },
    { name: 'Community Forum', href: '#forum' },
    { name: 'API Reference', href: '#api' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR Compliance', href: '#gdpr' }
  ];
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/GigaErpSoftwareNepal', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: 'https://www.facebook.com/GigaErpSoftwareNepal', color: 'hover:text-sky-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/gigainfosoft/about/', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.facebook.com/GigaErpSoftwareNepal', color: 'hover:text-red-500' }
  ];

  return (
    <>
      {/* Professional Footer */}
      <footer className="bg-[#37393F] from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
  {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 pt-16 pb-8">
          <div className="container mx-auto px-6">
            
            {/* Top Section - Company Info */}
            <div className="mb-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">G</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        Giga Infosoft
                      </h2>
                      <p className="text-blue-300 text-sm font-medium">Technology Solutions</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                    Empowering businesses through innovative technology solutions. 
                    We deliver cutting-edge software and digital transformation services 
                    that drive growth and efficiency.
                  </p>

                  {/* Social Media Links */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            className={`w-11 h-11 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-600 ${social.color} transition-all duration-300 hover:scale-110`}
                            aria-label={social.name}
                          >
                            <IconComponent size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="lg:pl-12">
                  <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Our Office</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Kathmandu, Bagmati Province<br />
                          Nepal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone Numbers</h4>
                        <div className="space-y-1">
                          <p className="text-slate-300 text-sm">+977 9840073584</p>
                          <p className="text-slate-300 text-sm">+977 9851341127</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email Address</h4>
                        <p className="text-slate-300 text-sm">info@gigainfosoft.com.np</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links Grid */}
            <div className="border-t border-slate-700 pt-12 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Company */}
                <div>
                  <h3 className="text-white font-bold mb-5 text-lg">Company</h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="text-white font-bold mb-5 text-lg">Solutions</h3>
                  <ul className="space-y-3">
                    {solutionsLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="text-white font-bold mb-5 text-lg">Support</h3>
                  <ul className="space-y-3">
                    {supportLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                  <h3 className="text-white font-bold mb-5 text-lg">Stay Updated</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Subscribe to our newsletter for the latest updates and insights.
                  </p>
                  <div className="space-y-3">
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-slate-600 transition-colors"
                      />
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">
                      No spam, unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="border-t border-slate-700 pt-8 mb-8">
              <div className="flex flex-wrap justify-center gap-6">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="bg-slate-950 border-t border-slate-800 relative z-10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
                <p className="text-slate-400 text-sm">
                  © 2025 Giga Infosoft Pvt. Ltd. All rights reserved.
                </p>
                <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
                <p className="text-slate-500 text-sm">
                  Proudly developed by <span className="text-slate-300 font-medium">Ayush</span>
                </p>
              </div>
              </div>
              </div>
              </div>
              

      </footer>
    </>
  );
};

export default ProfessionalFooter;