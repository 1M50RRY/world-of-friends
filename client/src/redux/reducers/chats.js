export default function (state = {selectedChatId: null}, action) {
    switch (action.type) {
        case 'SELECT_CHAT': return { selectedChatId: action.payload };
        default: return state;
    }
}
