
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  History, GraduationCap, Users, BookOpen,
  CreditCard, Calendar, Clock, ShoppingBag,
  ArrowRight, CheckCircle, Award, UserPlus, ChevronRight
} from 'lucide-react';
import { SafeImage } from '../App';

const HERO_IMAGES = [
  "/assets/school_images/1.JPG",
  "/assets/school_images/DSC06529 - Copy.JPG",
  "/assets/school_images/DSC06541 - Copy.JPG",
  "/assets/school_images/DSC06554 - Copy.JPG",
  "/assets/school_images/DSC06557 - Copy.JPG",
  "/assets/school_images/DSC06572 - Copy.JPG"
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/10 group">
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <SafeImage
            src={img}
            alt={`School Campus ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/40 to-transparent"></div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-gold w-8' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickLinkCard = ({ icon: Icon, title, desc, link }: any) => (
  <Link to={link} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 hover:border-brand-gold/30">
    <div className="w-14 h-14 bg-brand-soft rounded-2xl flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="font-bold text-brand-teal text-xl mb-3 font-display">{title}</h3>
    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{desc}</p>
    <span className="text-brand-gold font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
      Learn More <ChevronRight size={18} className="ml-1" />
    </span>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[700px] py-20 flex items-center bg-brand-teal overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-lightTeal/20 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
                <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase">Academic Excellence Since 1956</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] font-display">
                Iqra Private School <br /> <span className="text-brand-gold">Rooted in Values</span>
              </h1>
              <p className="text-xl text-teal-50/80 mb-10 leading-relaxed max-w-xl font-medium">
                A community-driven, non-profit institution offering English-medium education with FBISE & upcoming Cambridge IGCSE tracks in the Kingdom of Bahrain.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/admissions" className="bg-brand-gold text-brand-teal px-10 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition-all text-center shadow-lg hover:shadow-brand-gold/20 active:scale-95 text-lg">
                  Enroll Your Child
                </Link>
                <Link to="/info" className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-center text-lg">
                  Fees Structure
                </Link>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="relative">
              <HeroCarousel />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[32px] shadow-2xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-teal text-white rounded-2xl flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-brand-teal font-black text-xl font-display">68 Years</p>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Of Trusted Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10 aspect-[4/5]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=2070&auto=format&fit=crop"
                  alt="Student Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 rounded-[32px] shadow-2xl z-20 hidden md:block border-[12px] border-white">
                <p className="text-5xl font-black text-brand-teal mb-1 font-display leading-none">2k+</p>
                <p className="text-brand-teal font-bold uppercase tracking-widest text-[10px]">Future Leaders Enrolled</p>
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-teal/5 rounded-full -z-0"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block p-3 bg-brand-soft text-brand-teal rounded-2xl mb-6">
                <History size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-8 font-display leading-tight">
                Our Enduring <span className="text-brand-gold">Heritage</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  Iqra Private School stands as a beacon of academic excellence in the Gulf, established in March 1956 to serve the growing needs of the community in Bahrain.
                </p>
                <p>
                  Managed by a non-profit Board of Trustees, we are dedicated to providing holistic, affordable, and high-quality education. Our mission is to nurture students with academic brilliance and robust moral values.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['English-Medium Instruction', 'FBISE & IGCSE Curriculums', 'Values-Based Learning', 'Community-Driven Model'].map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-4 bg-brand-soft/50 rounded-2xl border border-brand-teal/5">
                    <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-bold text-brand-teal text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-28 bg-brand-soft/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-brand-teal mb-4 font-display">School Resources</h2>
              <p className="text-gray-500 text-lg">Centralized access to information for parents and students.</p>
            </div>
            <Link to="/contact" className="text-brand-teal font-bold flex items-center group">
              View All Resources <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <QuickLinkCard
              icon={UserPlus}
              title="Admissions"
              desc="Step-by-step guidance for new registrations and transfers."
              link="/admissions"
            />
            <QuickLinkCard
              icon={CreditCard}
              title="Fees Structure"
              desc="Details on our community-focused and affordable fee model."
              link="/admissions"
            />
            <QuickLinkCard
              icon={Clock}
              title="Timings"
              desc="Daily schedules for all school sections and divisions."
              link="/info"
            />
            <QuickLinkCard
              icon={BookOpen}
              title="Syllabus"
              desc="Access curriculum planners for all academic grades."
              link="/academics"
            />
            <QuickLinkCard
              icon={Calendar}
              title="Calendar"
              desc="Stay updated with exams, holidays, and school events."
              link="/info"
            />
            <QuickLinkCard
              icon={ShoppingBag}
              title="Bookstore"
              desc="Online purchase for stationery and textbooks."
              link="/store"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-brand-teal mb-6 font-display">Give Your Child the Gift of Excellence</h2>
            <p className="text-brand-teal text-lg font-medium opacity-80 leading-relaxed">
              Join Iqra Private School and become part of a holistic educational journey grounded in character and knowledge.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/admissions" className="bg-brand-teal text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-lightTeal transition-all shadow-xl text-center text-lg whitespace-nowrap">
              Start Application
            </Link>
            <Link to="/contact" className="bg-white text-brand-teal px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-md text-center text-lg whitespace-nowrap">
              Visit Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
