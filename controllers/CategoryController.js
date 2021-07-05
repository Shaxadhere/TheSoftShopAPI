const Category = require('../models/CategoryModel')

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err || !category){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        req.category = category
        next()
    })
}

exports.read = (req, res) => {
    return res.json({
        success: true,
        category: req.category
    })
}

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        return res.json({
            success: true,
            categories: data
        })
    })
}

exports.create = (req, res) => {
    const category = new Category(req.body)
    category.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Category created successfully",
            category: data
        })
    })
}

exports.update = (req, res) => {
    const category = req.category
    category.CategoryName = req.body.CategoryName
    category.CategorySlug = req.body.CategorySlug
    category.CategoryTags = req.body.CategoryTags
    category.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Category modified successfully",
            category: data
        })
    })
}

exports.remove = (req, res) => {
    const category = req.category
    category.remove((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Category deleted successfully"
        })
    })
}