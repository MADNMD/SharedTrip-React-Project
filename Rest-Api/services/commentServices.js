const Comment = require('../models/Comments');

exports.addComment = async (userId, text) => await Comment.create({ user: userId, text });
