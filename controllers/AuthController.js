const Customer = require('../models/CustomerModel')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
require('dotenv').config()

exports.signupCustomer = (req, res) => {
    const customer = new Customer(req.body)
    
}