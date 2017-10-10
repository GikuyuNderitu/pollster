const express = require('express');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {sanitizeUser} = require('../utils');

const mongoose = require('mongoose');

const User = mongoose.model('User')


const router = express.Router()

router.get('/', (req, res, next) => {
    const authCookie = req.cookies.Authorization
    if (authCookie === undefined) return res.status(400).json({message: "Not logged in"})
    
    const token = authCookie.split(" ")[1]


    if(token) {
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if(err) return res.status(401).json({error: 'Authentication error.'});

            User.findById(payload._id, (err, user) => {
                if(err) {
                    res.clearCookie('Authorization');
                    return res.status(404).json({error: "User not found in database"});
                }
                return res.json(sanitizeUser(user));
            })
            
        })
    } else {
        res.clearCookie('Authorization')
        res.status(404).json({error:"Authentication token not provided. Please login."})
    }    
})

router.get('/logout', (req, res, next) => {
    if(req.cookies.Authorization) res.clearCookie('Authorization')
    res.json({message: 'User logged out success'})
})

module.exports = router