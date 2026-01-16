
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Phone, Mail, MapPin,
  ChevronRight, BookOpen, UserPlus,
  CreditCard, Calendar, Clock, Download,
  GraduationCap, Users, History, Award,
  ShoppingBag, Facebook, Youtube, Instagram, ArrowRight
} from 'lucide-react';

// Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import OnlineBookStore from './pages/OnlineBookStore';
import PracticalInfo from './pages/PracticalInfo';
import Contact from './pages/Contact';

// This resolves to public/assets/logo.png in standard web servers
export const LOGO_URL = "/assets/logo.png";

export const SafeImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 p-4 ${className}`}>
        <img
          src={LOGO_URL}
          alt="School Logo Placeholder"
          className="opacity-20 grayscale scale-75 object-contain max-h-[60%] max-w-[60%]"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Online Store', path: '/store' },
    { name: 'Info', path: '/info' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group transition-transform hover:scale-105">
              <img
                src={LOGO_URL}
                alt="Iqra Private School Logo"
                className="h-16 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-text hidden flex flex-col ml-3">
                <span className="text-brand-teal text-xl font-bold font-display leading-tight tracking-tight">IQRA PRIVATE SCHOOL</span>
                <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest">Excellence Since 1956</span>
              </div>
            </Link>
          </div>

          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-sm font-bold tracking-tight transition-all duration-300 group
                  ${location.pathname === link.path ? 'text-brand-teal' : 'text-gray-500 hover:text-brand-teal'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300
                  ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-brand-gold text-brand-teal px-8 py-3 rounded-2xl font-black text-sm hover:bg-yellow-500 transition-all shadow-lg active:scale-95 animate-scale-in delay-500 uppercase tracking-widest border border-brand-teal/5"
            >
              Apply Now
            </Link>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-teal p-2 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold ${location.pathname === link.path ? 'bg-brand-teal text-white' : 'text-gray-700 hover:bg-brand-soft'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-gold text-brand-teal px-4 py-4 rounded-xl font-bold text-lg"
              >
                APPLY FOR ADMISSION
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <Link to="/" className="flex items-center group transition-transform hover:scale-105 origin-left">
              <img
                src={LOGO_URL}
                alt="Iqra Logo"
                className="h-20 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-text-footer')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-text-footer hidden flex flex-col ml-3">
                <span className="text-white text-xl font-bold font-display leading-tight tracking-tight">IQRA PRIVATE SCHOOL</span>
                <span className="text-teal-300 text-[10px] font-semibold uppercase tracking-widest">Excellence Since 1956</span>
              </div>
            </Link>
            <p className="text-teal-50/70 text-sm leading-relaxed max-w-xs">
              Providing affordable, high-quality, values-based education in the Heart of Bahrain for over 68 years.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-gold hover:text-brand-teal transition-all transform hover:-translate-y-1"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-gold hover:text-brand-teal transition-all transform hover:-translate-y-1"><Youtube size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-gold hover:text-brand-teal transition-all transform hover:-translate-y-1"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="animate-fade-in-up delay-100">
            <h4 className="text-lg font-bold mb-8 text-brand-gold font-display tracking-tight">Academic Links</h4>
            <ul className="space-y-4 text-sm text-teal-50/80">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors flex items-center hover:translate-x-2 transition-transform"><ChevronRight size={14} className="mr-2" /> Our Journey</Link></li>
              <li><Link to="/academics" className="hover:text-brand-gold transition-colors flex items-center hover:translate-x-2 transition-transform"><ChevronRight size={14} className="mr-2" /> Curriculum Tracks</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-gold transition-colors flex items-center hover:translate-x-2 transition-transform"><ChevronRight size={14} className="mr-2" /> Admissions Portal</Link></li>
              <li><Link to="/info" className="hover:text-brand-gold transition-colors flex items-center hover:translate-x-2 transition-transform"><ChevronRight size={14} className="mr-2" /> Latest Circulars</Link></li>
              <li><Link to="/store" className="hover:text-brand-gold transition-colors flex items-center hover:translate-x-2 transition-transform"><ChevronRight size={14} className="mr-2" /> Bookstore</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h4 className="text-lg font-bold mb-8 text-brand-gold font-display tracking-tight">Contact Information</h4>
            <ul className="space-y-5 text-sm text-teal-50/80">
              <li className="flex items-start group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-teal transition-colors">
                  <MapPin size={20} />
                </div>
                <span>Building 214, Road 4111, Block 841, <br />Isa Town, Bahrain</span>
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-teal transition-colors">
                  <Phone size={20} />
                </div>
                <span>+973 1768 7922</span>
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-teal transition-colors">
                  <Mail size={20} />
                </div>
                <span>info@iqraprivateschool.com</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-300">
            <h4 className="text-lg font-bold mb-8 text-brand-gold font-display tracking-tight">Newsletter</h4>
            <p className="text-sm text-teal-50/70 mb-6">Stay informed about academic events and admissions.</p>
            <div className="flex bg-white/5 rounded-2xl p-1 focus-within:ring-2 ring-brand-gold transition-all">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none px-4 py-3 w-full text-sm focus:outline-none placeholder:text-teal-100/30"
              />
              <button className="bg-brand-gold text-brand-teal px-4 py-3 rounded-xl hover:bg-yellow-500 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-teal-100/40 gap-4 text-center md:text-left animate-fade-in delay-500">
          <p>&copy; {new Date().getFullYear()} Iqra Private School. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-brand-soft flex flex-col selection:bg-brand-gold/30">
        <Navbar />
        <main className="flex-grow animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/store" element={<OnlineBookStore />} />
            <Route path="/info" element={<PracticalInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
