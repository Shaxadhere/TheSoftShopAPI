const Color = require('../models/ColorModel')

exports.colorById = (req, res, next, id) => {
    Color.findById(id).exec((err, color) => {
        if(err || !color){
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        req.color = color
        next()
    })
}

exports.read = (req, res) => {
    return res.json({
        success: true,
        color: req.color
    })
}

exports.list = (req, res) => {
    Color.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            colors: data
        })
    })
}

exports.create = (req, res) => {
    const color = new Color(req.body)
    color.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Color created successfully",
            color: data
        })
    })
}

exports.update = (req, res) => {
    const color = req.color
    color.ColorName = req.body.ColorName
    color.ColorCode = req.body.ColorCode
    color.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Color modified successfully",
            color: data
        })
    })
}

exports.remove = (req, res) => {
    const color = req.color
    color.remove((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            succces: true,
            message: "Color deleted successfully"
        })
    })
}