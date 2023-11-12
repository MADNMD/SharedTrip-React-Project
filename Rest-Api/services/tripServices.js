const Trip = require('../models/Trip');
const commentServices = require('../services/commentServices');
// exports.getAllTrip = async () => {

//     const allTrip = await Trip.find();

//     return allTrip;
// }

exports.getAllTrip = async () => Trip.find();

exports.createTrip = (tripData) => Trip.create(tripData);

exports.getOne = (tripId) => Trip.findById(tripId).populate('owner');

exports.editTrip = (tripId, tripData) => Trip.updateOne({ _id: tripId }, { $set: tripData }, { runValidators: true });

exports.deleteTrip = (tripId) => Trip.findByIdAndDelete(tripId);

exports.myTrip = (userId) => Trip.find({ userId });

exports.addCommentToTrip = async (tripId, userId, text) => {
    const comment = await commentServices.addComment(userId, text);
    const updatedTrip = await Trip.findByIdAndUpdate(tripId, { $push: { comments: comment._id } }, { new: true })
    return updatedTrip
}