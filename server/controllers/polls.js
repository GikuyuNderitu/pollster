const mongoose = require('mongoose')
const Poll = mongoose.model('Poll')
const Option = mongoose.model('Option')
const {authenticateUser, sanitizePolls} = require('../config/utils')

const parsePollRequestBody = requestBody => {
    const {options, name, description} = requestBody
    const body = {name, description}
    return {options, body}
}

const createPoll = ({name, description}, options, owner) => new Poll({options, name, description, owner})

const constructOptionArray = arr => 
    arr.map(option => new Option({option}))

module.exports = {
    create(req, res) {
        const {options, body} = parsePollRequestBody(req.body);

        authenticateUser(req, res)
        .then(({user}) => {
            console.log('From Then ',user);
            const {_id} = user;
            console.log(_id);
            const poll = createPoll(body, constructOptionArray(options), _id)
    
            console.log(poll);
    
            poll.save(err => {
                if(err) {
                    console.log(err);
                    console.log(poll)
                    return res.status(402).json(err)
                }
    
                res.status(201).json(poll)
            })
        })
        .catch(({httpCode, error}) => {
            res.status(httpCode).json({error})
        })
    },
    getAll(req, res) {
        Poll.find({}).populate('owner').exec((err, polls) => {
            if(err) {
                return res.status(400).json({error: err})
            }

            sanitizePolls(polls, req, res)
            .then(polls => res.json(polls))
        })
    },
    vote(req, res) {
        const {id} = req.params
        const {option} = req.body
        Poll.findById(id, (err, poll) => {
            if(err) {
                console.log(err);
                return res.status(403).json(err)
            }
            const didVote = poll.vote(option)
            if(!didVote) return res.status(404).json({error: 'Option Not found'})
            poll.save(err => {
                if(err) {
                    console.log(err);
                    return res.status(500).json(err)
                }

                res.status(201).json(poll)
            })
        })
    }
}