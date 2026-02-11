const router = require('express').Router();
const Message = require('../models/Message');

// @route   POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.json({ success: true, message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
