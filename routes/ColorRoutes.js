const express = require('express')
const router = express.Router()
const {list, read, create, update, remove, colorById} = require('../controllers/ColorController')

router.get('/', list)
router.get('/:colorId', read)
router.post('/create', create)
router.put('/:colorId', update)
router.delete('/:colorId', remove)

router.param('colorId', colorById)

module.exports = router