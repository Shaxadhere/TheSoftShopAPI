const mongoose = require('mongoose')
const crypto = require('crypto')
const uuid = require('uuid').v1

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

customerSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuid()
    this.HashedPassword = this.encryptPassword(password)
})
.get(function(password){
    return this._password
})

userSchema.methods = {
    authentiate: function(plainText){
        return this.encryptPassword(plainText) === this.HashedPassword
    },
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto.createHmac('sha1', this.salt)
            .update(password),
            digest('hex')
        }
        catch (err) {
            return ''
        }
    }
}

module.exports = mongoose.model("Customer", customerSchema)