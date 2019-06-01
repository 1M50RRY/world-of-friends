import { combineReducers } from 'redux'
import  AuthReducer from './auth'
import  FormsReducer from './forms'
import  UsersReducer from './users'
import  ChatsReducer from './chats'

const allReducers = combineReducers({
    auth: AuthReducer,
    forms: FormsReducer,
    users: UsersReducer,
    chats: ChatsReducer
});

export default allReducers;