
import React from 'react';
import { 
  Clock, 
  Calendar, 
  Bell, 
  Download, 
  FileText,
  AlertCircle
} from 'lucide-react';

const PracticalInfo: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-amber-500 py-20 text-teal-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Practical Information</h1>
          <p className="text-teal-900/80 max-w-2xl mx-auto font-medium">
            Everything you need to know about day-to-day operations at Iqra Private School.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* School Timings */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold text-teal-900 mb-8 flex items-center">
                 <Clock className="mr-3 text-amber-500" /> School Timings
               </h2>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="border-b border-gray-100">
                       <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">Section</th>
                       <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">Start Time</th>
                       <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">Finish Time</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                     {[
                       { section: 'Early Years (LKG/HKG)', start: '7:45 AM', finish: '11:45 AM' },
                       { section: 'Primary (I - V)', start: '7:45 AM', finish: '12:45 PM' },
                       { section: 'Middle & Senior', start: '7:45 AM', finish: '1:45 PM' }
                     ].map((t, i) => (
                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                         <td className="py-4 font-bold text-teal-900">{t.section}</td>
                         <td className="py-4 text-gray-600 font-medium">{t.start}</td>
                         <td className="py-4 text-gray-600 font-medium">{t.finish}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <div className="mt-8 p-4 bg-teal-50 rounded-2xl flex items-start text-teal-900 text-sm">
                  <AlertCircle className="mr-3 shrink-0 mt-0.5" />
                  <p>Ramadan timings will be communicated via school circulars during the holy month.</p>
               </div>
            </section>

            {/* Circulars Area */}
            <section>
              <h2 className="text-2xl font-bold text-teal-900 mb-8 flex items-center">
                <Bell className="mr-3 text-amber-500" /> Latest Circulars & Notices
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Summer Vacation Notice 2024', date: 'April 25, 2024', tag: 'Holiday' },
                  { title: 'Labor Day Circular', date: 'April 20, 2024', tag: 'Announcement' },
                  { title: 'Term Exam Datesheet - June 2024', date: 'April 15, 2024', tag: 'Exams' },
                  { title: 'New Uniform Guidelines', date: 'March 10, 2024', tag: 'Admin' }
                ].map((c, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-teal-500/20 transition-all">
                    <div className="flex items-center">
                      <div className="p-3 bg-teal-50 text-teal-700 rounded-xl mr-4">
                        <FileText size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 block">{c.tag}</span>
                        <h4 className="font-bold text-teal-900">{c.title}</h4>
                        <p className="text-xs text-gray-400">{c.date}</p>
                      </div>
                    </div>
                    <button className="text-teal-900 hover:text-amber-500 transition-colors">
                      <Download size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
             <div className="bg-teal-900 text-white p-8 rounded-3xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Calendar className="mr-3 text-amber-500" /> Academic Calendar
                </h3>
                <div className="space-y-6">
                   <div className="border-l-2 border-amber-500 pl-4">
                      <p className="text-xs text-teal-300 font-bold uppercase mb-1">June 15, 2024</p>
                      <h4 className="font-bold text-sm">Summer Term Ends</h4>
                   </div>
                   <div className="border-l-2 border-gray-600 pl-4">
                      <p className="text-xs text-teal-300 font-bold uppercase mb-1">Sept 01, 2024</p>
                      <h4 className="font-bold text-sm">New Session Begins</h4>
                   </div>
                   <div className="border-l-2 border-gray-600 pl-4">
                      <p className="text-xs text-teal-300 font-bold uppercase mb-1">Dec 16, 2024</p>
                      <h4 className="font-bold text-sm">Bahrain National Day</h4>
                   </div>
                </div>
                <button className="mt-10 w-full bg-white text-teal-950 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                   View Full Calendar
                </button>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-teal-900 mb-6">Downloads</h3>
                <div className="space-y-4">
                   <a href="#" className="flex items-center text-sm text-gray-600 hover:text-amber-600">
                      <Download size={16} className="mr-3" /> Admission Form
                   </a>
                   <a href="#" className="flex items-center text-sm text-gray-600 hover:text-amber-600">
                      <Download size={16} className="mr-3" /> School Prospectus
                   </a>
                   <a href="#" className="flex items-center text-sm text-gray-600 hover:text-amber-600">
                      <Download size={16} className="mr-3" /> Transfer Request Form
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalInfo;
