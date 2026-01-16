
import React from 'react';
import { History, Target, Users, ShieldCheck, Heart } from 'lucide-react';
import { SafeImage } from '../App';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Visual Header */}
      <div className="relative h-96 bg-brand-teal flex items-center justify-center overflow-hidden">
        <SafeImage 
          src="https://images.unsplash.com/photo-1544717297-fa15c3902727?q=80&w=2070&auto=format&fit=crop" 
          alt="School History" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Our Journey</h1>
          <p className="text-brand-gold text-xl font-medium tracking-wide">Excellence Since 1956</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center text-brand-gold font-bold text-sm uppercase mb-4">
              <History size={18} className="mr-2" /> Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-8 leading-tight font-display">
              Preserving Values, <span className="text-brand-gold">Building Futures</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
          <div className="bg-brand-soft p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-teal mb-6 font-display">Historical Milestones</h3>
            <div className="space-y-6">
              {[
                { year: '1956', event: 'Iqra Private School founded in Bahrain to provide community-focused education.' },
                { year: '1960s', event: 'Expansion to primary and middle levels with English-medium instruction.' },
                { year: '1980s', event: 'Relocation to our prominent, purpose-built Isa Town campus.' },
                { year: '2024', event: 'Strategic rebranding and infrastructure upgrades to reinforce global academic standards.' },
                { year: '2025', event: 'Introduction of Cambridge IGCSE track for senior students.' }
              ].map((milestone, i) => (
                <div key={i} className="flex gap-6 border-b border-gray-100 pb-4 last:border-0">
                  <span className="font-black text-brand-gold shrink-0 text-lg font-display">{milestone.year}</span>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-teal font-display">Our Core Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-teal text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-teal mb-6 font-display">Our Vision</h3>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "Our vision is to provide a caring environment where every child is valued and supported to reach their full potential."
              </p>
              <ul className="space-y-3">
                {[
                   'Nurturing critical and creative thinkers.',
                   'Developing resilient and lifelong learners.',
                   'Fostering respectful and compassionate individuals.',
                   'Empowering global citizens with strong moral values.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                    <ShieldCheck size={18} className="mr-3 text-brand-teal shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border-t-8 border-brand-gold border-x border-b border-gray-100">
              <div className="w-16 h-16 bg-brand-gold text-brand-teal rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-teal mb-6 font-display">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To educate and support students to become lifelong learners, developing academic and personal excellence within a respectful community. We are dedicated to providing a curriculum that is relevant, challenging, and inclusive of all backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-teal mb-4 font-display">Leadership & Governance</h2>
          <p className="text-gray-500">Managed by a dedicated Board of Trustees committed to educational excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { role: 'Board of Trustees', name: 'Governing Body', desc: 'Overseeing school strategy, financial health, and community alignment.' },
            { role: 'Principal', name: 'Academic Head', desc: 'Leading pedagogical excellence and student development.' },
            { role: 'Vice Principals', name: 'Section Heads', desc: 'Managing Early Years, Primary, Middle, and Senior sections.' }
          ].map((leader, i) => (
            <div key={i} className="text-center p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-brand-soft rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                 <SafeImage src="" alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">{leader.role}</p>
              <h4 className="text-xl font-bold text-brand-teal mb-4 font-display">{leader.name}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
