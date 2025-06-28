

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productSupplier: String,
    productQuantity: Number,
    image: String, 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
