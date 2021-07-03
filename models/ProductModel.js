const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    Price:{
        type: Number,
        required: true,
    },
    ProductSlug:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    ProductDescription:{
        type: String,
        required: false,
        trim: true,
        maxlength: 1000,
    },
    Categories:{
        type: Array,
        default: [],
    },
    ProductTags:{
        type: Array,
        default: [],
    },
    ProductImages:{
        type: Array,
        default: [],
    },
    Status:{
        type: Boolean,
        default: true,
    },
    Deleted:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)