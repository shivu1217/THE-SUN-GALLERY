import { Instagram, Facebook, Youtube } from 'lucide-react';

const navGroups = [
  {
    title: 'Products',
    links: ['uPVC Windows', 'uPVC Doors', 'Shower Partitions', 'Saint-Gobain Range', 'Sumai Doors'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Why Choose Us', 'Gallery', 'Contact'],
  },
  {
    title: 'Services',
    links: ['Free Site Visit', 'Custom Measurement', 'Installation', 'After-Sales Support'],
  },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8 px-6"
      style={{ borderTop: '1px solid rgba(201,168,76,0.1)', background: '#080700' }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="8" fill="url(#footerSunGrad)" />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                    <line
                      key={i}
                      x1="20" y1="20"
                      x2={20 + 18 * Math.cos((deg * Math.PI) / 180)}
                      y2={20 + 18 * Math.sin((deg * Math.PI) / 180)}
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  ))}
                  <defs>
                    <radialGradient id="footerSunGrad">
                      <stop offset="0%" stopColor="#F0C96A" />
                      <stop offset="100%" stopColor="#9A7535" />
                    </radialGradient>
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
                  MYSURU, KARNATAKA
                </div>
              </div>
            </div>

            <p
              className="text-sm mb-3 italic"
              style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}
            >
              "Premium uPVC Doors & Windows.
              <br />
              Sealed for Elegance."
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A4035' }}>
              Mysuru's premier Saint-Gobain authorized showroom for luxury 
              uPVC doors, windows, and shower partitions.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: '#C9A84C',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map(group => (
            <div key={group.title}>
              <h4
                className="font-semibold mb-4 text-xs tracking-[0.15em] uppercase"
                style={{ color: '#F5F0E8' }}
              >
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map(link => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#products')}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#4A4035' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#4A4035')}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}
        >
          <p className="text-xs" style={{ color: '#2A2015' }}>
            © {new Date().getFullYear()} The Sun Gallery, Mysuru. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#2A2015' }}>
            Saint-Gobain Authorized Partner · Sumai Certified Installer
          </p>
        </div>
      </div>
    </footer>
  );
}
