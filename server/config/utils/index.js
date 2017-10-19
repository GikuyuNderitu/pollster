const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('User')
const {JWT_SECRET} = require('../config')

exports.setAuthToken = user =>  `Bearer ${jwt.sign(user, JWT_SECRET)}`
exports.sanitizeUser = ({displayName, username, _id}) => ({displayName, username, _id})
exports.authenticateUser = (req, res) => 
    new Promise((resolve, reject) => {
        const authCookie = req.cookies.Authorization
        if (authCookie === undefined) return reject({httpCode: 416, error: "Not logged in"})
        
        const token = authCookie.split(" ")[1]
    
    
        if(token) {
            jwt.verify(token, JWT_SECRET, (err, payload) => {
                if(err) return res.status(401).json({error: 'Authentication error.'});
    
                User.findById(payload._id, (err, user) => {
                    if(err) {
                        res.clearCookie('Authorization');
                        return reject({httpCode: 404, error: "User not found in database"})
                    }
                    return resolve({httpCode: 200, user});
                })
                
            })
        } else {
            res.clearCookie('Authorization')
            reject({httpCode: 404, error:"Authentication token not provided. Please login."})
        }
    })