const express = require('express');
const cors    = require('cors');
const menuRouter    = require('./routes/menu');
const contactRouter = require('./routes/contact');

const app  = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ───────────────────────────────────────────
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
app.use(express.json());

// ─── Request logger ───────────────────────────────────────
app.use((req, _res, next) => {
  const now = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
  console.log(`[${now}]  ${req.method}  ${req.url}`);
  next();
});

// ─── Routes ───────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status : 'ok',
    server : 'Lassi Lehar API',
    time   : new Date().toISOString(),
  });
});

app.use('/api/menu',    menuRouter);
app.use('/api/contact', contactRouter);

// ─── 404 handler ──────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Start ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ☕  Lassi Lehar API Server');
  console.log(`  ➜  http://localhost:${PORT}`);
  console.log('');
  console.log('  Available endpoints:');
  console.log(`  GET   http://localhost:${PORT}/api/health`);
  console.log(`  GET   http://localhost:${PORT}/api/menu`);
  console.log(`  GET   http://localhost:${PORT}/api/menu?cat=pizza`);
  console.log(`  POST  http://localhost:${PORT}/api/contact`);
  console.log('');
});
