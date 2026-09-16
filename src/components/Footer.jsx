import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
              BizBooster
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fueling Limitless Growth through expert IT, Financial, and Business Consulting services across global markets.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/company/bizbosster/about/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/it" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/financial" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Financial Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/business" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Chintamani, Chikkaballapur, Karnataka – 563125</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>KR Puram, Bangalore – 560036</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-teal-400" />
                <a href="mailto:info@bizbooster.com" className="hover:text-teal-400 transition-colors">
                  info@bizbooster.in
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+91 9738030593</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BizBooster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
