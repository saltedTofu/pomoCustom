const workTimer = (state=25, action) => {
    switch(action.type){
        case 'increment work':
            return state + 1
        case 'decrement work':
            return state - 1
        case 'type work':
            return action.payload
        default:
            return state
    }
}
export default workTimer;