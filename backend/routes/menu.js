const express = require('express');
const router  = express.Router();

const MENU_ITEMS = [
  {
    id: 1, category: 'pizza', featured: true,
    name: 'Chicken Cheese Pizza',
    description: 'Tender grilled chicken, triple-cheese blend, roasted jalapeños on our signature stone-baked base.',
    price: 249,
    image: '/images/chicken-pizza.png',
    badge: "Chef's Special",
    vegetarian: false,
  },
  {
    id: 2, category: 'pizza',
    name: 'Paneer Tikka Pizza',
    description: 'Smoky marinated paneer, bell peppers, onions, and tangy tikka sauce on a crisp base.',
    price: 219,
    image: '/images/paneer-pizza.png',
    vegetarian: true,
  },
  {
    id: 3, category: 'pizza',
    name: 'Veg Supreme',
    description: 'Loaded with fresh vegetables, mushrooms, olives, and a generous mozzarella stretch.',
    price: 189,
    image: '/images/veg-supreme.png',
    vegetarian: true,
  },
  {
    id: 4, category: 'burger',
    name: 'Chicken Crispy Burger',
    description: 'Double crispy fried chicken, coleslaw, pickles, and our signature smoky sauce in a toasted brioche bun.',
    price: 159,
    image: '/images/chicken-burger.png',
    vegetarian: false,
  },
  {
    id: 5, category: 'burger',
    name: 'Classic Aloo Tikki',
    description: 'Spiced potato patty, mint chutney, crunchy lettuce, and fresh tomato in a soft sesame bun.',
    price: 99,
    image: '/images/aloo-tikki-burger.png',
    vegetarian: true,
  },
  {
    id: 6, category: 'lassi',
    name: 'Mango Lassi',
    description: 'Chilled Alphonso mango blended with thick curd and a whisper of cardamom. Our house signature.',
    price: 79,
    image: '/images/mango-lassi.png',
    vegetarian: true,
  },
  {
    id: 7, category: 'lassi',
    name: 'Rose Lassi',
    description: 'Velvety sweet curd infused with rose essence, garnished with pistachios and saffron threads.',
    price: 69,
    image: '/images/rose-lassi.png',
    vegetarian: true,
  },
  {
    id: 8, category: 'mocktail',
    name: 'Virgin Mojito',
    description: 'Freshly muddled mint, lime, and sugar over crushed ice — a refreshing classic, perfectly balanced.',
    price: 89,
    image: '/images/virgin-mojito.png',
    vegetarian: true,
  },
  {
    id: 9, category: 'mocktail',
    name: 'Blue Lagoon',
    description: 'Blue curaçao syrup, lemon juice, and sparkling water with a citrus twist — visually stunning.',
    price: 99,
    image: '/images/blue-lagoon.png',
    vegetarian: true,
  },
  {
    id: 10, category: 'cafe',
    name: 'Cold Coffee',
    description: 'Rich arabica cold brew blended with chilled milk and a touch of vanilla. Perfectly bold and smooth.',
    price: 89,
    image: '/images/cold-coffee.png',
    vegetarian: true,
  },
  {
    id: 11, category: 'cafe',
    name: 'Chocolate Brownie',
    description: 'Warm dense brownie with a fudgy centre, served with a scoop of vanilla ice cream.',
    price: 119,
    image: '/images/chocolate-brownie.png',
    vegetarian: true,
  },
];

// GET /api/menu          — all items
// GET /api/menu?cat=pizza — filter by category
router.get('/', (req, res) => {
  const { cat } = req.query;
  const items = cat
    ? MENU_ITEMS.filter(i => i.category === cat)
    : MENU_ITEMS;

  res.json({
    total : items.length,
    items,
  });
});

// GET /api/menu/:id — single item
router.get('/:id', (req, res) => {
  const item = MENU_ITEMS.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

module.exports = router;
