export default function (state = {isUserBlocked: false}, action) {
    switch (action.type) {
        case 'BLOCK_USER': return { isUserBlocked: action.payload };
        default: return state;
    }
}