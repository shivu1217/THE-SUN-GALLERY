import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(13,13,13,0.96)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="20" cy="20" r="8" fill="url(#sunGrad)" />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                <line
                  key={i}
                  x1="20" y1="20"
                  x2={20 + 18 * Math.cos((deg * Math.PI) / 180)}
                  y2={20 + 18 * Math.sin((deg * Math.PI) / 180)}
                  stroke="url(#rayGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              ))}
              <defs>
                <radialGradient id="sunGrad" cx="50%" cy="30%">
                  <stop offset="0%" stopColor="#F0C96A" />
                  <stop offset="100%" stopColor="#9A7535" />
                </radialGradient>
                <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F0C96A" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <div
              className="font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Playfair Display, serif', color: '#F0C96A' }}
            >
              The Sun Gallery
            </div>
            <div className="text-xs tracking-widest" style={{ color: '#A09880', fontSize: '9px' }}>
              MYSURU
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button key={item.label} onClick={() => scrollTo(item.href)} className="nav-link">
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#C9A84C' }}
          >
            <Phone size={14} />
            <span className="tracking-wide">Call Now</span>
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-xs py-2.5 px-5"
          >
            Free Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: '#C9A84C' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-400 overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0',
          background: 'rgba(13,13,13,0.98)',
          borderTop: open ? '1px solid rgba(201,168,76,0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-left nav-link py-2"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contact')} className="btn-primary text-center mt-2">
            Get Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
