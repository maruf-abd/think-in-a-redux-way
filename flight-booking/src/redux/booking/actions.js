import {ADD_BOOKING, CANCEL_BOOKING} from "./actionTypes";

export const addBooking = (booking) => {
    return {
        type: ADD_BOOKING,
        payload: booking
    }
}

export const cancelBooking = (bookingId) => {
    return {
        type: CANCEL_BOOKING,
        payload: bookingId
    }
}