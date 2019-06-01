import { combineReducers } from 'redux'
import  AuthReducer from './auth'
import  FormsReducer from './forms'

const allReducers = combineReducers({
    auth: AuthReducer,
    forms: FormsReducer
});

export default allReducers;