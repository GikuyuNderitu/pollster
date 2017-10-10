const mongoose = require('mongoose')
const saltRounds = 14

const PollSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true, "Username is required"],
        unique: 'Two users cannot share the same username'
    },
    displayName: {
        type: String,
        required: [false],
        minlength: [3, "Display name must be at least 3 characters long"]
    },
    password:{
        type: String,
        required: [true, "Password field is required"],
        minlength: [8, "I'm sorry, the password is shorter than the required length (8 characters)"],
        validate: [{
            validator: function (pass) {
                return PASSWORD_REGEX.test(pass);
            },
            message: "`{ VALUE }` is not a valid password"
        },{
            validator: function (pass) {
                return pass === this.password_confirmation
            },
            message: "The password and password confirmation don't match"
        }]
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

PollSchema.methods.login = function (password) {
	const self = this
}

PollSchema.pre('save', function (next) {
    let self = this
})

mongoose.model('Poll', PollSchema)
console.log('Poll Model loaded');