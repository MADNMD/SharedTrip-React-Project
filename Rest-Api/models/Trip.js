const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({

    cityOfDeparture: {
        type: String,
        required: [true, 'City of departure is required!'],
        minLength: [3, 'City of departure should be at least 3 charcters!'],
        maxLength: [15, 'City of departure must be no more 15 characters!'],
    },

    cityOfArrival: {
        type: String,
        required: [true, 'City of arrival is required!'],
        minLength: [3, 'City of arrival should be at least 3 charcters!'],
        maxLength: [15, 'City of arrival must be no more 15 characters!'],
    },

    dateOfTrip: {
        type: Date,
        required: [true, 'Date is required!'],
    },

    departureTime: {
        type: String,
        required: [true, 'Departure time is required!'],
    },

    car: {
        type: String,
        required: [true, 'Car field is required!'],
        minLength: [2, 'Car field should be at least 2 characters!'],
        maxLength: [15, 'Car field must be no more 15 characters!'],

    },

    model: {
        type: String,
        required: [true, 'Car model is required!'],
        // minLength: [1, 'Car model should be at least 3 characters'],
        maxLength: [15, 'Car model must be no more 15 characters'],
    },

    carImg: {
        type: String,
        required: [true, 'Car img URL is required!'],
        match: [/^https?:\/\//, 'The car image is required and should start with http:// or https://!'],
    },

    freeSeats: {
        type: Number,
        required: [true, 'Free seats field is required!'],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Free seats must be a non-negative number!',
        }
    },

    priceOfTrip: {
        type: Number,
        required: [true, 'Price of trip field is required!'],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Price of trip must be a non-negative number!'
        }
    },

    currency: {
        type: String,
        required: [true, 'Currency field is required!'],
        enum: ['lv', 'eu']
    },

    airConditioner: {
        type: String,
        required: [true, 'Air conditioner field is required!'],
        enum: ['yes', 'no']
    },

    food: {
        type: String,
        required: [true, 'Food field is required!'],
        enum: ['yes', 'no']
    },

    drinks: {
        type: String,
        required: [true, 'Drinks field is required'],
        enum: ['yes', 'no']
    },

    luggageSpace: {
        type: String,
        required: [true, 'Luggage space field is required!'],
        enum: ['yes', 'no'],
    },

    pets: {
        type: String,
        required: [true, 'Pets field is required!'],
        enum: ['yes', 'no'],
    },

    smokers: {
        type: String,
        required: [true, 'Smokers field is required!'],
        enum: ['yes', 'no'],
    },

    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;