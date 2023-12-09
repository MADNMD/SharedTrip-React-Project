import { Link } from "react-router-dom";

import React from "react";
import styles from './TripItem.module.css';

import { formatDate } from '../../../utils/dateUtil';

export const TripItem = ({
    trip
}) => {
    return (
        <div className={styles['trip-card']}>
            <div className={styles['trip-media']}>
                <img src={trip.owner?.profilePicture} alt={`${trip.owner?.firsname} Image`}
                    onError={(event) => {
                        event.target.src = '/public/images/profile-pic.jpg'
                    }}
                />
                <p>{trip.owner?.firstname}</p>
            </div>
            <div className={styles['trip-content-left']}>
                <ul>
                    <li><span>From:</span>{trip.cityOfDeparture}</li>
                    <li><span>Date:</span>{formatDate(trip.dateOfTrip)}</li>
                    <li><span>Price:</span>{trip.priceOfTrip}{trip.currency}</li>
                    <li><span>Car:</span>{trip.car}</li>
                </ul>
            </div>
            <div className={styles['trip-content-right']}>
                <ul>
                    <li><span>To:</span>{trip.cityOfArrival}</li>
                    <li><span>Time:</span>{trip.departureTime}</li>
                    <li><span>Places:</span>{trip.freeSeats}</li>
                    <li><Link to={`/trip/trip-details/${trip._id}`}>To the trip</Link></li>
                </ul>
            </div>
        </div>
    )
}