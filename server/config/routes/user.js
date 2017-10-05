const express = require('express');
const controller = require('../../controllers/users')

const router = express.Router();

router.post('/', controller.register)
router.post('/login', controller.login)

module.exports = router