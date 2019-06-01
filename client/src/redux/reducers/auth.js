export default function (state = {isAuthenticated: true}, action) {
    switch (action.type) {
        case 'CHANGE_AUTH': return { isAuthenticated: action.payload };
        default: return state;
    }
}
