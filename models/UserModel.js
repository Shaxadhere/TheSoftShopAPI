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

//Virtual Password Field
userSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuid()
    this.HashedPassword = this.encryptPassword(password)
})
.get(function(password){
    return this._password
})

//model methods
userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.HashedPassword
    },
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        }
        catch (err){
            return ""
        }
    }
}

module.exports = mongoose.model("User", userSchema)