export default function (state = {isSignUp: false}, action) {
    switch (action.type) {
        case 'SWITCH_FORM': return { isSignUp: action.payload };
        default: return state;
    }
}