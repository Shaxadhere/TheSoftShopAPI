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

exports.read(req, res) => {
    return res.json({
        success: true,
        size: req.size
    })
}