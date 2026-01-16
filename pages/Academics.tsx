
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

const GradeSection = ({ title, desc, subjects }: any) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-brand-teal/20 transition-all group">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-brand-soft text-brand-teal rounded-2xl mr-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
        <GraduationCap size={24} />
      </div>
      <h3 className="text-xl font-bold text-brand-teal font-display">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{desc}</p>
    <div className="space-y-2">
      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Core Subjects</h4>
      <div className="flex flex-wrap gap-2">
        {subjects.map((s: string) => (
          <span key={s} className="bg-brand-soft text-brand-teal px-3 py-1 rounded-full text-xs font-bold border border-brand-teal/5">{s}</span>
        ))}
      </div>
    </div>
  </div>
);

const Academics: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-teal py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Academic Excellence</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg font-medium opacity-80">
            A world-class curriculum designed to challenge minds and build character, preparing students for success.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">Global Standards</span>
              <h2 className="text-3xl font-bold text-brand-teal mt-2 mb-6 leading-tight font-display">Comprehensive English-Medium Instruction</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Iqra Private School, we deliver a robust English-medium curriculum aligned with the Federal Board of Intermediate and Secondary Education (FBISE).
              </p>
              <div className="bg-brand-gold/10 p-6 rounded-2xl border-l-4 border-brand-gold mb-6">
                <h4 className="font-bold text-brand-teal mb-2 flex items-center font-display">
                  <BookOpen size={18} className="mr-2" /> Strategic Update: IGCSE 2025
                </h4>
                <p className="text-sm text-brand-teal/80">
                  Starting September 2025, we are proud to introduce the Cambridge IGCSE curriculum option for our senior students, broadening global opportunities.
                </p>
              </div>
              <ul className="space-y-4">
                {['Integrated ICT & STEM Learning', 'Strong Islamic & Moral Values', 'Multi-lingual: Arabic, Urdu & English', 'Structured Physical Education'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700 font-bold">
                    <CheckCircle2 size={18} className="text-brand-teal mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <SafeImage src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" className="rounded-3xl shadow-lg mt-8 aspect-square object-cover" alt="Classroom" />
              <SafeImage src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" className="rounded-3xl shadow-lg aspect-square object-cover" alt="Study" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GradeSection 
              title="Early Years"
              desc="LKG & HKG focusing on play-based learning, social development, and basic literacy."
              subjects={['Phonics', 'Basic Math', 'Creative Arts', 'EVS']}
            />
            <GradeSection 
              title="Primary"
              desc="Grades I–V building solid foundations in languages, sciences, and mathematics."
              subjects={['English', 'Science', 'Urdu', 'Arabic', 'Islamiat']}
            />
            <GradeSection 
              title="Middle"
              desc="Grades VI–VIII introducing critical thinking across all core disciplines."
              subjects={['Physics', 'Chemistry', 'History', 'ICT', 'Social Studies']}
            />
            <GradeSection 
              title="Senior"
              desc="Grades IX–XII focused on board examination excellence and university prep."
              subjects={['Biology', 'Comp. Sci', 'Pak. Studies', 'Mathematics']}
            />
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-teal mb-4 font-display">Academic Resources</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Download the latest planners and subject breakdowns for each grade level.</p>
          </div>
          <div className="bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-brand-teal text-white">
                  <tr>
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-widest font-display">Grade Level</th>
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-widest font-display">Type</th>
                    <th className="px-8 py-5 font-bold text-sm uppercase tracking-widest font-display text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { grade: 'Early Years (LKG/HKG)', type: 'Academic Planner' },
                    { grade: 'Primary (I - V)', type: 'Curriculum Guide' },
                    { grade: 'Middle (VI - VIII)', type: 'Term Syllabus' },
                    { grade: 'Senior (IX - XII)', type: 'Academic Track' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-brand-soft transition-colors">
                      <td className="px-8 py-6 font-bold text-brand-teal">{row.grade}</td>
                      <td className="px-8 py-6 text-gray-600 text-sm font-medium">{row.type}</td>
                      <td className="px-8 py-6 text-right">
                        <button className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-black text-sm uppercase tracking-widest">
                          Download <Download size={16} className="ml-2" />
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
