export const changeName = ( name ) => {
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}

export const changeAvatar = ( avatar ) => {
    return {
        type: 'CHANGE_AVATAR',
        payload: avatar
    }
}

export const changeTheme = ( theme ) => {
    return {
        type: 'CHANGE_THEME',
        payload: theme
    }
}

export const setUser = ( user ) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}