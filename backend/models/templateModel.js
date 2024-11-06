const { model, Schema } = require('../connection');

const mySchema = new Schema({
        name: String,
        version: { type: String },
        // author: { type: String, required: true },
        image: String,
        downloads: { type: Number, default: 0 },
        price: { type: Number,},
        updated: { type: Date, default: Date.now },
        createdAt: { type: Date, default: Date.now }
});

module.exports = model('templatesData', mySchema); // users is collection name