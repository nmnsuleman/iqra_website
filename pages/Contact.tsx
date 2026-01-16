
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
      <section className="bg-brand-teal py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Contact Us</h1>
          <p className="text-teal-100 max-w-2xl mx-auto font-medium">Have a question? We're here to help you. Reach out to our dedicated support teams.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-brand-teal mb-8 font-display">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-brand-soft text-brand-teal rounded-xl flex items-center justify-center mb-4">
                     <MapPin size={24} />
                  </div>
                  <h4 className="font-bold text-brand-teal mb-2 font-display">Campus Address</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Building 214, Road 4111, Block 841, Isa Town, Kingdom of Bahrain
                  </p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-brand-soft text-brand-teal rounded-xl flex items-center justify-center mb-4">
                     <Phone size={24} />
                  </div>
                  <h4 className="font-bold text-brand-teal mb-2 font-display">Phone Support</h4>
                  <p className="text-sm text-gray-500">Main: +973 1768 7922</p>
                  <p className="text-sm text-gray-500">Primary: +973 1768 7480</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-brand-soft text-brand-teal rounded-xl flex items-center justify-center mb-4">
                     <Mail size={24} />
                  </div>
                  <h4 className="font-bold text-brand-teal mb-2 font-display">Email Support</h4>
                  <p className="text-sm text-gray-500">info@iqraprivateschool.com</p>
                  <p className="text-sm text-gray-500">admissions@iqraprivateschool.com</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-brand-soft text-brand-teal rounded-xl flex items-center justify-center mb-4">
                     <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-brand-teal mb-2 font-display">Office Hours</h4>
                  <p className="text-sm text-gray-500">Sun - Thu: 7:30 AM - 2:30 PM</p>
                  <p className="text-sm text-gray-500">Sat: 8:00 AM - 1:00 PM</p>
               </div>
            </div>

            {/* Department Emails */}
            <div className="bg-brand-teal text-white p-8 rounded-3xl shadow-lg">
               <h4 className="text-xl font-bold mb-6 text-brand-gold font-display">Department Contacts</h4>
               <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                     <span className="font-medium">Primary Section</span>
                     <span className="text-sm opacity-80">vp.primary@iqraprivateschool.com</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                     <span className="font-medium">Middle Section</span>
                     <span className="text-sm opacity-80">vp.middle@iqraprivateschool.com</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="font-medium">Senior Section</span>
                     <span className="text-sm opacity-80">vp.seniors@iqraprivateschool.com</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-teal mb-8 font-display">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-gold outline-none" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-gold outline-none" placeholder="Enter your email" />
                  </div>
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Subject</label>
                 <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-gold outline-none appearance-none">
                    <option>General Inquiry</option>
                    <option>Admissions Question</option>
                    <option>Account/Fee Concern</option>
                    <option>Bookstore Feedback</option>
                 </select>
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Your Message</label>
                 <textarea rows={4} className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-gold outline-none" placeholder="How can we help you?"></textarea>
               </div>
               <button className="w-full bg-brand-gold text-brand-teal font-bold py-5 rounded-xl hover:bg-yellow-500 transition-all flex items-center justify-center shadow-lg active:scale-95 text-lg">
                  Submit Inquiry <Send size={18} className="ml-3" />
               </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 h-[450px] relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.485149302636!2d50.5401142!3d26.1808608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af6774a383d5%3A0x6b453e990c8b05f!2sIqra%20Private%20School%20Bahrain!5e0!3m2!1sen!2sbh!4v1714000000000!5m2!1sen!2sbh" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
