const Comment = require('../models/Comments');

exports.getAllComments = async (tripId) => await Comment.find({ trip: tripId }).populate('user');

exports.addComment = async (userId, tripId, text) => await Comment.create({ user: userId, trip: tripId, text });
