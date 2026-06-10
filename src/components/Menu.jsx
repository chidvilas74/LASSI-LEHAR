import { useState } from 'react';

const ALL_ITEMS = [
  {
    id: 1, cat: 'pizza', featured: true,
    img: '/images/chicken-pizza.png',
    badge: "Chef's Special",
    catLabel: 'Signature Pizza',
    name: 'Chicken Cheese Pizza',
    desc: 'Tender grilled chicken, triple-cheese blend, roasted jalapeños on our signature stone-baked base.',
    price: '249',
  },
  {
    id: 2, cat: 'pizza',
    img: '/images/paneer-pizza.png',
    catLabel: 'Pizza',
    name: 'Paneer Tikka Pizza',
    desc: 'Smoky marinated paneer, bell peppers, onions, and tangy tikka sauce on a crisp base.',
    price: '219',
  },
  {
    id: 3, cat: 'pizza',
    img: '/images/veg-supreme.png',
    catLabel: 'Pizza',
    name: 'Veg Supreme',
    desc: 'Loaded with fresh vegetables, mushrooms, olives, and a generous mozzarella stretch.',
    price: '189',
  },
  {
    id: 4, cat: 'burger',
    img: '/images/chicken-burger.png',
    catLabel: 'Burgers',
    name: 'Chicken Crispy Burger',
    desc: 'Double crispy fried chicken, coleslaw, pickles, and our signature smoky sauce in a toasted brioche bun.',
    price: '159',
  },
  {
    id: 5, cat: 'burger',
    img: '/images/aloo-tikki-burger.png',
    catLabel: 'Burgers',
    name: 'Classic Aloo Tikki',
    desc: 'Spiced potato patty, mint chutney, crunchy lettuce, and fresh tomato in a soft sesame bun.',
    price: '99',
  },
  {
    id: 6, cat: 'lassi',
    img: '/images/mango-lassi.png',
    catLabel: 'Lassi',
    name: 'Mango Lassi',
    desc: 'Chilled Alphonso mango blended with thick curd and a whisper of cardamom. Our house signature.',
    price: '79',
  },
  {
    id: 7, cat: 'lassi',
    img: '/images/rose-lassi.png',
    catLabel: 'Lassi',
    name: 'Rose Lassi',
    desc: 'Velvety sweet curd infused with rose essence, garnished with pistachios and saffron threads.',
    price: '69',
  },
  {
    id: 8, cat: 'mocktail',
    img: '/images/virgin-mojito.png',
    catLabel: 'Mocktails',
    name: 'Virgin Mojito',
    desc: 'Freshly muddled mint, lime, and sugar over crushed ice — a refreshing classic, perfectly balanced.',
    price: '89',
  },
  {
    id: 9, cat: 'mocktail',
    img: '/images/blue-lagoon.png',
    catLabel: 'Mocktails',
    name: 'Blue Lagoon',
    desc: 'Blue curaçao syrup, lemon juice, and sparkling water with a citrus twist — visually stunning.',
    price: '99',
  },
  {
    id: 10, cat: 'cafe',
    img: '/images/cold-coffee.png',
    catLabel: 'Café Specials',
    name: 'Cold Coffee',
    desc: 'Rich arabica cold brew blended with chilled milk and a touch of vanilla. Perfectly bold and smooth.',
    price: '89',
  },
  {
    id: 11, cat: 'cafe',
    img: '/images/chocolate-brownie.png',
    catLabel: 'Café Specials',
    name: 'Chocolate Brownie',
    desc: 'Warm dense brownie with a fudgy centre, served with a scoop of vanilla ice cream.',
    price: '119',
  },
];

const CATS = [
  { key: 'all', label: 'All' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'burger', label: 'Burgers' },
  { key: 'lassi', label: 'Lassi' },
  { key: 'mocktail', label: 'Mocktails' },
  { key: 'cafe', label: 'Café Specials' },
];

export default function Menu() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === active);

  return (
    <section id="menu">
      <div className="menu-header">
        <div>
          <span className="section-eyebrow reveal">Our Specialities</span>
          <h2 className="section-title reveal reveal-delay-1">The <em>Menu</em></h2>
        </div>
        <div className="menu-cats reveal reveal-delay-2">
          {CATS.map(({ key, label }) => (
            <button
              key={key}
              className={`menu-cat${active === key ? ' active' : ''}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-scroll-wrapper">
        <div className="menu-cards">
          {visible.map((item) => (
            <div
              key={item.id}
              className={`menu-card${item.featured ? ' featured' : ''}`}
              data-cat={item.cat}
            >
              <div className="menu-card-img">
                <img src={item.img} alt={item.name} loading="lazy" />
                {item.badge && <div className="menu-badge">{item.badge}</div>}
              </div>
              <div className="menu-card-body">
                <div className="menu-card-cat">{item.catLabel}</div>
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-desc">{item.desc}</div>
                <div className="menu-card-footer">
                  <div className="menu-price"><span>₹</span>{item.price}</div>
                  <button className="menu-order">Order →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
