const mongoose = require('mongoose')
const crypto = require('crypto')
const uuid = require('uuid').v1

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
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
    Contact: {
        type: String,
        required: false,
        trim: true
    },
    DisplayPicture: {
        type: String,
        required: false,
        default: "avatar.png",
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

module.exports = mongoose.model("User", userSchema)