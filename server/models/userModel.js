const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

userSchema.statics.register = async function(email, password) {
    let saltRounds = 10;
    let hashedPassword = await bcrypt.hash(password, saltRounds)
    const newUser = new this({
        email,
        password: hashedPassword
    })
    await newUser.save()
    return newUser
}

const User = mongoose.model('user', userSchema)
module.exports = User