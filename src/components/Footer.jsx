export default function Footer({ onReserve }) {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-brand-name">Lassi Lehar</div>
          <p className="footer-tagline">
            "Where every glass of lassi tells a story, and every pizza slice is a memory."
            <br />— Sandur's favourite café, always.
          </p>
          <div className="footer-social">
            {[
              { label: 'IG', href: '#', title: 'Instagram' },
              { label: 'FB', href: '#', title: 'Facebook' },
              { label: 'YT', href: '#', title: 'YouTube' },
              { label: 'WA', href: 'https://wa.me/919999999999', title: 'WhatsApp' },
            ].map(({ label, href, title }) => (
              <a key={label} href={href} title={title} aria-label={title} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            {[['hero','Home'],['menu','Menu'],['about','About'],['gallery','Gallery'],['reviews','Reviews'],['location','Contact']].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-col">
          <h5>Hours</h5>
          <p>
            Monday – Sunday<br />
            11:00 AM – 11:00 PM<br /><br />
            <span style={{ color: 'var(--saffron)', fontSize: '0.7rem' }}>Open all holidays</span>
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h5>Contact</h5>
          <p>
            Vijaya Circle, Sandur<br />
            Karnataka — 583 119<br /><br />
            <a href="tel:+919876543210" style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}>+91 98765 43210</a><br />
            <a href="mailto:hello@lassilehar.in" style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}>hello@lassilehar.in</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {year} Lassi Lehar. All rights reserved. · Sandur, Karnataka.</p>
        <p className="footer-credits">Crafted with ♥ — Authentic Café Experience</p>
      </div>
    </footer>
  );
}
