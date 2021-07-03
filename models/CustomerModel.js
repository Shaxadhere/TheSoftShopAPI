const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim:true,
        maxlength: 100,
    },
    Contact: {
        type: String,
        required: false,
        trim: true,
        maxlength: 100,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    HashedPassword: {
        type: String,
        required: true,
    },
    BillingAddress: {
        type: String,
        require: fasle,
        trim: true,
        maxlength: 500        
    },
    OrderHistory: {
        type: Array,
        default: []
    },
    Status: {
        type: Boolean,
        default: true,
    },
    Deleted: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true})

module.exports = mongoose.model("Customer", customerSchema)