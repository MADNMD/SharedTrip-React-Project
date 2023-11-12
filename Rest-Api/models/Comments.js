const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    text: {
        type: String,
        required: true,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;