export default function Location({ onReserve }) {
  return (
    <section id="location">
      <div className="location-grid">
        <div className="reveal">
          <div className="location-map">
            <iframe
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.6!2d76.556!3d15.112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA2JzQzLjIiTiA3NsKwMzMnMjEuNiJF!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lassi Lehar location on Google Maps"
            />
          </div>
        </div>

        <div className="location-info">
          <div>
            <span className="section-eyebrow reveal">Find Us</span>
            <h2 className="section-title reveal reveal-delay-1">Visit <em>Lassi Lehar</em></h2>
          </div>

          {[
            {
              icon: '📍',
              title: 'Address',
              content: 'Vijaya Circle, Sandur\nKarnataka — 583 119',
              link: null,
            },
            {
              icon: '🕐',
              title: 'Hours',
              content: 'Mon – Sun: 11:00 AM – 11:00 PM\nOpen all days, including holidays',
              link: null,
            },
            {
              icon: '📞',
              title: 'Phone',
              content: '+91 98765 43210',
              link: 'tel:+919876543210',
            },
            {
              icon: '✉️',
              title: 'Email',
              content: 'hello@lassilehar.in',
              link: 'mailto:hello@lassilehar.in',
            },
          ].map(({ icon, title, content, link }) => (
            <div className="location-detail reveal" key={title}>
              <div className="location-icon">{icon}</div>
              <div>
                <h4>{title}</h4>
                {link ? (
                  <a href={link}><p style={{ whiteSpace: 'pre-line' }}>{content}</p></a>
                ) : (
                  <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
                )}
              </div>
            </div>
          ))}

          <div className="location-buttons reveal">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Vijaya+Circle,+Sandur,+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="loc-btn loc-btn-primary"
            >
              Get Directions ↗
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20Lassi%20Lehar!"
              target="_blank"
              rel="noopener noreferrer"
              className="loc-btn loc-btn-outline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
