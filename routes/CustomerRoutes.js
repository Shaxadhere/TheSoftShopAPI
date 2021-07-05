const express = require('express')
const router = express.Router()
const {list, read, create, update, remove, customerById} = require('../controllers/CustomerController')

router.get('/', list)
router.get('/:customerId', read)
router.post('/create', create)
router.put('/:customerId', update)
router.delete('/:customerId', remove)

router.param('customerId', customerById)

module.exports = router