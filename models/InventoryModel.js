const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const inventorySchema = new mongoose.Schema({
    ProductID: {
        type: ObjectId,
        ref: "Product",
        required: true,
    },
    SizeID: {
        type: ObjectID,
        ref: "Size",
        required: true,
    },
    ColorID: {
        type: ObjectId,
        ref: "Color",
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    Status: {
        type: Boolean,
        default: true,
    },
    Deleted: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

module.exports = mongoose.model("Inventory", inventorySchema)
