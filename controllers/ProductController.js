const Product = require('../models/ProductModel')

exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if(err || !product){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        req.product = product
        next()
    })
}

exports.read = (req, res) => {
    return res.json({
        success: true,
        product: req.product
    })
}

exports.list = (req, res) => {
    Product.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            products: data
        })
    })
}

exports.create = (req, res) => {
    const product = new Product(req.body)
    product.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Product created successfully",
            product: data
        })
    })
}

exports.update = (req, res) => {
    const product = req.product
    product.ProductName = req.body.ProductName
    product.Price = req.body.Price

    product.save((err, data) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Product modified successfully",
            product: data
        })
    })
}

exports.remove = (req, res) => {
    const product = req.product
    product.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Product deleted successfully"
        })
    })
}