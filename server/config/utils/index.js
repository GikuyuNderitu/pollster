const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')

exports.setAuthToken = user =>  `Bearer ${jwt.sign(user, JWT_SECRET)}`
exports.sanitizeUser = ({displayName, username, _id}) => ({displayName, username, _id})