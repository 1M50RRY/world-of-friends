export const blockUser = ( isUserBlocked ) => ({type: 'BLOCK_USER', payload: isUserBlocked});
export const selectChat = ( selectedChatId ) => ({type: 'SELECT_CHAT', payload: selectedChatId});
export const updateChats = ( chats ) => ({type: 'UPDATE_CHATS', payload: chats});
export const searchChats = ( query ) => ({type: 'SEARCH_CHATS', payload: query});