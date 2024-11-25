const { model, Schema } = require('../connection');

const mySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  template: { type: Schema.Types.ObjectId, ref: 'templatesData' },
  payentDetails: String,
  intentId: { type: String, unique: true },
  updated: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('orders', mySchema); // users is collection name