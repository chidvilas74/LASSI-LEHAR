import { useState, useEffect, useCallback } from 'react';

const GALLERY_ITEMS = [
  { id: 1,  src: '/images/chicken-pizza.png',    caption: 'Chicken Cheese Pizza',   cat: 'food',   tall: false },
  { id: 3,  src: '/images/mango-lassi.png',      caption: 'Mango Lassi',            cat: 'drinks', tall: false },
  { id: 4,  src: '/images/paneer-pizza.png',     caption: 'Paneer Tikka Pizza',     cat: 'food',   tall: false },
  { id: 5,  src: '/images/rose-lassi.png',       caption: 'Rose Lassi',             cat: 'drinks', tall: true  },
  { id: 6,  src: '/images/veg-supreme.png',      caption: 'Veg Supreme Pizza',      cat: 'food',   tall: false },
  { id: 7,  src: '/images/virgin-mojito.png',    caption: 'Virgin Mojito',          cat: 'drinks', tall: false },
  { id: 8,  src: '/images/chicken-burger.png',   caption: 'Crispy Chicken Burger',  cat: 'food',   tall: true  },
  { id: 9,  src: '/images/blue-lagoon.png',      caption: 'Blue Lagoon Mocktail',   cat: 'drinks', tall: false },
  { id: 11, src: '/images/cold-coffee.png',      caption: 'Cold Coffee',            cat: 'drinks', tall: false },
  { id: 12, src: '/images/chocolate-brownie.png',caption: 'Chocolate Brownie',      cat: 'food',   tall: true  },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'food', label: 'Food' },
  { key: 'drinks', label: 'Drinks' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  const visible = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.cat === activeFilter);

  const openLightbox = (idx) => setLightbox({ open: true, idx });
  const closeLightbox = useCallback(() => setLightbox(lb => ({ ...lb, open: false })), []);
  const prevImg = useCallback(() => setLightbox(lb => ({ ...lb, idx: (lb.idx - 1 + visible.length) % visible.length })), [visible.length]);
  const nextImg = useCallback(() => setLightbox(lb => ({ ...lb, idx: (lb.idx + 1) % visible.length })), [visible.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open, closeLightbox, prevImg, nextImg]);

  return (
    <section id="gallery">
      <div className="gallery-header">
        <span className="section-eyebrow reveal">Visual Feast</span>
        <h2 className="section-title reveal reveal-delay-1">The <em>Gallery</em></h2>
        <div className="gallery-filters reveal reveal-delay-2">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`gallery-filter${activeFilter === key ? ' active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="masonry-grid">
        {visible.map((item, idx) => (
          <div
            className="masonry-item"
            key={item.id}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.caption}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="masonry-img"
              loading="lazy"
              style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
            />
            <div className="masonry-overlay">
              <span className="masonry-overlay-icon">⊕</span>
              <span className="masonry-overlay-label">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div
        id="lightbox"
        className={lightbox.open ? 'active' : ''}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={(e) => e.target === e.currentTarget && closeLightbox()}
      >
        <button id="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
        {lightbox.open && visible[lightbox.idx] && (
          <>
            <img
              id="lightbox-img"
              src={visible[lightbox.idx].src}
              alt={visible[lightbox.idx].caption}
            />
            <div id="lightbox-caption">{visible[lightbox.idx].caption}</div>
          </>
        )}
        <button id="lightbox-prev" onClick={prevImg} aria-label="Previous">‹</button>
        <button id="lightbox-next" onClick={nextImg} aria-label="Next">›</button>
      </div>
    </section>
  );
}
