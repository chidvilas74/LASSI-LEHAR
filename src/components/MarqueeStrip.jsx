export default function MarqueeStrip() {
  const items = [
    'Fresh Lassi', '·', 'Stone-Fired Pizza', '·',
    'Craft Mocktails', '·', 'Family Dining', '·',
    'Sandur\'s Favourite', '·', 'Since Day One', '·',
  ];
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
