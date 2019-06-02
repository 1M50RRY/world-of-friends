import { combineReducers } from 'redux'
import  AuthReducer from './auth'
import  FormsReducer from './forms'
import  ChatsReducer from './chats'

const allReducers = combineReducers({
    auth: AuthReducer,
    forms: FormsReducer,
    chats: ChatsReducer
});

export default allReducers;