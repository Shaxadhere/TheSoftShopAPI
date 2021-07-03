const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    CategoryName:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    CategorySlug:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    CategoryImages:{
        type: Array,
        default: [],
    },
    CategoryTags:{
        type: Array,
        default: [],
    },
    Status:{
        type: Boolean,
        default: true,
    },
    Deleted:{
        type: Boolean,
        default: false
    },
}, {timestamps: true})

module.exports = mongoose.model("Category", categorySchema)
