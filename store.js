/*
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initStore = (initialState, options) => {
    let composeEnhancers = compose;

    //Check if function running on the sever or client
    if (typeof window === "object") {
        //Setup Redux Debuger
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }



    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(thunk) //Applying redux-thunk middleware
    ));

    return store;
};

export default initStore;
*/


import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers"

const middleware = [thunk]

let composeEnhancers = compose;

    //Check if function running on the sever or client
    if (typeof window === "object") {
        //Setup Redux Debuger
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

const makeStore = () => createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk) //Applying redux-thunk middleware
));
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)