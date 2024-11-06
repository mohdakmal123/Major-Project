const { model, Schema } = require('../connection');

const mySchema = new Schema({
    review: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('reviews', mySchema); // reviews is collection name