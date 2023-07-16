const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: ["Username is required", true],
        unique: true
    },
    email: {
        type: String,
        require: ["Email is required", true],
        unique: true

    },
    password: {
        type: String,
        require: ["Password is required", true],
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


module.exports = mongoose.model('User', userSchema)