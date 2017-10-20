const mongoose = require('mongoose'),
    uniqueness = require('mongoose-beautiful-unique-validation'),
    bcrypt = require('bcrypt'),
    PASSWORD_REGEX = /^.{8,}$/

const saltRounds = 14,
      Schema = mongoose.Schema;

const UserSchema = new Schema({
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
                if(!this.isNew) return true
                return pass === this.password_confirmation
            },
            message: "The password and password confirmation don't match"
        }]
    },
    _polls: [{
        type: Schema.Types.ObjectId,
        ref: 'Poll'
    }]
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
			if(!res) reject({msg: "I'm sorry, that password is not correct."})
			else resolve()
		})
	})
}

UserSchema.post('validate', function (next) {
    let self = this
    console.log(self);
	bcrypt.hash(self.password, saltRounds)
	.then( hash => {
		self.password = hash
		next();
	})
})

UserSchema.plugin(uniqueness)

mongoose.model('User', UserSchema)
console.log('User Model loaded');