import { getChats } from '../../data'
export default function (state = {selectedChatId: null, chats: getChats()}, action) {
    switch (action.type) {
        case 'SELECT_CHAT': return { ...state, selectedChatId: action.payload };
        case 'UPDATE_CHATS': return { ...state, chats: action.payload };
        default: return state;
    }
}
