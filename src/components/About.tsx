import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = sectionRef.current?.querySelector('.about-left');
    const right = sectionRef.current?.querySelector('.about-right');
    if (!left || !right) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          left.classList.add('visible');
          setTimeout(() => right.classList.add('visible'), 200);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%), #0D0D0D',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="about-left reveal-left">
            <div className="relative">
              {/* Frame decoration */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-tl-2xl"
                style={{ border: '2px solid rgba(201,168,76,0.3)', borderRight: 'none', borderBottom: 'none' }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-br-2xl"
                style={{ border: '2px solid rgba(201,168,76,0.3)', borderLeft: 'none', borderTop: 'none' }}
              />

              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Deepak Shetty — Owner, The Sun Gallery"
                  className="w-full object-cover"
                  style={{ height: 520, objectPosition: 'center top' }}
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(13,13,13,0.6) 100%)',
                  }}
                />
              </div>

              {/* Stat badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-3 rounded-xl glass-card"
                style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <div
                  className="text-2xl font-black"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(135deg, #F0C96A, #C9A84C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  10+
                </div>
                <div className="text-xs tracking-wide" style={{ color: '#A09880' }}>
                  Years of Expertise
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about-right reveal-right">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#C9A84C' }}
            >
              Our Story
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                color: '#F5F0E8',
                lineHeight: 1.15,
              }}
            >
              Built on Craft,
              <br />
              Grounded in <span className="text-gold-gradient">Trust</span>
            </h2>

            <div
              className="flex items-start gap-3 mb-6 p-5 rounded-xl"
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Quote size={20} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
              <p
                className="italic leading-relaxed"
                style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}
              >
                "I started The Sun Gallery with one belief — that every home deserves windows and
                doors that are as beautiful as they are strong."
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="leading-relaxed" style={{ color: '#8A7A60', fontSize: '0.95rem' }}>
                Founded by <strong style={{ color: '#F5F0E8' }}>Deepak Shetty</strong> in the heart
                of Mysuru, The Sun Gallery has grown from a single showroom into the city's most trusted
                source for premium uPVC doors, windows, and shower partitions.
              </p>
              <p className="leading-relaxed" style={{ color: '#8A7A60', fontSize: '0.95rem' }}>
                As an authorized Saint-Gobain partner, we bring global manufacturing precision to local
                projects — whether it's a two-bedroom apartment in Vijayanagar or a sprawling villa in
                the outskirts of Mysuru.
              </p>
              <p className="leading-relaxed" style={{ color: '#8A7A60', fontSize: '0.95rem' }}>
                Every product we install carries our personal warranty of quality. We measure, fabricate,
                and fit — and we're still here five years later if you need us.
              </p>
            </div>

            {/* Owner card */}
            <div
              className="flex items-center gap-4 p-5 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #9A7535)',
                  color: '#0D0D0D',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                DS
              </div>
              <div>
                <div className="font-semibold" style={{ color: '#F5F0E8' }}>
                  Deepak Shetty
                </div>
                <div className="text-xs" style={{ color: '#6B6355' }}>
                  Founder & Managing Director, The Sun Gallery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
