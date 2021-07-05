const express = require('express')
const router = express.Router()
const {list, read, create, update, remove, categoryById} = require('../controllers/CategoryController')


router.get('/', list)
router.get('/:categoryId', read)
router.post('/create', create)
router.put('/:categoryId', update)
router.delete('/:categoryId', remove)

router.param('categoryId', categoryById)
module.exports = router