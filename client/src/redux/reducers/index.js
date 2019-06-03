import { combineReducers } from 'redux'
import  AuthReducer from './auth'
import  FormsReducer from './forms'
import  ChatsReducer from './chats'
import  UserReducer from './user'

const allReducers = combineReducers({
    auth: AuthReducer,
    forms: FormsReducer,
    chats: ChatsReducer,
    user: UserReducer
});

export default allReducers;