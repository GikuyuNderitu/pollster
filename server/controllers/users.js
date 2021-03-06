const mongoose = require('mongoose')
const User = mongoose.model('User')
const config = require('../config')
const {setAuthToken, sanitizeUser} = require('../config/utils')

module.exports = {
    login(req, res) {
        const body = req.body;
        User.findOne({username: body.username}, (err, user) => {
            if(!err && !user) {
                return res.status(404).json({error: 'User not found'})
            }
            
            user.login(body.password)
            .then(() => {
                const data = sanitizeUser(user)
                const token = setAuthToken(data)
                res.clearCookie('Authorization')
                res.cookie('Authorization', token, {maxAge: 1000*86400*30, httpOnly: true})
                res.json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
        })
    },
    register(req, res) {
        const body = req.body;

        const user = new User(body)

        user.password_confirmation = body.password_confirmation

        user.save( err => {
            if(err) {
                console.log(err);
                return res.status(404).json(err)
            }
            const data = sanitizeUser(user)
            console.log(data);
            const token = setAuthToken(data)
            res.clearCookie('Authorization');
			res.cookie('Authorization', token, {maxAge: 1000*86400*30, httpOnly: true})
            return res.status(201).json(data)
        })
    },
    getUser(req, res) {
        const {username} = req.params;
        console.log(username);
        User.findOne({username}).populate('_polls').exec((err, user) => {
            if(err || !user) {
                return res.status(400).json({error: 'The User was not found'})
            }
            console.log(user);
            const {displayName, username, _polls, _id} = user;
            const name = displayName || username;
            const sanitizedUser = {name, polls: _polls, _id}

            res.json(sanitizedUser)
        })
    }
}