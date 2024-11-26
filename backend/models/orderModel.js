// models/Order.js
const { model, Schema, Types } = require('../connection');

const orderSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      templates: { type: Types.ObjectId, ref: 'templates', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model('Order', orderSchema);