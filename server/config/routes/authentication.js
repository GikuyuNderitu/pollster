const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router()

router.get('/authenticate', (req, res) => {
    const authCookie = req.cookies.Authorization
    if (authCookie === undefined) return res.status(400).json({message: "Not logged in"})
    
    const token = authCookie.split(" ")[1]

    
})

module.exports = router