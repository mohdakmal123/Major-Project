// models/Order.js
const { model, Schema, Types } = require('../connection');

const orderSchema = new Schema({
  date: { type: Date, default: Date.now },
  order: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  

  user: { type: Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      templates: { type: Types.ObjectId, ref: 'templates', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
  
});

module.exports = model('Order', orderSchema);