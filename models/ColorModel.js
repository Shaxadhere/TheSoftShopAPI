const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema({
    ColorName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    ColorCode:{
        type: String,
        required: true,
        maxlength: 100,
        trim: true,
    },
    Status: {
        type: Boolean,
        default: true,
    },
    Deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Color", colorSchema)
