const express = require('express');
const multer = require('multer');
const productsController = require('./../controllers/ProductsController');

const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        let ext = file.mimetype.split('/')[1];
        let name = Date.now() + '-' + Math.round(Math.random() * 100000) + '.' + ext;
        cb(null, name); 
    }
});

const upload = multer({ storage: storage });

router.route('/')
    .get(productsController.getAllProduct)
    .post(upload.single('image'), productsController.addProduct ); 

    router.route('/:id')
    .get(productsController.GetSingleProduct)
    .patch(upload.single('image'), productsController.updateProduct) 
    .delete(productsController.deletProduct);


module.exports = router;
