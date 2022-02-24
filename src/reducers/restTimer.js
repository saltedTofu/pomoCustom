const restTimer = (state=1, action) => {
    switch(action.type){
        case 'increment rest':
            return state + 1
        case 'decrement rest':
            return state - 1
        case 'type rest':
            return action.payload
        default:
            return state
    }
}
export default restTimer;