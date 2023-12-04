// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/subscribers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const subscriberSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/subscribe', async (req, res) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error subscribing:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});