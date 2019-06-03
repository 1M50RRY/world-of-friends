export const switchForm = ( isSignUp ) => {
    return {
        type: 'SWITCH_FORM',
        payload: isSignUp
    }
};

export const blockUser = ( isUserBlocked ) => {
    return {
        type: 'BLOCK_USER',
        payload: isUserBlocked
    }
}

export const selectChat = ( selectedChatId ) => {
    return {
        type: 'SELECT_CHAT',
        payload: selectedChatId
    }
}

export const updateChats = ( chats ) => {
    return {
        type: 'UPDATE_CHATS',
        payload: chats
    }
}

export const searchChats = ( query ) => {
    return {
        type: 'SEARCH_CHATS',
        payload: query
    }
}