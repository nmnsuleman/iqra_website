
import React from 'react';
import {
   Phone,
   Mail,
   MapPin,
   Send,
   Facebook,
   Youtube,
   Instagram,
   Clock
} from 'lucide-react';

const Contact: React.FC = () => {
   return (
      <div className="bg-gray-50 min-h-screen">
         <section className="bg-brand-teal py-28 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-lightTeal rounded-full blur-[120px] -ml-64 -mt-64 animate-pulse-soft"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
               <h1 className="text-5xl md:text-7xl font-black mb-6 font-display animate-text-reveal">Contact Us</h1>
               <p className="text-teal-100 max-w-2xl mx-auto text-xl font-medium opacity-80 animate-fade-in delay-500">
                  Have a question? We're here to help you. Reach out to our dedicated support teams.
               </p>
            </div>
         </section>

         <div className="max-w-7xl mx-auto px-4 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

               {/* Contact Details */}
               <div className="animate-slide-in-left">
                  <h2 className="text-4xl font-bold text-brand-teal mb-10 font-display tracking-tight">Connect with Us</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                     {[
                        { icon: MapPin, title: 'Campus Address', desc: 'Building 214, Road 4111, Block 841, Isa Town, Kingdom of Bahrain' },
                        { icon: Phone, title: 'Phone Support', desc: 'Main: +973 1768 7922\nPrimary: +973 1768 7480' },
                        { icon: Mail, title: 'Email Support', desc: 'info@iqraprivateschool.com\nadmissions@iqraprivateschool.com' },
                        { icon: Clock, title: 'Office Hours', desc: 'Sun - Thu: 7:30 AM - 2:30 PM\nSat: 8:00 AM - 1:00 PM' }
                     ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 premium-card-hover animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                           <div className="w-14 h-14 bg-brand-soft text-brand-teal rounded-2xl flex items-center justify-center mb-6 shadow-inner transform group-hover:rotate-6 transition-transform">
                              <item.icon size={28} />
                           </div>
                           <h4 className="font-bold text-brand-teal mb-3 font-display text-lg">{item.title}</h4>
                           <p className="text-sm text-gray-500 leading-relaxed font-medium whitespace-pre-line">
                              {item.desc}
                           </p>
                        </div>
                     ))}
                  </div>

                  {/* Department Emails */}
                  <div className="bg-brand-teal text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                     <h4 className="text-2xl font-black mb-10 text-brand-gold font-display tracking-wide uppercase">Department Directory</h4>
                     <div className="space-y-6">
                        {[
                           { label: 'Primary Section', email: 'vp.primary@iqraprivateschool.com' },
                           { label: 'Middle Section', email: 'vp.middle@iqraprivateschool.com' },
                           { label: 'Senior Section', email: 'vp.seniors@iqraprivateschool.com' }
                        ].map((dept, idx) => (
                           <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/10 last:border-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                              <span className="font-bold text-lg mb-1 sm:mb-0">{dept.label}</span>
                              <span className="text-sm font-medium text-teal-100/70 select-all hover:text-brand-gold transition-colors">{dept.email}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 animate-slide-in-right">
                  <h2 className="text-3xl font-bold text-brand-teal mb-10 font-display tracking-tight">Send an Inquiry</h2>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                           <label className="text-xs font-black text-gray-400 uppercase mb-3 block tracking-widest">Full Name</label>
                           <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] px-6 py-5 text-base font-medium focus:ring-0 focus:border-brand-gold focus:bg-white outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                           <label className="text-xs font-black text-gray-400 uppercase mb-3 block tracking-widest">Email Address</label>
                           <input type="email" className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] px-6 py-5 text-base font-medium focus:ring-0 focus:border-brand-gold focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                        </div>
                     </div>
                     <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <label className="text-xs font-black text-gray-400 uppercase mb-3 block tracking-widest">Purpose of Contact</label>
                        <select className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] px-6 py-5 text-base font-medium focus:ring-0 focus:border-brand-gold focus:bg-white outline-none appearance-none transition-all">
                           <option>General School Inquiry</option>
                           <option>Admission & Registration</option>
                           <option>Academic/Syllabus Questions</option>
                           <option>Finance & Bookstore</option>
                        </select>
                     </div>
                     <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <label className="text-xs font-black text-gray-400 uppercase mb-3 block tracking-widest">Your Message</label>
                        <textarea rows={5} className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] px-6 py-5 text-base font-medium focus:ring-0 focus:border-brand-gold focus:bg-white outline-none transition-all resize-none" placeholder="Share your thoughts with us..."></textarea>
                     </div>
                     <button className="w-full bg-brand-gold text-brand-teal font-black py-6 rounded-[24px] hover:bg-brand-teal hover:text-white transition-all duration-500 flex items-center justify-center shadow-xl shadow-brand-gold/20 active:scale-95 text-xl uppercase tracking-widest animate-fade-in-up delay-[500ms]">
                        Submit Message <Send size={24} className="ml-4" />
                     </button>
                  </form>
               </div>
            </div>

            {/* Map */}
            <div className="mt-28 rounded-[50px] overflow-hidden shadow-2xl border border-gray-100 h-[550px] relative animate-fade-in-up delay-[600ms] group">
               <div className="absolute inset-0 bg-brand-teal/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.485149302636!2d50.5401142!3d26.1808608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af6774a383d5%3A0x6b453e990c8b05f!2sIqra%20Private%20School%20Bahrain!5e0!3m2!1sen!2sbh!4v1714000000000!5m2!1sen!2sbh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="School Location Map"
               ></iframe>
            </div>
         </div>
      </div>
   );
};

export default Contact;
