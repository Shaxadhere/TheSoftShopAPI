const Customer = require('../models/CustomerModel')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
require('dotenv').config()

exports.signupCustomer = (req, res) => {
    const customer = new Customer(req.body)
    customer.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        data.Salt = undefined
        data.HashedPassword = undefined
        res.json({
            success: true,
            message: "Customer registerd successfully",
            customer: data
        })
    })
}

exports.signinCustomer = (req, res) => {
    const {email, password} = req.body
    User.findOne({
        Email: email
    }, (err, user) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: "Customer with this email address was not found"
            })
        }
        if(!user.authenticate(password)){
            return res.status(400).json({
                success: false,
                error: "Invalid password"
            })
        }
        const token = jwt.sign({
            _id: user._id
        }, process.env.JWT_SECRET)

        res.cookie('t', token, {
            expire: new Date() + 9999
        })
        const {_id, FullName, Email} = user
        res.json({
            success: true,
            token: token,
            user: {
                _id,
                FullName,
                Email
            }
        })

    })
}

exports.signin = (req, res) => {
    const {Email, Password} = req.body
    Customer.findOne({
        Email
    }, (err, customer) => {
        if(err || !customer){
            return res.status(400).json({
                success: false,
                error: "Customer with this email address was not found"
            })
        }
        if(!customer.authenticate(password)){
            return res.status(400).json({
                success: false,
                error: "Invalid password"
            })
        }
        const token = jwt.sign({
            _id: customer._id
        }, process.env.JWT_SECRET)
        res.cookie('t', token, {
            expiry: new Date() + 9999
        })
        const {_id, FullName, Email} = customer
        res.json({
            success: true,
            token: token,
            message: "Customer signed in successfully",
            user: {
                _id, 
                FullName,
                Email
            }
        })
    })
}