export default function CTA({ onReserve }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta">
      <span className="section-eyebrow reveal">A Table Awaits</span>
      <h2 className="cta-title reveal reveal-delay-1">
        Come, Taste<br />Sandur's <em>Finest</em>
      </h2>
      <p className="cta-sub reveal reveal-delay-2">
        Every moment at Lassi Lehar is crafted with care — from the first sip to the last bite.
      </p>
      <div className="cta-buttons reveal reveal-delay-3">
        <button className="btn-primary" onClick={() => scrollTo('menu')}>View Full Menu</button>
      </div>
    </section>
  );
}
