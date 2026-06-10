const REVIEWS = [
  { id: 1, stars: 5, text: "Best lassi I've ever had outside of Rajasthan. The mango lassi is absolutely divine — thick, cold, and perfectly sweet. A hidden gem in Sandur!", name: 'Priya Shetty', initials: 'PS', location: 'Hospet', date: 'May 2026' },
  { id: 2, stars: 5, text: "The Chicken Cheese Pizza is unreal. Crispy base, generous toppings, and the service is incredibly warm. We visit every weekend without fail.", name: 'Rajan Kulkarni', initials: 'RK', location: 'Bellary', date: 'April 2026' },
  { id: 3, stars: 5, text: "Took my whole family for dinner — the kids loved the burgers, my wife couldn't stop raving about the Rose Lassi. An unforgettable evening.", name: 'Venkatesh Naidu', initials: 'VN', location: 'Sandur', date: 'June 2026' },
  { id: 4, stars: 5, text: "The Blue Lagoon mocktail is a showstopper! Beautiful presentation and incredible taste. The vibe of this place is unlike anything else in the region.", name: 'Ananya Reddy', initials: 'AR', location: 'Kudligi', date: 'May 2026' },
  { id: 5, stars: 5, text: "Paneer Tikka Pizza with a Virgin Mojito — what a combo! The café has such a cozy atmosphere, you never want to leave. Staff is friendly and attentive.", name: 'Mohammed Imran', initials: 'MI', location: 'Sandur', date: 'March 2026' },
  { id: 6, stars: 5, text: "The chocolate brownie with ice cream was the perfect end to a wonderful meal. Clean, beautiful interiors and genuinely heartfelt service.", name: 'Deepa Shivaraj', initials: 'DS', location: 'Toranagallu', date: 'June 2026' },
  { id: 7, stars: 5, text: "I brought friends from Bengaluru and they were blown away! Lassi Lehar is the kind of place that makes Sandur special. We'll definitely be back.", name: 'Kiran Patil', initials: 'KP', location: 'Bengaluru', date: 'May 2026' },
];

function StarRating({ count }) {
  return (
    <div className="review-stars">
      {Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <StarRating count={review.stars} />
      <p className="review-text">{review.text}</p>
      <div className="review-author">
        <div className="review-avatar">{review.initials}</div>
        <div>
          <div className="review-name">{review.name}</div>
          <div className="review-date">{review.location} · {review.date}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  // Duplicate for seamless infinite scroll
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews">
      <div className="reviews-header">
        <div>
          <span className="section-eyebrow reveal">What People Say</span>
          <h2 className="section-title reveal reveal-delay-1">Guest <em>Stories</em></h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.05rem',
            color: 'var(--cream-dim)',
            fontStyle: 'italic',
            marginTop: '20px',
            lineHeight: 1.7,
          }} className="reveal reveal-delay-2">
            Every visit leaves a memory. Here's what our guests are saying about their Lassi Lehar experience.
          </p>
        </div>
        <div className="reveal reveal-delay-2">
          <div className="rating-display">
            <div className="rating-num">4.9</div>
            <div className="rating-meta">
              <div className="stars">★★★★★</div>
              <div className="rating-count">Based on 340+ reviews</div>
            </div>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Google · 4.9★', 'Zomato · 4.8★'].map(src => (
              <div key={src} style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'var(--saffron)',
                border: '1px solid rgba(212,160,86,0.3)',
                padding: '6px 16px',
              }}>{src}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="reviews-carousel">
        <div className="reviews-track">
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
