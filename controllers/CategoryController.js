const Category = require('../models/CategoryModel')

exports.List = (req, res) => {
    Category.find().exec((err, data) => {
        if(err){
            return res.status(400).json({error: err})
        }
        return res.json({categories: data})
    })
}

exports.View = (req, res) => {

}

exports.Create = (req, res) => {
    const category = new Category(req.body)
    category.save((err, data) => {
        if(err){
            return res.status(400).json({error: err})
        }
        res.json({category: data})
    })
}

exports.Update = (req, res) => {

}

exports.Delete = (req, res) => {

}