export default (state = {selectedChatId: null, chats: null, query: ''}, action) => {
    switch (action.type) {
        case 'SELECT_CHAT': return { ...state, selectedChatId: action.payload };
        case 'UPDATE_CHATS': return { ...state, chats: action.payload };
        case 'SEARCH_CHATS': return {...state, query: action.payload};
        default: return state;
    }
}
