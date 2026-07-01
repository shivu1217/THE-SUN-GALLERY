import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.contact-reveal');
    if (!items) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '8px',
    color: '#F5F0E8',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '0.875rem',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.target.style.borderColor = 'rgba(201,168,76,0.6)';
      e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.target.style.borderColor = 'rgba(201,168,76,0.2)';
      e.target.style.boxShadow = 'none';
    },
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 60%), #0A0800',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="contact-reveal text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}
          >
            Start Your <span className="text-gold-gradient">Project</span>
          </h2>
          <div className="gold-divider mt-5" />
          <p className="mt-5 max-w-xl mx-auto text-sm" style={{ color: '#6B6355' }}>
            Tell us about your space and we'll schedule a free site visit and measurement.
            No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Address */}
            <div
              className="contact-reveal p-6 rounded-2xl glass-card"
              style={{ border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <MapPin size={18} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm" style={{ color: '#F5F0E8' }}>
                    Showroom Address
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6355' }}>
                    7919D, 5th Main Rd, near Marimallappa School,
                    <br />
                    2nd Phase, Vijayanagar 4th Stage,
                    <br />
                    Bhogadi, Mysuru, Karnataka 570032
                  </p>
                </div>
              </div>
            </div>

            {/* Call / WhatsApp */}
            <div
              className="contact-reveal p-6 rounded-2xl glass-card"
              style={{ border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <Phone size={18} style={{ color: '#C9A84C' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-3 text-sm" style={{ color: '#F5F0E8' }}>
                    Call or WhatsApp
                  </p>
                  <a href="tel:+919901090509" className="btn-primary text-xs block text-center mb-2">
                    <span className="flex items-center justify-center gap-2">
                      <Phone size={13} />
                      Call Now
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919901090509?text=Hi%2C%20I'm%20interested%20in%20your%20uPVC%20doors%20and%20windows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 px-4 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-90"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      color: '#fff',
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle size={13} />
                      Chat on WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="contact-reveal p-6 rounded-2xl glass-card"
              style={{ border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <Clock size={18} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm" style={{ color: '#F5F0E8' }}>
                    Showroom Hours
                  </p>
                  <p className="text-sm" style={{ color: '#6B6355' }}>
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p className="text-sm" style={{ color: '#6B6355' }}>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <div className="contact-reveal lg:col-span-3">
            <div
              className="p-8 rounded-2xl h-full"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(201,168,76,0.15)',
                      border: '2px solid #C9A84C',
                    }}
                  >
                    <CheckCircle size={32} style={{ color: '#C9A84C' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#F5F0E8',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    Thank You!
                  </h3>
                  <p className="max-w-xs" style={{ color: '#8A7A60', fontSize: '0.9rem' }}>
                    Deepak will reach out within 24 hours to schedule your free consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="mb-6 font-bold"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#F5F0E8',
                      fontSize: '1.3rem',
                    }}
                  >
                    Request a Free Quote
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs mb-1.5 font-medium"
                          style={{ color: '#8A7A60' }}
                        >
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Your name"
                          style={inputBase}
                          {...focusHandlers}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs mb-1.5 font-medium"
                          style={{ color: '#8A7A60' }}
                        >
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="+91 99010 90509"
                          style={inputBase}
                          {...focusHandlers}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs mb-1.5 font-medium"
                        style={{ color: '#8A7A60' }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        style={inputBase}
                        {...focusHandlers}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs mb-1.5 font-medium"
                        style={{ color: '#8A7A60' }}
                      >
                        Product Interest
                      </label>
                      <select
                        value={form.product}
                        onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                        style={{ ...inputBase, appearance: 'none' as const }}
                        onFocus={e => {
                          e.target.style.borderColor = 'rgba(201,168,76,0.6)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)';
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = 'rgba(201,168,76,0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <option value="" style={{ background: '#1A1A1A' }}>
                          Select a product type
                        </option>
                        <option value="casement" style={{ background: '#1A1A1A' }}>
                          uPVC Casement Windows
                        </option>
                        <option value="sliding" style={{ background: '#1A1A1A' }}>
                          uPVC Sliding Windows
                        </option>
                        <option value="bay" style={{ background: '#1A1A1A' }}>
                          Bay Windows
                        </option>
                        <option value="pre-hinged" style={{ background: '#1A1A1A' }}>
                          Sumai Pre-Hinged Doors
                        </option>
                        <option value="french" style={{ background: '#1A1A1A' }}>
                          French Doors
                        </option>
                        <option value="shower" style={{ background: '#1A1A1A' }}>
                          Shower Partitions
                        </option>
                        <option value="other" style={{ background: '#1A1A1A' }}>
                          Other / Mixed
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-xs mb-1.5 font-medium"
                        style={{ color: '#8A7A60' }}
                      >
                        Project Details
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Tell us about your project — property type, approximate dimensions, timeline..."
                        style={{ ...inputBase, resize: 'vertical' as const }}
                        onFocus={e => {
                          e.target.style.borderColor = 'rgba(201,168,76,0.6)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)';
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = 'rgba(201,168,76,0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                      ) : (
                        <Send size={14} />
                      )}
                      {loading ? 'Sending...' : 'Request Free Quote'}
                    </button>

                    <p className="text-xs text-center" style={{ color: '#4A4035' }}>
                      We respond within 24 hours. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className="contact-reveal mt-8 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(201,168,76,0.15)', height: 360 }}
        >
          <iframe
            title="The Sun Gallery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.876!2d76.5724!3d12.3116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a0e0e0e0e0e%3A0x0!2sVijayanagar%204th%20Stage%2C%20Bhogadi%2C%20Mysuru%2C%20Karnataka%20570032!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
