const mongoose = require('mongoose')
const Poll = mongoose.model('Poll')

const makePollGetter = 
    pollsObj =>
        id =>
            new Promise((resolve, reject) => {
                if(pollsObj[id] !== undefined) {
                    resolve(pollsObj[id])
                    return
                }

                Poll.findById(id, (err, poll) => {
                    if(err) {
                        console.log(err);
                        reject(err)
                        return
                    }
                    pollsObj[id] = poll
                    resolve(pollsObj[id])
                })
            })

const makePollVoter =
    pollsObj =>
        id => {
            if(pollsObj[id] === undefined) return
            pollsObj[id].options
        }


module.exports = {
    makePollVoter,
    makePollGetter,
}