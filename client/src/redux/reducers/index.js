import { combineReducers } from 'redux'
import  FormsReducer from './formsReducer'
import  ChatsReducer from './chatsReducer'
import  UserReducer from './userReducer'

const allReducers = combineReducers({
    forms: FormsReducer,
    chats: ChatsReducer,
    user: UserReducer
});

export default allReducers;