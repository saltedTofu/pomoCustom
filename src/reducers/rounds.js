const rounds = (state=1, action) => {
    switch(action.type){
        case 'increment round':
            return state + 1
        case 'decrement round':
            return state - 1
        case 'type round':
            return action.payload
        default:
            return state
    }
}
export default rounds;