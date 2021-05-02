import currentUser from './currentUser'

import {combineReducers} from 'redux'
const rootReducer = combineReducers({
   usuario: currentUser
})

export default rootReducer

