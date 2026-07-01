import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Saint-Gobain uPVC Casement Window',
    category: 'Windows',
    description:
      'Precision-engineered multi-chamber uPVC profiles with double-sealed gaskets for maximum thermal and acoustic performance. Ideal for bedrooms and living spaces demanding uncompromised quietude.',
    features: ['Double/Triple glazing', 'Multi-point locking', 'Tilt & turn option', '20-year frame warranty'],
    price: 'Starting ₹850/sq.ft',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Sumai Pre-Hinged Premium Door',
    category: 'Doors',
    description:
      'Factory pre-hung on precision-calibrated uPVC frames. Arrives ready-to-install with all hardware fitted — eliminating on-site alignment errors for a flawless, plumb installation every time.',
    features: ['Pre-calibrated hinges', 'Anti-warp frame', 'Flush bottom seal', 'Available in 20+ finishes'],
    price: 'Starting ₹1,200/sq.ft',
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'Saint-Gobain Sliding Window',
    category: 'Windows',
    description:
      'Smooth-glide stainless steel track system with soft-close dampers. Wide panoramic sight lines bring the outdoors in while multi-layer weatherstripping keeps the elements out.',
    features: ['Smooth glide track', 'Mosquito mesh included', 'Wide view sightlines', 'Powder-coated hardware'],
    price: 'Starting ₹750/sq.ft',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Saint-Gobain Shower Partition',
    category: 'Shower',
    description:
      'Frameless and semi-frameless tempered glass shower enclosures. Precision-cut panels with chrome or matte-gold hardware elevate your bathroom into a boutique hotel experience.',
    features: ['8mm/10mm tempered glass', 'Anti-limescale coating', 'Chrome & gold hardware', 'Leak-proof base seal'],
    price: 'Starting ₹1,800/sq.ft',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Trending',
  },
  {
    id: 5,
    name: 'Sumai Pre-Hung French Door',
    category: 'Doors',
    description:
      'Elegant double-leaf French doors with slim sightlines and expansive glass panels. Perfect for connecting living rooms to balconies or gardens with architectural drama.',
    features: ['Double-leaf design', 'Slim 70mm profile', 'Multi-point lock', 'Custom sizing available'],
    price: 'Starting ₹2,200/sq.ft',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Saint-Gobain Bay Window',
    category: 'Windows',
    description:
      'Projecting bay configuration adds dimension and floods interiors with light. Custom angles (30°, 45°, 90°) crafted to your architectural specification for a truly bespoke result.',
    features: ['Custom angle configurations', 'Structural support included', 'Panoramic glass', 'Premium sealing'],
    price: 'Starting ₹1,100/sq.ft',
    image: 'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(1000px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateY(-8px) scale(1.01)`;
      el.style.transition = 'transform 0.08s ease';
    };

    const handleLeave = () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
      setHovered(false);
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    el.addEventListener('mouseenter', () => setHovered(true));
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className="product-card-3d rounded-2xl overflow-hidden cursor-default"
      style={{
        background: 'linear-gradient(135deg, rgba(26,20,0,0.9) 0%, rgba(13,13,13,0.95) 100%)',
        border: '1px solid rgba(201,168,76,0.15)',
        boxShadow: hovered
          ? '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.12)'
          : '0 4px 30px rgba(0,0,0,0.3)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 260 }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.9) 100%)',
          }}
        />
        {product.badge && (
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #9A7535)',
              color: '#0D0D0D',
            }}
          >
            {product.badge}
          </div>
        )}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium tracking-wider"
          style={{
            background: 'rgba(13,13,13,0.7)',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C',
            backdropFilter: 'blur(10px)',
          }}
        >
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mb-2 font-bold"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.15rem',
            color: '#F5F0E8',
          }}
        >
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6355' }}>
          {product.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {product.features.map(f => (
            <div key={f} className="flex items-center gap-1.5">
              <div
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: '#C9A84C' }}
              />
              <span className="text-xs" style={{ color: '#8A7A60' }}>
                {f}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="price-tag">{product.price}</span>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 group"
            style={{ color: '#C9A84C' }}
          >
            Enquire
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.prod-reveal');
    if (!cards) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cards.forEach((card, i) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(50px)';
      (card as HTMLElement).style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 px-6 relative">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0A0900 50%, #0D0D0D 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 prod-reveal">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Our Collection
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}
          >
            Crafted for <span className="text-gold-gradient">Distinction</span>
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mt-6 max-w-xl mx-auto text-base" style={{ color: '#6B6355' }}>
            Every product in our collection is sourced from Saint-Gobain and Sumai — 
            brands trusted by architects and interior designers worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="prod-reveal">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-10 text-sm" style={{ color: '#4A4035' }}>
          Prices shown are indicative. Contact us for a custom quote tailored to your project.
        </p>
      </div>
    </section>
  );
}
