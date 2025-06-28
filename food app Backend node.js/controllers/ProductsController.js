const Product = require('./../models/BookTableModel');
const fs = require('fs');
const path = require('path');


// Add a new product
const addProduct = async (req, res) => {
    try {
      
        const newProductData = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productSupplier: req.body.productSupplier,
            productQuantity: req.body.productQuantity,
            image: req.file ? req.file.path : null 
        };

        const product = await Product.create(newProductData);
        res.status(201).json({
            msg: 'Product added successfully',
            product,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get  product 
const GetSingleProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" }); 
        }
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

// Update a product 

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        let updatedData = req.body; 
      
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

       
        if (req.file) {
       
            if (product.image) {
                const oldImagePath = path.join(__dirname, '..', product.image);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error("Error deleting old image file:", err);
                    }
                });
            }

            
            updatedData.image = req.file.path;
        }

      
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





// Delete a product 


const deletProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        const product = await Product.findById(productId); 

        if (!product) {
            return res.status(404).json({ message: "Product not found" }); 
        }

       
        if (product.image) {
            const imagePath = path.join(__dirname, '..', product.image);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error("Error deleting image file:", err);
                }
            });
        }

      
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "Product deleted successfully" }); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
};


module.exports = {
    addProduct,
    getAllProduct,
    GetSingleProduct,
    updateProduct,
    deletProduct,
};



}
