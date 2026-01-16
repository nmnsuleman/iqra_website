
import React from 'react';
import { History, Target, Users, ShieldCheck, Heart } from 'lucide-react';
import { SafeImage } from '../App';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Visual Header */}
      <div className="relative h-[450px] bg-brand-teal flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          </Canvas>
        </div>
        <SafeImage
          src="https://images.unsplash.com/photo-1544717297-fa15c3902727?q=80&w=2070&auto=format&fit=crop"
          alt="School History"
          className="absolute inset-0 w-full h-full object-cover opacity-30 animate-image-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/60 to-brand-teal/90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-display animate-text-reveal">Our Journey</h1>
          <div className="inline-block h-1.5 w-24 bg-brand-gold mb-6 animate-scale-in"></div>
          <p className="text-brand-gold text-2xl font-bold tracking-[0.2em] uppercase animate-fade-in delay-200">Excellence Since 1956</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center text-brand-gold font-black text-xs uppercase tracking-widest mb-6 bg-brand-soft px-4 py-2 rounded-full">
              <History size={16} className="mr-2" /> Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-10 leading-[1.1] font-display">
              Preserving Values, <br /><span className="text-brand-gold italic">Building Futures</span>
            </h2>
            <div className="space-y-8 text-gray-600 leading-relaxed text-xl">
              <p>
                Established in March 1956, <strong>Iqra Private School</strong> was founded by visionary members of the community to serve the growing educational needs in the Kingdom of Bahrain. It stands as one of the pioneering institutions of its kind in the Gulf region.
              </p>
              <p>
                For over six decades, we have evolved from a local community initiative into a premier educational hub in Isa Town. We are more than just a school; we are an institution that has shaped thousands of successful careers and leaders globally.
              </p>
              <p>
                Our modern chapter focuses on digital innovation and globally-recognized curriculum choices, including FBISE and the upcoming IGCSE tracks, while maintaining the non-profit, community-oriented spirit that has been our cornerstone since inception.
              </p>
            </div>
          </div>
          <div className="bg-brand-soft p-12 rounded-[40px] border border-gray-100 shadow-xl animate-slide-in-right">
            <h3 className="text-2xl font-bold text-brand-teal mb-8 font-display">Historical Milestones</h3>
            <div className="space-y-8">
              {[
                { year: '1956', event: 'Iqra Private School founded in Bahrain to provide community-focused education.' },
                { year: '1960s', event: 'Expansion to primary and middle levels with English-medium instruction.' },
                { year: '1980s', event: 'Relocation to our prominent, purpose-built Isa Town campus.' },
                { year: '2024', event: 'Strategic rebranding and infrastructure upgrades to reinforce global academic standards.' },
                { year: '2025', event: 'Introduction of Cambridge IGCSE track for senior students.' }
              ].map((milestone, i) => (
                <div key={i} className="flex gap-8 group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="font-black text-brand-gold shrink-0 text-2xl font-display group-hover:scale-110 transition-transform">{milestone.year}</span>
                  <p className="text-base text-gray-500 font-medium leading-relaxed border-l-2 border-gray-200 pl-6 group-hover:border-brand-gold transition-colors">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 bg-brand-soft/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold text-brand-teal font-display tracking-tight">Our Philosophy</h2>
            <div className="h-1.5 w-20 bg-brand-gold mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 premium-card-hover animate-fade-in-up">
              <div className="w-20 h-20 bg-brand-teal text-white rounded-[24px] flex items-center justify-center mb-10 shadow-lg shadow-brand-teal/20 transform rotate-3">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-bold text-brand-teal mb-8 font-display">Our Vision</h3>
              <p className="text-gray-500 italic mb-10 leading-relaxed text-xl">
                "Our vision is to provide a caring environment where every child is valued and supported to reach their full potential."
              </p>
              <ul className="space-y-6">
                {[
                  'Nurturing critical and creative thinkers.',
                  'Developing resilient and lifelong learners.',
                  'Fostering respectful and compassionate individuals.',
                  'Empowering global citizens with strong moral values.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base text-gray-700 font-bold group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="p-1 bg-brand-soft rounded-lg mr-4 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <ShieldCheck size={20} className="shrink-0" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-sm border-t-8 border-brand-gold border-x border-b border-gray-100 premium-card-hover animate-fade-in-up delay-[200ms]">
              <div className="w-20 h-20 bg-brand-gold text-brand-teal rounded-[24px] flex items-center justify-center mb-10 shadow-lg shadow-brand-gold/20 transform -rotate-3">
                <Heart size={40} />
              </div>
              <h3 className="text-3xl font-bold text-brand-teal mb-8 font-display">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-xl font-medium">
                To educate and support students to become lifelong learners, developing academic and personal excellence within a respectful community. We are dedicated to providing a curriculum that is relevant, challenging, and inclusive of all backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-brand-teal mb-6 font-display tracking-tight">Leadership</h2>
          <p className="text-gray-500 text-xl font-medium">Committed to steering the school towards global horizons.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { role: 'Board of Trustees', name: 'Governing Body', desc: 'Overseeing school strategy, financial health, and community alignment.' },
            { role: 'Principal', name: 'Academic Head', desc: 'Leading pedagogical excellence and student development.' },
            { role: 'Vice Principals', name: 'Section Heads', desc: 'Managing Early Years, Primary, Middle, and Senior sections.' }
          ].map((leader, i) => (
            <div key={i} className="text-center p-12 bg-white rounded-[40px] border border-gray-100 premium-card-hover group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-32 h-32 bg-brand-soft rounded-full mx-auto mb-10 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                <SafeImage src="" alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-brand-gold font-black text-xs uppercase tracking-[0.2em] mb-4">{leader.role}</p>
              <h4 className="text-2xl font-bold text-brand-teal mb-6 font-display">{leader.name}</h4>
              <p className="text-base text-gray-500 leading-relaxed font-medium">{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
