const Size = require('../models/SizeModel')

exports.sizeById = (req, res, next, id) => {
    Size.findById(id).exec((err, size) => {
        if(err || !size){
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        req.size = size
        next()
    })
}

exports.read = (req, res) => {
    return res.json({
        success: true,
        size: req.size
    })
}

exports.create = (req, res) => {
    const size = new Size(req.body)
    size.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Size created successfully",
            size: size
        })
    })
}

exports.list = (req, res) => {
    Size.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            succcess: true,
            sizes: data
        })
    })
}

exports.update = (req, res) => {
    const size = req.size
    size.SizeValue = req.body.SizeValue
    size.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Size updated successfully",
            size: data
        })
    })
}

exports.remove = (req, res) => {
    const size = req.size
    size.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Size deleted successfully"
        })
    })
}