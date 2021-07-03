const mongoose = require('mongoose')

const sizeSchema = new mongoose.Schema({
    SizeValue: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    Status: {
        type: Boolean,
        default: true,
    },
    Deleted: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

module.exports = mongoose.model("Size", sizeSchema)