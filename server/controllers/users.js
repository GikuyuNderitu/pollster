const mongoose = require('mongoose')
const User = mongoose.model('User')
const {sanitizeUser} = require('../config')

module.exports = {
    login(req, res) {
        const body = req.body;



        console.log(body);
        res.json({'msg': 'Something happend'})
    },
    register(req, res) {
        const body = req.body;

        console.log(body);
        const user = new User(body)

        user.password_confirmation = body.password_confirmation

        user.save( err => {
            if(err) {
                return res.status(401).json(err)
            }

            return res.status(201).json(sanitizeUser(user))
        })

        res.json({msg: 'Registration occurred'})
    }
}