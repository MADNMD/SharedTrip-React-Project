import { useState } from "react";

export const useCreateForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);
    const [editTripValues, setEditTripValues] = useState(initialValues)
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
   
    const onChangeHandler = (event) => {
        setValues(state => ({ ...state, [event.target.name]: event.target.value }));
        setEditTripValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const valideteCreateTripForm = () => {

        const errors = {};

        if (!values.cityOfDeparture) {
            errors.cityOfDeparture = 'City of departure is required!';
        } else if (values.cityOfDeparture.length < 3) {
            errors.cityOfDeparture = 'City of departure should be at least 3 charcters!';
        } else if (values.cityOfDeparture.length > 15) {
            errors.cityOfDeparture = 'City of departure must be no more 15 characters!'
        }

        if (!values.cityOfArrival) {
            errors.cityOfArrival = 'City of arrival is required!';
        } else if (values.cityOfArrival.length < 3) {
            errors.cityOfArrival = 'City of arrival should be at least 3 charcters!';
        } else if (values.cityOfArrival.length > 15) {
            errors.cityOfArrival = 'City of arrival must be no more 15 characters!';
        }

        if (!values.dateOfTrip) {
            errors.dateOfTrip = 'Date of trip is required!';
        }

        if (!values.departureTime) {
            errors.departureTime = 'Departure time is required!';
        }

        if (!values.car) {
            errors.car = 'Car is required!';
        } else if (values.car.length < 2) {
            errors.car = 'Car field should be at least 2 characters!';
        } else if (values.car.length > 15) {
            errors.car = 'Car field must be no more 15 characters!';
        }

        if (!values.model) {
            errors.model = 'Car model is required!';
        } else if (values.model.length > 15) {
            errors.model = 'Car model must be no more 15 characters';
        }

        if (!values.carImg) {
            errors.carImg = 'Car image url is required!';
        } else if (!/^https?:\/\//.test(values.carImg)) {
            errors.carImg = 'The car image is required and should start with http:// or https://!';
        }

        if (!values.freeSeats) {
            errors.freeSeats = 'Free seats is required!';
        } else if (values.freeSeats < 0) {
            errors.freeSeats = 'Free seats must be a non-negative number!';
        }

        if (!values.priceOfTrip) {
            errors.priceOfTrip = 'Price of trip is required!';
        } else if (values.priceOfTrip < 0) {
            errors.priceOfTrip = 'Price of trip must be a non-negative number!';
        }

        if (!values.currency) {
            errors.currency = 'Currency is required!';
        }

        if (!values.airConditioner) {
            errors.airConditioner = 'Currency is required!';
        }

        if (!values.food) {
            errors.food = 'Currency is required!';
        }

        if (!values.drinks) {
            errors.drinks = 'Currency is required!';
        }

        if (!values.luggageSpace) {
            errors.luggageSpace = 'Currency is required!';
        }

        if (!values.pets) {
            errors.pets = 'Currency is required!';
        }

        if (!values.smokers) {
            errors.smokers = 'Currency is required!';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const onBlurHandler = (event) => {

        setTouched(state => ({ ...state, [event.target.name]: true }));

        valideteCreateTripForm();
    }

    const onFocusHandler = (event) => {

        setTouched(state => ({ ...state, [event.target.name]: false }));
        setErrors(state => ({ ...state, [event.target.name]: '' }));

    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (valideteCreateTripForm()) {
            onSubmitHandler(values);
        }
    }

    const changeValues = (newValues) => {
        setValues(newValues);
        setEditTripValues(newValues);
    }

    return {
        values,
        errors,
        touched,
        onChangeHandler,
        onSubmit,
        changeValues,
        onBlurHandler,
        onFocusHandler,
    }
}