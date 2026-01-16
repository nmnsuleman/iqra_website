
import React from 'react';
import {
  FileCheck,
  HelpCircle,
  ClipboardList,
  Info,
  Download,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-brand-teal py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lightTeal rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse-soft"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 font-display animate-text-reveal">Join Our Community</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-xl opacity-80 font-medium animate-fade-in delay-500">
            Building on a legacy of academic and moral success, we welcome students of all backgrounds and nationalities.
          </p>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-28">
            <div className="bg-white p-12 lg:p-16 rounded-[48px] shadow-sm border border-gray-100 lg:col-span-2 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-brand-teal mb-14 flex items-center font-display tracking-tight">
                <div className="p-4 bg-brand-soft rounded-[24px] mr-6 animate-pulse-soft">
                  <ClipboardList className="text-brand-gold" size={40} />
                </div>
                Admission Steps
              </h2>
              <div className="space-y-12 relative before:content-[''] before:absolute before:left-6 before:top-6 before:bottom-6 before:w-1 before:bg-brand-soft">
                {[
                  { step: 'Registration', desc: 'Visit our administration office or submit an online inquiry to initiate the process.' },
                  { step: 'Documentation', desc: 'Provide necessary records including CPR, Passport, and previous academic transcripts.' },
                  { step: 'Assessment', desc: 'Potential students undergo developmental evaluations or structured interviews.' },
                  { step: 'Review', desc: 'Application is reviewed by the Board of Trustees and Academic Heads.' },
                  { step: 'Finalization', desc: 'Secure your place by completing registration fees and initial term payments.' }
                ].map((item, i) => (
                  <div key={i} className="pl-20 relative group animate-fade-in-up" style={{ animationDelay: `${i * 200}ms` }}>
                    <div className="absolute left-0 top-0 w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-xl group-hover:scale-125 transition-transform duration-500 z-10">
                      {i + 1}
                    </div>
                    <h4 className="font-extrabold text-brand-teal text-2xl mb-2 font-display">{item.step}</h4>
                    <p className="text-gray-500 text-base leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-brand-teal text-white p-12 rounded-[48px] shadow-2xl animate-slide-in-right">
                <h3 className="text-2xl font-bold mb-10 flex items-center font-display">
                  <div className="p-3 bg-white/10 rounded-2xl mr-4">
                    <Info className="text-brand-gold" size={28} />
                  </div>
                  Checklist
                </h3>
                <ul className="space-y-8 text-base text-teal-50">
                  {[
                    'Original & Copy of CPR',
                    'Passport & Residency Permit',
                    'Latest Progress Reports',
                    '4 Passport Photographs'
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center group animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                      <div className="p-1.5 bg-brand-gold rounded-lg mr-5 text-brand-teal transform group-hover:rotate-12 transition-transform">
                        <CheckCircle2 size={20} className="shrink-0" />
                      </div>
                      <span className="font-bold">{doc}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-14 w-full bg-brand-gold text-brand-teal font-black py-5 rounded-3xl hover:bg-yellow-500 transition-all flex items-center justify-center shadow-xl shadow-brand-gold/20 active:scale-95 text-lg uppercase tracking-widest">
                  Get PDF Guide <Download size={24} className="ml-3" />
                </button>
              </div>

              <div className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 text-center animate-fade-in-up delay-[800ms] premium-card-hover">
                <div className="bg-brand-soft w-20 h-20 rounded-[24px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <HelpCircle size={40} className="text-brand-gold animate-pulse-soft" />
                </div>
                <h4 className="font-black text-brand-teal mb-4 font-display text-2xl">Questions?</h4>
                <p className="text-gray-500 text-base mb-8 font-medium leading-relaxed">Our administration is here to guide you through every step.</p>
                <div className="bg-brand-soft py-4 rounded-2xl border border-brand-teal/5">
                  <p className="text-brand-teal font-black text-2xl tracking-tighter">+973 1768 7922</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[60px] p-12 lg:p-20 shadow-sm border border-gray-100 relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-soft rounded-full -translate-y-1/2 translate-x-1/2 -z-0"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 relative z-10">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-4 font-display tracking-tight">Tuition & Fees</h2>
                <p className="text-gray-500 font-bold text-xl">Investment in leadership and ethical excellence.</p>
              </div>
              <button className="mt-8 md:mt-0 bg-brand-soft text-brand-teal font-black px-10 py-5 rounded-[24px] hover:bg-brand-teal hover:text-white transition-all flex items-center shadow-xl border border-brand-teal/5 active:scale-95 animate-slide-in-right">
                Full Fee Matrix <Download size={24} className="ml-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {[
                { level: 'Early Years', term: '250 BHD', items: 'LKG & HKG' },
                { level: 'Primary', term: '320 BHD', items: 'Grade I - V' },
                { level: 'Middle', term: '380 BHD', items: 'Grade VI - VIII' },
                { level: 'Senior', term: '450 BHD', items: 'Grade IX - XII' }
              ].map((fee, i) => (
                <div key={i} className="bg-brand-soft/30 p-10 rounded-[40px] border border-transparent hover:border-brand-gold hover:bg-white hover:shadow-2xl transition-all duration-500 text-center premium-card-hover animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 font-display">{fee.level}</p>
                  <div className="space-y-1 mb-8">
                    <h3 className="text-5xl font-black text-brand-teal font-display tracking-tighter leading-none">{fee.term}</h3>
                    <p className="text-xs text-brand-gold font-black uppercase tracking-widest">Per Academic Term</p>
                  </div>
                  <div className="h-1.5 w-16 bg-brand-gold/30 mx-auto mb-8 rounded-full"></div>
                  <div className="bg-white/50 py-3 rounded-2xl border border-brand-teal/5">
                    <p className="text-base font-black text-brand-teal uppercase tracking-widest">{fee.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-teal/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-brand-teal mb-8 font-display animate-text-reveal">Ready to Join Us?</h2>
          <p className="text-brand-teal font-bold mb-16 text-2xl opacity-70 animate-fade-in delay-300">
            Applications for the 2024/2025 academic session are currently active.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
            <button className="bg-brand-teal text-white px-16 py-7 rounded-[28px] font-black text-2xl hover:bg-brand-lightTeal transition-all shadow-2xl flex items-center justify-center active:scale-95 group">
              Begin Inquiry <ArrowRight size={32} className="ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-white text-brand-teal px-16 py-7 rounded-[28px] font-black text-2xl hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center active:scale-95 border-2 border-brand-teal/5">
              Visit Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
