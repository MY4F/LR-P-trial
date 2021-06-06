const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    bio: {
        type: String,
        default: false
    },
    icons: {
        type: String,
        default: false
    },
    links: {
        type: String,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
