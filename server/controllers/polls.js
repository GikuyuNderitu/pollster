const mongoose = require('mongoose')


const PollSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Poll must be 3 or more characters"],
        required: [true, "Must supply name for poll"]
    },
    description: {
        type: String
    }
})