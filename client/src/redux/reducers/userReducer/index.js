export default function (state = {
    name: 'John Doe', 
    avatar: 'https://materializecss.com/images/yuna.jpg',
    email: 'johndoe@worldoffriends.com',
    theme: false
    }, action) 
{
    switch (action.type) {
        case 'CHANGE_NAME': return {...state, name: action.payload };
        case 'CHANGE_AVATAR': return {...state, avatar: action.payload };
        case 'CHANGE_THEME': return {...state, theme: action.payload}
        default: return state;
    }
}