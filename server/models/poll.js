const mongoose = require('mongoose')


const Schema = mongoose.Schema

const OptionSchema = new Schema({
    option: {
        type: String,
        required: true,
        minlength: [1, 'You must provide at least 1 character']
    }, 
    votes: {
        type: Number,
        default: 0
    }
})

const PollSchema = new Schema({
    name: {
        type: String,
        minlength: [3, "Poll must be 3 or more characters"],
        required: [true, "Must supply name for poll"]
    },
    description: {
        type: String,        
    },
    options: {
        type: [OptionSchema], 
        validate: [
            {
                validator: function(optionArray) {
                    return optionArray.every(val => val.option.length >= 1)
                },
                message: `Each option name must be 1 or more characters`
            },
            {
                validator: function(optionArray) {
                    return optionArray.length >= 2
                },
                message: `2 or more options must be provided`
            }
        ]
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

PollSchema.methods.vote = function(id) {
    console.log(id);
    const idx = this.options.findIndex( option => {
        console.log(option._id+ ' === ' + id);

        console.log(typeof option._id);
        console.log(typeof id);
        return option._id.toString() === id
    })

    console.log(idx);

    if(idx !== -1) this.options[idx].votes++

    return idx !== -1
}

mongoose.model('Option', OptionSchema)
console.log('Option Model Loaded');

mongoose.model('Poll', PollSchema)
console.log('Poll Model Loaded');


