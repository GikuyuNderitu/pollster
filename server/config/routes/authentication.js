const express = require('express');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {sanitizeUser, authenticateUser} = require('../utils');

const mongoose = require('mongoose');

const User = mongoose.model('User')


const router = express.Router()

router.get('/', (req, res, next) => {
    authenticateUser(req, res)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
        const {httpCode, error} = err;
        res.status(httpCode).json({error})
    })  
})

router.get('/logout', (req, res, next) => {
    if(req.cookies.Authorization) res.clearCookie('Authorization')
    res.json({message: 'User logged out success'})
})

module.exports = router