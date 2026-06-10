export default function About() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual reveal">
          <img
            src="/images/about-cafe.png"
            alt="Lassi Lehar café interior — warm rustic ambiance"
            className="about-img-main"
          />
          <div className="about-accent-card">
            <div className="about-accent-num">100+</div>
            <div className="about-accent-label">Recipes Crafted with Love</div>
          </div>
        </div>

        <div className="about-text">
          <span className="section-eyebrow reveal">Our Story</span>
          <h2 className="section-title reveal reveal-delay-1">
            Where Flavour<br />Meets <em>Heart</em>
          </h2>
          <p className="about-body reveal reveal-delay-2">
            Nestled at the heart of Sandur's Vijaya Circle, Lassi Lehar was born from a simple belief —
            that great food and genuine warmth belong together. What began as a neighbourhood dream has
            grown into the most beloved café in town, where families gather, friends linger, and every
            visit feels like coming home.
          </p>

          <div className="about-features reveal reveal-delay-3">
            {[
              { icon: '🥛', title: 'Farm-Fresh Lassi', desc: 'Every glass crafted daily from the freshest local dairy — rich, chilled, and deeply satisfying.' },
              { icon: '🍕', title: 'Stone-Fired Perfection', desc: 'Our pizzas are slow-cooked in a traditional oven with hand-stretched dough and premium toppings.' },
              { icon: '🌿', title: 'Local Ingredients', desc: 'We source herbs, vegetables, and spices from local Karnataka farmers — fresh every single morning.' },
              { icon: '🏡', title: 'Family-Friendly Atmosphere', desc: 'A warm, inviting space designed for every generation — from children\'s favourites to date-night dining.' },
            ].map(({ icon, title, desc }) => (
              <div className="about-feature" key={title}>
                <div className="about-feature-icon">{icon}</div>
                <div className="about-feature-content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-4">
            <button className="btn-primary" onClick={() => scrollTo('menu')}>Explore Our Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}
