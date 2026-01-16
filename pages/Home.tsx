
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  History, GraduationCap, Users, BookOpen,
  CreditCard, Calendar, Clock, ShoppingBag,
  ArrowRight, CheckCircle, Award, UserPlus, ChevronRight
} from 'lucide-react';
import { SafeImage } from '../App';

const HERO_IMAGES = [
  "/assets/school_images/1.webp",
  "/assets/school_images/2.webp",
  "/assets/school_images/3.webp",
  "/assets/school_images/4.webp",
  "/assets/school_images/5.webp",
  "/assets/school_images/6.webp"
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/5 group animate-scale-in">
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
        >
          <SafeImage
            src={img}
            alt={`School Campus ${idx + 1}`}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${idx === currentIndex ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/60 via-transparent to-black/20"></div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-brand-gold w-10 shadow-lg shadow-brand-gold/50' : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickLinkCard = ({ icon: Icon, title, desc, link, index }: any) => (
  <Link
    to={link}
    className="bg-white p-8 rounded-[32px] shadow-sm premium-card-hover group border border-gray-100 animate-fade-in-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 shadow-inner">
      <Icon size={32} />
    </div>
    <h3 className="font-bold text-brand-teal text-2xl mb-3 font-display tracking-tight">{title}</h3>
    <p className="text-gray-500 text-base mb-6 leading-relaxed">{desc}</p>
    <div className="flex items-center text-brand-gold font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
      <span>Discover</span>
      <ArrowRight size={16} className="ml-2" />
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-brand-soft">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-24 flex items-center bg-brand-teal overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-lightTeal/30 -skew-x-12 translate-x-1/4 animate-fade-in duration-2000"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] animate-pulse-soft delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 animate-fade-in shadow-xl">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-teal-50">Academic Excellence Since 1956</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-black leading-[1] font-display">
                  <span className="block animate-text-reveal">Iqra</span>
                  <span className="block mt-2 animate-text-reveal delay-200">Private School</span>
                </h1>
                <p className="text-3xl md:text-4xl font-bold font-display text-gradient-gold animate-text-reveal delay-500 py-2">
                  Rooted in Values
                </p>
              </div>

              <p className="text-xl text-teal-50/80 leading-relaxed max-w-xl font-medium animate-fade-in delay-500">
                A community-driven, non-profit institution offering English-medium education with FBISE & upcoming Cambridge IGCSE tracks in the Kingdom of Bahrain.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-700">
                <Link to="/admissions" className="bg-brand-gold text-brand-teal px-12 py-5 rounded-2xl font-bold hover:bg-yellow-500 transition-all text-center shadow-2xl shadow-brand-gold/20 active:scale-95 text-lg group">
                  Enroll Your Child <ChevronRight className="inline-block ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/info" className="glass-panel text-white px-12 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-center text-lg border border-white/20">
                  Fees Structure
                </Link>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <HeroCarousel />
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl hidden xl:block animate-float border border-brand-teal/5">
                  <div className="flex items-center space-x-5">
                    <div className="w-16 h-16 bg-brand-teal text-brand-gold rounded-3xl flex items-center justify-center shadow-lg transform rotate-3">
                      <Award size={32} />
                    </div>
                    <div>
                      <p className="text-brand-teal font-black text-3xl font-display leading-none">68 Years</p>
                      <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mt-1">Of Trusted Heritage</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] -z-10 rounded-full scale-110 animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-soft rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 relative group animate-fade-in-up">
              <div className="rounded-[48px] overflow-hidden shadow-2xl relative z-10 aspect-[4/5] border-[12px] border-brand-soft">
                <SafeImage
                  src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=2070&auto=format&fit=crop"
                  alt="Student Excellence"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-brand-gold p-12 rounded-[40px] shadow-2xl z-20 hidden md:block border-[12px] border-white animate-scale-in delay-500">
                <p className="text-6xl font-black text-brand-teal mb-2 font-display leading-none">2k+</p>
                <p className="text-brand-teal font-bold uppercase tracking-widest text-[11px]">Enrolled Successes</p>
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl animate-pulse-soft"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-10 animate-slide-in-right">
              <div className="space-y-6">
                <div className="inline-block p-4 bg-brand-soft text-brand-teal rounded-3xl shadow-sm italic font-semibold">
                  Serving Since 1956
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-brand-teal font-display leading-[1.1]">
                  Our Enduring <span className="text-brand-gold block lg:inline">Legacy</span>
                </h2>
              </div>

              <div className="space-y-8 text-gray-600 text-xl leading-relaxed font-medium">
                <p>
                  Iqra Private School stands as a beacon of academic excellence in the Gulf, established in March 1956 to serve the community's educational vision.
                </p>
                <p className="text-gray-500 text-lg italic border-l-4 border-brand-gold pl-6 py-2">
                  "Our mission is to nurture students with academic brilliance and robust moral values, preparing them for a global future."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { text: 'English-Medium', icon: '🌍' },
                  { text: 'FBISE & IGCSE', icon: '📜' },
                  { text: 'Values-Based', icon: '💎' },
                  { text: 'Non-Profit', icon: '🤝' }
                ].map((item, idx) => (
                  <div key={item.text} className="flex items-center space-x-4 p-5 bg-brand-soft/80 rounded-[24px] border border-brand-teal/5 hover:border-brand-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-brand-teal text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-32 bg-brand-soft/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl animate-fade-in space-y-4">
              <h2 className="text-5xl font-bold text-brand-teal font-display tracking-tight">Essential Resources</h2>
              <p className="text-gray-500 text-xl font-medium">Everything parents and students need in one place.</p>
            </div>
            <Link to="/contact" className="text-brand-teal font-extrabold flex items-center group bg-white px-8 py-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              Explore All <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: UserPlus, title: "Admissions", desc: "Start your journey with our simplified enrollment process.", link: "/admissions" },
              { icon: CreditCard, title: "Fee Portal", desc: "Transparent and community-focused fee information.", link: "/admissions" },
              { icon: Clock, title: "School Hours", desc: "Detailed schedules for Primary and Secondary divisions.", link: "/info" },
              { icon: BookOpen, title: "Curriculum", desc: "Explore our FBISE and upcoming IGCSE academic tracks.", link: "/academics" },
              { icon: Calendar, title: "Academic Calendar", desc: "Key dates for exams, holidays, and school activities.", link: "/info" },
              { icon: ShoppingBag, title: "Resources Shop", desc: "Access stationaries, uniforms, and digital textbooks.", link: "/store" }
            ].map((card, idx) => (
              <QuickLinkCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                link={card.link}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 border-8 border-brand-teal rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border-8 border-brand-teal rounded-full translate-x-1/4 translate-y-1/4 animate-pulse-soft delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-16 relative z-10">
          <div className="max-w-2xl animate-slide-in-left space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-brand-teal font-display leading-[1.1]">Join Our Academic Family</h2>
            <p className="text-brand-teal text-xl font-bold opacity-70 leading-relaxed max-w-xl">
              Equip your child with a world-class education grounded in ethical leadership and academic rigor.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-slide-in-right">
            <Link to="/admissions" className="bg-brand-teal text-white px-14 py-6 rounded-[24px] font-black hover:bg-brand-lightTeal transition-all shadow-2xl text-center text-xl whitespace-nowrap active:scale-95 transform hover:-translate-y-1">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-white text-brand-teal px-14 py-6 rounded-[24px] font-black hover:bg-gray-50 transition-all shadow-xl text-center text-xl whitespace-nowrap active:scale-95 transform hover:-translate-y-1 border-2 border-brand-teal/5">
              Tour Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
