import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'For Job Seekers',
      links: [
        { name: 'Find Jobs', href: '#' },
        { name: 'Career Guidance', href: '#' },
        { name: 'Skills Training', href: '#' },
        { name: 'CV Builder', href: '#' },
        { name: 'Salary Guide', href: '#' }
      ]
    },
    {
      title: 'For Employers',
      links: [
        { name: 'Post Jobs', href: '#' },
        { name: 'Find Talent', href: '#' },
        { name: 'Market Insights', href: '#' },
        { name: 'Hiring Tools', href: '#' },
        { name: 'Employer Branding', href: '#' }
      ]
    },
    {
      title: 'Data & Analytics',
      links: [
        { name: 'Labour Market Data', href: '#' },
        { name: 'Employment Trends', href: '#' },
        { name: 'Skills Gap Analysis', href: '#' },
        { name: 'Research Reports', href: '#' },
        { name: 'Policy Insights', href: '#' }
      ]
    },
    {
      title: 'About NLMIS',
      links: [
        { name: 'About NEP', href: '#' },
        { name: 'Our Mission', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'News & Updates', href: '#' },
        { name: 'Contact Us', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/nigeria.svg" 
                  alt="Nigeria Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold">NGPS</div>
                <div className="text-xs text-gray-400 leading-tight">Nigerian Global Positioning System</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Nigeria's premier global positioning platform connecting talent with opportunity and driving economic growth through comprehensive market intelligence and positioning services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <div className="font-medium">Federal Ministry of Labour and Employment</div>
                <div className="text-gray-400 text-sm">Abuja, Federal Capital Territory</div>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <div className="font-medium">+234 9 123 4567</div>
                <div className="text-gray-400 text-sm">Support Hotline</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <div className="font-medium">info@nlmis.gov.ng</div>
                <div className="text-gray-400 text-sm">General Inquiries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Nigerian Global Positioning System. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;