
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
      <section className="bg-brand-teal py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Join Our Community</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg opacity-80 font-medium">
            Building on a legacy of academic and moral success, we welcome students of all nationalities.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-teal mb-10 flex items-center font-display">
                <ClipboardList className="mr-4 text-brand-gold" size={32} /> Enrollment Process
              </h2>
              <div className="space-y-10 relative before:content-[''] before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-brand-soft">
                {[
                  { step: 'Registration', desc: 'Visit our office or fill the online inquiry form to begin.' },
                  { step: 'Documentation', desc: 'Submit required documents (CPR, Passport, Birth Certificate, Records).' },
                  { step: 'Assessment', desc: 'Students undergo age-appropriate evaluations or interviews.' },
                  { step: 'Approval', desc: 'Final review and approval by the Academic Head.' },
                  { step: 'Fee Payment', desc: 'Complete registration and initial term payment to secure admission.' }
                ].map((item, i) => (
                  <div key={i} className="pl-16 relative">
                    <div className="absolute left-0 top-0 w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center font-black text-sm border-4 border-white shadow-md">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-brand-teal text-lg mb-1 font-display">{item.step}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-teal text-white p-10 rounded-[40px] shadow-2xl">
                <h3 className="text-xl font-bold mb-8 flex items-center font-display">
                   <Info className="mr-3 text-brand-gold" /> Documentation
                </h3>
                <ul className="space-y-6 text-sm text-teal-50">
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-4 text-brand-gold shrink-0" />
                    Original and Copy of CPR.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-4 text-brand-gold shrink-0" />
                    Valid Passport & Residency Permit.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-4 text-brand-gold shrink-0" />
                    Latest Academic Reports.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-4 text-brand-gold shrink-0" />
                    4 Passport sized Photographs.
                  </li>
                </ul>
                <button className="mt-10 w-full bg-brand-gold text-brand-teal font-black py-4 rounded-2xl hover:bg-yellow-500 transition-all flex items-center justify-center shadow-lg active:scale-95">
                   Admissions Guide <Download size={18} className="ml-2" />
                </button>
              </div>

              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 text-center">
                 <HelpCircle size={48} className="mx-auto text-brand-gold mb-6" />
                 <h4 className="font-bold text-brand-teal mb-2 font-display text-lg">Inquiries</h4>
                 <p className="text-gray-500 text-sm mb-6">Our dedicated team is ready to assist you.</p>
                 <p className="text-brand-teal font-black text-xl">+973 1768 7922</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10 lg:p-16 shadow-sm border border-gray-100">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                   <h2 className="text-3xl font-bold text-brand-teal mb-3 font-display">Fees & Tuition</h2>
                   <p className="text-gray-600 font-medium">Committed to community affordability and excellence.</p>
                </div>
                <button className="mt-6 md:mt-0 bg-brand-soft text-brand-teal font-bold px-8 py-4 rounded-2xl hover:bg-brand-teal hover:text-white transition-all flex items-center shadow-sm">
                   Download Fee Schedule <Download size={20} className="ml-2" />
                </button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { level: 'Early Years', term: '250 BHD', items: 'LKG - HKG' },
                  { level: 'Primary', term: '320 BHD', items: 'Grade I - V' },
                  { level: 'Middle', term: '380 BHD', items: 'Grade VI - VIII' },
                  { level: 'Senior', term: '450 BHD', items: 'Grade IX - XII' }
                ].map((fee, i) => (
                  <div key={i} className="bg-brand-soft/50 p-8 rounded-3xl border border-transparent hover:border-brand-gold transition-all text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display">{fee.level}</p>
                    <h3 className="text-4xl font-black text-brand-teal mb-1 font-display">{fee.term}</h3>
                    <p className="text-xs text-brand-teal/50 font-bold uppercase mb-6 tracking-tighter">Per Term</p>
                    <div className="h-1 w-12 bg-brand-gold mx-auto mb-6 rounded-full"></div>
                    <p className="text-sm font-black text-brand-teal uppercase tracking-widest">{fee.items}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold text-brand-teal mb-6 font-display">Secure Your Child's Future</h2>
           <p className="text-brand-teal font-bold mb-12 text-xl opacity-80">
             Applications for the 2024/2025 academic session are now open.
           </p>
           <button className="bg-brand-teal text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center mx-auto active:scale-95">
              Begin Online Inquiry <ArrowRight size={24} className="ml-4" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
