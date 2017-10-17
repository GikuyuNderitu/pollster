const express = require('express')
const controller = require('../../controllers/polls')

const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getAll)
router.post('/:id', controller.vote)

module.exports = router
