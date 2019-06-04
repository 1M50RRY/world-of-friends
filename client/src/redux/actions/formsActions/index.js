export const switchForm = ( isSignUp ) => {
    return {
        type: 'SWITCH_FORM',
        payload: isSignUp
    }
};