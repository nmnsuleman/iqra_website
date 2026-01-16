
import React from 'react';
import {
  BookOpen,
  Download,
  GraduationCap,
  FileText,
  Users,
  CheckCircle2
} from 'lucide-react';
import { SafeImage } from '../App';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const GradeSection = ({ title, desc, subjects, index }: any) => (
  <div
    className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 premium-card-hover group animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex items-center mb-6">
      <div className="p-4 bg-brand-soft text-brand-teal rounded-2xl mr-4 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 shadow-inner">
        <GraduationCap size={28} />
      </div>
      <h3 className="text-2xl font-bold text-brand-teal font-display tracking-tight">{title}</h3>
    </div>
    <p className="text-gray-600 mb-8 text-base leading-relaxed font-medium">{desc}</p>
    <div className="space-y-4">
      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Core Curriculum</h4>
      <div className="flex flex-wrap gap-2">
        {subjects.map((s: string) => (
          <span key={s} className="bg-brand-soft text-brand-teal px-4 py-1.5 rounded-full text-xs font-bold border border-brand-teal/5 group-hover:bg-brand-gold group-hover:text-brand-teal transition-colors duration-300">{s}</span>
        ))}
      </div>
    </div>
  </div>
);

const Academics: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-teal py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          </Canvas>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lightTeal rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse-soft"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse-soft delay-700"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 font-display animate-text-reveal">Academic Excellence</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-xl font-medium opacity-80 animate-fade-in delay-500">
            A world-class curriculum designed to challenge minds and build character, preparing students for success.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-28">
            <div className="animate-slide-in-left">
              <span className="text-brand-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">Global Standards</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mt-4 mb-8 leading-[1.1] font-display">Integrated English-Medium Instruction</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl font-medium">
                At Iqra Private School, we deliver a robust curriculum aligned with the Federal Board (FBISE) and global pedagogical standards.
              </p>
              <div className="bg-white p-8 rounded-[32px] shadow-xl border-l-[12px] border-brand-gold mb-10 premium-card-hover group">
                <h4 className="font-bold text-brand-teal text-xl mb-4 flex items-center font-display transition-colors group-hover:text-brand-gold">
                  <BookOpen size={24} className="mr-3 text-brand-gold" /> Strategic Update: IGCSE 2025
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Starting September 2025, we are proud to introduce the Cambridge IGCSE curriculum option, empowering our students with international recognition.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Integrated ICT & STEM', 'Moral & Values Education', 'Arabic & Islamic Studies', 'Holistic PE Programs'].map((item, idx) => (
                  <li key={item} className="flex items-center text-brand-teal font-bold text-base animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                      <CheckCircle2 size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="space-y-6">
                <SafeImage src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" className="rounded-[40px] shadow-2xl aspect-[4/5] object-cover border-8 border-white hover:scale-105 transition-transform duration-700" alt="Classroom" />
              </div>
              <div className="space-y-6 flex flex-col justify-center">
                <SafeImage src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" className="rounded-[40px] shadow-2xl aspect-square object-cover border-8 border-white hover:scale-105 transition-transform duration-700" alt="Study" />
                <div className="bg-brand-gold p-8 rounded-[32px] shadow-xl animate-float">
                  <p className="text-brand-teal font-black text-3xl font-display">FBISE</p>
                  <p className="text-brand-teal/60 text-xs font-bold uppercase tracking-widest">Certified Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GradeSection
              index={0}
              title="Early Years"
              desc="LKG & HKG focusing on play-based learning, social development, and basic literacy."
              subjects={['Phonics', 'Basic Math', 'Creative Arts', 'EVS']}
            />
            <GradeSection
              index={1}
              title="Primary"
              desc="Grades I–V building solid foundations in languages, sciences, and mathematics."
              subjects={['English', 'Science', 'Urdu', 'Arabic', 'Islamiat']}
            />
            <GradeSection
              index={2}
              title="Middle"
              desc="Grades VI–VIII introducing critical thinking across all core disciplines."
              subjects={['Physics', 'Chemistry', 'History', 'ICT', 'Social Studies']}
            />
            <GradeSection
              index={3}
              title="Senior"
              desc="Grades IX–XII focused on board examination excellence and university prep."
              subjects={['Biology', 'Comp. Sci', 'Pak. Studies', 'Mathematics']}
            />
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6 font-display">Academic Resources</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Download the latest planners and subject breakdowns for each grade level.</p>
          </div>
          <div className="bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 shadow-2xl animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-brand-teal text-white">
                  <tr>
                    <th className="px-10 py-8 font-black text-sm uppercase tracking-[0.2em] font-display">Grade Level</th>
                    <th className="px-10 py-8 font-black text-sm uppercase tracking-[0.2em] font-display">Type of Document</th>
                    <th className="px-10 py-8 font-black text-sm uppercase tracking-[0.2em] font-display text-right">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { grade: 'Early Years (LKG/HKG)', type: 'Academic Planner 2024-25' },
                    { grade: 'Primary Section (I - V)', type: 'Holistic Curriculum Guide' },
                    { grade: 'Middle School (VI - VIII)', type: 'Term-wise Syllabus Breakdown' },
                    { grade: 'Senior Secondary (IX - XII)', type: 'Professional Academic Track' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-brand-soft/50 transition-all duration-300 group">
                      <td className="px-10 py-8 font-black text-brand-teal text-lg group-hover:translate-x-2 transition-transform">{row.grade}</td>
                      <td className="px-10 py-8 text-gray-600 text-base font-bold italic">{row.type}</td>
                      <td className="px-10 py-8 text-right">
                        <button className="inline-flex items-center bg-white text-brand-teal border border-brand-teal/10 px-6 py-3 rounded-2xl shadow-sm hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 font-black text-xs uppercase tracking-widest group-hover:-translate-x-2">
                          PDF Resource <Download size={18} className="ml-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
