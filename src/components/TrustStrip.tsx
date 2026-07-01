import { useEffect, useRef } from 'react';
import { Shield, Volume2, Zap, Sparkles } from 'lucide-react';

const trusts = [
  {
    icon: Shield,
    title: 'Weatherproof',
    desc: 'Engineered to withstand monsoons, dust storms, and extreme heat',
  },
  {
    icon: Volume2,
    title: 'Soundproof',
    desc: 'Superior acoustic insulation for peaceful, serene interiors',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    desc: 'Multi-chamber profiles reduce heat transfer and lower energy bills',
  },
  {
    icon: Sparkles,
    title: 'Elegant Design',
    desc: 'Slim sight lines and premium finishes for architectural excellence',
  },
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.trust-card');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards2 = ref.current?.querySelectorAll('.trust-card');
            cards2?.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust" ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #111008 50%, #0D0D0D 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trusts.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="trust-card reveal trust-icon text-center p-8 rounded-2xl glass-card group cursor-default"
              style={{ transitionDelay: '0ms' }}
            >
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                  border: '1px solid rgba(201,168,76,0.3)',
                  boxShadow: '0 0 20px rgba(201,168,76,0.1)',
                }}
              >
                <Icon size={22} style={{ color: '#C9A84C' }} />
              </div>
              <h3
                className="font-semibold mb-2 tracking-wide"
                style={{ color: '#F5F0E8', fontSize: '0.95rem' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6355' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />
    </section>
  );
}
