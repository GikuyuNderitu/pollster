const mongoose = require('mongoose'),
    uniqueness = require('mongoose-beautiful-unique-validation'),
    PASSWORD_REGEX = /^.{8,}$/

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true, "Username is required"],
        unique: 'Two users cannot share the same username'
    },
    displayName: {
        type: String,
        minlength: 3
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

UserSchema.methods.login = function (password) {
	const self = this
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, self.password)
		.then( res => {
			if(!res) reject("I'm sorry, that password is not correct.")
			else resolve()
		})
	})
}

UserSchema.pre('save', function (next) {
	let self = this
	bcrypt.hash(self.password, saltRounds)
	.then( hash => {
		self.password = hash
		next();
	})
})

mongoose.model('User', UserSchema)
console.log('User Model loaded');