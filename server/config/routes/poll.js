const express = require('express')
const controller = require('../../controllers/polls')

const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getAll)

module.exports = router
