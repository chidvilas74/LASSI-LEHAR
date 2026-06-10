import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <button className="nav-logo" onClick={() => scrollTo('hero')}>Lassi Lehar</button>
        <ul className="nav-links">
          {[['hero','Home'],['menu','Menu'],['about','About'],['gallery','Gallery'],['reviews','Reviews'],['location','Contact']].map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      <div id="mobile-menu" className={mobileOpen ? 'open' : ''} role="dialog" aria-modal="true">
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        {[['hero','Home'],['menu','Menu'],['about','About'],['gallery','Gallery'],['reviews','Reviews'],['location','Contact']].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
        ))}
      </div>
    </>
  );
}
