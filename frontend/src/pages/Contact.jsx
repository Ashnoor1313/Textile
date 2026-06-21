import React from 'react';
import InquiryForm from '../sections/InquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const departments = [
    { name: 'Export & Trade Sales', email: 'trade@textiliaweavers.com', hours: 'Mon - Sat (09:00 - 18:00 IST)' },
    { name: 'Production & OEM specs', email: 'weaving@textiliaweavers.com', hours: 'Mon - Fri (09:00 - 17:00 IST)' },
    { name: 'Logistics & Dispatch', email: 'shipping@textiliaweavers.com', hours: 'Mon - Sat (10:00 - 18:00 IST)' }
  ];

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            GET IN TOUCH
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            Contact Our Offices
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl">
            Reach out directly to specific departments or submit an RFQ. Our team responds within 1 business day.
          </p>
        </div>

        {/* Global Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Physical Address */}
          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-4">
            <MapPin className="w-6 h-6 text-accent-gold" />
            <h3 className="font-heading text-sm font-bold text-text-light uppercase tracking-wider">Mill Headquarters</h3>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              Block D, Export Promotion Zone, Industrial Area, Sector 5, Uttar Pradesh, India
            </p>
          </div>

          {/* Phone Lines */}
          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-4">
            <Phone className="w-6 h-6 text-accent-gold" />
            <h3 className="font-heading text-sm font-bold text-text-light uppercase tracking-wider">Direct Phone Lines</h3>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              +91 11 4050 9988 (Hotline)<br />
              +91 98110 55660 (Corporate WhatsApp)
            </p>
          </div>

          {/* General Email */}
          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-4">
            <Mail className="w-6 h-6 text-accent-gold" />
            <h3 className="font-heading text-sm font-bold text-text-light uppercase tracking-wider">General Mailbox</h3>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              info@textiliaweavers.com<br />
              trade@textiliaweavers.com
            </p>
          </div>

        </div>

        {/* Department emails routing */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">DIRECTORY</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-light mt-2">Department Contacts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-primary-dark border border-surface-border p-8 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-accent-gold/20 group-hover:bg-accent-gold/50 transition-colors"></div>
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-accent-gold/20 group-hover:bg-accent-gold/50 transition-colors"></div>

                <div className="flex flex-col gap-4 font-body">
                  <h4 className="font-heading text-lg font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    {dept.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-accent-gold">
                    <Mail className="w-4 h-4" />
                    <span>{dept.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Clock className="w-4 h-4 text-text-muted" />
                    <span>{dept.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Mount dynamic lead form */}
      <InquiryForm />
    </div>
  );
};

export default Contact;
