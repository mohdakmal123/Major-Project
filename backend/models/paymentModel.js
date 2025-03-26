const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

app.post('/create-order', async (req, res) => {
  const order = await razorpay.orders.create({
    amount: 1000,
    currency: 'INR',
    receipt: 'receipt#1'
  });
  res.json(order);
});
