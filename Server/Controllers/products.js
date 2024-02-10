const Product = require("../db/products");

exports.addProducts = async (req, res) => {
    try {
        const { name, description, price, stock, category, image } = req.body;
        const exist = await Product.findOne({ name });
        if (exist) {
            console.log("Product already exists")
            exist.set({
                name,
                description,
                price,
                stockQuantity: stock,
                category,
                image: { url: image }
            });
            const updatedProduct = await exist.save();
            return res.json({updatedProduct});
        }
        const newProduct = new Product({
            name,
            description,
            price,
            stockQuantity: stock,
            category,
            image: {
                url: image
            },
        })
        const savedProduct = await newProduct.save();
        res.json({ savedProduct });
    } catch (err) {
        console.log(err)
    }
}

exports.products = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        res.json({products: allProducts})
    } catch (err){
        console.log(err);
        res.json({
            error: "Products not found"
        })
    }
}