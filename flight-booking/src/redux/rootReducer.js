import { combineReducers } from 'redux';
import BookingReducer from './booking/reducer';

const rootReducer = combineReducers({
    booking: BookingReducer,
});

export default rootReducer;
