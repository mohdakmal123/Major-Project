const { model, Schema } = require('../connection');

const mySchema = new Schema({
        name: String,
        version: { type: String, unique: true },
        author: { type: String, required: true },
        image: String,
        downloads: { type: String, unique: true },
        updated: { type: Date, default: Date.now },
        price: { type: Number, unique: true },
        createdAt: { type: Date, default: Date.now }
});

module.exports = model('templates', mySchema); // users is collection name