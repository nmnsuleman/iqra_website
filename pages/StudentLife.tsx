
import React, { useState } from 'react';
import { 
  Camera, 
  Flag, 
  Award, 
  Trophy, 
  Calendar,
  Filter,
  Users
} from 'lucide-react';

const StudentLife: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    { id: 1, type: 'Events', img: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop', title: 'National Day' },
    { id: 2, type: 'Sports', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop', title: 'Annual Sports Day' },
    { id: 3, type: 'Academic', img: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=2070&auto=format&fit=crop', title: 'Science Fair' },
    { id: 4, type: 'Islamic', img: 'https://images.unsplash.com/photo-1590076247867-03310705f42c?q=80&w=2070&auto=format&fit=crop', title: 'Islamic Program' },
    { id: 5, type: 'Events', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', title: 'Careers Day' },
    { id: 6, type: 'Sports', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop', title: 'Football Match' },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-teal-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-teal-100 max-w-2xl mx-auto">Discover a vibrant world of activities, events, and community at Iqra Private School.</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Trophy, 
                title: 'Annual Sports Day', 
                desc: 'A week-long celebration of athletics and sportsmanship involving all sections.',
                color: 'bg-blue-500' 
              },
              { 
                icon: Flag, 
                title: 'Bahrain National Day', 
                desc: 'Celebrating the Kingdom with cultural performances, traditional stalls, and national pride.',
                color: 'bg-red-500' 
              },
              { 
                icon: Award, 
                title: 'Careers Day', 
                desc: 'Connecting senior students with professionals from various industries for guidance.',
                color: 'bg-amber-500' 
              },
              { 
                icon: Users, 
                title: 'Islamic Events', 
                desc: 'Commemorating key religious dates with competitions, lectures, and charitable acts.',
                color: 'bg-green-600' 
              },
              { 
                icon: Calendar, 
                title: 'Cultural Days', 
                desc: 'Promoting diversity and understanding of the various nationalities in our school.',
                color: 'bg-purple-500' 
              },
              { 
                icon: Camera, 
                title: 'Media Club', 
                desc: 'Empowering students to capture school life through photography and digital journalism.',
                color: 'bg-teal-500' 
              }
            ].map((activity, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className={`w-14 h-14 ${activity.color} text-white rounded-2xl flex items-center justify-center mb-6`}>
                   <activity.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-4">{activity.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold text-teal-900">Life in Pictures</h2>
            <div className="flex flex-wrap gap-2">
              {['All', 'Events', 'Sports', 'Academic', 'Islamic'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === cat ? 'bg-amber-500 text-teal-950' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-video shadow-md">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{item.type}</span>
                    <h4 className="text-white font-bold">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
