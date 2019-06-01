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