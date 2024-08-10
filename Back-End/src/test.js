const Product = require('./models/product');

// Example of creating and saving a product
const createProduct = async () => {
    const newProduct = new Product({
        name: 'Sample Product',
        image: 'http://example.com/image.jpg',
        price: 100,
        countInStock: 50
    });

    try {
        await newProduct.save();
        console.log('Product saved successfully');
    } catch (err) {
        console.error('Error saving product:', err);
    }
};

createProduct();
