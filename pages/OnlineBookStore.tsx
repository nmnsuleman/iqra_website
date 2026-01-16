
import React, { useState } from 'react';
import { 
  ShoppingBag, 
  CreditCard, 
  Clock, 
  CheckCircle, 
  Search,
  BookOpen,
  ArrowRight,
  Info
} from 'lucide-react';

const OnlineBookStore: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState('Primary');

  const bookLists = {
    Primary: [
      { id: 1, title: 'English Literature Grade 3', price: '5.500 BHD', status: 'In Stock' },
      { id: 2, title: 'Mathematics Workbook', price: '3.200 BHD', status: 'In Stock' },
      { id: 3, title: 'Science Lab Manual', price: '2.800 BHD', status: 'In Stock' },
      { id: 4, title: 'Arabic for Non-Arabs Vol 1', price: '4.500 BHD', status: 'In Stock' },
    ],
    Middle: [
      { id: 5, title: 'Advanced Algebra VIII', price: '6.000 BHD', status: 'In Stock' },
      { id: 6, title: 'Integrated Science VII', price: '5.200 BHD', status: 'In Stock' },
    ],
    Senior: [
       { id: 7, title: 'Physics FBISE IX', price: '7.500 BHD', status: 'In Stock' },
       { id: 8, title: 'Computer Science Theory', price: '8.000 BHD', status: 'In Stock' },
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-amber-500 py-16 text-teal-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ShoppingBag size={48} className="mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl font-bold mb-4">Online Book Store</h1>
          <p className="text-teal-900/80 max-w-2xl mx-auto font-medium">
            Convenient and transparent. Purchase your child's textbooks and stationery sets from the comfort of home with no service fees.
          </p>
        </div>
      </section>

      {/* Steps & Guidance */}
      <section className="py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Select Grade', desc: 'Browse the booklist for your child\'s grade.' },
            { step: '02', title: 'Add to Cart', desc: 'Choose individual books or full sets.' },
            { step: '03', title: 'Pay Online', desc: 'Secure payment via Debit/Credit card.' },
            { step: '04', title: 'Collect', desc: 'Pickup in 2 working days from school.' }
          ].map((item) => (
            <div key={item.step} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-3xl font-black text-amber-100 block mb-2">{item.step}</span>
              <h3 className="font-bold text-teal-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Store Interface */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filter Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
                <h4 className="font-bold text-teal-900 mb-6 flex items-center">
                  <BookOpen size={18} className="mr-2" /> Grade Levels
                </h4>
                <div className="space-y-2">
                  {['Primary', 'Middle', 'Senior'].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setSelectedGrade(grade)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        selectedGrade === grade 
                          ? 'bg-teal-900 text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {grade} Section
                    </button>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center text-xs text-amber-600 bg-amber-50 p-4 rounded-xl">
                    <Info size={16} className="mr-2 shrink-0" />
                    <span>No service fees on online payments. Collection at school reception.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Listings */}
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-teal-900">{selectedGrade} Booklist</h2>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search books..." 
                    className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:ring-1 focus:ring-amber-500 outline-none w-64"
                  />
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookLists[selectedGrade as keyof typeof bookLists].map((book) => (
                  <div key={book.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-amber-500/30 transition-all">
                    <div className="flex items-center">
                      <div className="w-16 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mr-4">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-teal-900">{book.title}</h3>
                        <p className="text-amber-600 font-bold text-lg">{book.price}</p>
                        <span className="text-[10px] uppercase font-bold text-green-600 flex items-center mt-1">
                          <CheckCircle size={10} className="mr-1" /> {book.status}
                        </span>
                      </div>
                    </div>
                    <button className="p-3 bg-teal-50 text-teal-900 rounded-2xl hover:bg-teal-900 hover:text-white transition-all">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Pickup Windows */}
              <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center">
                  <Clock size={20} className="mr-2 text-amber-500" /> Collection Schedule
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { slot: 'Morning', time: '8:00 AM - 10:00 AM', grades: 'LKG - Grade V' },
                    { slot: 'Midday', time: '10:30 AM - 12:30 PM', grades: 'Grade VI - VIII' },
                    { slot: 'Afternoon', time: '1:00 PM - 2:00 PM', grades: 'Senior Sections' }
                  ].map((s, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-2xl">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">{s.slot}</p>
                      <p className="text-teal-900 font-bold mb-2">{s.time}</p>
                      <p className="text-gray-500 text-xs">{s.grades}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-500 italic">
                  * Please bring your digital or printed receipt for collection. Orders ready in 2 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineBookStore;
