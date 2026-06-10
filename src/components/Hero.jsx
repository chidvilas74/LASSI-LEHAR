import { useEffect, useRef } from 'react';

export default function Hero({ onReserve }) {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.35;
        bgRef.current.style.transform = `scale(1.1) translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div
        className="hero-bg-img"
        ref={bgRef}
        style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
      />
      <div className="hero-gradient" />
      <div className="hero-side-grad" />

      {/* Floating decorative Devanagari */}
      <div className="hero-deco" style={{
        top: '18%', left: '4%', opacity: 0.1,
        fontSize: 'clamp(8rem,14vw,16rem)', color: 'var(--saffron)',
        transform: 'rotate(-15deg)', lineHeight: 1, zIndex: 5
      }}>ल</div>
      <div className="hero-deco" style={{
        bottom: '22%', right: '3%', opacity: 0.06,
        fontSize: 'clamp(6rem,10vw,12rem)', color: 'var(--cream)',
        transform: 'rotate(12deg)', lineHeight: 1, zIndex: 5
      }}>◦</div>

      <div className="hero-content">
        <p className="hero-eyebrow">Est. Sandur · Karnataka · India</p>
        <h1 className="hero-title"><em>Lassi</em> Lehar</h1>
        <p className="hero-subtitle">Authentic Café Experience in Sandur</p>
        <p className="hero-location">📍 Vijaya Circle, Sandur — Karnataka 583119</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('menu')}>View Menu</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
