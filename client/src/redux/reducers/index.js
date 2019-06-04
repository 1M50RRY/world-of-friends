import { combineReducers } from 'redux'
import  AuthReducer from './authReducer'
import  FormsReducer from './formsReducer'
import  ChatsReducer from './chatsReducer'
import  UserReducer from './userReducer'

const allReducers = combineReducers({
    auth: AuthReducer,
    forms: FormsReducer,
    chats: ChatsReducer,
    user: UserReducer
});

export default allReducers;