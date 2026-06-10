import { useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useState } from 'react';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    // Custom cursor
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let ringX = 0, ringY = 0;
    let curX = 0, curY = 0;

    const moveCursor = (e) => {
      curX = e.clientX;
      curY = e.clientY;
      if (dot) { dot.style.left = curX + 'px'; dot.style.top = curY + 'px'; }
    };

    const animateRing = () => {
      ringX += (curX - ringX) * 0.12;
      ringY += (curY - ringY) * 0.12;
      if (ring) { ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; }
      requestAnimationFrame(animateRing);
    };

    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });
    animateRing();

    // Intersection Observer for scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      revealObserver.disconnect();
    };
  }, [loaded]);

  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

      <Loader onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          <Navbar />
          <Hero />
          <MarqueeStrip />
          <About />
          <div className="gold-divider" />
          <Menu />
          <div className="gold-divider" />
          <Reviews />
          <div className="gold-divider" />
          <Gallery />
          <div className="gold-divider" />
          <Location />
          <CTA />
          <Footer />
          <WhatsAppFloat />
        </>
      )}
    </>
  );
}
