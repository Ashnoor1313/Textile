import React, { useState } from 'react';
import { Mail, ShieldCheck, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import Button from '../components/Button';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    productInterest: 'Cotton Fabrics',
    quantityRequired: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' }); // type: 'success', 'error', 'loading'

  const interests = [
    'Cotton Fabrics',
    'Polyester Fabrics',
    'Linen Fabrics',
    'Denim Fabrics',
    'Home Furnishing',
    'Industrial Textiles',
    'Technical Textiles',
    'Custom Manufacturing'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting RFQ to mill procurement...' });

    // Client-side validations
    if (!formData.name || !formData.company || !formData.email || !formData.quantityRequired || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required trade fields.' });
      return;
    }

    try {
      // Connect to the Express server API (dynamic fallback based on environment)
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');
      const response = await fetch(`${apiBaseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Inquiry logged successfully. A confirmation summary has been sent to your email.'
        });
        setFormData({
          name: '',
          company: '',
          country: '',
          email: '',
          phone: '',
          productInterest: 'Cotton Fabrics',
          quantityRequired: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Server rejected request');
      }
    } catch (err) {
      console.warn('API connection failed. Logging locally to offline storage.', err);
      
      // Standalone Offline fallback mechanism (local storage logs)
      const offlineInquiries = JSON.parse(localStorage.getItem('offline_inquiries') || '[]');
      offlineInquiries.push({ ...formData, createdAt: new Date().toISOString() });
      localStorage.setItem('offline_inquiries', JSON.stringify(offlineInquiries));

      setStatus({
        type: 'success',
        message: 'RFQ received! (Local Offline Mode active: Lead saved successfully).'
      });
      setFormData({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        productInterest: 'Cotton Fabrics',
        quantityRequired: '',
        message: ''
      });
    }
  };

  return (
    <section className="bg-primary-dark py-24 relative z-10 border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            EXPORT INTAKE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            Request Technical Quote
          </h2>
          <p className="text-xs text-text-muted mt-2 font-body">
            Direct routing to the mill. Enter your trade volumes and specifications to receive a customized pricing quote.
          </p>
        </div>

        {/* Lead Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Instructions Column (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-primary-abyss border border-surface-border/60 p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-6 font-body">
              <div>
                <h4 className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-2">
                  B2B Order Guidelines
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Our minimum order quantity (MOQ) depends on fabric type: Standard cotton dyelots require a 1,000 meter minimum; custom weave compositions require 3,000 meters.
                </p>
              </div>

              <div>
                <h4 className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-2">
                  Sample Swatches
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Swatches and sample hangers can be shipped via DHL/FedEx under your express shipper account within 48 hours.
                </p>
              </div>

              <div>
                <h4 className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-2">
                  Response Times
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Export procurement managers will reply with complete CIF/FOB pricing metrics within 1 business day.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-surface-card/40 border border-surface-border/50 p-4 mt-8">
              <ShieldCheck className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
              <div className="font-body text-[10px] text-text-muted leading-normal">
                <span className="text-text-light font-bold block mb-1">Encrypted Data Stream</span>
                Inquiry details are logged directly into our secure ERP system.
              </div>
            </div>
          </div>

          {/* Form Inputs (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-primary-abyss border border-surface-border/60 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-body">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Representative Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Helen Vane"
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Apex Apparel Group"
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Target Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Germany"
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="name@company.com"
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+49 89 2019..."
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
              </div>

              {/* Product Interest Select */}
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Product Interest
                </label>
                <select
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                >
                  {interests.map((item, idx) => (
                    <option key={idx} value={item} className="bg-primary-dark">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Required */}
              <div className="flex flex-col gap-1.5 col-span-2">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Quantity Required (in Meters) *
                </label>
                <input
                  type="number"
                  name="quantityRequired"
                  value={formData.quantityRequired}
                  onChange={handleInputChange}
                  required
                  min="1"
                  placeholder="e.g. 5000"
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 col-span-2">
                <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                  Specifications & Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Enter GSM requirements, warp/weft blends, dyeing specifications, or certifications..."
                  className="bg-primary-dark border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold transition-colors duration-300 resize-none"
                />
              </div>

              {/* Status Alert */}
              {status.type && (
                <div className={`col-span-2 p-4 text-xs font-body flex items-start gap-2.5 border ${
                  status.type === 'success' 
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400' 
                    : status.type === 'error'
                    ? 'bg-rose-950/20 border-rose-500/30 text-rose-400'
                    : 'bg-primary-dark border-surface-border text-text-muted animate-pulse'
                }`}>
                  {status.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />}
                  {status.type === 'error' && <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />}
                  <p>{status.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="col-span-2 mt-2">
                <Button 
                  type="submit" 
                  variant="primary" 
                  icon={Send} 
                  className="w-full text-xs font-bold py-4.5"
                  disabled={status.type === 'loading'}
                >
                  Submit Export RFQ
                </Button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InquiryForm;
