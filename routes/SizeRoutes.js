const express = require('express')
const router = express.Router()
const {list, read, create, update, remove, sizeById} = require('../controllers/SizeController')

router.get('/', list)
router.get('/:sizeId', read)
router.post('/create', create)
router.put('/:sizeId', update)
router.delete('/:sizeId', remove)

router.param('sizeId', sizeById)

module.exports = router