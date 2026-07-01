import { useEffect, useRef } from 'react';
import { Award, Wrench, Ruler, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Materials',
    desc: 'All profiles sourced exclusively from Saint-Gobain — the global gold standard for glass and uPVC manufacturing, ISO 9001:2015 certified.',
    stat: '30+',
    statLabel: 'Years of Saint-Gobain trust',
  },
  {
    icon: Wrench,
    title: 'Premium Hinging Technology',
    desc: 'Sumai pre-hung doors arrive factory-set on calibrated hinges — no on-site alignment guesswork, guaranteed perfect operation from day one.',
    stat: '100%',
    statLabel: 'Factory pre-calibrated',
  },
  {
    icon: Ruler,
    title: 'Custom-Fit Installation',
    desc: "Our in-house team measures, fabricates, and installs to your exact specifications. No standard sizes — everything is built to your home's unique dimensions.",
    stat: '500+',
    statLabel: 'Projects delivered',
  },
  {
    icon: Shield,
    title: 'Warranty-Backed Craftsmanship',
    desc: 'Comprehensive after-sales support and warranty on all products. We stand behind every frame, seal, and fitting we install.',
    stat: '10yr',
    statLabel: 'Structural warranty',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.why-card');
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
      { threshold: 0.15 }
    );

    items.forEach((item, i) => {
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transform = 'translateY(40px)';
      (item as HTMLElement).style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 60%), #0D0D0D',
        }}
      />

      {/* Decorative lines */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 why-card">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            The Difference
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
            Why Choose <span className="text-gold-gradient">The Sun Gallery</span>
          </h2>
          <div className="gold-divider mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, desc, stat, statLabel }) => (
            <div
              key={title}
              className="why-card group p-8 rounded-2xl glass-card relative overflow-hidden"
              style={{ cursor: 'default' }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(201,168,76,0.06) 0%, transparent 60%)',
                }}
              />

              <div className="flex gap-6 relative z-10">
                <div
                  className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}
                >
                  <Icon size={22} style={{ color: '#C9A84C' }} />
                </div>

                <div className="flex-1">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#F5F0E8',
                      fontSize: '1.15rem',
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6355' }}>
                    {desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl font-black"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        background: 'linear-gradient(135deg, #F0C96A, #C9A84C)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat}
                    </span>
                    <span className="text-xs" style={{ color: '#5A5040' }}>
                      {statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
