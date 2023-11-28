const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env');

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, 'Firstname is required!'],
        minLength: [3, 'Firstname should be at least 3 characters!'],
        maxLength: [15, 'Firstname must be no more than 15 characters!'],
    },

    lastname: {
        type: String,
        required: [true, 'Lastname is required!'],
        minLength: [3, 'Lastname should be at least 3 characters!'],
        maxLength: [15, 'Lastname must be no more than 15 characters'],
    },

    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [3, 'Username should be at least 3 characters!'],
        maxLength: [15, 'Username must be no more than 15 characters!'],
    },

    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[a-zA-Z0-9.,!-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, 'Invalid email'],
    },

    profilePicture: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^https?:\/\//, 'The photo image is required and should start with http:// or https://!']
    },

    telefon: {
        type: String,
        required: [true, 'Telefon is required!'],
    },

    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [3, 'Password should be at least 3 charachters!'],
    },

    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Like',
    }],
}, { timestamps: true });

userSchema.pre('save', async function () {

    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;