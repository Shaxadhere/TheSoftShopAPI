const express = require('express')
const router = express.Router()
const {list, read, create, update, remove, productById} = require('../controllers/ProductController')

router.get('/', list)
router.get('/:productId', read)
router.post('/create', create)
router.put('/:productId', update)
router.delete('/:productId', remove)

router.param('productId', productById)

module.exports = router