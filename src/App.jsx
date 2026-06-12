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

    // Intersection Observer for scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [loaded]);

  return (
    <>
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
