import { useEffect, useRef } from 'react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Modern uPVC casement windows installation',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Premium door installation',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Sliding window in luxury residence',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Shower partition installation',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'French door in villa project',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Bay window panoramic installation',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Contemporary window design',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Interior light filled with premium windows',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Minimalist door entrance',
    span: 'normal',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = sectionRef.current?.querySelector('.gallery-heading');
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) heading.classList.add('visible');
      },
      { threshold: 0.2 }
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 px-6 relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0D0D0D 0%, #0A0800 50%, #0D0D0D 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="gallery-heading reveal text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Our Work
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
            Installations That <span className="text-gold-gradient">Inspire</span>
          </h2>
          <div className="gold-divider mt-5" />
          <p className="mt-5 max-w-xl mx-auto text-sm" style={{ color: '#6B6355' }}>
            A curated selection of our finest installations across Mysuru — 
            from modern apartments to luxury villas and commercial spaces.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="masonry">
          {galleryImages.map((img, i) => (
            <div key={i} className="masonry-item group">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  aspectRatio: img.span === 'tall' ? '3/4' : '4/3',
                }}
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
              >
                <p className="text-xs font-medium tracking-wide" style={{ color: '#F5F0E8' }}>
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Plan Your Installation
          </button>
        </div>
      </div>
    </section>
  );
}
