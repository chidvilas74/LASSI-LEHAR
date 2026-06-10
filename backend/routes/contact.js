const express = require('express');
const router  = express.Router();

// In-memory store for enquiries (replace with a DB in production)
const enquiries = [];

// POST /api/contact
router.post('/', (req, res) => {
  const { name, phone, message } = req.body;

  // Basic validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  if (!phone || !/^[+\d\s\-()]{7,15}$/.test(phone)) {
    return res.status(400).json({ error: 'Please provide a valid phone number.' });
  }

  const enquiry = {
    id        : enquiries.length + 1,
    name      : name.trim(),
    phone     : phone.trim(),
    message   : message?.trim() || '',
    receivedAt: new Date().toISOString(),
  };

  enquiries.push(enquiry);

  // Log to console (replace with email/DB in production)
  console.log('\n  📩  New Contact Enquiry:');
  console.log(`     Name   : ${enquiry.name}`);
  console.log(`     Phone  : ${enquiry.phone}`);
  console.log(`     Message: ${enquiry.message || '—'}`);
  console.log(`     Time   : ${enquiry.receivedAt}\n`);

  res.status(201).json({
    success: true,
    message: 'Thank you! We will reach out to you shortly.',
    id     : enquiry.id,
  });
});

// GET /api/contact — list all enquiries (admin use)
router.get('/', (req, res) => {
  res.json({
    total    : enquiries.length,
    enquiries,
  });
});

module.exports = router;
