import {ADD_BOOKING, CANCEL_BOOKING} from "./actionTypes";
import {nanoid} from "nanoid";

const initialState = [
    {
        id: 1,
        from: 'Mumbai',
        to: 'Delhi',
        date: '2020-12-12',
        guest: 2,
        class: 'Economy',
    }
];

export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOOKING:
            return [
                ...state,
                {
                    id: nanoid(),
                    ...action.payload
                }
            ];
        case CANCEL_BOOKING:
            return state.filter(booking => booking.id !== action.payload);
        default:
            return state;
    }
}