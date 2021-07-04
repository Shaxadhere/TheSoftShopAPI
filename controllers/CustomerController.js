const Customer = require('../models/CustomerModel')

exports.customerById = (req, res, next, id) => {
    Customer.findById(id).exec((err, customer) => {
        if(err || !customer){
            return res.status(400).josn({
                success: false,
                error: err
            })
        }
        req.customer = customer
        next()
    })
}

exports.read = (req, res) => {
    return res.json({
        success: true,
        customer: req.customer
    })
}

exports.list = (req, res) => {
    Customer.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            cutomers: data
        })
    })
}

exports.create = (req, res) => {
    const customer = new Customer(req.body)
    customer.save((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Customer created successfully",
            customer: customer
        })
    })
}

exports.update = (req, res) => {
    const customer = req.customer
    customer.CustomerName = req.body.CustomerName
    
}

exports.delete = (req, res) => {
    const customer = req.customer
    customer.remove((err, data) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            message: "Customer deleted successfully"
        })
    })
}