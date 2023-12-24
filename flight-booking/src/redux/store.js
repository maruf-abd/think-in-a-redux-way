import {applyMiddleware, createStore} from 'redux';
import RootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger/src";

// create a redux store with the root reducer and middleware
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)));

// export the store
export default store;