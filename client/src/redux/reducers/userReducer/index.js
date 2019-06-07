export default function (state = {
    name: null, 
    avatar: null,
    email: null,
    theme: false
    }, action) 
{
    switch (action.type) {
        case 'CHANGE_NAME': return {...state, name: action.payload };
        case 'CHANGE_AVATAR': return {...state, avatar: action.payload };
        case 'CHANGE_THEME': return {...state, theme: action.payload};
        case 'SET_USER': return action.payload ;
        default: return state;
    }
}