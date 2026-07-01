import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const doorRef = useRef<HTMLDivElement>(null);
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDoorOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #1A1200 0%, #0D0D0D 60%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Sunburst background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="sun-rays opacity-10"
          style={{
            width: '120vmax',
            height: '120vmax',
            backgroundImage: `repeating-conic-gradient(rgba(201,168,76,0.15) 0deg, rgba(201,168,76,0.15) 5deg, transparent 5deg, transparent 15deg)`,
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div
            className="hero-line-1 inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#C9A84C',
            }}
          >
            Saint-Gobain Authorized Partner · Mysuru
          </div>

          <h1
            className="hero-line-2 mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="text-gold-gradient">The Sun</span>
            <br />
            <span style={{ color: '#F5F0E8' }}>Gallery</span>
          </h1>

          <p
            className="hero-line-3 mb-4 text-lg font-light tracking-wide"
            style={{ color: '#C9A84C', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}
          >
            "Premium uPVC Doors & Windows. Sealed for Elegance."
          </p>

          <p
            className="hero-line-3 mb-10 max-w-lg text-base leading-relaxed"
            style={{ color: '#A09880' }}
          >
            Mysuru's premier showroom for Saint-Gobain luxury uPVC windows, doors, and shower
            partitions — engineered for beauty, built to last.
          </p>

          <div className="hero-line-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => scrollTo('#products')} className="btn-primary text-sm">
              Explore Collection
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-outline text-sm">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* 3D Door Visual */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative float-anim" style={{ width: 320, height: 420 }}>
            {/* Door frame */}
            <div
              className="absolute inset-0 rounded-t-3xl"
              style={{
                background: 'linear-gradient(135deg, #1C1400 0%, #0D0D0D 100%)',
                border: '2px solid rgba(201,168,76,0.4)',
                boxShadow: '0 0 60px rgba(201,168,76,0.2), inset 0 0 40px rgba(0,0,0,0.5)',
              }}
            />

            {/* Door panel (animated) */}
            <div
              ref={doorRef}
              className="absolute inset-2 rounded-t-2xl origin-left"
              style={{
                background: 'linear-gradient(135deg, #1A1200 0%, #141400 50%, #0D0D0D 100%)',
                border: '1px solid rgba(201,168,76,0.3)',
                transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: doorOpen
                  ? 'perspective(800px) rotateY(-72deg)'
                  : 'perspective(800px) rotateY(0deg)',
                transformOrigin: 'left center',
                boxShadow: '4px 0 20px rgba(0,0,0,0.6)',
              }}
            >
              {/* Glass panels */}
              {[0.15, 0.55].map((top, i) => (
                <div
                  key={i}
                  className="absolute left-4 right-4"
                  style={{
                    top: `${top * 100}%`,
                    height: '36%',
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(255,255,255,0.08) 50%, rgba(201,168,76,0.03) 100%)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                    }}
                  />
                </div>
              ))}

              {/* Handle */}
              <div
                className="absolute right-5"
                style={{
                  top: '47%',
                  width: 8,
                  height: 30,
                  background: 'linear-gradient(180deg, #F0C96A, #9A7535)',
                  borderRadius: 4,
                  boxShadow: '0 0 10px rgba(201,168,76,0.5)',
                }}
              />
            </div>

            {/* Frame accent lines */}
            <div
              className="absolute top-2 left-2 right-2"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)',
              }}
            />
            <div
              className="absolute bottom-2 left-2 right-2"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
              }}
            />

            {/* Glow base */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              style={{
                width: '80%',
                height: 40,
                background: 'radial-gradient(ellipse, rgba(201,168,76,0.25) 0%, transparent 70%)',
                filter: 'blur(10px)',
              }}
            />

            {/* Brand badge */}
            <div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
              style={{
                color: '#A09880',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Saint-Gobain Certified
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#trust')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-100 opacity-60"
        style={{ color: '#C9A84C' }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
